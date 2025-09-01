import genCon from "../../ai.service.js";

export const generateCon =  async (req, res) => {
    const code = req.body.code;

    if (!code){
        return res.status(400).send("Prompt is required")
    }

    const response = await genCon(code)

    res.send(response)
} 