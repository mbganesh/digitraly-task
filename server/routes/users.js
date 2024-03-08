var express = require("express");
const Profile = require("../model/ProfileSchema");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/user-list", async (req, res) => {
  try {
    const data = await Profile.find({});
    if (!data) {
      data = [];
    }
    let respData = {
      status: true,
      data,
    };
    res.json(respData);
  } catch (error) {
    console.error(error.message);
    res.json({ status: false, message: "Something went wrong!" });
  }
});

router.post("/user-single-data", async (req, res) => {
  try {
    const reqData = req.body; // {_id}
    let data = await Profile.findOne({ _id: reqData._id });
    let respData = {
      status: true,
      data: data,
    };
    res.json(respData);
  } catch (error) {
    console.error(error.message);
    res.json({ status: false, message: "Something went wrong!" });
  }
});

router.post("/user-add", async (req, res) => {
  try {
    const reqData = req.body;
    await Profile.create(reqData);
    let respData = {
      status: true,
      message: "User added successfully",
    };
    res.json(respData);
  } catch (error) {
    console.error(error.message);
    res.json({ status: false, message: "Something went wrong!" });
  }
});

router.post("/user-delete", async (req, res) => {
  try {
    const reqData = req.body;
    await Profile.findOneAndDelete({ _id: reqData._id });
    let respData = {
      status: true,
      message: "User deleted successfully",
    };
    res.json(respData);
  } catch (error) {
    console.error(error.message);
    res.json({ status: false, message: "Something went wrong!" });
  }
});

router.post("/user-update", async (req, res) => {
  try {
    const reqData = req.body;
    let findQuery = { _id: reqData._id };
    let updateQuery = reqData;
    let options = { new: true };
    await Profile.findByIdAndUpdate(findQuery, updateQuery, options);
    let respData = {
      status: true,
      message: "User updated successfully",
    };
    res.json(respData);
  } catch (error) {
    console.error(error.message);
    res.json({ status: false, message: "Something went wrong!" });
  }
});

module.exports = router;
