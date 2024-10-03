//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Yaounde, Cameroon";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "237621604697";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUw2MU94VWxheGhVRFQ1c05qTWtER2o4MmtwS2ZTbHlHQTlaL0t4UU1YWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXBScTRWSExtemF0Zk52VXQ5dEZCWXpNRmRZd21kZXlEY3RXS3pIZjRETT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSjlSQkJGS3pXdWl1WHYzWFl5eiszbWZUb2RKZmoxN0JEdFExVDZpTkdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2a3hOTlVQeXVoQnpDeFFBVFpwZFlQV2pDdFl5YVBDbWRVcGpyQkhEcFNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndFQzdDNWdBc2g1MlI2b2VoUDNIYWpPZ3BxNkZoc1JFMWlOSHdHOVNWWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZQT3ljNG9xWGpJbkUxNnc0SlZwc3FTZWQyNWNGcDJibnFiSnZkd2c4MHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9UUWF3TjNuN0ZYekRYeFNVVmc3bU1VWlh2OVdTNFFxNFVwekhxWklXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHhoT1haM2d1amlEeEZJb3BsVC9laktCTVlwckNBa1FINlgrTFdTQXdScz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcyMW0vMkRKV1l6dlhqK2hDQ1oxMnFHK1BzcVNZZGczYlBraUF3Vi9LRmNRKzdpY3F4SktZaUttYTZqRlh5cDk5MTdiVUZEWDZzVUNmZTFhTSttSWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM5LCJhZHZTZWNyZXRLZXkiOiIyYno0bElhcU5Rc0tJODNWTkU5T1lSSGJ0Nlg4SHk1OURUNE93emx4U1RNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNzYyMTYwNDY5N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzMTk2OTJCMkI1QTcwRDhBQjMxQUE4NDUxREEzMUUwRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3OTkxMzkwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4TnBITVZ2R1MwV0tmTU0yQk1tOXlnIiwicGhvbmVJZCI6IjU5NTVlYTc5LWNjNjAtNDVhNi1iNTViLTM1NTk3M2EyMmNlYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHR2lWeG1kTUhKK0pWNHRwcVZKRlpMVXBVOGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3N6cXN0ZldnMlovRHM1ZFpPVDVIeTk5K2E0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZMVFBWWkY2IiwibWUiOnsiaWQiOiIyMzc2MjE2MDQ2OTc6NTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQnJpbmRpIENyYW0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B5MzFmd0NFTW1jL0xjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNQOUFKM3dLd2xnVzlwUlNjOUJId2d2Q05Od09LdFdtRjMvQkdsUmFObFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImE2RWp6Vm5FK0I2TnVDeEY2K0FyblFBbVBHeWJ0YWo0bWgyZGhvM04xZUhpQjdOVUR6TnI0NE5SNUdnRjdjMXdpaDZqb0gzb2FEbW5PekcwaGpDekRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0eUU0VEduUWYzMHcwMytFOHEvZG1qZGNNbkgrcUlVN3F1NGlVSTFxSlhLN2Jja3NxVzUrRTVLVklRUDhoRjc3NS9jSlQ0OW1YTFRja2NsUEhubnNnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzYyMTYwNDY5Nzo1N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiRC9RQ2Q4Q3NKWUZ2YVVVblBRUjhJTHdqVGNEaXJWcGhkL3dScFVXalpVIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3OTkxMzg1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUprSSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "Brindi cram",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Brindi cram",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
