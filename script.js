document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-btn");
  const panels  = document.querySelectorAll(".tab-panel");

  function activate(id) {
    buttons.forEach(b => b.classList.toggle("active", b.dataset.tab === id));
    panels.forEach(p  => p.classList.toggle("active",  p.id === id));
    history.replaceState(null, "", `#${id}`);
  }

  buttons.forEach(btn => btn.addEventListener("click", () => activate(btn.dataset.tab)));

  const hash = location.hash.replace("#", "");
  const valid = [...buttons].map(b => b.dataset.tab);
  activate(valid.includes(hash) ? hash : valid[0]);
});
