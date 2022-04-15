// Thanks to Bochilgaming
const axios = require('axios')
const cheerio = require('cheerio')
const { igstalk } = require('./lib/scrape')

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args || !args[8]) throw `Gunakan format ${usedPrefix}${command} [username]
Contoh: ${usedPrefix}${command} pangerann21_
`.trim()
  let res = await igstalk(args[8])
  let json = JSON.parse(JSON.stringify(res))
  let iggs = `
• *Username:* ${json.username}
• *Nickname:* ${json.fullName}
• *Followers:* ${json.followersM}
• *Following:* ${json.followingM}
• *Posting:* ${json.postsCountM}
• *Bio:* ${json.bio}
• *Link:* https://instagram.com/${json.username}
`.trim()
  conn.sendFile(m.chat, json.profilePicHD, 'eror.jpg', iggs, m)
}
handler.help = ['igstalk <username>']
handler.tags = ['downloader']
handler.command = /^(igstalk)$/i
handler.premium = true
handler.limit = true

module.exports = handler
