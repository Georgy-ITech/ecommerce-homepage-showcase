const cartButtons = document.querySelectorAll(".button--cart");
const images = document.querySelectorAll("img");

const fallbackImage =
  "assets/fallback.jpg";

images.forEach((img) => {
  img.addEventListener("error", () => {
    img.src = fallbackImage;
  });
});

cartButtons.forEach((button) => {
  if (!button.hasAttribute("data-default-label")) {
    button.setAttribute("data-default-label", button.textContent.trim());
  }

  button.addEventListener("click", () => {
    button.classList.remove("is-added");
    button.classList.remove("is-success");
    // Restart animation on repeated clicks.
    void button.offsetWidth;
    button.classList.add("is-added");
    button.style.position = "relative";

    const existingPop = button.querySelector(".button__pop");
    if (existingPop) existingPop.remove();

    const pop = document.createElement("span");
    pop.className = "button__pop";
    pop.textContent = "+1";
    button.appendChild(pop);

    const defaultLabel = button.getAttribute("data-default-label") || "Add to Cart";
    button.setAttribute("data-label", "Added");
    button.classList.add("is-success");
    button.setAttribute("aria-label", "Item added to cart");

    setTimeout(() => {
      button.classList.remove("is-success");
      button.setAttribute("data-label", defaultLabel);
      button.removeAttribute("aria-label");
      pop.remove();
    }, 850);
  });
});
