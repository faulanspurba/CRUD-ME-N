const Contact = require("../model/contact");

exports.add = (req, res) => {
  Contact.insertMany(req.body, (error, result) => {
    res.redirect("/contact");
  });
};

exports.edit = async (req, res) => {
  const contact = await Contact.findOne({ name: req.body.name });
  const mirror = contact.name;
  const oldName = req.body.oldName;
  const value = req.body.name;
  if (value == oldName && mirror) {
    console.log(`Nama ini sudah ada`);
    // res.render("edit");
  }
  await Contact.updateOne(
    { _id: req.body._id },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        mPhone: req.body.mPhone,
      },
    }
  );
  res.redirect("/contact");
};

exports.delete = async (req, res) => {
  Contact.deleteOne({ _id: req.body._id }).then(() => {
    res.redirect("/contact");
  });
};
