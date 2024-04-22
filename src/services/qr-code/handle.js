import qr from 'qrcode-terminal'
import chalk from "chalk";

async function handleQrcode (error, choose) {
    if(error){
        console.log(chalk.red('Error on application'))
    }
    
    const isSmall = choose.type == 2 // verifica se quer o qr code em terminal ou não

    qr.generate(choose.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green('QR CODE gerado com sucesso!\n'))
        console.log(qrcode)
    })
}

export default handleQrcode 
