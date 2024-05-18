const links = [
  "<a href='//www.digitaltoday.co.kr/news/articleView.html?idxno=488772'>아발란체, 서브넷 무기로 B2B 블록체인으로 확장</a>",
  "<a href='https://www.tokenpost.kr/article-153676'>유럽중앙은행 총재 \"아들, 암호화폐 투자금 60% 잃었다\"며 회의적 입장 고수</a>",
  "<a href='https://decenter.kr/NewsView/2D6P3K6C5T/GZ0304'>오지스, 레이어2 메인넷 '실리콘' 출시···폴리곤과 맞손</a>",
  "<a href='https://decenter.kr/NewsView/2D6QH7FP8W/GZ0304'>JP모건 “비트코인, 조정 후 과매수 여전···4만2000弗까지 떨어진다”</a>",
  "<a href='https://bloomingbit.io/feed/news/68373'>“아발란체, 컨센서스 프로토콜 기반 가장 빠른 블록체인…속도가 곧 사용성”</a>",
  // Add your links here
];

const linksContainer = $("#links-container");
const linksPerPage = 7;
const totalPages = Math.ceil(links.length / linksPerPage);
const maxPaginationButtons = 5; // Maximum number of pagination buttons to display

function displayLinks(pageNumber) {
  const startIndex = (pageNumber - 1) * linksPerPage;
  const endIndex = startIndex + linksPerPage;
  const pageLinks = links.slice(startIndex, endIndex);

  linksContainer.html(`<li>${pageLinks.join("</li><hr><li>")}</li><hr>`);
}
