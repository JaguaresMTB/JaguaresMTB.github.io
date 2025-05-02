document.addEventListener('DOMContentLoaded', () => {
    
    fetch('birthdays/birthday.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el JSON');
            }
            return response.json();
        })
        .then(data => {
            window.birthdayData = data;

            const uniqueMap = new Map();
            birthdayData.forEach(item => {
              const key = `${item.name}|${item.date}`;
              if (!uniqueMap.has(key)) {
                uniqueMap.set(key, item);
              }
            });
            const uniqueData = Array.from(uniqueMap.values());
        
            // Ordenar por fecha
            uniqueData.sort((a, b) => new Date(a.date) - new Date(b.date));
            birthdayData=uniqueData;
            var now = new Date();
            var currentMonth = now.getMonth() + 1; // 0-indexed

            updateBirthday(currentMonth);
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
        });

});

function updateBirthday(monthToShow){
    const tbody = document.querySelector('#birthday-table tbody');
    const formatter = new Intl.DateTimeFormat('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    var cboMes = document.getElementById("mes");
    cboMes[monthToShow].selected=true;
    tbody.replaceChildren();

    birthdayData.forEach(entry => {        
        var newdate = new Date(entry.date);
        var elementdate = newdate.getMonth() + 1;

        if (elementdate === monthToShow) {
            

            const tr = document.createElement('tr');

            const tdName = document.createElement('td');
            tdName.textContent = entry.name;

            const tdDate = document.createElement('td');
            tdDate.textContent = formatter.format(newdate);

            tr.appendChild(tdName);
            tr.appendChild(tdDate);
            tbody.appendChild(tr);
        }
    });
}

function updateList(){
    var cboMes = document.getElementById("mes");
    updateBirthday(parseInt(cboMes.value));
}