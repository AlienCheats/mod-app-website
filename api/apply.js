export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const data = req.body;

  await fetch(process.env.BOT_URL + "/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  res.status(200).json({ success: true });
}
