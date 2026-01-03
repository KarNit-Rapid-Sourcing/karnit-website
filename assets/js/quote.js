window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// --- Autofill Product from URL ---
const params = new URLSearchParams(window.location.search);
const selectedProduct = params.get("product");

if (selectedProduct) {
  const productInput = document.getElementById("Product");
  if (productInput) productInput.value = selectedProduct;
}



// quote.js
const form = document.getElementById("quoteForm");
const successMsg = document.getElementById("successMsg");
const showQuoteID = document.getElementById("showQuoteID");
const prevQuoteDiv = document.getElementById("prevQuoteID");

// Show previous Quote ID if exists
const lastQuote = localStorage.getItem("lastQuoteID");
if (lastQuote) {
  prevQuoteDiv.innerHTML = `📝Your last quote request ID was <strong>${lastQuote}</strong>.`;
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  // Generate random Quote ID
  const quoteID = `QR-${Math.floor(1000 + Math.random() * 9000)}`;
  document.getElementById("QuoteID").value = quoteID;

  // Send form data to Formspree
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  if (response.ok) {
    // Save quote ID locally
    localStorage.setItem("lastQuoteID", quoteID);

    // Show confirmation
    form.reset();
    form.style.display = "none";
    showQuoteID.textContent = quoteID;
    successMsg.style.display = "block";
    prevQuoteDiv.innerHTML = `📝Your last quote request ID was <strong>${quoteID}</strong>.`;
  } else {
    alert("Something went wrong. Please try again later.");
  }
});




// Fade-up animation on scroll
const fadeElements = document.querySelectorAll(".fade-up");

function handleScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
