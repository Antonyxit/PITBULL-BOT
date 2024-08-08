const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join` `;
  const oi = `${pesan}`;
  let teks = `╭┄〔 𝑵𝑨𝑻𝑰 𝑭𝑨𝑻𝑰 𝑩𝒐𝒕 〕┄⊱\n┆\n┆ 𝑴𝒊𝒆𝒎𝒃𝒓𝒐𝒔 𝒆𝒏 𝑬𝒍 𝑮𝒓𝒖𝒑𝒐 : ${participants.length} ${oi}\n┆\n┆ 𝙀𝙞 𝙩𝙚 𝙝𝙖𝙗𝙡𝙖𝙣 𝙦𝙪𝙚 𝙚𝙨𝙥𝙚𝙧𝙖𝙨 𝙚𝙡 𝙪𝙣𝙞𝙘𝙤 𝙗𝙤𝙩 𝙖𝙦𝙪𝙞 𝙨𝙤𝙮 𝙮𝙤!!!\n┆\n`;
  for (const mem of participants) {
    teks += `┆💋  @${mem.id.split('@')[0]}\n`;
  }
  teks += `└𝑵𝑨𝑻𝑰 𝑭𝑨𝑻𝑰 𝑩𝒐𝒕\n\n`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;
