 async function loadBirthdays() {
    try {
      const response = await fetch('birthdays/birthday.json');
      const data = await response.json();

      const tbody = document.querySelector('#birthday-table tbody');
      const now = new Date();
      const currentMonth = now.getMonth() + 1; // 0-indexed

      const formatter = new Intl.DateTimeFormat('es-MX', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });

      data.forEach(entry => {
        const dateObj = new Date(entry.date);
        const entryMonth = dateObj.getMonth() + 1;

        if (entryMonth === currentMonth) {
          const tr = document.createElement('tr');

          const tdName = document.createElement('td');
          tdName.textContent = entry.name;

          const tdDate = document.createElement('td');
          tdDate.textContent = formatter.format(dateObj);

          tr.appendChild(tdName);
          tr.appendChild(tdDate);
          tbody.appendChild(tr);
        }
      });
    } catch (error) {
      console.error('Error al cargar los cumpleaños:', error);
    }
  }

  window.addEventListener('DOMContentLoaded', loadBirthdays);