let handler  = async (m, { conn, args }) => {
  let pp = `https://telegra.ph/file/ac170a69f962e468e7304.jpg`
  
  let teks = `*NANI??*`.trim()
    //conn.sendFile(m.chat, pp, 'pp.png', teks, m)
    conn.sendButton(m.chat, teks, wm, pp, [[`INFOBOT`, `.infobot`]], m)
 } 

 handler.tags = ['info']
handler.customPrefix = /^(bot)$/i
handler.command = new RegExp

handler.limit = true

module.exports = handler