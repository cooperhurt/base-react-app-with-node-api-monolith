import express from "express";

const router = express.Router();

// This is recommended to
router.route("/").get(async (req, res) => {
    return res.status(200).json({ message: "Default api endpoint" });
});

export default router;
