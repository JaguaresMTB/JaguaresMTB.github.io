
document.addEventListener('DOMContentLoaded', () => {

    // const imagesData = [];
    fetch('script/imagesdata.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el JSON');
            }
            return response.json();
        })
        .then(data => {
            // Aquí tienes disponible el arreglo
            console.log(data);

            // Puedes guardar el arreglo en una variable global
            window.imagesData = data;
            updateCarousel();

            // O puedes llamar aquí tu función para construir el carousel
            // buildCarousel(data);
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
        });

    let currentIndex = 0;

    const carousel = document.querySelector('.carousel'); // Corregido aquí
    const carouselImage = document.getElementById('carouselImage');
    const modal = document.getElementById('carouselModal');
    const modalImage = document.getElementById('carouselmodalImage');
    const modalText = document.getElementById('carouselmodalText');
    const closeModalBtn = document.getElementById('carouselcloseModalBtn');
    const linea1 = document.getElementById("linea1");
    const linea2 = document.getElementById("linea2");

    // Función para abrir el modal
    function openCarouselModal() {
        modal.style.display = 'flex';
        modalImage.src = imagesData[currentIndex].image;
       
        // modalText.innerText = `Texto de la imagen ${currentIndex + 1}`;  // Texto de ejemplo, modifica como desees
    }

    // Función para cerrar el modal
    function closeCarouselModal() {
        modal.style.display = 'none';
    }

    // Agregar los event listeners para los botones
    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? imagesData.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex === imagesData.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // Función para actualizar la imagen del carousel
    function updateCarousel() {
        carouselImage.src = imagesData[currentIndex].image;
        // linea1.innerText=imagesData[currentIndex].title;
        linea1.innerText="....";
        linea2.innerText="Haz clic en la imagen para ampliar.";
    }

    // Agregar el event listener para la imagen del carousel
    carouselImage.addEventListener('click', openCarouselModal);

    // Event listener para el botón de cerrar el modal
    closeModalBtn.addEventListener('click', closeCarouselModal);

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCarouselModal();
        }
    });

    // Inicializar con la primera imagen
   

    // Funcionalidad de swipe para móviles
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            // Deslizó hacia la izquierda
            currentIndex = (currentIndex === imagesData.length - 1) ? 0 : currentIndex + 1;
        } else if (touchEndX > touchStartX) {
            // Deslizó hacia la derecha
            currentIndex = (currentIndex === 0) ? imagesData.length - 1 : currentIndex - 1;
        }
        updateCarousel();
    }
});
