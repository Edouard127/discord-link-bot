//////////////////////////////////////////////////////////////////////////////////////////
// 3LB
/////////////////////////////////////////////////////////////////////////////////////////
const Discord = require("./node_modules/discord.js");
const bot = new Discord.Client({autoReconnect: true, max_message_cache: 0});
const config = require("./conf.json");
const prefix = config.prefix;
/////////////////////////////////////////////////////////////////////////////////////////
var serverA_chan = bot.channels.get('423450642451922949'); // ChannelID on central chan
var serverB_chan = bot.channels.get('423450887986479107'); // ChannelID on central chan
var serverC_chan = bot.channels.get('423450986506485762'); // ChannelID on central chan
var botID = bot.users.get('423458755397681152'); // Bot ID
/////////////////////////////////////////////////////////////////////////////////////////

bot.on("ready", function() {
	bot.user.setStatus("online");
	console.log("---------------- 3LB ----------------");
});

/////////////////////////////////////////////////////////////////////////////////////////
// Link Code
/////////////////////////////////////////////////////////////////////////////////////////

bot.on('message', function(message) {
var serverA_chan = bot.channels.get('423450642451922949'); // Server_chanA ChannelID
var serverB_chan = bot.channels.get('423450887986479107'); // Server_chanB ChannelID
var serverC_chan = bot.channels.get('423450986506485762'); // Server_chanC ChannelID
var botID = bot.users.get('423458755397681152');

	if (message.channel === serverA_chan) {
	if (message.author === botID) return;
		serverB_chan.send(`**${message.author.username}** : ${message}`);
		serverC_chan.send(`**${message.author.username}** : ${message}`);
	}
	if (message.channel === serverB_chan) {
	if (message.author === botID) return;
		serverA_chan.send(`**${message.author.username}** : ${message}`);
		serverC_chan.send(`**${message.author.username}** : ${message}`);
	}
	if (message.channel === serverC_chan) {
	if (message.author === botID) return;
		serverA_chan.send(`**${message.author.username}** : ${message}`);
		serverB_chan.send(`**${message.author.username}** : ${message}`);
	}
});

/////////////////////////////////////////////////////////////////////////////////////////

bot.login(config.token)