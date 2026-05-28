export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({error:'Method not allowed'});

  const { to, subject, body, fromName } = req.body;

  if (!to || !to.length || !subject || !body) {
    return res.status(400).json({error:'Eksik alan: to, subject, body zorunlu'});
  }

  try {
    const results = { sent: 0, failed: 0, errors: [] };

    // Batch olarak gönder (max 50'şer)
    const batches = [];
    for (let i = 0; i < to.length; i += 50) {
      batches.push(to.slice(i, i + 50));
    }

    for (const batch of batches) {
      const response = await fetch('https://api.resend.com/emails/batch', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(batch.map(email => ({
          from: `${fromName || 'Cambel Tekstil'} <onboarding@resend.dev>`,
          to: [email],
          subject,
          html: body.replace(/\n/g, '<br>')
        })))
      });

      const data = await response.json();
      if (response.ok) {
        results.sent += batch.length;
      } else {
        results.failed += batch.length;
        results.errors.push(data.message || 'Bilinmeyen hata');
      }
    }

    return res.status(200).json(results);
  } catch(e) {
    return res.status(500).json({error: e.message});
  }
}
