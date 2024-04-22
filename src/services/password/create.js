import chalk from "chalk";
import handlePassword from "./handle.js";
import promptPassword from "../../prompts/prompt-password.js";
import prompt from "prompt";

async function createPassword () {
    
    prompt.get (promptPassword, async (error, choose) => {
        if (error){
            console.log(error)
        }
        
        const password = await handlePassword(choose);

        console.log(chalk.green('\nSenha gerada com sucesso\n'));
        console.log('Senha → ', chalk.green.bold(password));
    })

    prompt.start()
}

export default createPassword
