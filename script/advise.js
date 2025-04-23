function openRecomendacion(tipo) {
  const title = document.getElementById("recoTitle");
  const img = document.getElementById("recoImage");
  const desc = document.getElementById("recoDescription");

  const data = {
    bicicleta: {
      titulo: "Bicicleta en buen estado",
      imagen: "images/advise/bicicleta.jpg",
      descripcion: "Es fundamental revisar frenos, llantas, cadena y cambios antes de cada rodada. Una bicicleta en buenas condiciones evita accidentes."
    },
    casco: {
      titulo: "Casco",
      imagen: "images/advise/casco.jpg",
      descripcion: "El casco es obligatorio. Protege tu cabeza ante cualquier caída o impacto. Debe ajustarse bien sin estar flojo."
    },
    lamparas: {
      titulo: "Lámparas cargadas",
      imagen: "images/advise/lamparas.jpg",
      descripcion: "Lleva lámparas delantera y trasera bien cargadas. En rodadas nocturnas son vitales para ver y ser visto."
    },
    recamara: {
      titulo: "Recámara de refacción",
      imagen: "images/advise/recamara.jpg",
      descripcion: "Un pinchazo puede arruinar la rodada si no llevas una cámara de repuesto compatible con tu bicicleta."
    },
    hidratacion: {
      titulo: "Hidratación",
      imagen: "images/advise/hidratacion.jpg",
      descripcion: "Lleva agua o bebidas isotónicas suficientes para el recorrido. La deshidratación puede ser peligrosa."
    },
    herramientas: {
      titulo: "Kit de herramientas portátiles",
      imagen: "images/advise/multitool.jpg",
      descripcion: "Llaves Allen, desmontadores y multiherramientas te salvarán de muchos imprevistos durante la ruta."
    },
    bomba: {
      titulo: "Bomba de aire",
      imagen: "images/advise/bomba.jpg",
      descripcion: "Una mini bomba es esencial para inflar después de un cambio de cámara o ajuste de presión."
    },
    parches: {
      titulo: "Parches",
      imagen: "images/advise/parches.jpg",
      descripcion: "Cuando no hay cámara, unos buenos parches con pegamento o autoadheribles pueden salvar tu rodada."
    },
    snacks: {
        titulo: "Snacks o Refrigerio",
        imagen: "images/advise/snack.jpg",
        descripcion: "Nunca es mala idea tener algún snack para poder recargar energías cuando se necesita."
      }
  };

  const reco = data[tipo];
  title.textContent = reco.titulo;
  img.src = reco.imagen;
  img.alt = reco.titulo;
  desc.textContent = reco.descripcion;

  document.getElementById("recoModal").style.display = "flex";
}

function closeRecoModal() {
  document.getElementById("recoModal").style.display = "none";
}
