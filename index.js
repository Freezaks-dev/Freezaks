const Discord = require("discord.js")process.env.TOKEN
const client = new Discord.Client()
const webhook = new Discord.WebhookClient("695922018683715664", "dDBPW4kQYiA0e_SOv0Tmm_AcAXySiTsNF7wXQu1o3HNp1e1lDHr0BzWi01LZ_F9PT61Y")

const prefix = ('!')

//instannce
client.on("ready", function() {
client.user.setActivity('Freezaks dev', { type: 'WATCHING' }).catch(console.erreur)
 	 console.log("Je suis connectée")
})

client.on('message', message => {
   if (message.content.startsWith(prefix + 'help')) {
   	let Embed = new Discord.MessageEmbed()
    .setColor("#ff6666")
    .setDescription ("DESCRPTION")
   	.addField("première ligne", "deuxième ligne") 
    .addField("troisième ligne", "quatrièmeligne") 
    .setFooter("Footer")
       message.channel.send(Embed)
       console.log("!help")
    }
    
  if (message.content === "!server") {
    	let server_name = message.guild.name  
        let server_size = message.guild.members.size;
        message.channel.send("server : " + server_name + "\nPersonnes : " + server_size)
        webhook.send ("je suis un webhook !")
    }
})

client.login(process.env.TOKEN) 
