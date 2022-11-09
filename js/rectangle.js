export function getRectanglePerimeter(length, width) {
if (length && width > 0) {
    return 2 * (length + width);
}

else {
    console.log('Invalid inputs!');
}
    


}

export function getRectangleArea(length, width) {
    if (length && width > 0) {
    return length * width;
    }
    else {
        console.log('invalid inputs!');
    }

}

export function getRectangleInfo(length, width) {
    if (length && width > 0) {
    const area = getRectangleArea(length, width);

    const perimeter = getRectanglePerimeter(length, width);

    return console.log(`the perimeter of a rectangle is ${perimeter} and the area is ${area}`)
    }

    else {
        console.log('invalid inputs!');
    }

}


export default { getRectangleInfo, getRectangleArea, getRectanglePerimeter }
