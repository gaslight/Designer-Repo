const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {

    console.log("Connected as " + client.user.tag)
    console.log("Servers: ")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // List all channels
      guild.channels.forEach((channel) => {
          console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
      })
    })

})


client.on('message', (recievedMessage) => {
  // Prevent Bot from responding to itself.
  if (recievedMessage.author ==client.user) {
    return
  }
  // Prime bot to recieve commands.
  if (recievedMessage.content.startsWith("!")){
    processCommand(recievedMessage)
  }
})

function processCommand(recievedMessage) {
  // Remove leading exclamation mark.
  let fullCommand = recievedMessage.content.substr(1)
  // Split message up into pieces for each space.
  let splitCommand = fullCommand.split(" ")
  // The first word directly after the exclamation is the command
  let primaryCommand = splitCommand[0]
  // All other words are arguments/parameters/options for the command.
  let arguments = splitCommand.slice(1)

  console.log("Command Recieved" + primaryCommand)
  console.log("Arguments: " + arguments)

  if(primaryCommand== "help") {
    helpCommand(arguments, recievedMessage)
  } else if (primaryCommand == "GDR"){
    GDRCommand(arguments, recievedMessage)
  } else {
    recievedMessage.channel.send("I dont understand the command. Try `!help`.")
  }

  function helpCommand(arguments, recievedMessage) {
    if (arguments.length > 0){
      recievedMessage.channel.send("Request for help about " + arguments + ".")
    } else {
      recievedMessage.channel.send("I'm not sure what you need help with. try `!help [topic]`.")
    }
  }

  function GDRCommand(arguments, recievedMessage){
    recievedMessage.channel.send("Sent link to Design Repo.")
  }
}



// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "NTQzMTAwMjI4NTU5OTYyMTEy.Dz3pDg.Di91ZIZTQefXA0q6WjxUaPbsdQo"

client.login(bot_secret_token)
