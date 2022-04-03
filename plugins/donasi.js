let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `

┌〔 Donasi • Emoney 〕
├ *Pulsa* : 0878-3214-7584
├ *OVO* : 0878-3214-7584
├ *Dana* : 0878-3214-7584
├ *Gopay* : 0878-3214-7584
└〔 ${namabot} 〕
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
