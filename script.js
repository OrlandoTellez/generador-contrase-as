const $ = el => document.querySelector(el)

const $inpuPassword = $(".input-password")
const $btnCopiar = $(".btn-copiar")
const $lengthValue = $(".length-value")
const $lengthSlider = $(".length-slider")
const $checkBoxMayus = $(".checkbox-mayusculas")
const $checkBoxNum = $(".checkbox-numeros")
const $checkBoxSimbolo = $(".checkbox-simbolos")
const $btnGenerar = $(".btn-generar")
const $strengthBar = $(".strength-bar div")
const $tipoFortalez = $(".tipo-fortaleza")

$lengthValue.textContent = $lengthSlider.value
$lengthSlider.addEventListener("input", () => {
    $lengthValue.textContent = $lengthSlider.value
});

function generarContraseña(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos){
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz"
    const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeros = "0123456789"
    const simbolos = "!@#$%^&*()_+{}[]<>?"

    let caracteres = letrasMinusculas
    if(incluirMayusculas) caracteres += letrasMayusculas
    if(incluirNumeros) caracteres += numeros
    if(incluirSimbolos) caracteres += simbolos
    
    let password = ""
    for(let i = 0; i < longitud; i++){
        const indice = Math.floor(Math.random() * caracteres.length)
        password += caracteres[indice]
    }

    return password
}

$btnGenerar.addEventListener("click", () => {
    const longitud = parseInt($lengthSlider.value)
    const incluirMayusculas = $checkBoxMayus.checked
    const incluirNumeros = $checkBoxNum.checked
    const incluirSimbolos = $checkBoxSimbolo.checked

    const newPassword = generarContraseña(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos)

    evaluarFortaleza(newPassword)
    $inpuPassword.value = newPassword

})

function evaluarFortaleza(password) {
    let score = 0

    if (password.length >= 8) score++
    if (password.length >= 12) score++
    if (/[A-Z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^a-zA-Z0-9]/.test(password)) score++

    actualizarBarra(score);
}

function actualizarBarra(score) {
    let porcentaje = (score / 5) * 100

    $strengthBar.style.width = `${porcentaje}%`

    if (score <= 2) {
        $tipoFortalez.textContent = "Debil"
        $strengthBar.style.backgroundColor = "red"
    } else if (score <= 4) {
        $tipoFortalez.textContent = "Medio"
        $strengthBar.style.backgroundColor = "yellow"
    } else {
        $tipoFortalez.textContent = "Fuerte"
        $strengthBar.style.backgroundColor = "green"
    }
}