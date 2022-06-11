let timer = 2000,
  currentImageIndex = 0,
  images = document.querySelectorAll(".mobile-image-container img");
max = images.length;

function nextImage() {
    images[currentImageIndex].classList.remove("image-mobile-selecionado")
    
    currentImageIndex ++
    
    if (currentImageIndex >= max) {
        currentImageIndex = 0;
    }

    images[currentImageIndex].classList.add("image-mobile-selecionado")
}

function start(){
    setInterval(() => {
        nextImage()
    }, timer)
}

window.addEventListener("load", start)