
function setup()
{
    canvas = createcanvas(280, 280);
    canvas.center();
    background("white");
}
function preload()
{
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw(){
strokeWeight(13);
stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
    check_sketch();
if(drawn_sketch == sketch){
    answer_holder = "set";
    timer_counter = 0;
    score = score+1;
    document.getElementById("score").innerHTML = "score: "+score;
    }
}

function check_sketch(){
    timer_counter++;
    document.getElementById("timer").innerHTML = "Timer: "+timer_counter;
    if(timer_counter>400){
        document.getElementById("your_sketch").innerHTML = "Your Sketch";
        document.getElementById("confidence").innerHTML = "Confidence";
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check = "completed" || answer_holder == "set"){
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}

function updateCanvas(){
    background("white");
    sketch = Element_of_array;
    document.getElementById("sketch_to_be_drawn").innerHTML = "Sketch To Be Drawn: "+sketch;
}

function setup(){
    canvas = createCanvas(280,280)
    canvas.center();
    background("white")
    canvas.mouseReleased(Classifycanvas);
}

function Classifycanvas(){
    classifier.classify(canvas,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    drawn_sketch = results[0].label;
    document.getElementById("your_sketch").innerHTML = "Your Sketch"+results[0].label;
        document.getElementById("confidence").innerHTML = "Confidence"+Math.round(results[0].confidence * 100)+'%';
}