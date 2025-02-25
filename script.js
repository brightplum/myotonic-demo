document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion__button");

  accordionButtons.forEach(button => {
    button.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !isExpanded);

      // Find the associated content using aria-controls
      const contentId = this.getAttribute("aria-controls");
      const content = document.getElementById(contentId);

      if (content) {
        if (!isExpanded) {
          content.removeAttribute("hidden");
        } else {
          content.setAttribute("hidden", "");
        }
      }
    });
  });
});