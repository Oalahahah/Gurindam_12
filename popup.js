//image pop-up
const galleryImages = [
  {
    src: 'assets/PulauPenyengat.jpg',
    title: 'Pulau Penyengat, Riau'
  },
  {
    src: 'assets/MasjidSultanRiau.jpg',
    title: 'Masjid Sultan Riau'
  },
  {
    src: 'assets/NaskahAsli.jpg',
    title: 'Naskah Asli Gurindam Dua Belas'
  },
  {
    src: 'assets/PatungRaja.jpg',
    title: 'Patung Raja Ali Haji'
  }
];

function updateModalImage(direction = 'right') {
  const img = document.getElementById('modalImage');

  img.classList.remove('slide-in-right');
  img.classList.remove('slide-in-left');

  void img.offsetWidth;

  img.src = galleryImages[currentImage].src;

  document.getElementById('modalCaption').textContent =
    galleryImages[currentImage].title;

  if (direction === 'right') {
    img.classList.add('slide-in-right');
  } else {
    img.classList.add('slide-in-left');
  }
}

let currentImage = 0;

function openModal(index) {
  currentImage = index;
  updateModalImage('right');
  document.getElementById('imageModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

function nextImage() {
  currentImage = (currentImage + 1) % galleryImages.length;
  updateModalImage('right');
}

function prevImage() {
  currentImage =
    (currentImage - 1 + galleryImages.length) %
    galleryImages.length;

  updateModalImage('left');
}

document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('imageModal');

  if (modal.style.display !== 'flex') return;

  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'Escape') closeModal();
});

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}
