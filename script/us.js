window.addEventListener('load', LoadAboutUsReel);
window.addEventListener('load', ChangeFormBehavior);

function LoadAboutUsReel() {
  const slides = [
    { src: "img1.jpg", caption: "Inciamos esta aventura en 2024 y poco a poco más gente si ha ido sumando." },
    { src: "img2.jpg", caption: "Somos un grupo que disfrutamos la convivencia y la amistad ante todo." },
    { src: "img3.jpg", caption: "Contamos con gente preparada para apoyarnos en caso de algún accidente." },
    { src: "img4.jpg", caption: "Entre todos sorteamos problemas y retos que aparezcan en el camino." },
    { src: "img5.jpg", caption: "Nos encanta participar en los eventos y carreras." },
    { src: "img6.jpg", caption: "Nos encanta tomar fotos para tener recuerdos de estos momentos." },
    { src: "img7.jpg", caption: "Para nosotros pasarla bien es más que solo manejar la bicicleta." },
    { src: "img8.jpg", caption: "Nos gusta reunirnos para celebrar las ocasiones especiales." },
    { src: "img9.jpg", caption: "Organizar eventos especiales con causa es algo que nos motiva." },
    { src: "img10.jpg", caption: "En verdad no hay nada mejor que compartir con los demas." }
  ];

  const imageFolder = "images/us/";
  const sliderImg = document.getElementById("slider-img");
  const caption = document.getElementById("slider-caption");
  const preloadedImages = [];

  slides.forEach(slide => {
    const img = new Image();
    img.src = imageFolder + slide.src;
    preloadedImages.push(img);
  });

  let index = 0;
  sliderImg.src = preloadedImages[index].src;
  caption.innerHTML = slides[index].caption;

  setInterval(() => {
    index = (index + 1) % slides.length;
    sliderImg.src = preloadedImages[index].src;
    caption.innerHTML = slides[index].caption;
  }, 3500);
}


function openContactModal() {
  document.getElementById("contactModal").style.display = "flex";
}

function closeContactModal() {
  document.getElementById("contactModal").style.display = "none";
}

// Cierra el modal si se hace clic fuera del contenido
window.onclick = function(event) {
  const modal = document.getElementById("contactModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

function ChangeFormBehavior()
{
  document.getElementById('mainform').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto

    const form = event.target;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/jaguaresyuc@gmail.com", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert("¡Mensaje enviado con éxito!");
        form.reset();
        closeContactModal();
      } else {
        alert("Hubo un error al enviar el mensaje.");
        closeContactModal();
      }
    })
    .catch(error => {
      console.error("Error al enviar:", error);
      alert("Hubo un problema al enviar el formulario.");
      closeContactModal();
    });
  });


}
