import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝑲𝒂𝒕𝒕𝒚 𝑩𝒐𝒕', body: '𝑲𝒂𝒕𝒕𝒚 𝑩𝒐𝒕', sourceUrl: `https://www.facebook.com/profile.php?id=61557150088893&mibextid=ZbWKwL`, thumbnail: imagen2}}})}
    
return !0 }
export default handler
