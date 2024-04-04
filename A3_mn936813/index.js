//PART2 JS:Notification
const image  = document.getElementById('clickableBanner');
const notification = document.getElementById('notification');

image.addEventListener('click', function validate(event){
    event.preventDefault();
    notification.style.display = 'block';
}); //displays notification on top of banner when clicked

//PART2 JS:Conditional if-elseif-else with nested conditional
var firstClick =  'first';
var recursiveImageCall = false;
const doodle = document.getElementById('doodle');
const aboutDrawing = document.getElementById('aboutDrawing');
const mySwitchButton =document.getElementById('mySwitchButton');


mySwitchButton.addEventListener('click',function switchImage(){
    if (recursiveImageCall === false){ 
        if(firstClick === 'first'){  //if click 1 switch to image 1
            doodle.src = "mydoodle1.png";
            firstClick =  'second'; //update click number
        } else if(firstClick === 'second') { //if click 2 switch to image 2
            doodle.src = "mydoodle2.png";
            firstClick =  'third'
        } else if(firstClick === 'third'){ //if click 3 switch to image 3
            doodle.src = "mydoodle3.png";
            firstClick =  'zero'
        } else { //if click 4 switch to image 0
            doodle.src = "mydoodle0.png";
            firstClick =  'done'; //update click number to finished
            recursiveImageCall = true;//if click 5 start recursive call
        } 
    }else{
        firstClick =  'first'; //make sure it starts at first click
        recursiveImageCall = false; // set to false to reset function
        switchImage(); //recursivley call function so this nested conditional has a purpose 
    }

});//switches images infinitley cycling from image 0-3

//PART2 JS:Event Handler
const ipod = document.getElementById('ipod');

ipod.addEventListener('mouseenter',function(){
    ipod.src="switchtv.png";
});
ipod.addEventListener('mouseleave',function(){
    ipod.src="ipod.png";
}); //switches images when mouse is on image area
