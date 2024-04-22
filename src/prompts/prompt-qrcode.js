import chalk from "chalk";

const promptQrcode = [
    {
        name: 'link',
        description: chalk.yellow.bold('Digite o link que deseja gerar o QrCode')
    },
    {
        name: 'type',
        description: chalk.yellow.bold('Você deseja gerar (1 - QRcode normal || 2 - Terminal'),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold('Escolha apenas entre 1 e 2'),
        require: true,
    },
]

export default promptQrcode
