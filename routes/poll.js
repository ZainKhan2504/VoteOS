const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Vote = require("../models/Vote");

// Config pusher
const Pusher = require("pusher");
var pusher = new Pusher({
  appId: "673114",
  key: "721772509b5d3e12f546",
  secret: "e4697ac2399bc8a3ce65",
  cluster: "mt1",
  useTLS: true
});

router.get("/", (req, res) => {
  Vote.find().then(votes => res.json({ success: true, votes: votes }));
});

router.post("/", (req, res) => {
  const newVote = {
    os: req.body.os,
    points: 1
  };
  new Vote(newVote).save().then(vote => {
    pusher.trigger("os-poll", "os-vote", {
      points: parseInt(vote.points),
      os: vote.os
    });
    return res.json({ success: true, message: "Thankyou for voting" });
  });
});
module.exports = router;
