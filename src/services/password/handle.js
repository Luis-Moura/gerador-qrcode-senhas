import permittedCharacters from "./utils/permitted-characters.js";

async function handlePassword (choose) {
    let character = []
    let password = ''

    const passwordLength = parseInt(choose.lengthPassword)
    character = await permittedCharacters(choose)

    for (let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * character.length)
        password += character[index]
    }

    return (password)
}

export default handlePassword
