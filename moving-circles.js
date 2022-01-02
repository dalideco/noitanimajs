const canvas = document.querySelector("canvas");

const {width, height}= canvas.getBoundingClientRect();

canvas.width = width;
canvas.height = height;

const mousePosition = {x:0,y: 0}

const c = canvas.getContext('2d');

const mycircles = []
const colors = [
    '#85FFC7', 
    '#297373', 
    '#FF8552',
    '#39393A'
]
for (let i = 0; i < 200; i++) {
    mycircles.push(new Circle({
        canvas: canvas,
        context: c,
        radius: 2,
        x: getRandomNumber(20, canvas.width - 20),
        y: getRandomNumber(20, canvas.height - 20),
        hoveredSize: getRandomNumber(20,100),
        dx: getRandomNumber(-2, 2),
        dy: getRandomNumber(-2, 2),
        color: getRandomFromArray(colors)
    }))
}

canvas.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e

    mousePosition.x = offsetX;
    mousePosition.y = offsetY;
})

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, canvas.width, canvas.height)



    mycircles.forEach(circle => { 
        circle.update(mousePosition)
    })
}

animate()