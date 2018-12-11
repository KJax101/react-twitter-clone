const router = require('express').Router();
const userRoutes = require('./users');

// API routes - /api/users
router.use('/users', userRoutes);

// API routes router.use('/users', userRoutes); 
module.exports = router;