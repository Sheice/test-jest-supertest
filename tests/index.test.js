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

    describe('given a title and description', () => {

        const newProject = {
            title: "projects",
            description: "i don't know"
        }

        test('shoud respond with a 200 status code', async () => {
            const response = await request(app).post('/api/projects').send(newProject);
    
            expect(response.statusCode).toBe(200);
        })
    
        test('shoud have a content-type: application/json in header', async () => {
            const response = await request(app).post('/api/projects').send(newProject);
    
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
        })
    
        test('should respond with an project ID',async () => {
            const response = await request(app).post('/api/projects').send(newProject);
    
            expect(response.body.id).toBeDefined();
            
        })


    });

    describe('when title and description is missing', () => {
        test('shoud respond with a 400 status code', async() => {
            const fields = [
                {},
                {title: "new project"},
                {description: "One description"}
            ]
            
            for(const body of fields){
                const response = await request(app).post('/api/projects').send(body);
                expect(response.statusCode).toBe(400);
            }
        })
    })
})