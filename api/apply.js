export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const data = req.body;

  // Send to bot via HTTP request
  // Example: BOT_URL is your SillyDev bot endpoint
  await fetch(process.env.BOT_URL + "/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  res.status(200).json({ success: true });
}
