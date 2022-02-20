const mongoose = require('mongoose');
const ServiceMessage = require('../models/serviceMessage');

const getService = async (req, res) => {
    const id = req.params.id;
    try {
        const service = await ServiceMessage.find(ObjectID(id));
        res.status(200).json(service);   
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getServices = async (req, res) => {
    try {
        const services = await ServiceMessage.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const createService = async (req, res) => {
    const newService = new ServiceMessage(req.body);
    try {
        await newService.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const updateService = async (req, res) => {
    const {id: _id} = req.params;
    const service = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({message: "This service does not exist in the database"});
    }

    const updatedService = await ServiceMessage.findByIdAndUpdate(_id, {...service, _id}, {new: true});
    res.json(updateService);
};

const deleteService = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "This service does not exist in the database."});
    }

    await ServiceMessage.findByIdAndRemove(id);
    
    res.json({message: "Service entry deleted successfully."});
};

exports.getService = getService;
exports.getServices = getServices;
exports.createService = createService;
exports.updateService = updateService;
exports.deleteService = deleteService;