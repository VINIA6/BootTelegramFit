const TelegramBot = require("node-telegram-bot-api")
const dialogflow = require("./dialogflow")
const youtube = require("./youtube")
require('dotenv').config()

const dialogtoken = process.env.DIALOG_TOKEN


try {
    
    const bot = new TelegramBot(dialogtoken, { polling: true })

    bot.on('message', async function (msg) {

        const chatId = msg.chat.id

        const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text)

        let responseText = dfResponse.text

        if (dfResponse.intent === "Treino especifico") {
            responseText = await youtube.searchYoutube(responseText, dfResponse.fields.Corpo.stringValue)
        }

        bot.sendMessage(chatId, responseText)
    })

    console.log('Conectado ao Telegram ...')

} catch (error) {
    console.log('Erro na conexão com o telegram ... ')
}