// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Modal
function openModal(title, tagline, imageSrc) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-tagline').innerText = tagline;
  document.getElementById('modal-image').src = imageSrc;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Scroll Animation for Work Items
const workItems = document.querySelectorAll('.work-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.3
});

workItems.forEach(item => {
  observer.observe(item);
});
