export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const data = req.body;

  await fetch(process.env.WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: "<@&MOD_REVIEW_ROLE_ID>",
      embeds: [{
        title: "📄 New Moderator Application",
        color: 0x2b2d31,
        fields: [
          { name: "Age", value: data.age },
          { name: "Discord", value: data.discord },
          { name: "Time Zone", value: data.timezone },
          { name: "Experience", value: data.experience },
          { name: "Helping Skills", value: data.helping },
          { name: "Activity", value: data.activity },
          { name: "Past Moderation", value: data.moderation },
          { name: "Malicious Scripts", value: data.malicious },
          { name: "Drama Handling", value: data.drama },
          { name: "Why Moderator?", value: data.why }
        ],
        footer: { text: "Use buttons below to accept or deny" }
      }]
    })
  });

  res.status(200).json({ success: true });
}
