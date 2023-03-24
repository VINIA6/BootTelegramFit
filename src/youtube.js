const YouTube = require("youtube-node")
require('dotenv').config()
const youtubeKey =  process.env.YOUTUBE_TOKEN

const youTube = new YouTube()
youTube.setKey(youtubeKey)

function searchYoutube(message,queryText) {
    
    return new Promise((resolve, reject)=>{

        youTube.search(`Exercício ${queryText}`, 2, (error, result) => {
            
            if (!error) {
                const videoIds = result.items.map((item)=>item.id.videoId).filter(item=>item)

                const youtubeLinks = videoIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`)
            
                resolve(`${message} ${youtubeLinks.join(`, `)}`)
            }
            else {
                reject('Deu erro')
            }
            })
    })
}

module.exports.searchYoutube = searchYoutube
