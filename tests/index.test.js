import app from '../src/app.js';
import request from 'supertest';

describe('GET /api/projects', ()=> {

    test('shoud respond with a 200 status code', async () => {
        const response = await request(app).get('/api/projects').send();
        expect(response.statusCode).toBe(200);
    })

    test('shoud respond a array', async () => {
        const response = await request(app).get('/api/projects').send();

        expect(response.body).toBeInstanceOf(Array);
    })

})

describe('POST /api/projects', () => {

    // shoud respond with a 200 status code
    test('shoud respond with a 200 status code', async () => {
        const response = await request(app).post('/api/projects');

        expect(response.statusCode).toBe(200);
    })

    // shoud respond with a JSON object 
    test('shoud have a content-type: application/json in header', async () => {
        const response = await request(app).post('/api/projects').send();

        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
    })

    // shoud respond with a JSON object containing the new project with id
    test('should respond with an project ID',async () => {
        const response = await request(app).post('/api/projects').send({
            title: "project test",
            description: "test description",
        });

        expect(response.body.id).toBeDefined();
        
    })
})