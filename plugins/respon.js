let handler  = async (m, { conn, args }) => {
  let pp = `https://telegra.ph/file/072d19c7179ae3e7a958f.jpg`
  let teks = `jika kalian ingin mendapatkan uang instan kalian bisa ikut judi dengan taruhan yang bisa kalian pilih minimal 5000.

aturan:kalian harus pilih angka antara 1 sampai 100 jika kalian memilih angka 70 dan rate yang di berikan bot nya adalah 61 sampai 79 kalian menang inti nya kalian milih angka trus rate nya mendekati angka kalian, kalian lah yang menang.`.trim()

    //conn.sendFile(m.chat, pp, 'pp.png', teks, m)
    conn.sendButton(m.chat, teks, wm, pp, [[`RATE!!`, `.rate`]], m)
 } 

 handler.tags = ['info']
handler.customPrefix = /^(r)$/i
handler.command = new RegExp

handler.limit = true

module.exports = handler