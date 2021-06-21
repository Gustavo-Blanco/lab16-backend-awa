const jwt = require('jsonwebtoken');
const controller = {};
const testUser = { email: 'tecsup@gmail.com', password: '123456' };
const JWT_SECRET = 'tecsup2021';

controller.auth = async (req, res) => {
    const user = req.body;
    // console.log(user);
    const { email:testEmail, password:testPassword } = testUser;

    // console.log(user);
    if (!user) {
        console.log('ERROR');
        res.status(403).send({
            errorMessage: 'Please provide email and password'
        });
    }

    console.log(testEmail === user.email,testPassword == user.password);
    if (testEmail === user.email && testPassword == user.password) {
        const token = jwt.sign(user, JWT_SECRET);
        res.status(200).send({
            signed_user: user,
            token: token
        });
    }
    res.status(403).send({
        errorMessage: 'Authorisation required!'
    });

}

module.exports = controller;