const { prisma } = require('./utils/db');
var cookieparser = require('cookieparser')
const { findUserByEmail, verifyAdminByEmail, verifyFacultyAdminByEmail } = require('./services/users');
const { logger } = require('./services/logger');

async function isAuthenticated(req, res, next) {
    return next();
}



module.exports = {
    // ... other modules
    isAuthenticated
}