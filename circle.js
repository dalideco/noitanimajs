class Circle {

    constructor({
        canvas,
        context,
        x, y,
        radius = 50,
        dx = 1,
        dy = 2,
        color = "blue",
        hoveredSize = 100,
    }) {
        this.canvas = canvas;
        this.c = context
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color
        this.hoveredSize = hoveredSize
    }

    draw() {
        const { x, y, radius } = this

        this.c.beginPath();
        this.c.arc(x, y, radius, 0, Math.PI * 2, false);
        this.c.fillStyle = this.color;
        this.c.fill()
    }

    distanceToPoint(x, y) {

        const {x: canvaX,y: canvaY} = this.canvas.getBoundingClientRect()

        const absoluteX = canvaX + this.x;
        const absoluteY = canvaY + this.y;

        const xside = absoluteX - x
        const yside = absoluteY - y
        return Math.sqrt(xside*xside+yside*yside)
    }

    update(mousePosition) {
        this.updateHoveredSize(mousePosition)
        this.updatePosition()
    }

    updateHoveredSize(mousePosition){
        const {x,y} = mousePosition;

        if (this.distanceToPoint(x, y) > 100) {
            if(this.radius >2)this.radius -= 2
            return;
        }
        if (this.radius < this.hoveredSize) this.radius += 2
    }

    updatePosition() {
        this.x += this.dx;
        this.y += this.dy;

        if (
            this.x + this.radius >= this.canvas.width
            ||
            this.x - this.radius <= 0
        ) {
            this.dx = -this.dx
        }

        if (
            this.y + this.radius >= this.canvas.height
            ||
            this.y - this.radius <= 0
        ) {
            this.dy = -this.dy
        }

        this.draw();
    }

    toString() {
        const { x, y } = this
        return x + " " + y
    }
}