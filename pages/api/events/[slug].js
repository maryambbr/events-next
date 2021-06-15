// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { events } = require('./data.json');

export default (req, res) => {
  const single = events.filter(ev => ev.slug === req.query.slug);

  if (req.method === 'GET') {
    res.status(200).json(single);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
