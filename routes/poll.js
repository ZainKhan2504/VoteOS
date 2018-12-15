const express = require("express");
const router = express.Router();

// Config pusher
const Pusher = require("pusher");
var pusher = new Pusher({
  appId: "673114",
  key: "721772509b5d3e12f546",
  secret: "e4697ac2399bc8a3ce65",
  cluster: "mt1",
  encrypted: true
});

router.get("/", (req, res) => {
  res.send("POLL");
});

router.post("/", (req, res) => {
  pusher.trigger("os-poll", "os-vote", {
    points: 1,
    os: req.body.os
  });
  return res.json({ success: true, message: "Thankyou for voting" });
});
module.exports = router;
