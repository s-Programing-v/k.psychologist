const $ = (t) => document.querySelector(t)

const insta = $('#instagram')
const whatsapp = $('#whatsapp')
const inst = $('.insta')
const whats = $('.whats')

insta.addEventListener('click', () => {
    window.open('https://www.instagram.com/kevinmoreno_888/?igsh=MWlyc3hpbWlmc2kwdw%3D%3D', '_blank')
})
whatsapp.addEventListener('click', () => {
    window.open('https://wa.me/qr/XEBYZ3TM6W2SM1', '_blank')
})
inst.addEventListener('click', () => {
    window.open('https://www.instagram.com/kevinmoreno_888/?igsh=MWlyc3hpbWlmc2kwdw%3D%3D', '_blank')
})
whats.addEventListener('click', () => {
    window.open('https://wa.me/qr/XEBYZ3TM6W2SM1', '_blank')
})

function voltearTarjeta() {
    const tarjeta = document.querySelector('.container');
    tarjeta.classList.toggle("volteada"); // Añade o quita la clase para girar
}