import userModel from "./model.js";

// GET /user
const getUser = async (request, response) => {
  response.render("user/user", { user: request.session.user });
};

// GET /login
const loginForm = (request, response) => {
  response.render("user/login");
};

// POST /login
const login = async (request, response) => {

  // authenticate user using model
  let auth = await userModel.authenticateUser(
    request.body.username,
    request.body.password
  );

  if (auth) {
    request.session.loggedIn = true;
    request.session.user = request.body.username;

    response.redirect("/admin");
  } else {
    response.render("user/login", {
      err: "Credentials do not match existing user"
    });
  }
};

// GET /logout
const logout = (request, response) => {
  request.session.destroy();
  response.redirect("/login");
};

export default {
  getUser,
  loginForm,
  login,
  logout
};