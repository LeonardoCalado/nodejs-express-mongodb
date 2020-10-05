const mongoose = require("mongoose");

const Person = mongoose.model("Person");

module.exports = {
    async findAll(req, res) {
        const { page = 1} = req.query;

        const persons = await Person.paginate({}, {page, limit: 10});

        return res.json(persons);
    },
    async findByName(req, res) {
        const persons = await Person.findByName(req.params.name);

        return res.json(persons);
    },
    async findById(req, res) {
        const person = await Person.findById(req.params.id);

        return res.json(person);
    },
    async create(req, res) {
        const person = await Person.create(req.body);

        return res.json(person);
    }, 
    async delete(req, res) {
        await Person.findByIdAndDelete(req.params.id);

        return res.send();
    },
    async update(req, res) {
        const person = await Person.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(person);
    }
};