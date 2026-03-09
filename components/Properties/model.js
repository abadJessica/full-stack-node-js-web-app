import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  address: String,
  type: { type: String, enum: ["residential", "commercial"] },
  price: Number,
  status: { type: String, enum: ["available", "sold"], default: "available" }
});

const Property = mongoose.model("Property", PropertySchema);

async function getAllProperties() {
  return await Property.find();
}

async function addProperty(address, type, price, status) {
  const newProp = new Property({ address, type, price, status });
  return await newProp.save();
}

async function deletePropertyById(id) {
  return await Property.findByIdAndDelete(id);
}

export default { getAllProperties, addProperty, deletePropertyById };