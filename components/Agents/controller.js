import agentModel from "./model.js";

// GET all agents page
const listAgents = async (req, res) => {
  const agents = await agentModel.getAllAgents();
  res.render("admin/agents", { agents });
};

// POST add agent
const addAgent = async (req, res) => {
  await agentModel.addAgent(req.body.name, req.body.contact, req.body.activeListings);
  res.redirect("/admin/agents");
};

// GET delete agent
const deleteAgent = async (req, res) => {
  await agentModel.deleteAgentById(req.params.id);
  res.redirect("/admin/agents");
};

export default { listAgents, addAgent, deleteAgent };