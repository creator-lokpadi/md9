let handler = async m => m.reply(`
╭─「 Donasi • Pulsa/DANA 」
│ •  [0823-2172-0820]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler