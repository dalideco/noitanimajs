import CircleHover from "./CircleHover/moving-circles"

const movingCircles = new CircleHover({
    el: document.querySelector('canvas'),
    nbrCircles: 1000
})

movingCircles.animate()
