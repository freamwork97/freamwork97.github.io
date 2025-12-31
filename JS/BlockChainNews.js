// links moved to ../JS/data/BlockChainLinks.js

const linksContainer = $("#links-container");
const linksPerPage = 7;
const totalPages = Math.ceil(links.length / linksPerPage);
const maxPaginationButtons = 5; // Maximum number of pagination buttons to display

function displayLinks(pageNumber) {
  const startIndex = (pageNumber - 1) * linksPerPage;
  const endIndex = startIndex + linksPerPage;
  const pageLinks = links.slice(startIndex, endIndex);

  const html = pageLinks
    .map(
      (link) => `
    <li class="link-card">
      ${link}
    </li>
  `
    )
    .join("");

  linksContainer.html(`<ul class="link-list">${html}</ul>`);
}
