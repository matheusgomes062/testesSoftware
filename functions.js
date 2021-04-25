const functions = {
  add: (num1, num2) => num1 + num2,

  getTriangleType: (a, b, c) => {
    if (a === 0 || b === 0 || c === 0) {
      throw new Error('No side can be 0');
    } else if (a < 0 || b < 0 || c < 0) {
      throw new Error('Illegal');
    } else if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Illegal');
    } else {
      return (
        (a === b && b === c && 'equilateral') ||
        ((a === b || a === c || b === c) && 'isosceles') ||
        'scalene'
      );
    }
  }
};

module.exports = functions;
