const express = require('express');
const router = express.Router();
const collegeController= require("../controllers/collegeController")
const internController= require("../controllers/internController")



router.post("/colleges", collegeController.createCollege )
router.post("/interns", internController.createIntern )
router.get("/collegeDetails",collegeController.collegeDetails)



router.all("/**", function (req, res) {
    res.status(400).send({
      status: false,
      msg: "The api you request is not available",
    });
  });





module.exports = router