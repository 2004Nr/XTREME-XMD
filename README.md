
<h1 align="center">XTREME XMD</h1>

<p align="center">
  <img src="https://files.catbox.moe/d9ghms.jpg" width="300"/><br>
  <b>Fast, Powerful, and Stylish WhatsApp Bot built for fun and performance.</b>
</p>

<p align="center">
  <a href="https://github.com/PrinceXtremeX/XTREME-XMD"><img src="https://img.shields.io/github/stars/PrinceXtremeX/XTREME-XMD?style=flat-square&color=yellow"></a>
  <a href="https://github.com/PrinceXtremeX/XTREME-XMD/fork"><img src="https://img.shields.io/github/forks/PrinceXtremeX/XTREME-XMD?style=flat-square&color=lightblue"></a>
  <a href="https://whatsapp.com/channel/0029Vb6D2xV8kyyHNyDALh0i"><img src="https://img.shields.io/badge/WhatsApp-Channel-25D366?style=flat-square&logo=whatsapp"></a>
  <a href="https://github.com/PrinceXtremeX"><img src="https://img.shields.io/badge/Dev-Prince xtreme-blueviolet?style=flat-square"></a>
</p>

**sᴇssɪᴏɴ ɪᴅ💫**

[![XTREME XMD SESSION](https://img.shields.io/badge/XTREME%20-XMD%20SESSION-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://haiko-mdx-v2-session.onrender.com)
---

🧠 **ғᴇᴀᴛᴜʀᴇs**

- 🔁 ᴀᴜᴛᴏ ʀᴇsᴛᴀʀᴛ & ʙᴀɪʟᴇʏs ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ sᴜᴘᴘᴏʀᴛ  
- 🔌 ᴅʏɴᴀᴍɪᴄ ᴘʟᴜɢɪɴ ʟᴏᴀᴅᴇʀ  
- 🔐 ᴘʀɪᴠᴀᴛᴇ/ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs  
- 🖥️ ᴄᴏɴsᴏʟᴇ ɪɴᴛᴇʀғᴀᴄᴇ & ʟɪᴠᴇ ʟᴏɢs  
- ☁️ ᴅᴇᴘʟᴏʏᴀʙʟᴇ ᴏɴ ᴍᴜʟᴛɪᴘʟᴇ ᴘʟᴀᴛғᴏʀᴍs  

---

🚀 **ᴏɴᴇ-ᴄʟɪᴄᴋ ᴅᴇᴘʟᴏʏ ᴏᴘᴛɪᴏɴs**

⚡ ᴏᴘᴛɪʟɪɴᴋ
[![Deploy with Optilink](https://img.shields.io/badge/Deploy%20Now-OptiLink-2ecc71?style=for-the-badge)]([https://optiklink.com/home])

🌐 ʀᴇɴᴅᴇʀ

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/PrinceXtremeX/XTREME-XMD.git)

☁️ ᴋᴏʏᴇʙ

[![Koyeb](https://img.shields.io/badge/Deploy-Koyeb-00C2FF?style=for-the-badge&logo=koyeb)](https://www.koyeb.com)

🛰️ ᴛᴀʟᴋᴅʀᴏᴠᴇ

[![Talkdrove](https://img.shields.io/badge/Deploy-Talkdrove-orange?style=for-the-badge)](#)

🔄 ɢɪᴛʜᴜʙ ᴀᴄᴛɪᴏɴs
ᴅᴇᴘʟᴏʏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴀʟʟʏ ᴜsɪɴɢ `.yml` ᴡᴏʀᴋғʟᴏᴡ ɪɴsɪᴅᴇ ɢɪᴛʜᴜʙ ᴀᴄᴛɪᴏɴs.


**ɢɪᴛʜᴜʙ ᴅᴇᴘʟᴏʏᴍᴇɴᴛ** 

```
name: Node.js 24/7 Bot with Failover

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */7 * * *'  # Restart every 7 hours
  workflow_dispatch:        # Manual start if needed

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get update && sudo apt-get install -y ffmpeg

    - name: Start bot with auto-restart (7h max)
      run: |
        echo "🚀 Starting bot with failover (7h max)..."
        end=$((SECONDS+25200))   # 25200s = 7h
        while [ $SECONDS -lt $end ]; do
          echo "▶️ Launching bot..."
          npm start || echo "⚠️ Bot crashed, restarting..."
          sleep 5
        done
        echo "⏹ Bot reached 7h limit, waiting for next cron restart."
```

---

🧰 ᴍᴀɴᴜᴀʟ ɪɴsᴛᴀʟʟᴀᴛɪᴏɴ

```ʙᴀsʜ
git https://github.com/PrinceXtremeX/XTREME-XMD
cd XTREME-XMD
npm install
node .
```

---

🔗 ᴜsᴇғᴜʟ ʟɪɴᴋs

[![Join Our WhatsApp Channel](https://img.shields.io/badge/Join%20Channel-WhatsApp-25D366?style=for-the-badge&logo=whatsapp)](https://whatsapp.com/channel/0029Vb9qyTY47XeJ7i0wcQ40)
---

👑 Credits

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*  
> ᴄᴏɴᴛᴀᴄᴛ: `528145550855`

---

*©️ 2025 – xᴛʀᴇᴍᴇ-xᴍᴅ | ᴀʟʟ ʀɪɢʜᴛs ʀᴇsᴇʀᴠᴇᴅ*

