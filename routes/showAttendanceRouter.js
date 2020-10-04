const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const passport = require('passport');
const Student = require('../models/Student');
router.get('/', (req, res, next) => {
    Student.find({  }, (err, studentDocs) => {
        if(err) return console.log(err);
        else res.render('showAttendance', { studentDocs : studentDocs });
        
    })
});
module.exports = router;