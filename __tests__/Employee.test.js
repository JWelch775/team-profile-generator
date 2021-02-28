const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('checks if employee Object is created', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
});

test("can set name in constructor", () => {
    const name = 'Justin';

    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("can set id in constructor", () => {
    const id = 1;
    const employee = new Employee('Justin', id);
    expect(employee.id).toBe(id);
});

test('can set email in constructor', () => {
    const email = "test@test.com";
    const id = 1;

    const employee = new Employee('Justin', id, email);
    expect(employee.email).toBe(email);
})

test('can get name via getName()', () => {
    const name = 'Justin';

    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test('can get id via getId()', () => {
    const id = 1;

    const employee = new Employee('Justin', id);

    expect(employee.getId()).toBe(id);
});

test('can get emial via getEmail()', () => {
    const email = 'test@test.com';
    const id = 1;

    const employee = new Employee('Justin', id, email);

    expect(employee.getEmail()).toBe(email);
});

test('expect getRole to return employee', () => {
    const email = 'test@test.com'
    const id = 1;
    const role = 'Employee'

    const employee = new Employee('Justin', id, email);

    expect(employee.getRole()).toBe(role);
});