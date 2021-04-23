var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;
function start(){
    document.getElementById("inputbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event){
    console.log(event);
    var content= event.results [0] [0].transcript;
    console.log(console);
    document.getElementById("inputbox").innerHTML = content;
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data= document.getElementById("inputbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
