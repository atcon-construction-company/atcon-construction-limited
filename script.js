/* ============================================
   ATCON CONSTRUCTION LTD — MAIN SCRIPT
   ============================================ */

/* --- GALLERY DATABASE ---
   For each category, list filenames exactly as saved in the images/ folder.
   The script builds paths like:  images/Flat_roof/flat-roof.jpeg
   ============================================ */
const galleryDatabase = {

  Flat_roof: [
    "flat-roof.jpeg",
    "flatroof1.jpg",
    "flatroof2.jpg",
    "flatroof3.jpeg",
    "flatroof4.jpeg",
    "flatroof5.jpeg",
    "flatroof6.jpeg",
    "flatroof7.jpeg",
    "flatroof8.jpeg",
    "flatroom9.jpg",
    "flatroom10.jpeg",
    "flatroom11.jpeg",
    "flatroom12.jpeg",
    "flatroom13.png",
    "flatroom14.png",
    "flatroom15.png",
    "flatroom16.png",
    "flatroom17.jpg",
    "flatroom18.jpeg",
    "flatroom19.jpeg",
    "flatroom20.jpeg",
    "flatroom21.jpeg",
    "flatroom22.jpeg"
  ],

  Apartments: [
    "12.jpg"
    /* Add more filenames here as you add photos */
  ],

  Hybrid_roof: [
    "hybrid-roof.jpeg",
    "hybridroof1.png",
    "hybridroof2.png",
    "hybridroof3.png",
    "WhatsApp Image 2026-02-08 at 4.36.10 PM.jpeg"
  ],

  Hidden_roof: [
    "hidden-roof.png",
    "hidden1.png",
    "hidden2.png",
    "hidden3.png",
    "hidden4.png",
    "hidden5.png",
    "hidden6.jpeg",
    "hidden7.jpeg",
    "hidden8.jpeg"
  ],

  Pitched_roof: [
    "pitched-roof.png",
    "pitchroof1.jpg",
    "pitchroof2.jpeg",
    "pitchroof4.jpeg",
    "pitchroof5.png",
    "pitchroof6.png",
    "pitchroof7.jpg",
    "pitchroof8.png"
  ],

  Ongoing: [
    "1.jpg"
    /* Add your ongoing project filenames here */
  ]

};

/* ============================================
   SHARED HTML — HEADER & FOOTER
   ============================================ */
const navbarHTML = `
  <div class="container">
    <a href="index.html" class="logo">ATCON <span>CONSTRUCTION</span> LTD</a>

    <nav>
      <button class="hamburger" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </div>
`;

const footerHTML = `
  <div class="container">
    <p>&copy; 2026 ATCON Construction Ltd &mdash; Architectural &amp; Civil Engineering, Nairobi</p>

    <div class="social-icons">
      <a href="https://www.linkedin.com/in/dennis-munene-567150271" target="_blank" rel="noopener" aria-label="LinkedIn">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="https://www.instagram.com/atconltd" target="_blank" rel="noopener" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/share/17pWvXxoYp/" target="_blank" rel="noopener" aria-label="Facebook">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.tiktok.com/@intellistructbuil" target="_blank" rel="noopener" aria-label="TikTok">
        <i class="fab fa-tiktok"></i>
      </a>
    </div>
  </div>
`;

/* ============================================
   DOM READY — INIT EVERYTHING
   ============================================ */
document.addEventListener("DOMContentLoaded", () => {

  /* --- Inject Navbar --- */
  const header = document.getElementById("site-header");
  if (header) header.innerHTML = navbarHTML;

  /* --- Inject Footer --- */
  const footer = document.getElementById("site-footer");
  if (footer) footer.innerHTML = footerHTML;

  /* --- Hamburger toggle --- */
  const hamburger = document.querySelector(".hamburger");
  const navLinks  = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      hamburger.classList.toggle("active");
    });

    /* Close menu when a link is clicked (mobile) */
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("show");
        hamburger.classList.remove("active");
      });
    });
  }

  /* --- Active link highlight --- */
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  /* --- Build dynamic gallery --- */
  initGallery();

  /* --- Contact form feedback --- */
  initContactForm();

  /* --- Projects filter buttons --- */
  initFilterButtons();

  /* --- Close lightbox on backdrop click --- */
  const lb = document.getElementById("lightbox");
  if (lb) {
    lb.addEventListener("click", (e) => {
      if (e.target === lb) closeLightbox();
    });
  }

  /* --- Keyboard navigation for lightbox --- */
  document.addEventListener("keydown", (e) => {
    const lb = document.getElementById("lightbox");
    if (!lb || lb.style.display !== "flex") return;
    if (e.key === "ArrowRight") changeImage(1);
    if (e.key === "ArrowLeft")  changeImage(-1);
    if (e.key === "Escape")     closeLightbox();
  });

});

/* ============================================
   GALLERY
   ============================================ */
let currentIndex = 0;
let images = [];

function initGallery() {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  const category = gallery.dataset.category;
  const files    = galleryDatabase[category];
  if (!files || files.length === 0) return;

  const folder = "images/" + category + "/";
  images = [];

  files.forEach((file, index) => {
    const img = document.createElement("img");
    img.src = folder + file;
    img.alt = "ATCON Construction Project";
    img.loading = "lazy";
    img.addEventListener("click", () => openLightbox(index));
    gallery.appendChild(img);
    images.push(img.src);
  });
}

function openLightbox(index) {
  currentIndex = index;
  const lb  = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  /* For manually-listed galleries (hidden, hybrid, pitched) */
  if (images.length === 0) {
    const gridImgs = document.querySelectorAll(".gallery-grid img");
    gridImgs.forEach(i => images.push(i.src));
  }

  img.src = images[currentIndex];
  lb.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.body.style.overflow = "";
}

function changeImage(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex];
}

/* ============================================
   CONTACT FORM
   ============================================ */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", () => {
    setTimeout(() => {
      alert("Your email client should now open. Please press SEND to complete your message.");
      form.reset();
    }, 400);
  });
}

/* ============================================
   PROJECTS FILTER
   ============================================ */
function initFilterButtons() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards      = document.querySelectorAll(".project-card");

  if (!filterBtns.length || !cards.length) return;

  /* Map button labels to data-category values on cards */
  const categoryMap = {
    "all":         null,
    "residential": "residential",
    "commercial":  "commercial",
    "roofing":     "roofing",
    "apartments":  "apartments",
    "ongoing":     "ongoing"
  };

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.textContent.trim().toLowerCase();
      const target = categoryMap[filter];

      cards.forEach(card => {
        const cat = (card.dataset.category || "").toLowerCase();
        if (!target || cat === target || cat.includes(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}
