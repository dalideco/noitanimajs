export function getRandomNumber(begin, end){
    
    if(begin >=end ){
        throw Error("ya maalem fech taamel")
    }
    
    const IntervalLength = end-begin;
    return Math.floor(Math.random()*IntervalLength)+begin
}

export function getRandomFromArray(array) {
    return array[Math.floor(Math.random()* array.length)]
}