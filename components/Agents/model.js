import mongoose from "mongoose";

const AgentSchema = new mongoose.Schema({
  name: String,
  contact: String,
  activeListings: { type: Number, default: 0 }
});

const Agent = mongoose.model("Agent", AgentSchema);

async function getAllAgents() {
  return await Agent.find();
}

async function addAgent(name, contact, activeListings) {
  const newAgent = new Agent({ name, contact, activeListings });
  return await newAgent.save();
}

async function deleteAgentById(id) {
  return await Agent.findByIdAndDelete(id);
}

export default { getAllAgents, addAgent, deleteAgentById };