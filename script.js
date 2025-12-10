document.addEventListener('DOMContentLoaded', function() {
  // Example events — you can edit or add more
  const events = [
    { date: 'Dec 15, 2025', title: 'Dexter Winter Market', description: 'Local vendors, cider, donuts.' },
    { date: 'Jan 2, 2026', title: 'New Year Ride', description: 'Meet at downtown, bring lights.' }
  ];

  const eventsList = document.getElementById('eventsList');

  events.forEach(event => {
    const li = document.createElement('li');
    li.textContent = `${event.date} — ${event.title}: ${event.description}`;
    eventsList.appendChild(li);
  });

  // Optional: mobile menu toggle (if you add a button later)
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.querySelector('nav');
  if(menuBtn && nav){
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
});
