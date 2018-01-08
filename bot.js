const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',() => {
	//Edit after game so u can add wut game bot is playing between "" xd
	   client.user.setPresence({game: {name: "with Sel | a!help", type: 0}});
});

var prefix = "a!"
var randomVideo = [
"https://www.youtube.com/watch?v=hjwQZJKWLLs",
"https://www.youtube.com/watch?v=mf7w6NXaZNw",
"https://www.youtube.com/watch?v=ntRziY0j-ys",
"https://www.youtube.com/watch?v=vBN-TuXn5Iw",
"https://www.youtube.com/watch?v=vF6SevrW_dU",
"https://www.youtube.com/watch?v=FOVP51OCdd0",
"https://www.youtube.com/watch?v=GxCE_DFTAHc&list=PLu5RkmTClSDmpkUQ5-RdEYZxjP3KQT8VZ",
"https://www.youtube.com/watch?v=GVNk2uThkT8&list=PLu5RkmTClSDlpeQijJHObJFuB161PzJKU",
"https://www.youtube.com/watch?v=xPALB43arI8&list=PLu5RkmTClSDkxto7hsAGasmAki1PRH3KR",
"https://www.youtube.com/watch?v=bIdskw9pKM8",
"https://www.youtube.com/watch?v=zhnZbsmF06s",
"https://www.youtube.com/watch?v=j1MHz_X9Uxs",
"https://www.youtube.com/watch?v=B2YqV_K1E40",
"https://www.youtube.com/watch?v=3Oqdkrx97Fs",
"https://www.youtube.com/watch?v=rLEkkm1WQ3M"
]
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
	
		 message.channel.send(message.author.toString() + `, need some help? :thinking: \n **-a!channel**\n **-a!randomvideo**\n **-a!server**\n **-a!ping**`);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'channel')) {
	const embed = new Discord.RichEmbed()
  .setTitle("Roaring Arcanine")
  .setAuthor("Selobgo", "https://cdn.discordapp.com/avatars/178135668755660800/983c6252aabb009d8b7507e8f1e14185.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0xFFA500)
  .setDescription("Hello everyone! Roaring Arcanine here. I am mainly a let's play Pokemon channel. I'm pretty chill and always up for challenges.")
  .setThumbnail("https://cdn.discordapp.com/attachments/361503144615870464/365396318459396098/LYLw4kBe.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://www.youtube.com/channel/UC-lJne5adEP6NNnV8zF4ycg")
  

  message.channel.send({embed});
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'randomvideo')) {
	var selectVideo = randomVideo[Math.floor(Math.random() * randomVideo.length)];
		const embed = new Discord.RichEmbed()
  .setTitle("> Click for a random video <")
  .setAuthor("Selobgo", "https://cdn.discordapp.com/avatars/178135668755660800/983c6252aabb009d8b7507e8f1e14185.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0xFFA500)
  
  .setThumbnail("https://cdn.discordapp.com/attachments/361503144615870464/365396318459396098/LYLw4kBe.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL(selectVideo)
  

  message.channel.send({embed});
		
		 
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'server')) {
	var selectVideo = randomVideo[Math.floor(Math.random() * randomVideo.length)];
		const embed = new Discord.RichEmbed()
  .setTitle("> Click to join the server <")
  .setAuthor("Selobgo", "https://cdn.discordapp.com/avatars/178135668755660800/983c6252aabb009d8b7507e8f1e14185.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0xFFA500)
  
  .setThumbnail("https://cdn.discordapp.com/attachments/361503144615870464/365396318459396098/LYLw4kBe.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.gg/uTx7fjR")
  

  message.channel.send({embed});
		
		 
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'invite')) {
	var selectVideo = randomVideo[Math.floor(Math.random() * randomVideo.length)];
		const embed = new Discord.RichEmbed()
  .setTitle("> Click to invite me to your server <")
  .setAuthor("Selobgo", "https://cdn.discordapp.com/avatars/178135668755660800/983c6252aabb009d8b7507e8f1e14185.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0xFFA500)
  
  .setThumbnail("https://cdn.discordapp.com/attachments/361503144615870464/365396318459396098/LYLw4kBe.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discordapp.com/oauth2/authorize?client_id=399337992994553857&scope=bot&permissions=1")
  

  message.channel.send({embed});
		
		 
	}
});
client.users.get("304357538101723137").on('message', message => {
	if (message.author === client.user) {
	var messagexd = (message.content)
		 message.channel.send(messagexd);
	}
});
//Important
client.login(process.env.BOT_TOKEN);

