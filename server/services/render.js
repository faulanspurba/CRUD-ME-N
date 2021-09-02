const Contact = require("../model/contact");

exports.home = (req, res) => {
  res.render("index", {
    title: "Home",
    layout: "layouts/body-layout",
  });
};

exports.about = (req, res) => {
  res.render("about", {
    title: "About",
    layout: "layouts/body-layout",
  });
};

exports.contact = async (req, res) => {
  const contacts = await Contact.find();
  res.render("contact", {
    title: "contact",
    layout: "layouts/body-layout",
    contacts,
  });
};

exports.add = (req, res) => {
  res.render("add", {
    title: "add",
    layout: "layouts/body-layout",
  });
};

exports.edit = async (req, res) => {
  const contact = await Contact.findOne({ _id: req.params._id });
  res.render("edit", {
    title: "Edit",
    layout: "layouts/body-layout",
    contact,
  });
};
