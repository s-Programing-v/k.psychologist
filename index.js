const $ = (t) => document.querySelector(t)

const face = $('#facebook')

face.addEventListener('click', () => {
    window.location.assign('https://www.youtube.com/') // <-- facebook de kevin
})
function voltearTarjeta() {
    const tarjeta = document.querySelector('.container');
    tarjeta.classList.toggle("volteada"); // Añade o quita la clase para girar
}