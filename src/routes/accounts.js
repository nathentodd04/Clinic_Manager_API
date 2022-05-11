const { Router } = require("express")
const account = require("../models/account");
const router = Router();

router.get("/", async (req, res) => {
    res.json(await account.find());
})

router.post("/", async (req, res) => {
    res.json(await account.create(req.body));
})

router.delete("/delete/:id", async (req, res) => {
    await account.deleteOne({ _id: req.params.id });
    res.end();
})

router.put("/update/:id", async (req, res) => {
    res.json(
        await account.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        })
    )
})

module.exports = router;