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
            birthdayData = SortByName(birthdayData);
            var now = new Date();
            var currentMonth = now.getMonth() + 1; // 0-indexed

            const urlParams = new URLSearchParams(window.location.search);
            const showAll = urlParams.get('showall')=="true";

            updateBirthday(currentMonth,showAll);
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
        });

});

function SortByName(dataToSort) {
    const uniqueMap = new Map();
    dataToSort.forEach(item => {
      const key = `${item.name}|${item.date}`;
      if (!uniqueMap.has(key)) {
        uniqueMap.set(key, item);
      }
    });
  
    const uniqueData = Array.from(uniqueMap.values());
    uniqueData.sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }));  
    return uniqueData;
  }

function SortByDate(dataToSort){
    const uniqueMap = new Map();
    dataToSort.forEach(item => {
      const key = `${item.name}|${item.date}`;
      if (!uniqueMap.has(key)) {
        uniqueMap.set(key, item);
      }
    });
    const uniqueData = Array.from(uniqueMap.values());
    uniqueData.sort((a, b) => new Date(a.date) - new Date(b.date));
    return uniqueData;
}

function updateBirthday(monthToShow, isShowByName) {

  if (isShowByName) {
        birthdayData = SortByName(birthdayData);
      } else { 
        birthdayData = SortByDate(birthdayData);
  }
  
  const tbody = document.querySelector('#birthday-table tbody');
  const formatter = new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  var cboMes = document.getElementById("mes");
  cboMes[monthToShow].selected = true;
  tbody.replaceChildren();

  if (isShowByName) {
    birthdayData = SortByName(birthdayData);
  }

  let counter = 1;
  birthdayData.forEach(entry => {
    const [year, month, day] = entry.date.split('-');
    var newdate = new Date(year, month - 1, day);
        
    var elementdate = newdate.getMonth() + 1;

    if ((!isShowByName && elementdate === monthToShow) || isShowByName)
    {
      const tr = document.createElement('tr');

      const tdName = document.createElement('td');
      tdName.textContent = counter + ". " + entry.name;

      const tdDate = document.createElement('td');
      tdDate.textContent = formatter.format(newdate);
            
      const tdImage = document.createElement('td');
      tdImage.innerHTML = "image here";
      if (entry.image !== "")
      {
          tdImage.innerHTML = "<img class='imgbirthday' src='birthdays/" + entry.image +"'/>";
      } 

      tr.appendChild(tdName);
      tr.appendChild(tdDate);
      tr.appendChild(tdImage);
      tbody.appendChild(tr);
      counter++;
    }
  });
}

function updateList(){
    var cboMes = document.getElementById("mes");
    updateBirthday(parseInt(cboMes.value));
}