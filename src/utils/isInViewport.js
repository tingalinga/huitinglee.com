export function isInViewport(el) {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return rect.bottom >= 0 && rect.bottom <= viewportHeight;
}

export function addNavigationHandler() {
  window.onload = function () {
    document.addEventListener(
      "scroll",
      function () {
        const navbar = document.getElementById("first_page_block");
        if (!navbar) return;

        const upButton = document.getElementById("up_button");
        if (isInViewport(navbar)) {
          upButton.setAttribute("style", "opacity: 0; pointer-events: none;");
        } else {
          upButton.setAttribute("style", "opacity: 1;");
        }
      },
      {
        passive: true,
      }
    );
  };
}
