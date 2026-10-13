```javascript
// ===============================
// TAHUN OTOMATIS DI FOOTER
// ===============================

const tahun = document.getElementById("tahun");

if (tahun) {
    tahun.textContent = new Date().getFullYear();
}


// ===============================
// TOMBOL BACK TO TOP
// ===============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// PESAN SEKARANG
// ===============================

const tombolPesan = document.querySelectorAll(".btn");

tombolPesan.forEach(function (tombol) {

    if (tombol.textContent.includes("Pesan Sekarang")) {

        tombol.addEventListener("click", function () {

            alert(
                "Selamat datang di Kopi Nana ☕\n\n" +
                "Silakan pilih menu favorit kamu!"
            );

        });

    }

});


// ===============================
// ANIMASI MENU SAAT MUNCUL
// ===============================

const cards = document.querySelectorAll(".menu-card");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(function (card) {

    observer.observe(card);

});
```
