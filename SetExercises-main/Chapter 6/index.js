/*function to convert fahrenheit to kelvin */
function calculateFK() {
    var fahrenh = document.fk.fahrenh.value;
    var con = 32

    var finalACC = ((fahrenh - 32) / 1.8) + 273.15;

    document.fk.ad.value = (finalACC.toFixed(2) + "K" );

}
/*function to convert fahrenheit to celsius */
function calculateFC() {
    var fahrenh = document.fc.fahrenh.value;
    var con = 32
    var finalACC = (fahrenh - con) / 1.8;

    document.fc.accc.value = (finalACC.toFixed(2) + "c");

}