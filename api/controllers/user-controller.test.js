/**
* Leonardo DaGraca
* 03/15/2023
* Integration test for user-controller.js
*
**/

const mongoose = require('mongoose');
const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('Integration test for controller', () => {
  let patientId;
  let examId;

  before(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  it('should create a new patient', async () => {
    const response = await request(app)
      .post('/patients')
      .send({
        name: 'Test Patient',
        age: 30,
        gender: 'Male',
      });

    assert.equal(response.status, 200);
    assert.ok(response.body._id);

    patientId = response.body._id;
  });

  it('should create a new exam for a given patient', async () => {
    const response = await request(app)
      .post(`/patients/${patientId}/exams`)
      .send({
        type: 'CT',
        date: '2022-01-01',
        results: 'All clear',
      });

    assert.equal(response.status, 200);
    assert.ok(response.body._id);

    examId = response.body._id;
  });

  it('should get all patients', async () => {
    const response = await request(app).get('/patients');

    assert.equal(response.status, 200);
    assert.ok(Array.isArray(response.body));
  });

  it('should get a patient by id', async () => {
    const response = await request(app).get(`/patients/${patientId}`);

    assert.equal(response.status, 200);
    assert.equal(response.body._id, patientId);
  });

  it('should update a patient', async () => {
    const response = await request(app)
      .put(`/patients/${patientId}`)
      .send({
        age: 35,
      });

    assert.equal(response.status, 200);
    assert.equal(response.body._id, patientId);
    assert.equal(response.body.age, 35);
  });

  it('should delete a patient', async () => {
    const response = await request(app).delete(`/patients/${patientId}`);

    assert.equal(response.status, 200);
    assert.equal(response.body._id, patientId);
  });

  it('should get all exams', async () => {
    const response = await request(app).get('/exams');

    assert.equal(response.status, 200);
    assert.ok(Array.isArray(response.body));
  });

  it('should get exams of a patient by id', async () => {
    const response = await request(app).get(`/patients/${patientId}/exams`);

    assert.equal(response.status, 200);
    assert.ok(Array.isArray(response.body));
  });

  it('should get an exam by id', async () => {
    const response = await request(app).get(`/exams/${examId}`);

    assert.equal(response.status, 200);
    assert.equal(response.body._id, examId);
  });

  it('should update an exam', async () => {
    const response = await request(app)
      .put(`/exams/${examId}`)
      .send({
        results: 'Needs further evaluation',
      });

    assert.equal(response.status, 200);
    assert.equal(response.body._id, examId);
    assert.equal(response.body.results, 'Needs further evaluation');
  });

  it('should delete an exam', async () => {
    const response = await request(app).delete(`/exams/${examId}`);

    assert.equal(response.status, 200);
    assert.equal(response.body._id, examId);
  });

  after(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection
.close();
});
});