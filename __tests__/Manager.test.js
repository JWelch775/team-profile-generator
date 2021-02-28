const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

test('can get officeNumber via constructor', () => {
    const officeNumber = 11;
    const manager = new Manager('Justin', 1, 'test@test.com', officeNumber);

    expect(manager.officeNumber).toBe(officeNumber);
});

test('can get office number via getOffice()', () => {
    const officeNumber = 22;
    const manager = new Manager('Justin', 1, 'test@test.com', officeNumber);

    expect(manager.getOfficeNumber()).toBe(officeNumber);
});

test('getRole will return manager', () => {
    const role = 'Manager'
    const manager = new Manager('Justin', 1, 'test@test.com', 22);

    expect(manager.getRole()).toBe(role);
});

