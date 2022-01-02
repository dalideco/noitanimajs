const canvas = document.querySelector("canvas");

canvas.width = 250;
canvas.height= 250;

const c = canvas.getContext('2d');

function drawnCircle(percentage){

    const {PI} = Math;
    const start = -PI/2

    const end = 2*PI *percentage/100 -PI/2 ;

    c.beginPath()
    c.moveTo(125,125)
    c.arc(125, 125, 70,start, end ,false )
    c.closePath()
    c.fill()
}


let i =0;
const duration = 10000;

const interval = setInterval(()=>{
    console.log("animating");
    i+=0.5;
    if(i>=100) i=0
}, duration/200)

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width, canvas.height)
    drawnCircle(i)
}

animate()