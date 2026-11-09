// ===============================
// MENU MOBILE
// ===============================

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
});


// ===============================
// TUTUP MENU SAAT LINK DIKLIK
// ===============================

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("active");

    });

});


// ===============================
// FORM PESANAN
// ===============================

const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nama =
        document.getElementById("nama").value;

    const nomor =
        document.getElementById("nomor").value;

    const paket =
        document.getElementById("paketPilihan").value;

    const alamat =
        document.getElementById("alamat").value;


    const pesan =
        "Halo Aqiqah Berkah,%0A%0A" +
        "Saya ingin melakukan pemesanan aqiqah.%0A%0A" +
        "Nama: " + nama + "%0A" +
        "No. WhatsApp: " + nomor + "%0A" +
        "Paket: " + paket + "%0A" +
        "Alamat: " + alamat;


    // GANTI NOMOR INI DENGAN NOMOR ADMIN

    const nomorAdmin = "6281234567890";


    const whatsapp =
        "https://wa.me/" +
        nomorAdmin +
        "?text=" +
        pesan;


    window.open(whatsapp, "_blank");

});