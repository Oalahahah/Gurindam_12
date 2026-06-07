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

function updateModalImage() {
  document.getElementById('modalImage').src =
    galleryImages[currentImage].src;

  document.getElementById('modalCaption').textContent =
    galleryImages[currentImage].title;
}

let currentImage = 0;

function openModal(index) {
  currentImage = index;
  updateModalImage();
  document.getElementById('imageModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

function nextImage() {
  currentImage = (currentImage + 1) % galleryImages.length;
  updateModalImage();
}

function prevImage() {
  currentImage =
    (currentImage - 1 + galleryImages.length) %
    galleryImages.length;

  updateModalImage();
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
