// JavaScript para modal de imagen
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const images = document.querySelectorAll('.gallery img');
    const closeBtn = document.querySelector('.close');

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Cerrar el modal si se hace clic fuera de la imagen
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
