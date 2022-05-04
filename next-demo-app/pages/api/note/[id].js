import nc from "next-connect";
import notes from "../../../src/data/data";

const getNote = (id) => notes.find((n) => n.id === parseInt(id));

const handler = nc().get((req, res) => {
  const note = getNote(req.query.id);

  if (!note) {
    res.status(404);
    res.end();
    return;
  }

  res.json({ data: note });
});

export default handler;
