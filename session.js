//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU5Cblk5R2VYajlyNFpaYlVoR1JQTG1QU0pWemhzVlFTcDZyVnljVWVWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2RGcjN1MmgreHh1VUtiNWhpWEZHVkxzZm9mZksxMjgyNkFDeGEzUThBZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRFZFUDBOOUc2UmR5WUx2U0tsUVNiNlFpcFlVMHFUZHB5MVNkTTBJNEd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwTlFmNnVDdjJ5SVhTSjRpMHN0K3lydGZjRFlGL2NoOG1nYWFwLzFzd2gwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJGRGk5QTByRWR4ZnhJQXNGVkVzUG1WMFd5YmF2WThtZGlFVnE3di9DR2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJodE5MYWtoVk91M3BRaXlscjV3TkFPUDRBRHoyaXE0QW1wL2NPU2d1aTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOENhNk44TXN5blV1OEdtZGFZdjQwQitobW9Sb3lzZm16azMzWHJIR0lYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkhxTDFZYkswZm8xQXlhbUpBY3VGY2U4QTVxb1VPMURqSkE3MExOMVl5cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI5NmxobnF5MEZlaU9DMmlxQ0pEZHZXS1o0UjNlS1BidFhpOUtDRVlUZm9iY0lNZTNBNXF3Y2VlUlRzeXQ1Q3R1TlF2QlBkSUlDSkVxVVJlVUZ6bmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI2LCJhZHZTZWNyZXRLZXkiOiJRUjJRU241RFFsWStLREFhUkV0ZWFYM09QVG8rTEV1cUF0TS8xK2ErTGxZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2LTl0OXdSNFRwYUlNRHM5djlRWkR3IiwicGhvbmVJZCI6IjI2ODFiMzZjLWVkM2EtNGI4NS1hNzM5LThjNTU5N2EyZDVjNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJER2VYRTNPUXQ5Yk44M3oyWnNOeHJySGpHd1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjZJSU9YMkhnUHA0d3ZKeGJKcGh1QmtKT0hRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZLTDI4TUg4IiwibWUiOnsiaWQiOiI5NDc1MzQwMDUzNjo2MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE1ODY2MTA0MTIyOTg1OTo2MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lEc3ZKZ0hFSmFMdnNJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijc1bkRlUGUzdmRTS1pBWU04OWxWYm1LMXMxWG44UUFGZVFSZFRMbjZwQk09IiwiYWNjb3VudFNpZ25hdHVyZSI6IjhNUERUSFY4cDF3empYZURGQ1dwQ0plWExKTE92TmswWjJXUE9FVE1vcmVLelVNRG9EellkS0N5TWVxcHFoMThacDdjSDdZTWNORkdFQnNvWWx3TENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCSzNkK2lkbWR0U1NsWlQ5bEcvUS9MQ3JoRG1ydnM2eTBRaERhbmk1TlRjY29NbURuSEl3NjRUNFNjQTdybHI5MHRWck5ocE5SWXBIUDJpTllFdkZqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzUzNDAwNTM2OjYyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmUrWnczajN0NzNVaW1RR0RQUFpWVzVpdGJOVjUvRUFCWGtFWFV5NStxUVQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBa0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDA0MjAxOSwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdHNSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0753400536",
  PASSWORD: 
    process.env.PASSWORD || "Star pay 8",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94729478513", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
  TOKEN: "7RbI8PbYaLKNwOKcLnAgVrvd7L37Ld4VJoOr",
  USERNAME: "Movie1122337771771",
  REPO_NAME: "Nioon yt",
};
