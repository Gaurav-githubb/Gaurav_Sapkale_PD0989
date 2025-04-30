const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Task = require('../models/Task');

describe('Task API', () => {
  before(async () => {
    await mongoose.connect('mongodb://localhost:27017/todoDBTest');
  });

  afterEach(async () => {
    await Task.deleteMany();
  });

  it('should create a task', async () => {
    const res = await request(app).post('/api/task').send({ title: 'Test Task' });
    res.should.have.status(201);
    res.body.should.have.property('title').eql('Test Task');
  });

  // More tests like GET, PUT, DELETE
});
