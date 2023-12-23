import { CSV } from "https://js.sabae.cc/CSV.js";

export const makeTabularMapJapan = async (func) => {
  const tmaps = await CSV.fetchJSON("https://tabularmaps.github.io/areamap/tabularmaps_japan.csv");
  const japan = tmaps.find(i => i.name == "Japan").tabularmap;
  const rows = japan.split("\n");
  const res = document.createElement("div");
  res.className = "tabularmap";
  let maxc = 0;
  for (const row of rows) {
    const cols = row.split(" ");
    for (const col of cols) {
      const div = document.createElement("div");
      func(div, col);
      res.appendChild(div);
    }
    if (cols.length > maxc) {
      maxc = cols.length;
    }
  }
  res.style.display = "grid";
  res.style.gridTemplateColumns = `repeat(${maxc}, 1fr)`;
  res.style.gridTemplateRows = `repeat(${rows.length}, 1fr)`;
  return res;
};
