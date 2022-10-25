import app from '../src/app.js';
import request from 'supertest';

describe('GET /api/projects', ()=> {

    test('shoud respond with a 200 status code', async () => {
        const response = await request(app).get('/api/projects').send();
        expect(response.statusCode).toBe(200);
    })

})