const fs = Ft.fs
const tiktokmusic = require("../../Lib/scrape.js").tiktokmusic
const tiktok = require("../../Lib/scrape.js").tiktok

module.exports = {
name: ["tiktok", "tt"],
type: ["download"],
description: "download video from tiktok with url",
utilisation: userbot.prefix + "tiktok <link>",

async execute(m) {
let { args } = data
try {
if (!args[0]) return m.reply("please input url")
let ttdata = await tiktokmusic(`${[args[0]]}`)
let teks = `Nickname : ${ttdata.meta.author.nickname}\nDesc : ${ttdata.meta.desc}\nDuration : ${ttdata.meta.video.duration}\n\nPilih Type Dibawah Ini ${m.mention}`

conn.send2ButImg(m.chat, teks,await Ft.getBuffer(ttdata.meta.video.cover),userbot.packname,`MP4`, `tnowm ${[args[0]]}`, `MP3` , `tmusic ${[args[0]]}`, {quoted: m, contextInfo: {"mentionedJid": conn.parseMention(teks) }})
} catch (e) {
m.reply(Ft.util.format(e))
}
}
}
//BUTIMG ANJG JANGAN BUTTON IMG ITU EROR
