const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const cartCount = document.getElementById('cartCount');
let jumlahBarang = 0;

navToggle.addEventListener('click', function () {
  navLinks.classList.toggle('show');
  const menuTerbuka = navLinks.classList.contains('show');
  navToggle.setAttribute('aria-expanded', menuTerbuka);
});

document.querySelectorAll('.add-button').forEach(function (button) {
  button.addEventListener('click', function () {
    jumlahBarang = jumlahBarang + 1;
    cartCount.textContent = jumlahBarang;
    button.textContent = 'Ditambahkan';
  });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const nama = document.getElementById('customerName').value;
  document.getElementById('formMessage').textContent = 'Terima kasih, ' + nama + '. Pesan sudah dicatat.';
  this.reset();
});
