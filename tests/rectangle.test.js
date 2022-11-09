
import { getRectangleArea, getRectanglePerimeter, getRectangleInfo } from "../js/rectangle";

const logSpy = jest.spyOn(console, "log").mockImplementation((str) => str.toLowerCase());


describe('Calculating Perimeter and Area, checking valid and invalid inputs', () => {
  afterEach(() => {
    logSpy.mockClear();
  });

  afterAll( () => {
    logSpy.mockRestore();
  });

test('calculates the Perimeter of rectangle with valid inputs', () => {
    const perimeter = getRectanglePerimeter(3, 5);
    expect(perimeter).toBe(16);
     
});

test('checks the the invalid inputs for perimeter function', () => {
    getRectanglePerimeter(0, 5);
    expect(logSpy).toHaveLastReturnedWith('invalid inputs!');
    
});

test('calculates the Area of rectangle with valid inputs', () => {
    const area = getRectangleArea(3, 5);
    expect(area).toBe(15);

});

test('checks the invalid inputs for area function', () => {
    getRectangleArea(0, 5);
    expect(logSpy).toHaveLastReturnedWith('invalid inputs!');
    
});

test('console message with perimeter and area values', () => {
    const perimeter = getRectanglePerimeter(3, 5);
    const area = getRectangleArea(3, 5);
    const perOut = (`The perimeter of a rectangle is ${perimeter} and the area is ${area}`);
    expect(perOut).toBe('The perimeter of a rectangle is 16 and the area is 15');
});

test('console message with perimeter and area values', () => {
    getRectangleInfo(3,5);
    expect(logSpy).toHaveLastReturnedWith('the perimeter of a rectangle is 16 and the area is 15');

});

test('console message for invalid inputs', () => {
    getRectangleInfo(0,5);
    expect(logSpy).toHaveLastReturnedWith('invalid inputs!');

});

});


