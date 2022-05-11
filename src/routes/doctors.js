const { Router } = require("express")
const doctor = require("../models/doctor");
const router = Router();

router.get("/", async (req, res) => {
    res.json(await doctor.find());
})

router.post("/", async (req, res) => {
    res.json(await doctor.create(req.body));
})

router.delete("/delete/:id", async (req, res) => {
    await doctor.deleteOne({ _id: req.params.id });
    res.end();
})

router.put("/update/:id", async (req, res) => {
    res.json(
        await doctor.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        })
    )
})

module.exports = router;