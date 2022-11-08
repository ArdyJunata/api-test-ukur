const jwt = require("jsonwebtoken");

exports.verifyLogin = async (req, res, next) => {
    try {
        if (!req.headers['authorization']) {
            res.status(500).json({
                message: "unauthorized",
            });
            return;
        }

        const bearerToken = req.headers["authorization"].split(" ");

        if (bearerToken[0] !== "Bearer") {
            res.status(500).json({
                message: "invalid token",
            });
            return;
        }

        const token = bearerToken[1];

        req.data = (token => {
            jwt.verify(token, process.env.JWT_KEY);
        });

        next();
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}