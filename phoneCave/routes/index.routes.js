const express = require("express");
const router = express.Router();
const data = require('../technical_challenge_WD/data/phones.json');

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const dataJson = data;

router.get('/phones', async (req,res) => {
  try {
    const data = dataJson;
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.json({message: error})
  }
})

router.get('/phones/:id', async (req,res) => {
  const id = req.params.id;
  console.log(id)
  try {
    const data = dataJson;
    const phone = data.filter(phone => {
      if (phone.id == id) return phone
    })
    res.status(200).json(phone)
  } catch (error) {
    console.log(error)
    res.json({message: error})
  }
})

module.exports = router;
