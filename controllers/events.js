const mongoose = require('mongoose');
const EventMessage = require('../models/eventMessage.js');


const getEvent = async (req, res) => {
    try{
        const id = req.params.id;
        const eventMessage = await EventMessage.find(id);
        res.status(200).json(eventMessage);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
};

const getEvents = async (req, res) => {
    try {
        const eventMessages = await EventMessage.find();
        res.status(200).json(eventMessages);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
};

const createEvent = async (req, res) => {
    const event = req.body;
    const newEvent = new EventMessage(event);
    try{
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

const updateEvent = async (req, res) => {
    const {id: _id} = req.params;
    const event = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({message: "This event does not exist in the database"});
    }
    
    const updateEvent = await EventMessage.findByIdAndUpdate(_id, {...event, _id}, {new: event});
    res.json(updateEvent);
};

const deleteEvent = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "This event does not exist in the database."});
    }

    await EventMessage.findByIdAndRemove(id);
    
    res.json({message: "Event entry deleted successfully."});
};

exports.getEvent = getEvent;
exports.getEvents = getEvents;
exports.createEvent = createEvent;
exports.updateEvent = updateEvent;
exports.deleteEvent = deleteEvent;