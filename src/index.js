import prompt from "prompt"

import mainPrompt from "./prompts/prompt-main.js"
import createQrcode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";
import chalk from "chalk";

async function main () {
    prompt.get(mainPrompt, async (error, choose) => {
        if(error) {
            console.log(chalk.red(error))
        }
        else if (choose.select == 1) {
            await createQrcode()
        }
        else if (choose.select == 2) {
            await createPassword()
        }

        prompt.start()
    })
}

main()