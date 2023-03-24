
# Boot Fit Telegram 

## :thought_balloon: DESIGN CONCEPTS

<P>
Nos tempos atuais alinhar o bem estar físico com as ferramentas de pesquisa é fundamental para poder otimizar tempo. Desta forma o projeto tem como objetivo utilizar da API do telegram para criar cum chat boot fit. Nele podemos perguntar treinos e tipos de exercícios, que irá nos buscar um exemplo de treino, no Youtube. 
</p>

## :rocket: CHALLENGES

A construção em JS da comunicação entre todas as APIS, foi o maior desafio encontrado, saber lidar com a API do telegram, requisitar e encaminhar mensagens, fazer a disposição dos conteúdos das frases no dialog flow. Mas graças as API'S, que estão bem documentadas tive uma certa facilidade em entender e montar a lógica da construção. Abaixo temos a lógica de disponibilidade dos arquivos e como eles conversam, para que o chat boot funcione. 

<img src="https://github.com/VINIA6/BotTelgram/blob/master/img_readme/API%20DIALOG.png" width="400" height="200">

## :closed_lock_with_key: API'S

<p>
Nas plataformas disponibilizadas para manipulação de desenvolvedores, sempre necessita de token's e permissão de acessos em sua conta google, abaixo temos alguns links que vão ajudar a geração dos token's necessários e outras configurações a mais.
</p>

####  <a href="https://help.blip.ai/hc/pt-br/articles/4993476117399-Como-configurar-o-Dialogflow-como-seu-provedor-de-IA"> 1. Como configurar o Dialogflow como seu provedor de IA</a>

#### <a href="https://www.npmjs.com/package/node-telegram-bot-api"> 2. Telegram Boot API  </a>

#### <a href="https://developers.google.com/youtube/v3/quickstart/nodejs?hl=pt-br"> 3. Como configurar o Youtube API - Token</a>


## 📦 STACK

- NodeJS
- Google API consumption
    - API Youtube
    - API Dialog Flow

### Dependencies

<p>
Use npm as your default package manager

```
npm install
``` 
</p>


<br>

- Server/Backend
    - <img src="https://img.shields.io/badge/dialogflow-^1.2.0-green"/> 
    - <img src="https://img.shields.io/badge/dotenv-^16.0.3-green"/> 
    - <img src="https://img.shields.io/badge/node_telegram_bot_api-^0.61.0-green"/> 
    - <img src="https://img.shields.io/badge/youtube_node-^1.3.3-green"/> 
