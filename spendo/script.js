document.addEventListener("DOMContentLoaded", () => {
    // Toggle profile dropdown
    const profileIcon = document.querySelector(".profile-icon img");
    const profileMenu = document.querySelector(".profile-menu");
  
    profileIcon?.addEventListener("click", () => {
      profileMenu.classList.toggle("show");
    });
  
    // Hide dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".profile-container")) {
        profileMenu?.classList.remove("show");
      }
    });
  
    // Highlight current nav item
    const navItems = document.querySelectorAll(".bottom-nav .nav-item");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
      });
    });
  });
  