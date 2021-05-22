const faturaModel = require('../models/faturaModel.js');

exports.getFaturas = (req, res) => {

    faturaModel.getFaturas(function (err, result) {

        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (result) {
            res.status(200).send({ faturas: result});
            return;
        }

    });

} //getFaturas