// This endpoint was removed. Keeping the file to avoid 404s if referenced accidentally.
// It now returns a 410 Gone response indicating the feature has been removed.
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(410).json({ error: 'AI image generation has been removed from this project.' });
}
