const products = [
  {
    name: "Fasteners ",
    category: "Fasteners & Mechanical",
    image: "img/products/fasteners.webp",
    description: "Fasteners for construction and industrial equipment <br>• Multiple grades and finishes </br> • Suitable for onshore and offshore applications"
  },
  {
    name: "Lubricants",
    category: "Consumables & Surface Protection",
    image: "img/products/lubricants.webp",
    description: "Industrial and evaporative lubricants <br>• Suitable for fin press operations </br> • Designed for heavy-duty machinery"

  },
  {
    name: "Cutting discs",
    category: "Consumables & Surface Protection",
    image: "img/products/cdisk.webp",
    description: "High-performance cutting discs for industrial use <br>• Suitable for metal, concrete, marble, and FRP </br> • Consistent quality and finish"

  },
  {
    name: "Electrical Fittings",
    category: "Electrical & Cable Management",
    image: "img/products/efittings.webp",
    description: "Electrical fittings for secure installations <br>• Cable glands, muffs, and junction boxes </br> • Designed for durability and safety"
  },
  {
    name: "UV-Protected Stickers & Logos",
    category: "Branding & Identification",
    image: "img/products/uvstickers.webp",
    description: "Custom branding stickers and logos <br>• UV-resistant for indoor and outdoor use </br> • Suitable for commercial and industrial equipment"
  },
  {
    name: "Metal Components",
    category: "Fasteners & Mechanical",
    image: "img/products/metcomponents.webp",
    description: "Precision metal components and fittings <br>• Drain nipples and custom machined parts </br> • Industrial-grade materials and tolerances"
  },
  {
    name: "Cable Restraints",
    category: "Electrical & Cable Management",
    image: "img/products/cablerestraints.webp",
    description: "Cable management solutions for industrial equipment <br>• Supports regular servicing requirements </br> • Ensures safe and organized routing"
  },
  {
    name: "Lubricants, Varnish & Enamel",
    category: "Consumables & Surface Protection",
    image: "img/products/lubricantsvne.webp",
    description: "Lubricants and protective coatings <br>• Surface protection and insulation </br> • Suitable for industrial applications"
  },
  {
    name: "FRP Industry Chemicals",
    category: "Chemicals & Process Materials",
    image: "img/products/frpchem.webp",
    description: "Chemicals for FRP manufacturing processes <br>• Aluminum Hydroxide, MgO paste, TBPB, and more </br> • Reliable supply for industrial production"
  },
  {
    name: "Brazing Gas Flux",
    category: "Chemicals & Process Materials",
    image: "img/products/bgf.webp",
    description: "Gas flux for brazing applications <br>• Enables clean and reliable joints </br> • Suitable for precision joining processes"
  }
  // name: "",
  // category: "",
  // image: "img/products/",
  // description: ""

  
];

const grid = document.getElementById("productGrid");

function renderProducts(list) {
  grid.innerHTML = "";

  const grouped = {};
  list.forEach(p => {
    if (!grouped[p.category]) grouped[p.category] = [];
    grouped[p.category].push(p);
  });

  Object.keys(grouped).forEach(category => {
    grid.innerHTML += `
      <h2 class="product-category">${category}</h2>
    `;

    grouped[category].forEach(p => {
      grid.innerHTML += `
        <div class="product-card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p class="product-desc">${p.description}</p>
          <a href="quote.html?product=${encodeURIComponent(p.name)}" class="quote-btn">Enquire</a>
        </div>
      `;
    });
  });
}



renderProducts(products);

// Search functionality
document.getElementById("searchInput").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(value));
  renderProducts(filtered);
});

