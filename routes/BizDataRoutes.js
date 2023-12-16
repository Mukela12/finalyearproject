const express = require("express");
const businessOnboardController = require("../controllers/BusinessDataController").businessOnboardController;
const fetchBusinesses = require('../controllers/BusinessDataController').fetchBusinesses;
const path = require('path');

const multer = require('multer');


// Router object
const router = express.Router();

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type!'), false);
    }
  };

const absolutePath = path.join(process.cwd(), 'path');

console.log(absolutePath);

// Multer setup for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, absolutePath); // Replace with the actual absolute path
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  

const upload = multer({ storage, fileFilter });;



// Business Onboard || POST
router.post("/business-onboard", upload.single('file'), businessOnboardController);

// Fetch all businesses || GET
router.get('/fetch-businesses', fetchBusinesses);


// Export the router
module.exports = router;
