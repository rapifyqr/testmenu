function showCategory(category) {
  const sections = document.querySelectorAll(".menu-section");
  const tabs = document.querySelectorAll(".tab");

  // Hide all sections
  sections.forEach(section => {
    section.classList.add("hidden");
  });

  // Remove active class from all tabs
  tabs.forEach(tab => {
    tab.classList.remove("active");
  });

  // Show selected section
  document.getElementById(category).classList.remove("hidden");

  // Highlight the active tab
  event.target.classList.add("active");
}
