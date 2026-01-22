let currentGrid = false;
let container;
const VIEW_KEY = "natura_products_view";

function initializeContainer() {
  container = document.getElementById("products");

  const savedView = localStorage.getItem(VIEW_KEY);

  if (savedView === "grid") {
    currentGrid = true;
  } else {
    currentGrid = false; // lista por defecto
  }

  if (container) {
    renderProducts(currentGrid);
  }
}


function renderProducts(isGrid = false) {
  container.innerHTML = "";
  products.forEach((p, index) => {

    // contenedor general del producto
    const div = document.createElement("div");
    div.className = "product" + (isGrid ? " grid" : " list");

    // Disponibilidad
    if (!p.available) {
      div.classList.add("sold-out");
    }

    // contenedor imagen
    const imageWrapper = document.createElement("div");
    imageWrapper.className = "product-image";

    const img = document.createElement("img");
    img.src = "images/" + p.images[0];
    imageWrapper.appendChild(img);

    // contenedor info
    const infoWrapper = document.createElement("div");
    infoWrapper.className = "product-info";

    const title = document.createElement("h3");
    title.textContent = p.title;

    const price = document.createElement("p");
    price.textContent = p.price;

    infoWrapper.appendChild(title);
    infoWrapper.appendChild(price);

    // agregar ambos divs al contenedor principal
    div.appendChild(imageWrapper);
    div.appendChild(infoWrapper);

    div.onclick = () => showModal(index);

    const badge = document.createElement("div");
    badge.className = "img-count";
    badge.textContent = `📷 ${p.images.length}`;
    imageWrapper.appendChild(badge);
    
    container.appendChild(div);
  });
}

function setList() {
  currentGrid = false;
  localStorage.setItem(VIEW_KEY, "list");
  renderProducts(false);
}

function setGrid() {
  currentGrid = true;
  localStorage.setItem(VIEW_KEY, "grid");
  renderProducts(true);
}


function showModal(i) {
  const p = products[i];
  const hasMultipleImages = p.images.length > 1;
  document.getElementById("modalTitle").innerHTML = p.title;
  document.getElementById("modalDesc").innerHTML = p.desc;
  document.getElementById("modalPrice").innerHTML = p.price;

  const gallery = document.getElementById("modalGallery");
gallery.innerHTML = "";  // limpio

p.images.forEach((img, idx) => {
  const imageWrapper = document.createElement("div");
  imageWrapper.style.position = "relative";  // para el contador
  imageWrapper.style.height = "100%";

  const image = document.createElement("img");
  image.src = "images/" + img;
  image.style.cursor = "zoom-in";

  image.onclick = (e) => {
    e.stopPropagation();
    openLightbox(p.images, idx);
  };

  imageWrapper.appendChild(image);

  // Contador sobre cada imagen en modal
  const badge = document.createElement("div");
  badge.className = "img-count";
  badge.textContent = `${idx + 1} / ${p.images.length}`;
  badge.style.bottom = "5px";  // posición inferior
  badge.style.top = "auto";     // sobreescribe top
  imageWrapper.appendChild(badge);

  gallery.appendChild(imageWrapper);
});


  document.getElementById("modal").style.display = "flex";
  // const prevBtn = document.getElementById("lightboxPrev");
  // const nextBtn = document.getElementById("lightboxNext");

  // if (!hasMultipleImages) {
  //   prevBtn.classList.add("disabled");
  //   nextBtn.classList.add("disabled");
  //   prevBtn.onclick = null;
  //   nextBtn.onclick = null;
  // } else {
  //   prevBtn.classList.remove("disabled");
  //   nextBtn.classList.remove("disabled");
  // }
}

function closeModal(event) {
  if (event.target.id === "modal") {
    document.getElementById("modal").style.display = "none";
  }
}

// Load products when page loads
document.addEventListener('DOMContentLoaded', initializeContainer);

let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(images, index = 0) {
  lightboxImages = images;
  lightboxIndex = index;

  const img = document.getElementById("lightboxImg");
  const counter = document.getElementById("lightboxCounter");

  img.src = "images/" + lightboxImages[lightboxIndex];
  counter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;

  // Actualizar visibilidad de botones
  if (window.updateLightboxControls) window.updateLightboxControls();

  document.getElementById("lightbox").style.display = "flex";
}

function updateLightboxControls() {
  const prev = document.getElementById("lightboxPrev");
  const next = document.getElementById("lightboxNext");

  if (lightboxImages.length <= 1) {
    prev.style.display = "none";
    next.style.display = "none";
  } else {
    prev.style.display = "block";
    next.style.display = "block";
  }
}

function closeLightbox(e) {
  if (e.target.id === "lightbox" || e.target.id === "lightboxClose") {
    document.getElementById("lightbox").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  function updateControls() {
    if (!prevBtn || !nextBtn) return;

    if (lightboxImages.length <= 1) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
    }
  }

  prevBtn.onclick = (e) => {
    e.stopPropagation();
    const newIndex =
      (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    changeLightboxImage(newIndex);
  };

  nextBtn.onclick = (e) => {
    e.stopPropagation();
    const newIndex =
      (lightboxIndex + 1) % lightboxImages.length;
    changeLightboxImage(newIndex);
  };

  // Exportamos updateControls para usarlo al abrir el lightbox
  window.updateLightboxControls = updateControls;
});


function changeLightboxImage(newIndex) {
  const img = document.getElementById("lightboxImg");
  const counter = document.getElementById("lightboxCounter");

  img.classList.remove("fade-in");
  img.classList.add("fade-out");

  setTimeout(() => {
    lightboxIndex = newIndex;
    img.src = "images/" + lightboxImages[lightboxIndex];
    counter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;

    img.classList.remove("fade-out");
    img.classList.add("fade-in");

    // actualizar controles por si es el primer/último
    if (window.updateLightboxControls) window.updateLightboxControls();
  }, 250);
}

