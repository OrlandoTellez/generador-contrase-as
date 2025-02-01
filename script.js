const $ = el => document.querySelector(el);

const $inpuPassword = $(".input-password");
const $btnCopiar = $(".btn-copiar");
const $lengthValue = $(".length-value");
const $lengthSlider = $(".length-slider");
const $checkBoxMayus = $(".checkbox-mayusculas");
const $checkBoxNum = $(".checkbox-numeros");
const $checkBoxSimbolo = $(".checkbox-simbolos");
const $btnGenerar = $(".btn-generar");

$lengthSlider.addEventListener("input", () => {
    $lengthValue.textContent = $lengthSlider.value;
});