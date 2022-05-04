const notes = new Array(15).fill(3).map((_, i) => ({
  id: Date.now() + i,
  title: `Note ${i}`,
}));

module.exports = notes;
