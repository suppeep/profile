// 1. Deploys as dbUsersOnUpdate
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({
  origin: true
});