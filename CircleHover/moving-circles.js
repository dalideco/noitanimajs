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
        maxHoveredSize = 100,
        minHoveredSize = 20
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
        for (let i = 0; i < nbrCircles; i++) {
            this.mycircles.push(new Circle({
                canvas: this.canvas,
                context: this.c,
                radius: 2,
                x: getRandomNumber(20, this.canvas.width - 20),
                y: getRandomNumber(20, this.canvas.height - 20),
                hoveredSize: getRandomNumber(20, 100),
                dx: getRandomNumber(-2, 2) ,
                dy: getRandomNumber(-2, 2) ,
                color: getRandomFromArray(colors)
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
        requestAnimationFrame(this.animate.bind(this))
    
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
    
        this.mycircles.forEach(circle => {
            circle.update(this.mousePosition)
        })
    }
}



const movingCircles = new CircleHover({
    el: document.querySelector('canvas'),
    nbrCircles: 1000
})

movingCircles.animate()
