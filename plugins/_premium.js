let handler = m => m

handler.before = async function (m) {
    let user = db.data.users[m.sender]
    if (m.chat.endsWith('broadcast')) return
    if (user.premiumTime != 0 && user.premium) {
        if (new Date() * 1 >= user.premiumTime) {
            await m.reply(`Waktu Kamu Jadi Istri Pangeran Sudah Habis!`)
            user.premiumTime = 0
            user.premium = false
        }
    }
}

module.exports = handler
