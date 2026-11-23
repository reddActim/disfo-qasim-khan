const router = require('express').Router();
const {
    registerUser,
    getAllUsers,
    getUserByUsername
} = require('../controllers/user.controller');
const validateUserMiddleware = require('../middlewares/userValidation.middleware');
const verifyApiKey = require('../middlewares/verifyApiKey.middleware');

// POST /user/register
router.post('/register', validateUserMiddleware, registerUser);

// GET /user/all (declared before /:username to avoid 'all' matching as a param)
router.get('/all', verifyApiKey, getAllUsers);

// GET /user/:username
router.get('/:username', getUserByUsername);

module.exports = router;
