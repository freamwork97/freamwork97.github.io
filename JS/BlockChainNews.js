$(function(){
    
    const links = [
        "<a href='//www.digitaltoday.co.kr/news/articleView.html?idxno=488772'>아발란체, 서브넷 무기로 B2B 블록체인으로 확장</a>",
        "<a href='https://www.tokenpost.kr/article-153676'>유럽중앙은행 총재 \"아들, 암호화폐 투자금 60% 잃었다\"며 회의적 입장 고수</a>",
        // Add your links here
    ];

    const linksContainer = $("#links-container");
    const paginationContainer = $("#pagination");
    const linksPerPage = 7;
    const totalPages = Math.ceil(links.length / linksPerPage);

    function displayLinks(pageNumber) {
        const startIndex = (pageNumber - 1) * linksPerPage;
        const endIndex = startIndex + linksPerPage;
        const pageLinks = links.slice(startIndex, endIndex);

        linksContainer.html(`<li>${pageLinks.join('</li><hr><li>')}</li><hr>`);
    };

    function generatePaginationButtons() {
        paginationContainer.empty();

        const createButton = (label, onclick, icon) => `<button class="btn btn-sm btn-outline-secondary" ${onclick ? `onclick="${onclick}"` : 'disabled'}>${icon} ${label}</button>`;

        paginationContainer.append(createButton('<i class="bi bi-chevron-double-left"></i>', currentPage === 1 ? null : 'changePage(1)', 
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>'));
        paginationContainer.append(createButton('<i class="bi bi-chevron-left"></i> 이전', currentPage === 1 ? null : `changePage(${currentPage - 1})`, '<i class="bi bi-chevron-left"></i>'));

        for (let i = 1; i <= totalPages; i++) {
            paginationContainer.append(createButton(i, `changePage(${i})`, ''));
        }

        paginationContainer.append(createButton('<i class="bi bi-chevron-right"></i> 다음', currentPage === totalPages ? null : `changePage(${currentPage + 1})`, '<i class="bi bi-chevron-right"></i>'));
        paginationContainer.append(createButton('<i class="bi bi-chevron-right"></i> <i class="bi bi-chevron-double-right"></i>', currentPage === totalPages ? null : `changePage(${totalPages})`, 
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'));
    };

    window.changePage = function(pageNumber) {
        currentPage = pageNumber;
        displayLinks(currentPage);
        generatePaginationButtons();
    };

    // Initialize current page
    let currentPage = 1;

    displayLinks(currentPage);
    generatePaginationButtons();
});