// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messageContent = [
  `Your message was in alphabetical order congrats! You said: \n**${context.params.event.content}**`
];

function isAlpha(sentence) {
  string = String(sentence);
  string = string.toLowerCase();
  if (string == "") {
    return false; 
  }
  var words = string.trim().split(" "); 
  var bool = true;
  if (words.length == 1) {
    words = string.trim().split("");
    if (words.length == 1) {
      return false;
      }
    for (i = 0; i < words.length-1; i++) {
      if (words[i] > words[i+1]) {
        bool = false;
      }
    }
    
  }
  for (i = 0; i < words.length-1; i++) {
    if (words[i] > words[i+1]) {
      bool = false;
    }
  }
 return bool
}


if (isAlpha(context.params.event.content)) {
 await lib.discord.channels['@0.0.6'].messages.create({
   channel_id: context.params.event.channel_id,
   content: messageContent.join('\n'),
   message_reference: {
     message_id: context.params.event.id
   }
  });
}




