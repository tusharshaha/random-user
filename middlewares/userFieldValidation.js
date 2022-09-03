const filedValidation = (req, res, next) => {
    const { gender, name, contact, address, photoUrl } = req.body;
    if (!gender) {
        res.status(500).send({
            success: false,
            error: "Gender is required!"
        })
    } else if (!name) {
        res.status(500).send({
            success: false,
            error: "Name is required!"
        })
    } else if (!contact) {
        res.status(500).send({
            success: false,
            error: "Contact is required!"
        })
    } else if (!address) {
        res.status(500).send({
            success: false,
            error: "Address is required!"
        })
    } else if (!photoUrl) {
        res.status(500).send({
            success: false,
            error: "Photo URL is required!"
        })
    } else {
        next()
    }
}

module.exports = filedValidation;