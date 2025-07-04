const config = require('../config');
const { cmd } = require('../command');
const fs = require('fs');

cmd({
  pattern: 'menu',
  desc: 'Show interactive menu system',
  category: 'menu',
  react: '❄️',
  filename: __filename
}, async (conn, mek, m, { from }) => {
  try {
    const userName = m.pushName || 'User';
    const menuCaption = `╭⭑━━➤ 𝗫𝗧𝗥𝗘𝗠𝗘-𝗫𝗠𝗗
┃╭───────────────
‎┃│➺ *ᴜsᴇʀ :* ${pushname}
‎┃│➺ *ᴍᴏᴅᴇ :* ${config.MODE}
‎┃│➺ *ᴘʀᴇғɪx :* ${config.PREFIX}
┃│➺ *ᴄʀᴇᴀᴛᴏʀ :* \`ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ\`
‎┃│➺ *ᴠᴇʀsɪᴏɴ :* \`1.0.0\`
┃│➺ *ʙᴏᴛ-ɴᴀᴍᴇ :* ${config.BOT_NAME}
┃│➺ *ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ :* ᴀᴄᴛɪᴠᴇ
‎┃╰───────────────
╰⭑━━━━━━━━━━━━━━⭑━━➤
> *_xᴛʀᴇᴍᴇ xᴍᴅ ʙᴇsᴛ ʙᴏᴛ ᴡᴀ_*

> *╭⭑━━━━━➤*
> *┃* *\`ᴅᴏᴡɴʟᴏᴀᴅ-ᴍᴇɴᴜ\`*
> *┣➢* *.ғʙ*
> *┣➢* *.ɪɴꜱᴛᴀ*
> *┣➢* *.ᴠɪᴅᴇᴏ*
> *┣➢* *.ɢᴅʀɪᴠᴇ*
> *┣➢* *.ᴛᴡɪᴛᴛᴇʀ*
> *┣➢* *.ᴛᴛ*
> *┣➢* *.ᴍᴇᴅɪᴀғɪʀᴇ*
> *┣➢* *.ᴘʟᴀʏ*
> *┣➢* *.sᴏɴɢ*
> *┣➢* *.ᴠɪᴅᴇᴏ*
> *┣➢* *.sᴘᴏᴛɪꜰʏ*
> *┣➢* *.ᴠɪᴅᴇᴏ4*
> *┣➢* *.ɪᴍɢ*
> *┣➢* *.Lʏʀɪᴄs*
> *┣➢* *.ᴀᴘᴋ*
> *┣➢* *.ʙᴀɪsᴄᴏᴘᴇ*
> *┣➢* *.ɢɪɴɪsɪsɪʟᴀ*
> *╰⭑━━➤* *ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*

> *╭⭑━━━━━➤*
> *┃* *\`sᴇᴀʀᴄʜ-ᴍᴇɴᴜ\`*
> *┣➢* *.ʏᴛꜱ*
> *┣➢* *.ʏᴛᴀ*
> *┣➢* *.ᴍᴏᴠɪᴇɪɴғᴏ*
> *┣➢* *.ᴍᴏᴠɪᴇ*
> *┣➢* *.Gᴏᴏɢʟᴇ*
> *┣➢* *.ᴡᴇᴀᴛʜᴇʀ*
> *┣➢* *.sᴛɪᴄᴋsᴇᴀʀᴄʜ*
> *╰⭑━━➤* *ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*

> *╭⭑━━━━━➤*
> *┃* *\`ɢᴀᴍᴇ-ᴍᴇɴᴜ\`*
> *┣➢* *.ɴᴜᴍʙᴇʀɢᴀᴍᴇ*
> *┣➢* *.ʀᴏʟʟ*
> *┣➢* *.ᴄᴏɪɴꜰʟɪᴘ*
> *┣➢* *.pick*
> *┣➢* *.ᴋᴏɴᴀᴍɪ*
> *╰⭑━━➤* *ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*

> *╭⭑━━━━━➤*
> *┃* *\`ɴsғᴡ-ᴍᴇɴᴜ\`*
> *┣➢* *.ɴsғᴡᴍᴇɴᴜ*
> *┣➢* *.ᴛᴇʀʀᴀɴᴜᴅᴇ*
> *╰⭑━━➤* *ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*

> *╭⭑━━━━━➤*
> *┃* *\`ᴀɪ-ɢᴘᴛ-ᴍᴇɴᴜ\`*
> *┣➢* *.ɢᴘᴛ*
> *┣➢* *.ᴀɪ*
> *┣➢* *.ᴀɴᴀʟʏsᴇ*
> *┣➢* *.ʟʟᴀᴍᴀ3*
> *╰⭑━━➤* *ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*

> *╭⭑━━━━━➤*
> *┃* *\`ᴏᴡɴᴇʀ-ᴍᴇɴᴜ\`*
> *┣➢* *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
> *┣➢* *.sᴇᴛᴛɪɴɢs*
> *┣➢* *.ᴏᴡɴᴇʀ*
> *┣➢* *.ʀᴇᴘᴏ*
> *┣➢* *.ꜱʏꜱᴛᴇᴍ*
> *┣➢* *.ꜱᴛᴀᴛᴜꜱ*
> *┣➢* *.Aʙᴏᴜᴛ*
> *┣➢* *.ʙʟᴏᴄᴋ*
> *┣➢* *.ᴇᴠᴀʟ*
> *┣➢* *.ᴜɴʙʟᴏᴄᴋ*
> *┣➢* *.sʜᴜᴛᴅᴏᴡɴ*
> *┣➢* *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
> *┣➢* *.sᴇᴛᴘᴘ*
> *┣➢* *.ʙʀᴏᴀᴅᴄᴀsᴛ*
> *┣➢* *.ᴊɪᴅ*
> *┣➢* *.ɢᴊɪᴅ*
> *┣➢* *.ᴘᴀɪʀ*
> *┣➢* *.sᴀᴠᴇ*
> *┣➢* *.ᴄᴀʟᴄ*
> *┣➢* *.ʀᴇꜱᴛᴀʀᴛ*
> *┣➢* *.sᴇᴛsᴜᴅᴏ*
> *╰⭑━━➤* *ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*

> *╭⭑━━━━━➤*
> *┃* *\`ɢʀᴏᴜᴘ-ᴍᴇɴᴜ\`*
> *┣➢* *.ʀᴇᴍᴏᴠᴇ*
> *┣➢* *.ᴅᴇʟ*
> *┣➢* *.ᴀᴅᴅ*
> *┣➢* *.ᴋɪᴄᴋ*
> *┣➢* *.ᴋɪᴄᴋᴀʟʟ*
> *┣➢* *.sᴇᴛɢᴏᴏᴅʙʏᴇ*
> *┣➢* *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
> *┣➢* *.ᴘʀᴏᴍᴏᴛᴇ*
> *┣➢* *.ᴅᴇᴍᴏᴛᴇ*
> *┣➢* *.ᴛᴀɢᴀʟʟ*
> *┣➢* *.ɢᴇᴛᴘɪᴄ*
> *┣➢* *.ɪɴᴠɪᴛᴇ*
> *┣➢* *.ʀᴇᴠᴏᴋᴇ*
> *┣➢* *.ᴘᴏʟʟ*
> *┣➢* *.ʀᴀɴᴅᴏᴍsʜɪᴘ*
> *┣➢* *.ɴᴇᴡɢᴄ*
> *┣➢* *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
> *┣➢* *.ᴀʟʟʀᴇǫ*
> *┣➢* *.ᴍᴜᴛᴇ*
> *┣➢* *.ᴜɴᴍᴜᴛᴇ*
> *┣➢* *.ʟᴏᴄᴋɢᴄ*
> *┣➢* *.ᴜɴʟᴏᴄᴋɢᴄ*
> *┣➢* *.ʟᴇᴀᴠᴇ*
> *┣➢* *.ɢɴᴀᴍᴇ*
> *┣➢* *.ɢᴅᴇsᴄ*
> *┣➢* *.ᴊᴏɪɴ*
> *┣➢* *.ʜɪᴅᴇᴛᴀɢ*
> *┣➢* *.ɢɪɴғᴏ*
> *┣➢* *.ᴇᴘʜᴇᴍᴇʀᴀʟ ᴏɴ*
> *┣➢* *.ᴇᴘʜᴇᴍᴇʀᴀʟ ᴏғғ*
> *┣➢* *.ᴇᴘʜᴇᴍᴇʀᴀʟ 7ᴅ 24ʜ 90ᴅ*
> *┣➢* *.sᴇɴᴅᴅᴍ*
> *╰⭑━━➤* *ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*

> *╭⭑━━━━━➤*
> *┃* *\`ɪɴғᴏ-ᴍᴇɴᴜ\`*
> *┣➢* *.ᴀʙᴏᴜᴛ*
> *┣➢* *.Dᴇᴠ*
> *┣➢* *.ᴀʟɪᴠᴇ*
> *┣➢* *.ʀᴇǫᴜᴇsᴛ*
> *┣➢* *.ʙᴏᴛɪɴꜰᴏ*
> *┣➢* *.ꜱᴛᴀᴛᴜꜱ*
> *┣➢* *.ᴘɪɴɢ*
> *┣➢* *.ᴘɪɴɢ2*
> *┣➢* *.ꜱʏꜱᴛᴇᴍ*
> *╰⭑━━➤* *ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*

> *╭⭑━━━━━➤*
> *┃* *\`ʀᴇʟɪɢɪᴏɴ-ᴍᴇɴᴜ\`*
> *┣➢* *.ʙɪʙʟᴇ*
> *┣➢* *.ʙɪʙʟᴇʟɪsᴛ*
> *╰⭑━━➤* *ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*

> *╭⭑━━━━━➤*
> *┃* *\`ʙᴏᴛ-ᴍᴇɴᴜ\`*
> *┣➢* *.ᴠᴇʀsɪᴏɴ*
> *┣➢* *.ʀᴇᴘᴏ*
> *┣➢* *.ᴍᴇɴᴜ*
> *┣➢* *.ᴄʜᴇᴄᴋᴜᴘᴅᴀᴛᴇ*
> *┣➢* *.ᴜᴘᴅᴀᴛᴇ*
> *┣➢* *.ᴍᴏᴅᴇ*
> *┣➢* *.ᴀᴜᴛᴏᴛʏᴘɪɴɢ*
> *┣➢* *.ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ*
> *┣➢* *.ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ*
> *┣➢* *.ᴀᴜᴛᴏʀᴇᴀᴅsᴛᴀᴛᴜs*
> *┣➢* *.ᴀɴᴛɪʙᴀᴅ*
> *┣➢* *.ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ*
> *┣➢* *.ᴀᴜᴛᴏʀᴇᴘʟʏ*
> *┣➢* *.ᴀᴜᴛᴏʀᴇᴀᴄᴛ*
> *┣➢* *.ᴀɴᴛɪʟɪɴᴋ*
> *╰⭑━━➤* *ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*

> *╭⭑━━━━━➤*
> *┃* *\`ᴄᴏɴᴠᴇʀᴛ-ᴍᴇɴᴜ\`*
> *┣➢* *.sᴛɪᴄᴋᴇʀ*
> *┣➢* *.ᴛᴀᴋᴇ*
> *┣➢* *.ᴛʀᴛ*
> *┣➢* *.ᴛᴛs*
> *┣➢* *.ꜰᴀɴᴄʏ*
> *┣➢* *.ᴜʀʟ*
> *┣➢* *.sᴇɴᴅɪᴍᴀɢᴇ*
> *┣➢* *.Aɢᴇ*
> *┣➢* *.Cᴏɴᴠᴇʀᴛ*
> *┣➢* *.ᴛɪɴʏ*
> *┣➢* *.ᴛɢs*
> *╰⭑━━➤* *ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*

> *╭⭑━━━━━➤*
> *┃* *\`ᴏᴛʜᴇʀ-ᴍᴇɴᴜ\`*
> *┣➢* *.ᴛʀᴛ*
> *┣➢* *.ᴊᴏᴋᴇ*
> *┣➢* *.ꜰᴀᴄᴛ*
> *┣➢* *.ɢɪᴛʜᴜʙ*
> *┣➢* *.ɢᴘᴀꜱꜱ*
> *┣➢* *.ʜᴀᴄᴋ*
> *┣➢* *.ǫᴜᴏᴛᴇ*
> *┣➢* *.ǫʀ*
> *┣➢* *.vv*
> *┣➢* *.sᴘᴀᴍ*
> *┣➢* *.ᴠᴄᴀʀᴅ*
> *┣➢* *.ꜱʀᴇᴘᴏ*
> *┣➢* *.sʏsᴛᴇᴍ*
> *┣➢* *.ʀᴀɴᴋ*
> *┣➢* *.Tɪᴍᴇᴢᴏɴᴇ*
> *┣➢* *.ᴅᴇꜰɪɴᴇ*
> *┣➢* *.Dᴀɪʟʏꜰᴀᴄᴛ*
> *┣➢* *.Mɪɴᴜᴛᴏʀ*
> *╰⭑━━➤* *ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*

> *╭⭑━━━━━➤*
> *┃* *\`ᴡᴀʟʟᴘᴀᴘᴇʀ-ᴍᴇɴᴜ\`*
> *┣➢* *.ɪᴍɢ*
> *┣➢* *.ʟᴏɢᴏ*
> *┣➢* *.ss*
> *╰⭑━━➤* *ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*

> *╭⭑━━━━━➤*
> *┃* *\`ʀᴀɴᴅᴏᴍ-ᴍᴇɴᴜ\`*
> *┣➢* *.ᴅᴏɢ*
> *┣➢* *.ᴄᴀᴛ*
> *┣➢* *.ᴅɪᴀʀʏ*
> *┣➢* *.ᴀɴɪᴍᴇ*
> *┣➢* *.ᴄᴏᴜᴘʟᴇᴘᴘ*
> *┣➢* *.ꜰɪɴᴅɴᴀᴍᴇ*
> *┣➢* *.ʟᴏʟɪ*
> *┣➢* *.ᴡᴀɪꜰᴜ*
> *┣➢* *.ᴄᴏsᴘʟᴀʏ*
> *┣➢* *.ɴᴇᴋᴏ*
> *┣➢* *.ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ*
> *┣➢* *.Sᴇɴᴅɪᴍᴀɢᴇ*
> *┣➢* *.ᴀɴɪᴍᴇɢɪʀʟ*
> *┣➢* *.ᴀɴɪᴍᴇɢɪʀʟ1*
> *┣➢* *.ᴀɴɪᴍᴇɢɪʀʟ2*
> *┣➢* *.ᴀɴɪᴍᴇɢɪʀʟ3*
> *┣➢* *.ᴀɴɪᴍᴇɢɪʀʟ4*
> *┣➢* *.ᴀɴɪᴍᴇɢɪʀʟ5*
> *┣➢* *.ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
> *╰⭑━━➤* *ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*`;

    const contextInfo = {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363398101781980@newsletter',
        newsletterName: '𝗫𝗧𝗥𝗘𝗠𝗘-𝗫𝗠𝗗',
        serverMessageId: 143
      }
    };

    // Send image (fallback to text if image fails)
    const sendImage = async () => {
      try {
        return await conn.sendMessage(from, {
          image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/jfbed2.jpg' },
          caption: menuCaption,
          contextInfo
        }, { quoted: mek });
      } catch {
        return await conn.sendMessage(from, {
          text: menuCaption,
          contextInfo
        }, { quoted: mek });
      }
    };

    // Send voice message (PTT style)
    const sendAudio = async () => {
      try {
        await new Promise(res => setTimeout(res, 1000));
        await conn.sendMessage(from, {
          audio: { url: 'https://files.catbox.moe/11f9pe.mp3' },
          mimetype: 'audio/mp4',
          ptt: true
        }, { quoted: mek });
      } catch {}
    };

    // Try to send both image and audio
    let sentMsg;
    try {
      sentMsg = await Promise.race([
        sendImage(),
        new Promise((_, reject) => setTimeout(() => reject('Timeout'), 10000))
      ]);

      await Promise.race([
        sendAudio(),
        new Promise((_, reject) => setTimeout(() => reject('Audio Timeout'), 8000))
      ]);
    } catch {
      sentMsg = await conn.sendMessage(from, {
        text: menuCaption,
        contextInfo
      }, { quoted: mek });
    }

    const messageID = sentMsg.key.id;

    // Menu response map
    const menuMap = {
      '1': '*📥 Download Menu:*\nfacebook, mediafire, tiktok, insta, spotify, play, etc.',
      '2': '*👥 Group Menu:*\nkick, add, promote, revoke, welcome, tagall, etc.',
      '3': '*😄 Fun Menu:*\njoke, ship, pickup, insult, hand, hifi, etc.',
      '4': '*👑 Owner Menu:*\nrestart, shutdown, block, unblock, listcmd, etc.',
      '5': '*🤖 AI Menu:*\nai, gpt3, gpt4, imagine, luma, jawad, etc.',
      '6': '*🎎 Anime Menu:*\nwaifu, neko, animegirl1-5, naruto, foxgirl, etc.',
      '7': '*🔄 Convert Menu:*\nsticker, emojimix, tomp3, base64, urldecode, etc.',
      '8': '*📌 Other Menu:*\ncalculate, wikipedia, githubstalk, yts, weather, etc.',
      '9': '*💞 Reactions Menu:*\nhug, pat, kiss, bonk, smile, poke, etc.',
      '10': '*🏠 Main Menu:*\nping, runtime, repo, alive, etc.'
    };

    // Handler for user replies
    const replyHandler = async (msgData) => {
      try {
        const msg = msgData.messages[0];
        const replyID = msg.message?.extendedTextMessage?.contextInfo?.stanzaId;
        if (replyID !== messageID) return;

        const text = msg.message?.conversation || msg.message?.extendedTextMessage?.text;
        const selected = menuMap[text.trim()];

        if (selected) {
          await conn.sendMessage(from, {
            text: selected,
            contextInfo
          }, { quoted: msg });

          await conn.sendMessage(from, {
            react: { text: '✅', key: msg.key }
          });
        } else {
          await conn.sendMessage(from, {
            text: '❌ Invalid input. Please reply with a number from 1 to 10.',
            contextInfo
          }, { quoted: msg });
        }
      } catch (e) {
        console.error('Menu reply handler error:', e);
      }
    };

    conn.ev.on('messages.upsert', replyHandler);
    setTimeout(() => conn.ev.off('messages.upsert', replyHandler), 5 * 60 * 1000); // 5 min timeout

  } catch (err) {
    console.error('Menu2 command error:', err);
    await conn.sendMessage(from, {
      text: '⚠️ Menu currently unavailable. Try again later.'
    }, { quoted: mek });
  }
});
