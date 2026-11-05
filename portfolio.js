/* Builds the portfolio and collection pages from collections.js.
   You shouldn't need to edit this file. */

const IMG_ROOT = "/images/collections/";
const EXTENSIONS = ["jpg", "jpeg"];
const MAX_IMAGES = 100;

// Try to load image number n for a collection; resolves to its URL or null.
function findImage(slug, n) {
  return new Promise(resolve => {
    let i = 0;
    const tryNext = () => {
      if (i >= EXTENSIONS.length) return resolve(null);
      const url = `${IMG_ROOT}${slug}/${n}.${EXTENSIONS[i++]}`;
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = tryNext;
      img.src = url;
    };
    tryNext();
  });
}

// Find 1.jpg, 2.jpg, 3.jpg ... checking a few at a time, stopping at the first gap.
async function findAllImages(slug) {
  const found = [];
  const batch = 6;
  for (let n = 1; n <= MAX_IMAGES; n += batch) {
    const nums = Array.from({ length: batch }, (_, k) => n + k);
    const results = await Promise.all(nums.map(k => findImage(slug, k)));
    for (const url of results) {
      if (!url) return found;
      found.push(url);
    }
  }
  return found;
}

function el(tag, attrs = {}, text) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  if (text) e.textContent = text;
  return e;
}

/* ---------- Main portfolio page ---------- */
function buildPortfolio() {
  const grid = document.getElementById("collection-grid");
  if (!grid) return;
  COLLECTIONS.forEach(c => {
    const card = el("a", { href: `/portfolio/${c.slug}`, class: "card" });
    const frame = el("div", { class: "square" });
    card.append(frame, el("h3", {}, c.name), el("p", {}, c.summary));
    grid.append(card);
    findImage(c.slug, 1).then(url => {
      if (url) frame.append(el("img", { src: url, alt: `${c.name} collection`, loading: "lazy" }));
    });
  });
}

/* ---------- Single collection page ---------- */
async function buildCollection() {
  const root = document.getElementById("collection");
  if (!root) return;

  // Works for /portfolio/haze, and for collection.html?c=haze when testing locally.
  const fromPath = location.pathname.replace(/\/$/, "").split("/").pop();
  const slug = new URLSearchParams(location.search).get("c") || fromPath;
  const index = COLLECTIONS.findIndex(c => c.slug === slug);

  if (index === -1) {
    root.innerHTML = `<h1>collection not found</h1>
      <p>Sorry, that collection doesn't exist. <a href="/portfolio">Back to the portfolio</a>.</p>`;
    return;
  }

  const c = COLLECTIONS[index];
  document.title = `${c.name} – will&way ceramics`;
  document.getElementById("collection-name").textContent = c.name;
  const desc = document.getElementById("collection-description");
  c.description.forEach(p => desc.append(el("p", {}, p)));

  // Previous / next collection links
  const prev = COLLECTIONS[(index - 1 + COLLECTIONS.length) % COLLECTIONS.length];
  const next = COLLECTIONS[(index + 1) % COLLECTIONS.length];
  const prevLink = document.getElementById("prev-collection");
  const nextLink = document.getElementById("next-collection");
  prevLink.href = `/portfolio/${prev.slug}`; prevLink.textContent = `← ${prev.name}`;
  nextLink.href = `/portfolio/${next.slug}`; nextLink.textContent = `${next.name} →`;

  // Gallery
  const gallery = document.getElementById("gallery");
  const images = await findAllImages(c.slug);
  if (!images.length) {
    gallery.append(el("p", { class: "small" }, "Photos coming soon."));
    return;
  }
  images.forEach((url, i) => {
    const btn = el("button", { class: "square", type: "button", "aria-label": `View photo ${i + 1} larger` });
    btn.append(el("img", { src: url, alt: `${c.name} – photo ${i + 1}`, loading: "lazy" }));
    btn.addEventListener("click", () => openLightbox(images, i, c.name));
    gallery.append(btn);
  });
}

/* ---------- Lightbox: full, uncropped photo ---------- */
function openLightbox(images, start, name) {
  let i = start;
  const box = el("div", { class: "lightbox", role: "dialog", "aria-modal": "true", "aria-label": `${name} photos` });
  const img = el("img");
  const close = el("button", { class: "lb-close", type: "button", "aria-label": "Close" }, "×");
  const prev = el("button", { class: "lb-prev", type: "button", "aria-label": "Previous photo" }, "‹");
  const next = el("button", { class: "lb-next", type: "button", "aria-label": "Next photo" }, "›");
  const show = () => { img.src = images[i]; img.alt = `${name} – photo ${i + 1} of ${images.length}`; };
  const step = d => { i = (i + d + images.length) % images.length; show(); };
  const shut = () => { box.remove(); document.removeEventListener("keydown", keys); document.body.style.overflow = ""; };
  const keys = e => {
    if (e.key === "Escape") shut();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  };
  close.onclick = shut;
  prev.onclick = e => { e.stopPropagation(); step(-1); };
  next.onclick = e => { e.stopPropagation(); step(1); };
  box.onclick = e => { if (e.target === box) shut(); };
  if (images.length < 2) { prev.hidden = true; next.hidden = true; }

  // Swipe on phones
  let x0 = null;
  box.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  box.addEventListener("touchend", e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    x0 = null;
  });

  box.append(img, close, prev, next);
  document.body.append(box);
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", keys);
  show();
  close.focus();
}

buildPortfolio();
buildCollection();
