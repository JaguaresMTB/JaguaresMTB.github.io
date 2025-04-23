function openModal(type) 
{
  const modal = document.getElementById('rodadaModal');
  const content = document.getElementById('modal-body');

  if (type === 'principiantes') {
    content.innerHTML = `
      <h3>Rodadas para Principiantes.</h3>
      <p>Estas rutas están pensadas para ciclistas nuevos, con terreno plano o poco accidentado. 
      Ideales para familiarizarse con la bicicleta y el grupo.</p><p>&nbsp;</p>
      <ul>
        <li>Día: Jueves</li>
        <li>Hora Reunión: 7:30 PM</li>
        <li>Hora Salida: 8:00 PM</li>
        <li>Distancia: 20-25 km</li>
        <li>Dificultad: Baja</li>
        <li>Terreno: Ciclovía y brechas fáciles</li>
      </ul>
    `;
  } else if (type === 'intermedios') {
    content.innerHTML = `
      <h3>Rodadas para Intermedios.</h3>
      <p>Rutas con mayor complejidad, ideales para ciclistas con algo de experiencia. 
      Incluye subidas, bajadas y caminos técnicos.</p><p>&nbsp;</p>
      <ul>
        <li>Día: Martes</li>
        <li>Hora Reunión: 7:30 PM</li>
        <li>Hora Salida: 8:00 PM</li>
        <li>Distancia: +30 km</li>
        <li>Dificultad: Media</li>
        <li>Terreno: Mixto y tramos técnicos</li>
      </ul>
    `;
  }

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('rodadaModal').style.display = 'none';
}
