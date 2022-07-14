const si = require('systeminformation')
const os = require('os')

let handler = async (m, { conn, args, text, usedPrefix }) => {
let OsInfo = await si.osInfo()
let System = await si.system()
let Cpu = await si.cpu()
let Mem = await si.mem()

let {platform,distro,release,codename,kernel,arch,hostname,fqdn,codepage,logofile} = OsInfo
let { manufacturer,brand,vendor,family,model,stepping,revision,voltage,speed,speedMin,speedMax,governor,cores,physicalCores,processors} = Cpu
let { total,free,used,active,available,buffers,cached,slab,buffcache} = Mem
let me = conn.user.name
let teks =`*System Information ${me}*`
 teks +=`

Uptime : ${kyun(os.uptime())}

*OS INFO*
Platform: ${platform}
Distro: ${distro}
Release: ${release}
Codename: ${codename}
Kernel: ${kernel}
Arch: ${arch}
Hostname: ${hostname}
Codepage: ${codepage}

*CPU INFO*
Manufacturer: ${manufacturer}
Brand: ${brand}
Vendor: ${vendor}
Family: ${family}
Model: ${model}
Speed: ${speed} Ghz
Governor: ${governor}
Cores: ${cores}
PhysicalCores: ${physicalCores}
Processors: ${processors}

*MEMORY INFO*
Memory : ${FileSize(used)}/${FileSize(total)} 
Free : ${FileSize(free)}
Cached: ${FileSize(cached)}
`
conn.reply(m.chat, teks, m)
}

handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(infobot)$/i

handler.limit = true

module.exports = handler

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

const FileSize = (number) => {
    var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}