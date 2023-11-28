$(function(){

    const links = [
        "<a href='http://www.digitaltoday.co.kr/news/articleView.html?idxno=494328'>구글클라우드, 국내 기업용 생성형 AI 공략 시동... '데이터 보안' 전진배치</a>",
        "<a href='https://n.news.naver.com/article/011/0004261480?sid=105'>역대 최강 '스냅드래곤' 탑재 갤럭시S24…'안드로이드 왕좌' 굳힌다[양철민의 아알못]</a>",
        '<a href="https://www.itworld.co.kr/news/313951">글로벌 칼럼 | 오픈소스가 여전히 엔터프라이즈 IT의 미래인 이유</a>',
        '<a href="https://n.news.naver.com/article/366/0000947791?sid=105">[뉴테크] 구글 딥마인드 이번에는 일기예보 AI에 도전장…1분내 10일 뒤 날씨 예측</a>',
        '<a href="https://n.news.naver.com/article/421/0007178395">삼성, 메타·MS 출신 XR 전문가 영입…가상현실 사업 속도</a>',
        '<a href="http://www.digitaltoday.co.kr/news/articleView.html?idxno=494541">[엔터프라이즈핫이슈] 빅클라우드 자체 칩 전략 가속...인텔·엔비디아 위협</a>',
        '<a href="https://n.news.naver.com/article/366/0000947849?sid=105">TSMC 추격 나선 삼성전자… 4나노 파운드리 성능·수율 높여 고객사 수주 ‘물꼬’</a>',
        '<a href="https://kr.investing.com/news/stock-market-news/article-968379">엔비디아 내리고 인텔 오르고…반도체주 희비</a>',
        '<a href="https://businesspost.co.kr/BP?command=article_view&idxno=333289">TSMC 마이크로소프트 AI 반도체도 생산, 파운드리 시장 지배력 더 키운다</a>',
        '<a href="https://n.news.naver.com/mnews/article/001/0014344095?rc=N&ntype=RANKING">"MS가 쿠데타 일으켰다"…전세계 AI 대격변</a>',
        '<a href="https://www.joongdo.co.kr/web/view.php?key=20231119010006166">ETRI-ADD \'6G 위성통신\' 선점 힘 모은다… KPS 등 협력</a>',
        '<a href="https://www.ciokorea.com/news/315359">노키아, 인간의 음성으로 네트워크 재구성하는 인공지능 기술 공개</a>',
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