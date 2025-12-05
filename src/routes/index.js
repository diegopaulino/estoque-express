import express from "express";
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).send({
    title: "Home",
    version: "0.0.1",
  });
});

export default router;
