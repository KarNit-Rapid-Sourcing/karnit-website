window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// === Fade-up animation for service cards ===
const serviceCards = document.querySelectorAll('.service-card');

function revealCards() {
  serviceCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
}


// === Fade-in for About section ===
const aboutSection = document.querySelector('.about-container');

function revealAbout() {
  const rect = aboutSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    aboutSection.classList.add('visible');
  }
}

window.addEventListener('scroll', revealAbout);
revealAbout();


window.addEventListener('scroll', revealCards);
revealCards(); // trigger on load too


const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert('✅ Message sent! We’ll get back to you soon.');
      contactForm.reset();
    } else {
      alert('❌ Oops! Something went wrong. Please try again.');
    }
  });
}





