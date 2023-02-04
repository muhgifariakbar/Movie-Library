const request = require('supertest');
// const app = require('../app');
import app from '..';

afterAll(() => {
  queryInterface.bulkDelete('Users', null, {
    truncate: true,
    restartIdentity: true,
  });
});

describe('POST /public/login success', () => {
  test('POST /public/login - success test', () => {
    const payload = {
      email: 'admin@mail.com',
      password: '12345',
    };
    return request(app)
      .post('/login')
      .send(payload)
      .then((response) => {
        expect(response.status).toBe(200);
      });
  });
});
