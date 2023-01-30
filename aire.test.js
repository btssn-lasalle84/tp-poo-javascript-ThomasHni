const Rectangle = require('./rectangle');

var carre = new Rectangle(100, 100);

test('aire', () => {    
    expect(carre.aire()).toBe(10000);
});
