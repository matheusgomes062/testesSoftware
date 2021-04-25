const functions = require('./functions');

test('adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('check if triangle with equal sides is equilateral', () => {
  expect(functions.getTriangleType(2, 2, 2)).toBe('equilateral');
});

test('check if triangle with larger equal sides is equilateral', () => {
  expect(functions.getTriangleType(10, 10, 10)).toBe('equilateral');
});

test('isosceles triangles have the last two sides equal', () => {
  expect(functions.getTriangleType(3, 4, 4)).toBe('isosceles');
});

test('isosceles triangles have the first two sides equal', () => {
  expect(functions.getTriangleType(2, 2, 3)).toBe('isosceles');
});

test('isosceles triangles have the first and last sides equal', () => {
  expect(functions.getTriangleType(4, 3, 4)).toBe('isosceles');
});

test('isosceles triangles have in fact exactly two sides equal', () => {
  expect(functions.getTriangleType(10, 10, 2)).toBe('isosceles');
});

test('scalene triangles have no equal sides', () => {
  expect(functions.getTriangleType(3, 4, 5)).toBe('scalene');
});

test('scalene triangles have no equal sides at a larger scale too', () => {
  expect(functions.getTriangleType(10, 11, 2)).toBe('scalene');
});

test('scalene triangles have no equal sides in descending order either', () => {
  expect(functions.getTriangleType(5, 4, 2)).toBe('scalene');
});

test('very small triangles are legal', () => {
  expect(functions.getTriangleType(0.4, 0.6, 0.3)).toBe('scalene');
});

test('triangles with no sizes are illegal', () => {
  expect(() => {
    functions.getTriangleType(0, 0, 0);
  }).toThrow(Error);
});

test('triangles violating triangle inequality are illegal', () => {
  expect(() => {
    functions.getTriangleType(1, 1, 3);
  }).toThrow(Error);
});

test('triangles violating triangle inequality are illegal 2', () => {
  expect(() => {
    functions.getTriangleType(7, 3, 2);
  }).toThrow(Error);
});

test('triangles violating triangle inequality are illegal 3', () => {
  expect(() => {
    functions.getTriangleType(10, 1, 3);
  }).toThrow(Error);
});
