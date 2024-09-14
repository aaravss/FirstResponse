let video;
let classifier;

function setup() {
    let canvas = createCanvas(500, 400);
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();
    canvas.position(490, 170);

    // Load the model
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sw_T6LzPO/model.json', modelLoaded);
}

function draw() {
    translate(500, 0);
    scale(-1, 1);
    image(video, 0, 0, 500, 400);
}

function modelLoaded() {
    console.log("Model Loaded!");
    // You can optionally call start here if needed
}

function start() {
    classifyVideo(); // Start classification when start function is called
    document.getElementById("status").innerHTML = "Scanned."
    document.getElementById("diagnosis").innerHTML = "Fracture";
        document.getElementById("stepstotake").innerHTML = "Steps to take: ";
        document.getElementById("steps").innerHTML = `
    <ol>
        <li>Call for emergency medical assistance if needed.</li>
        <li>Keep the injured area immobilized and do not move it.</li>
        <li>Apply ice to the injured area to reduce swelling and pain.</li>
        <li>Elevate the injured limb if possible to minimize swelling.</li>
        <li>If possible, apply a splint to immobilize the fracture.</li>
        <li>Avoid eating or drinking if surgery might be required.</li>
        <li>Follow up with a healthcare professional for further treatment and rehabilitation.</li>
    </ol>
`;
}

function classifyVideo() {
    // Classify the video and call gotResult when done
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log("Results:", results);
        

    }
}

function home() {
    window.location.href = "home.html";
}
