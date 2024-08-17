const fs = require('fs');if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/0cf4d5fb86c224c4f5fe0.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello i am MEDUZA-MD i am alive now!!",
};
