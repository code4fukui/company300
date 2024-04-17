import { fetchOrLoad } from "https://js.sabae.cc/fetchOrLoad.js";
import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";
import { CSV } from "https://code4fukui.github.io/CSV/CSV.js";

const url = "https://www.chusho.meti.go.jp/keiei/sapoin/monozukuri300sha/2023/detail.html";

const html = await fetchOrLoad(url);
const dom = HTMLParser.parse(html);
console.log(html);

const companies = dom.querySelectorAll(".p-2023_wrap_company_section_list_item,h4");
console.log(companies.length);
/*
<p class="p-2023_wrap_company_section_list_item_name">株式会社NEXT LEVEL</p>
<div class="p-2023_wrap_company_section_list_item_bottom">
  <p class="p-2023_wrap_company_section_list_item_bottom_category blue_category">事業再構築・生産性向上</p>
  <a href="https://okushiba.net/" class="p-2023_wrap_company_section_list_item_bottom_link" target="_blank">
    <p class="p-2023_wrap_company_section_list_item_bottom_link_text">公式サイトを見る</p>
    <img src="../images/icon_link.svg" class="p-2023_wrap_company_section_list_item_bottom_link_icon">
  </a>
</div>
*/
let pref = "北海道";
const data = [];
for (const i of companies) {
  if (i.rawTagName == "h4") {
    pref = i.text.trim();
    continue;
  }
  const o = {};
  o.name = i.querySelector(".p-2023_wrap_company_section_list_item_name").text.trim();
  o.pref = pref;
  o.category = i.querySelector(".p-2023_wrap_company_section_list_item_bottom_category").text.trim();
  o.url = i.querySelector(".p-2023_wrap_company_section_list_item_bottom_link")?.getAttribute("href");
  data.push(o);
}

await Deno.writeTextFile("company300.csv", CSV.stringify(data));
