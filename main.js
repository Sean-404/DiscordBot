const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', async () => {
        console.log('Hallo!');
});

client.on('message', async (message) => {

        if(message.author.bot) return;
        const args = message.content.trim().split(/ +/g);

        if((args[0].toLowerCase() == 'i\'m' || args[0].toLowerCase() == 'im')){
                message.channel.send(`Hi ${args.slice(1).join(' ')}, I'm Kieran`);
        }

        if((args[0].toLowerCase() == 'kieran!')){
                message.channel.send('Hallo!');
        }

        var gymMessages = ["Not today thank you", "It's a bit early", "*zzzzzz*", "Nah I'm just gonna chill today", "No I don't think I will"];

        var gymRandomMessage = gymMessages[Math.floor(Math.random() * gymMessages.length)];
        if((args[0].toLowerCase() == 'gym')){
                message.channel.send(gymRandomMessage);
        }
});

client.login('ODM0OTAzMzI1MzI5MzI2MTEx.YIHqUA.p7sE8F3s6Dfl6_QzQfcPcYLbiWM');

