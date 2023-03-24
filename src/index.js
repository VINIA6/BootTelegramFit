const TelegramBot = require("node-telegram-bot-api")
const dialogflow = require("./dialogflow")
const youtube = require("./youtube")
require('dotenv').config()

const dialogtoken = process.env.DIALOG_TOKEN


try {
    // O polling serve para sempre ficar  pingando no 
    // servidor do telegram e conseguir receber e tranferir informações
    // Podemos fazer esse tipo de ping por meio do webHook
    const bot = new TelegramBot(dialogtoken, { polling: true })

    bot.on('message', async function (msg) {
        const chatId = msg.chat.id
        console.log(msg.text)

        const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text)

        let responseText = dfResponse.text;

        if (dfResponse === "Treino especifico") {

            responseText = await youtube.searchYoutube(responseText, dfResponse.fileds.corpo.stringValue)
        }

        bot.sendMessage(chatId, responseText)
    })

    console.log('Conectado ao Telegram ...')

} catch (error) {
    console.log('Erro na conexão com o telegram ... ')
}