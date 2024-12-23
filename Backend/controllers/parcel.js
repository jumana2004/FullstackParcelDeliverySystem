const Parcel = require("../models/Parcel");

//Create a parcel

const createParcel = async (req, res) => {
  try {
    const newParcels = Parcel(req.body);
    const parcel = await newParcels.save();
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get all parcels

const getAllParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find().sort({ createAt: -1 });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Update the parcel

const updateParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get one parcel

const getOneParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get User's Parcel

const getUserParcel = async (req, res) => {
  try {
    const parcel = await Parcel.find({ senderemail: req.body.email }).sort({
      createAt: -1,
    });
    res.status(200).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete a parcel

const deleteParcel = async (req, res) => {
  try {
    await Parcel.findByIdAndDelete(req.params.id);
    res.status(201).json("Parcel deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  deleteParcel,
  getUserParcel,
  getOneParcel,
  updateParcel,
  getAllParcels,
  createParcel,
};
