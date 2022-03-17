let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6285828764046
│┝‷✧ *Dana:* 6285828764046
│┝‷✧ *Gopay:* 6285828764046
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6285828764046?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
