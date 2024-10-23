const esconde = document.querySelector('.esconder-menu')
const mostra = document.querySelector('.mostrar-menu')
const menuLateral = document.querySelector('.menu-lateral')
const portfolio = document.querySelector('.portfolio')
const experiencia = document.querySelector('.experiencia')
const mostrarResponsivo = document.querySelector('.mostrar-menu-responsivo')


function mostraMenu() {
    esconde.style.display = "none"
    mostra.style.display = "block"
    menuLateral.style.cssText = "left: -22%; transition-duration: .1s;"
    portfolio.style.cssText = "width: 92%; transition-duration: .1s;"
}

function escondeMenu() {
    esconde.style.display = "block"
    mostra.style.display = "none"
    menuLateral.style.cssText = "left: 0; transition-duration: .1s;"
    portfolio.style.cssText = "width: 70%; transition-duration: .1s;"
}

function MenuResponsivo() {
    var menu = document.querySelector('.menu')
    if (menu.style.display == "block") {

        menu.style.cssText = "transition-duration: .1s"
        menu.style.display = "none"

    } else {
        menu.style.cssText = "transition-duration: .1s" 
        menu.style.display = "block"
    }


}