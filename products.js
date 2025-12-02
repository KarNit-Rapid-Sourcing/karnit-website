const products = [
  {
    name: "Fasteners ",
    image: "img/products/fasteners.webp",
    description: "Fasteners for construction, commercial equipment, and on/off-shore use. Reliable, corrosion-resistant, and available in multiple grades."
  },
  {
    name: "Lubricants",
    image: "img/products/lubricants.webp",
    description: "Evaporative oils and industrial lubricants designed for fin press operations and heavy-duty machines."

  },
  {
    name: "Cutting discs",
    image: "img/products/cdisk.webp",
    description: "High-performance cutting discs for metal, marble, concrete, porcelain, FRP pipes, tanks, and more. Origin: PRC."

  },
  {
    name: "Electrical Fittings",
    image: "img/products/efittings.webp",
    description: "Cable glands, muffs, junction boxes, and related fittings for safe, durable electrical installations."
  },
  {
    name: "UV-Protected Stickers & Logos",
    image: "img/products/uvstickers.webp",
    description: "Custom UV-resistant branding stickers and logos for indoor and outdoor commercial equipment."
  },
  {
    name: "Metal Components",
    image: "img/products/metcomponents.webp",
    description: "Precision drain nipples and custom metal fittings for industrial applications."
  },
  {
    name: "Cable Restraints",
    image: "img/products/cablerestraints.webp",
    description: "Durable cable restraints for equipment requiring regular servicing and safe cable management."
  },
  {
    name: "Lubricants, Varnish & Enamel",
    image: "img/products/lubricantsvne.webp",
    description: "Industrial lubricants, protective varnishes, and enamels for insulation and surface protection."
  },
  {
    name: "FRP Industry Chemicals",
    image: "img/products/frpchem.webp",
    description: "Chemicals such as Aluminum Hydroxide, MgO paste, TBPB, etc., for FRP manufacturing processes."
  },
  {
    name: "Brazing Gas Flux",
    image: "img/products/bgf.webp",
    description: "Gas flux suitable for clean, reliable brazing applications."
  }
  // name: "",
  // image: "img/products/",
  // description: ""
];

const grid = document.getElementById("productGrid");

function renderProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>

        <p class="product-desc">${p.description}</p>

        <a href="quote.html?product=${encodeURIComponent(p.name)}"
           class="quote-btn">
           Request a Quote
        </a>
      </div>
    `;
  });
}


renderProducts(products);

// Search functionality
document.getElementById("searchInput").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(value));
  renderProducts(filtered);
});
