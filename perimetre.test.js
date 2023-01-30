const Rectangle = require('./rectangle');

var carre = new Rectangle(100, 100);

test('perimetre', () => {
    expect(carre.perimetre()).toBe(400);
});
