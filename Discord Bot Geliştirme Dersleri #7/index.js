//-Değişkenler-
const Discord = require("discord.js");
const chalk = require("chalk");
const Advanced = require('discordjs-advanced');
                         
const client = new Advanced.Client({
    token: "NzkwODUwMjM5Mzk3MzYzNzIy.X-Gmrg.qVjt0fOV_oFv3DiXtn9uZXFyeYc", 
    prefix: "/", 
    sahip: ["396697285322342414"], 
    komutDosya: "komutlar",
    veritabanı : {
       dosya:"database.json"
    },
    varsayılanKomutlar: ['yardım'],
    everyoneKapat: true
});  

client.eventYükle("olaylar");

client.kategoriYükle([ 
    ['eglence', 'Eglence Komutları'],
    ['moderasyon','Moderasyon Komutları'],
    ['kullanıcı','Kullanıcı komutları'] ,
    ['genel', 'Genel komutlar']
]);

//-Bot hazır mesajı-
var log =  chalk.red("BOT: Geliyom lan bekle")
var log01 = chalk.bold.yellow("CHİU: Lanlı Lunlu Konuşma Lan")
    

client.on("ready",() => {
 console.log(log)
 console.log(log01)
});

var prefix = "/";
client.on("message", message => {

if(message.content.toLowerCase() === prefix + "sa") {
	message.react(":regional_indicator_a:")
	setTimeout(function () {
           message.react(":regional_indicator_s:")
		},1 * 2000)
	message.channel.send("Aleyküm selam.").then(message => {
      message.react("😂")
	})
}

})

client.giris();




