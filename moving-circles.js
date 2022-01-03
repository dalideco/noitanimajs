class CircleHover {

    constructor({
        el = document.querySelector("canvas"),
        colors = [
            '#85FFC7',
            '#297373',
            '#FF8552',
            '#39393A'
        ],
        nbrCircles= 200,
    }) {
        //getting canvas and 2d context
        this.canvas = el;
        this.c = this.canvas.getContext('2d')

        //getting width and height fixed from style
        const { width, height } = this.canvas.getBoundingClientRect();

        this.canvas.width = width;
        this.canvas.height = height;

        //generating circles with the colors
        this.mycircles = []
        this.colors = colors
        for (let i = 0; i < nbrCircles; i++) {
            this.mycircles.push(new Circle({
                canvas: this.canvas,
                context: this.c,
                radius: 2,
                x: getRandomNumber(20, this.canvas.width - 20),
                y: getRandomNumber(20, this.canvas.height - 20),
                hoveredSize: getRandomNumber(20, 100),
                dx: getRandomNumber(-2, 2),
                dy: getRandomNumber(-2, 2),
                color: getRandomFromArray(this.colors)
            }))
        }

        //getting mousePosition
        this.mousePosition = { x: 0, y: 0 }

        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e
        
            this.mousePosition.x = clientX;
            this.mousePosition.y = clientY;
        })

    }

    //animate method
    animate() {
        setTimeout(this.animate, 3000)
        console.log(this.animate);
    
        // this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
    
        this.mycircles.forEach(circle => {
            circle.update(this.mousePosition)
        })
    }
}

const movingCircles = new CircleHover({
    el: document.querySelector('canvas')
})

function animate(movingCircles) {
    requestAnimationFrame(()=>{animate(movingCircles)});
    movingCircles.c.clearRect(0, 0, movingCircles.canvas.width, movingCircles.canvas.height)

    movingCircles.mycircles.forEach(circle => {
        circle.update(movingCircles.mousePosition)
    })
}

animate(movingCircles)



// const canvas = document.querySelector("canvas");

// const { width, height } = canvas.getBoundingClientRect();

// canvas.width = width;
// canvas.height = height;

// const mousePosition = { x: 0, y: 0 }

// const c = canvas.getContext('2d');

// const mycircles = []
// const colors = [
//     '#85FFC7',
//     '#297373',
//     '#FF8552',
//     '#39393A'
// ]
// for (let i = 0; i < 200; i++) {
//     mycircles.push(new Circle({
//         canvas: canvas,
//         context: c,
//         radius: 2,
//         x: getRandomNumber(20, canvas.width - 20),
//         y: getRandomNumber(20, canvas.height - 20),
//         hoveredSize: getRandomNumber(20, 100),
//         dx: getRandomNumber(-2, 2),
//         dy: getRandomNumber(-2, 2),
//         color: getRandomFromArray(colors)
//     }))
// }


// window.addEventListener('mousemove', (e) => {
//     const { clientX, clientY } = e

//     mousePosition.x = clientX;
//     mousePosition.y = clientY;
// })

// function animate() {
//     requestAnimationFrame(animate);

//     c.clearRect(0, 0, canvas.width, canvas.height)



//     mycircles.forEach(circle => {
//         circle.update(mousePosition)
//     })
// }

// animate()