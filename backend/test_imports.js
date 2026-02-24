try {
    console.log("Loading dotenv...");
    require('dotenv').config();
    console.log("Loading express...");
    require('express');
    console.log("Loading mongoose...");
    require('mongoose');
    console.log("Loading cors...");
    require('cors');
    console.log("Loading jsonwebtoken...");
    require('jsonwebtoken');
    console.log("Loading bcryptjs...");
    require('bcryptjs');
    console.log("Loading nodemailer...");
    require('nodemailer');
    console.log("Loading multer...");
    require('multer');
    console.log("Loading google-generative-ai...");
    require("@google/generative-ai");
    console.log("ALL IMPORTS SUCCESSFUL");
} catch (err) {
    console.error("IMPORT ERROR:", err);
}
