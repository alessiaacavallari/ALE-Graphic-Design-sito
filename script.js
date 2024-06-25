const items = document.querySelectorAll('.accordion button');

function openPopup() {
  window.location.hash = 'openModal';
}
window.onload = openPopup;

// Utilizzo il js per la sezione faq
function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  // Ciclo per ogni elemento e setto l'attributo aria-expanded a false
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  // Se clicco su un elemento della lista dei faq si apre e chiude gli altri
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

// Richiamo la funzione toggleAccordion se viene cliccato un elemento
items.forEach((item) => item.addEventListener('click', toggleAccordion));