import { ActivityType, Client, Events, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);

    setInterval(function(){
		let rand = Math.floor(Math.random() * 100);
		if(rand == 0) {
			c.user.setActivity({name: '1000-7?', type: ActivityType.Streaming, url: "https://www.twitch.tv/ja1zhf"});
		}else if(rand <= 75){
            c.user.setActivity({name: `🏓${Math.round(c.ws.ping)}ms`, type: ActivityType.Streaming, url: "https://www.twitch.tv/ja1zhf"});
		}else{
            c.user.setActivity({name: 'boyzfromthehood.xyz', type: ActivityType.Streaming, url: "https://www.twitch.tv/ja1zhf"});
		}
	}, 5000);
});

client.login(process.env.TOKEN);