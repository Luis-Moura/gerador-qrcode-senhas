import chalk from "chalk";

const promptPassword = [
    {
        name: 'uppercase',
        description: chalk.yellow.bold('Você deseja senha (1 - com letras maiusculas || 2 - sem letras maiusculas)'),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold('Por favor, insira 1 ou 2'),
        require: true,
    },
    {
        name: 'lowercase',
        description: chalk.yellow.bold('Você deseja senha (1 - com letras minusculas || 2 - sem letras minusculas)'),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold('Por favor, insira 1 ou 2'),
        require: true,
    },
    {
        name: 'specialChar',
        description: chalk.yellow.bold('Você deseja senha (1 - com caracteres especiais || 2 - sem letras caracteres especiais)'),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold('Por favor, insira 1 ou 2'),
        require: true,
    },
    {
        name: 'numbers',
        description: chalk.yellow.bold('Você deseja senha (1 - com numeros || 2 - sem numeros)'),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold('Por favor, insira 1 ou 2'),
        require: true,
    },
    {
        name: 'lengthPassword',
        description: chalk.yellow.bold('Digite a quantidade de caracteres que você deseja que sua senha tenha'),
        pattern: /^[0-9]+$/,
        message: chalk.red.bold('Por favor, insira apenas números'),
        require: true,
    },
]

export default promptPassword
