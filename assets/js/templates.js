document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("/templates.html");
    const html = await res.text();

    // Inject templates into DOM
    document.body.insertAdjacentHTML("beforeend", html);

    // Render templates
    document.querySelectorAll("[data-template]").forEach(el => {
      const tpl = document.getElementById(el.dataset.template);
      if (tpl) el.appendChild(tpl.content.cloneNode(true));
    });

  } catch (err) {
    console.error("Template load failed:", err);
  }
});
