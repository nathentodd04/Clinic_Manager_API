const { Router } = require("express")
const patient = require("../models/patient");
const router = Router();

router.get("/", async (req, res) => {
    res.json(await patient.find());
})

router.post("/", async (req, res) => {
    res.json(await patient.create(req.body));
})

router.delete("/delete/:id", async (req, res) => {
    await patient.deleteOne({ _id: req.params.id });
    res.end();
})

router.put("/update/:id", async (req, res) => {
    res.json(
        await patient.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        })
    )
})

module.exports = router;