export default definePlugin({
    name: "FakeHacker",
    description: "Generates fake hacking reports for trolling.",
    authors: [{ name: "YourName", id: "YOUR_DISCORD_ID" }],

    commands: [
        {
            name: "hack",
            description: "Fake hack someone (for memes).",
            options: [{
                name: "target",
                description: "User to 'hack'",
                type: 6, // USER type
                required: true
            }],

            execute: async (args) => {
                const target = args[0].value;
                const fakeIP = `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
                const fakePasswords = ["hunter2", "password123", "admin", "iloveyou"];
                
                return {
                    content: `💻 **FAKE HACK REPORT** (Don't take this seriously)\n` +
                            `> **Target:** <@${target}>\n` +
                            `> **IP:** \`${fakeIP}\` (Localhost? Really?)\n` +
                            `> **Passwords Found:** \`${fakePasswords.join(", ")}\`\n` +
                            `> **Malware Detected:** \`BonziBuddy.exe\`\n\n` +
                            `⚠️ THIS IS A JOKE. STOP BELIEVING FAKE HACKERS.`
                };
            }
        },
        {
            name: "swat",
            description: "Fake SWAT someone (satire).",
            options: [{
                name: "target",
                description: "User to 'SWAT'",
                type: 6,
                required: true
            }],

            execute: async (args) => {
                return {
                    content: `🚨 **FAKE SWAT TEAM DEPLOYED** (Not really)\n` +
                            `> **Target:** <@${args[0].value}>\n` +
                            `> **Location:** \`Mom's Basement, Nebraska\`\n` +
                            `> **ETA:** \`Never, because this is illegal and fake.\`\n\n` +
                            `😂 Stop falling for Discord LARPers.`
                };
            }
        }
    ]
});
