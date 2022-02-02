camera = document.getElementById("camera");
Webcam.attach("#camera");

Webcam.set({
  width: 350,
  height: 300,
  image_format: 'png',
  png_quality: 90
});

function take_snapshot() {
  Webcam.snap(function (img) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="' + img + '">'
  });
}
console.log("ml5 version is", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HktNTXeKS/model.json", model_loaded);

function model_loaded() {
  console.log("model is loaded")
}

function check() {
  snap = document.getElementById("captured_image");
  classifier.classify(snap, gotresult);
}

function gotresult(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
    document.getElementById("Object").innerHTML = result[0].label;
    document.getElementById("Accuracy").innerHTML=result[0].confidence.toFixed(2);
  }
}