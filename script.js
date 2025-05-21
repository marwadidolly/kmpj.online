function filterImages(category) {
  const images = document.querySelectorAll(".gallery-image");
  images.forEach(img => {
    if (category === "all") {
      img.style.display = "inline-block";
    } else {
      img.style.display = img.classList.contains(category) ? "inline-block" : "none";
    }
  });
}

