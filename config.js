//#ENJOY
/**

██████╗  █████╗ ██████╗ ██╗  ██╗     ██╗      ██████╗ ██╗   ██╗███████╗
██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝     ██║     ██╔═══██╗██║   ██║██╔════╝
██║  ██║███████║██████╔╝█████╔╝█████╗██║     ██║   ██║██║   ██║█████╗  
██║  ██║██╔══██║██╔══██╗██╔═██╗╚════╝██║     ██║   ██║╚██╗ ██╔╝██╔══╝  
██████╔╝██║  ██║██║  ██║██║  ██╗     ███████╗╚██████╔╝ ╚████╔╝ ███████╗
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝     ╚══════╝ ╚═════╝   ╚═══╝  ╚══════╝
                                                                       

                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ayodejifamily299@gmail.com";
global.location = "Lagos,Awoyaya.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "2348139598985@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Accra";
global.github = process.env.GITHUB || "https://github.com/ayodejibot/Dark-Love-MD.git";
global.gurl = process.env.GURL || "https://whatsapp.com/L6dT7pVhXYG9hvh3aneai2";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaWrCuH35fLuVP2iCc2R";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "2348122441244";
global.sudo = process.env.SUDO || "2348139598985,2348139598985";
global.owner = process.env.OWNER_NUMBER || "2348139598985";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "255714595078";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";
global.anti_delete = process.env.Anti_Delete || "true";

global.api_smd = "https://github.com/ayodejibot/SESSION-GENERATOR.Onrender.git";
global.scan = ""

global.SESSION_ID =
  process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0RxTXBTdGJpVmlzMFFwYVBJdVg4TUNWNlZUQ21TcnFaeVZUR25BVEpuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU9NYURkU2lYS2MzYyt0Z0tGN3lIU2hoSlUzS3R1OTRBZEFobjF4dkNpaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTWpxZjdLRksvOG9RdDFScXBTdEM1ZVVzSiswRkRVeWh2WTJvTk9aeFU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOL2RQRVlvS1dMck1LRmk1T2ZBVVcvVnNxNzBLdzdsTnV0TWI4U0RtZFhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhOYVl0LzZUVFhWNmh0TUN1MGllN0dUbkhCeDVNcnhIK3AwZ0hkS3V3azg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBnQ09Pa0R0RXM2QkZiVjkzZkphbzZETWpHOFBsK1QyYkZJaDVrMVBYbFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0w5YTZSNjZmQmN0MDhxcEE0MzN0MCt4NDZ3bDJ0cnBVK0RoY3F5YnRsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkp0d2ZsdkxmalVIbmN1RkVVWm1rSWpJemhDQ3hqSm5yV1ZxZktIc3YxRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE1MTlZb2dUN3h6WmxkeldycEVTTHM1aWNQc25ZRU1va3IxVzA1dW5ZdDRLR0Zxc2huMEJHMlEvUXB2eFZ3ZXVaM0l0RmFmMjFoODRaQVd3cXBpaGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiJuc01sY2ZoMlJqeVVwa0FPaVFqWndzaFFydk8rWU9EK2J3elBucWZkUW1zPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGV01QX3o5RFJsaXQ3Rnl0aFJrUjRnIiwicGhvbmVJZCI6ImI0OWFkZjRkLWFkZjAtNGIwNC04MjNiLTA5NTE4NTE3MDliZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQVMrT0dhbjMyem9oWU1WcWphNjZ0ZnFDZnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUVIa3lTLzByK0FNT0IxY3dDZ1BjazkzY3BRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjcyRFRDNlYyIiwibWUiOnsiaWQiOiIyMzQ4MTM5NTk4OTg1OjM0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfmIjvvKPvvZI3ICDwn4Wi8J+FpPCfhZ/wn4Wh8J+FlPCfhZzwn4WUIPCfmIgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0k2dDFENFFxUExndGdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVXOUxzbXlGTE1mMlhBSTZOd0l1TEpraXBldTIwdFhYMWQ0dVNmVktKU2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ijh4dEp6S0x2bHdmWXk0QjhURnNxOCswMHJiaktpMjdHckR2NGVIdkdIWHM2TzhtYXJlUXdVYk1OSWx5UGhlWXlFU082ZjlCQzl3YkhzNDRrWGNkTkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrc0I4S2pSNVIzbUd2Z21DU1gvNlpMdS9ZZmFtNmh1QlMrK2YzWjBzdTV3dkUvNmFSamdKaEh3aFFJYlZMakIrOXhYZnpTWnluTzhiVksxMDR0aUVpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzk1OTg5ODU6MzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGx2UzdKc2hTekg5bHdDT2pjQ0xpeVpJcVhydHRMVjE5WGVMa24xU2lVbyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTQ0NjQ1MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJcWEifQ=="
  "Put your session id here 😀"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-DARK-LOVE-𝐌𝐃-𝐕1😈",
  author: process.env.PACK_AUTHER || "DARK",
  packname: process.env.PACK_NAME || "👾",
  botname: process.env.BOT_NAME || "DARK-LOVE-𝐌𝐃-𝐕1",
  ownername: process.env.OWNER_NAME || "Cr7 supreme",
  errorChat: process.env.ERROR_CHAT || "2348139598985",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
