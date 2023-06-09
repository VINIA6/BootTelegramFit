const dialogflow = require("dialogflow")
const configs = require("./vinia6fitbot-rotd-2135c4eddf16.json")

const sessionClient = new dialogflow.SessionsClient({
    projectId: configs.project_id,

    credentials: {
        private_key: configs.private_key,
        client_email: configs.client_email
    }
})


async function sendMessage(id, message) {
    
    const sessionPath = sessionClient.sessionPath(configs.project_id, id)

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: 'pt-BR'
            }
        }
    }

    const responses = await sessionClient.detectIntent(request)

    const result = responses[0].queryResult
    
    return {
        text: result.fulfillmentText,
        intent: result.intent.displayName,
        fields: result.parameters.fields
    }
}

module.exports.sendMessage = sendMessage