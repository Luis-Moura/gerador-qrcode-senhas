import prompt from "prompt"
import promptQrcode from "../../prompts/prompt-qrcode.js"
import handleQrcode from "./handle.js";

async function createQrcode () {
    prompt.get(promptQrcode, handleQrcode)

    prompt.start()
}

export default createQrcode
