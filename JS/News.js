// Generic News pagination script
// This file replaces the three nearly-identical files: BlockChainNews.js, EconomyNews.js, ITNews.js

const linksContainer = $("#links-container");
const linksPerPage = 7;
// `links` array must be defined before this script (e.g. via ../JS/data/XXXLinks.js)
const totalPages = (typeof links !== 'undefined' && Array.isArray(links)) ? Math.max(1, Math.ceil(links.length / linksPerPage)) : 1;
const maxPaginationButtons = 5; // kept for parity with existing code

function displayLinks(pageNumber) {
  if (typeof links === 'undefined' || !Array.isArray(links)) {
    linksContainer.html('<p>No links available.</p>');
    return;
  }

  const startIndex = (pageNumber - 1) * linksPerPage;
  const endIndex = startIndex + linksPerPage;
  const pageLinks = links.slice(startIndex, endIndex);

  const html = pageLinks
    .map(
      (link) => `\n    <li class="link-card">\n      ${link}\n    </li>\n  `
    )
    .join("");

  linksContainer.html(`<ul class="link-list">${html}</ul>`);
}
