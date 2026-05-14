# company300

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

An interactive dashboard that visualizes the 300 companies selected for Japan's "Soaring SMEs and Small Businesses" award in 2023. This tool provides a geographic overview of the awardees across all prefectures.

## Features

-   **Interactive Map:** A tabular map of Japan, color-coded to show the density of award-winning companies in each prefecture.
-   **Detailed Listings:** Click any prefecture to view a list of its companies, including their award category and a link to their official website.
-   **Prefecture Ranking:** Prefectures are automatically ranked by the number of selected companies, with the rank displayed directly on the map.

## Usage

Open `index.html` in any modern web browser. No installation or build steps are required.

## Data

The application uses company data stored in `company300.csv`. This data is scraped from the official list published by Japan's Ministry of Economy, Trade and Industry (METI).

-   **Source:** [2023年度 はばたく中小企業・小規模事業者300社 (METI)](https://www.chusho.meti.go.jp/keiei/sapoin/monozukuri300sha/2023/detail.html)

## Development

The data can be updated by running the scraping script. This requires [Deno](https://deno.land/) to be installed.

To re-scrape the data and update `company300.csv`, run the following command from the project root:

```sh
deno run --allow-net --allow-read --allow-write scrape.js
```

## License

MIT License — see [LICENSE](LICENSE).