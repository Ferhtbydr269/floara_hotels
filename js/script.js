// Accordion aç/kapa
const accordions = document.querySelectorAll('.accordion-header');
accordions.forEach(header => {
  header.addEventListener('click', function() {
    const item = this.parentElement;
    // Diğer tüm accordionları kapat
    document.querySelectorAll('.accordion-item').forEach(i => {
      if(i !== item) i.classList.remove('active');
    });
    // Tıklananı aç/kapat
    item.classList.toggle('active');
  });
});

// Scroll to top
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', function() {
  if(window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
scrollBtn.addEventListener('click', function() {
  window.scrollTo({top:0, behavior:'smooth'});
});

// Slider fonksiyonu
let gardenIndex = 0;
let roomIndex = 0;
function showSlide(type, n) {
  let slides, idx;
  if(type === 'garden') {
    slides = document.querySelectorAll('.garden-slide');
    gardenIndex = n;
    if(n >= slides.length) gardenIndex = 0;
    if(n < 0) gardenIndex = slides.length-1;
    slides.forEach((img,i) => img.classList.toggle('active', i === gardenIndex));
  } else if(type === 'room') {
    slides = document.querySelectorAll('.room-slide');
    roomIndex = n;
    if(n >= slides.length) roomIndex = 0;
    if(n < 0) roomIndex = slides.length-1;
    slides.forEach((img,i) => img.classList.toggle('active', i === roomIndex));
  }
}
function slide(type, dir) {
  if(type === 'garden') showSlide('garden', gardenIndex + dir);
  if(type === 'room') showSlide('room', roomIndex + dir);
}
// Sayfa yüklenince ilk görselleri göster
window.addEventListener('DOMContentLoaded', () => {
  showSlide('garden', 0);
  showSlide('room', 0);
});

// Daha fazla göster/gizle fonksiyonu
function toggleFeatures(btn) {
  const grid = btn.previousElementSibling;
  const collapsed = grid.getAttribute('data-collapsed') === 'true';
  const extras = grid.querySelectorAll('.extra-feature');
  extras.forEach(el => el.style.display = collapsed ? '' : 'none');
  grid.setAttribute('data-collapsed', collapsed ? 'false' : 'true');
  btn.textContent = collapsed ? 'Daha az göster' : 'Daha fazla göster';
} 