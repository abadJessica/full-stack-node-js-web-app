import propertyModel from "./model.js";

// GET all properties page
const listProperties = async (req, res) => {
  const properties = await propertyModel.getAllProperties();
  res.render("admin/properties", { properties });
};

// POST add property
const addProperty = async (req, res) => {
  await propertyModel.addProperty(
    req.body.address,
    req.body.type,
    req.body.price,
    req.body.status
  );
  res.redirect("/admin/properties");
};

// GET delete property
const deleteProperty = async (req, res) => {
  await propertyModel.deletePropertyById(req.params.id);
  res.redirect("/admin/properties");
};

export default { listProperties, addProperty, deleteProperty };