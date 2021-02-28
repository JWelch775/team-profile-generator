const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');
const intern = require('../lib/Intern')

test('constructor can set school', () => {
    const school = 'Vanderbilt';

    const intern = new Intern('Justin', 1, 'test@test.com', 'Vanderbilt');
    expect(intern.school).toBe('Vanderbilt');
});

test('can get school via getSchool()', () => {
    const school = 'Vanderbilt'

    const intern = new Intern('Justin', 1, 'test@test.com', school)
    expect(intern.getSchool()).toBe(school);
});

test('getRole() will return intern', () => {
    const role = 'Intern'
    const intern = new Intern('Justin', 1, 'test@test.com', 'Vanderbilt');

    expect(intern.getRole()).toBe(role);
});