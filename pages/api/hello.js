export default function handler(req, res) {
    res.status(200).json({ text: 'Hello', data: req.query, headers: req.headers, method: req.method, cookie: req.cookie })
}