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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY052SDR2aHhWWjNKQ2ptWU56T2NDYlRCR1Z0cW5zRU5pV1hrR2hPaWhVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3plU1NjbDYydHlQV3FKUndTRjZlMHJhc3hkaHhPcE43SXFzUS9ORVRWMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQitNSjVIQy80WU9oSWR1N2lmQ3VyT2UzRVU5WlBnbmRtN01qejQxRjBrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOOWVnUW0xdzR6aStWTW5nVmw2Wk95cTl0a0dEWUNpM2tSWlo3eVlmK0hBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHbHU0b2RLMEpJN2Z2ZXBkaDQxRDJtRWt2d3RFZ1pRUzFvbk92SG55MFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVscGxVcnFBQXJ0Rk96SjlWNSthcHVQUk1RY0laUVNIbC9ZNWlYLy9iUVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUpwVTNZZWo1M1ppR2QwUG41dkRlMGR0aVdBV1E3a0FCVm5tTHJDSEJrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDU4WnZMQzZPdFBnZC9xL2R2dEphVkxIcWljOHpJTVp5c2JOUEt1S2VGQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY3ZEJZMzFWakw0WmRRVjVreDExYlZwNFFvZVN4QVVLWDNoTjdpYk1CQTQ2SkNlcVNOK3YvY2FyZGU5WUVtZjRhMlNYQzBaUHhwK3lSK1UxZDlJYmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6IlBFYkQ4OCszdFZDWEVRb0VFdGVKaEpEcUNaZ3pUek1iRW5OOXZhY3RzRXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InZ1ZFdsX09mUkEyQ1kycV9NLWF1N1EiLCJwaG9uZUlkIjoiMzJhNzNmZGYtYzdjOS00YzQ1LTg1ZGItYzUxNjEyMTU1ZWY3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVCalFoTTlYVG1EMVJXNGo4NXZ1K3FUM1plMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoWFJoeDBOWUp4anFqVjRCU1lETzJVbnQvK289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN0sxUjlOSjciLCJtZSI6eyJpZCI6IjIzNzYyMTYwNDY5Nzo0N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJCcmluZGkgQ3JhbSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUE8zMWZ3Q0VKbkkrTGNHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic1A5QUozd0t3bGdXOXBSU2M5Qkh3Z3ZDTk53T0t0V21GMy9CR2xSYU5sUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNUNWa3dHRzgvbUtnNEJGM1Q0NkV6Wk1aTU1MNUNrZHF6SkdTKzBoVm9obUJHL2g3QWowcGdWR3BwZm9QS3ZSdjhWb0lhUEJXWmd1VHZmSmx2WWJtQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IjM1RXRYdlFVeWxKN2NpLzNKTzNsaTQwNHZUSkJmZFh1aE05SDJLdGljWmw1L09HekxBYUlmUEFvYzRRVSs4R1hIdkpEQmcxa1pyWFl1MFpJQ0xNZ2l3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjIxNjA0Njk3OjQ3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJEL1FDZDhDc0pZRnZhVVVuUFFSOElMd2pUY0RpclZwaGQvd1JwVVdqWlUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc5MzE0MzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRzlYIn0="
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
