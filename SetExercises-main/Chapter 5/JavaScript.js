﻿function Sound1() {
    document.getElementById("AhHa").play();
    stopPlaying();
};
function Sound2() {
    document.getElementById("dan").play();
    stopPlaying();
};
function Sound3() {
    document.getElementById("net").play();
    stopPlaying();
};
function Sound4() {
    document.getElementById("order").play();
    stopPlaying();
};
function Sound5() {
    document.getElementById("jp").play();
    stopPlaying();
};
function Sound6() {
    document.getElementById("cheese").play();
    stopPlaying();
};
function Sound7() {
    document.getElementById("goal").play();
    stopPlaying();
};
function Sound8() {
    document.getElementById("face").play();
    stopPlaying();
};
function Sound9() {
    document.getElementById("hello").play();
    stopPlaying();
};
function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}