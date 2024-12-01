const scroll = document.querySelector('.scroll').cloneNode(true);
const scroll_box = document.querySelector('.bidang-keahlian .scroll-box');
scroll_box.appendChild(scroll);

// Mengatur lebar scroll_box agar menampung dua elemen scroll
// scroll_box.style.width = `${scroll_box.scrollWidth}px`;
