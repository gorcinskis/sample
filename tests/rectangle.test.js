//import { getRectangleInfo } from "../js/rectangle";
import { getRectangleArea, getRectanglePerimeter, getRectangleInfo } from "../js/rectangle";


test('should output the Perimeter of Rectangle', () => {
    const perimeter = getRectanglePerimeter(3, 5);
    expect(perimeter).toBe(16);

});

test('should output the area of rectangle', () => {
    const area = getRectangleArea(3, 5);
    expect(area).toBe(15);


});

test('should printout the perimeter and area values', () => {
    const perimeter = getRectanglePerimeter(3, 5);
    const area = getRectangleArea(3, 5);
    const perOut = (`The perimeter of a rectangle is ${perimeter} and the area is ${area}`);
    expect(perOut).toBe(`The perimeter of a rectangle is ${16} and the area is ${15}`)

});
