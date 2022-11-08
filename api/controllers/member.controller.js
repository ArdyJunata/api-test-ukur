const { models } = require("../models")
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (username != "root" && password != "root") {
            throw res.json({ message: "incorect credentials" })
        }

        const token = jwt.sign(
            { username: username },
            process.env.JWT_KEY,
            { expiresIn: "1H" },
        )

        res.status(200).json({
            message: "login success",
            data: { token }
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

exports.createAllMembers = async (req, res) => {
    try {
        const sampleData = require("../../sample.json")
        let members = await models.Member.findAll();

        if (members.length <= 0) {
            const insert = sampleData
                .filter(v => v.details[0].balance < 10000)
                .map(v => {
                    return {
                        _id: v._id,
                        name: v.details[0].name,
                        balance: v.details[0].balance,
                        transportation: v.favoriteTransportation
                    }
                });
            await models.Member.bulkCreate(insert);

            members = await models.Member.findAll();
        }

        res.status(200).json({
            message: "success create and filtering member data",
            data: members,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}