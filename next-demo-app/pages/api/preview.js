export default function handler(req, res) {
  res.setPreviewData({});
  res.redirect(req.query.redirect);
  // res.end("preview mode enaabled");
}
