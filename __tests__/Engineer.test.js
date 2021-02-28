const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('can set github via constructor', () => {
    const github = 'GitHubUser';

    const engineer = new Engineer('Justin', 1, 'test@test.com', github);

    expect(engineer.github).toBe(github);
});

test('can set github username via getGithub()', () => {
    const github = 'GitHubUser';

    const engineer = new Engineer('Justin', 1, 'test@test.com', github);

    expect(engineer.getGithub()).toBe(github);
});

test('expect getRole to return Engineer', () => {
    const role = 'Engineer';

    const engineer = new Engineer('Justin', 1, 'test@test.com', 'GitHubUser');

    expect(engineer.getRole()).toBe(role);
});