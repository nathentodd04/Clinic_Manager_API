const { Router } = require("express")
const appointment = require("../models/appointment");
const router = Router();

router.get("/", async (req, res) => {
    res.json(await appointment.find());
})

router.post("/", async (req, res) => {
    res.json(await appointment.create(req.body));
})

router.delete("/delete/:id", async (req, res) => {
    await appointment.deleteOne({ _id: req.params.id });
    res.end();
})

router.put("/update/:id", async (req, res) => {
    res.json(
        await appointment.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        })
    )
})

module.exports = router;