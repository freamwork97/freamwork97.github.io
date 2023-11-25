$(function(){

    const links = [
        "<a href='//www.digitaltoday.co.kr/news/articleView.html?idxno=488772'>아발란체, 서브넷 무기로 B2B 블록체인으로 확장</a>",
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
        '<a href="https://m.joongdo.co.kr/view.php?key=20231119010006166">ETRI-ADD \'6G 위성통신\' 선점 힘 모은다… KPS 등 협력</a>',
        // Add your links here
    ];

    const linksPerPage = 7;
    const totalPages = Math.ceil(links.length / linksPerPage);

    function displayLinks(pageNumber) {
        const startIndex = (pageNumber - 1) * linksPerPage;
        const endIndex = startIndex + linksPerPage;
        const pageLinks = links.slice(startIndex, endIndex);

        const linksContainer = $("#links-container");
        linksContainer.empty();

        $.each(pageLinks, function(index, link) {
            linksContainer.append(`<li>${link}</li><hr>`);
        });
    }

     function generatePaginationButtons() {
        const paginationContainer = $("#pagination");
        paginationContainer.empty();

        // Disable "처음" and "이전" buttons on the first page
        if (currentPage === 1) {
            paginationContainer.append(`<button class="btn btn-sm btn-outline-secondary" disabled><i class="bi bi-chevron-double-left"></i> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg></button>`);
            paginationContainer.append(`<button class="btn btn-sm btn-outline-secondary" disabled><i class="bi bi-chevron-left"></i> 이전</button>`);
        } else {
            // Add the "처음" button
            paginationContainer.append(`<button class="btn btn-sm btn-outline-secondary" onclick="changePage(1)"><i class="bi bi-chevron-double-left"></i> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg></button>`);
            // Add the "이전" button
            paginationContainer.append(`<button class="btn btn-sm btn-outline-secondary" onclick="changePage(${currentPage - 1})"><i class="bi bi-chevron-left"></i> 이전</button>`);
        }

        for (let i = 1; i <= totalPages; i++) {
            const button = `<button class="btn btn-sm btn-outline-secondary" onclick="changePage(${i})">${i}</button>`;
            paginationContainer.append(button);
        }

        // Disable "다음" and "마지막" buttons on the last page
        if (currentPage === totalPages) {
            paginationContainer.append(`<button class="btn btn-sm btn-outline-secondary" disabled>다음 <i class="bi bi-chevron-right"></i></button>`);
            paginationContainer.append(`<button class="btn btn-sm btn-outline-secondary" disabled><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg> <i class="bi bi-chevron-double-right"></i></button>`);
        } else {
            // Add the "다음" button
            paginationContainer.append(`<button class="btn btn-sm btn-outline-secondary" onclick="changePage(${currentPage + 1})">다음 <i class="bi bi-chevron-right"></i></button>`);
            // Add the "마지막" button
            paginationContainer.append(`<button class="btn btn-sm btn-outline-secondary" onclick="changePage(${totalPages})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg> <i class="bi bi-chevron-double-right"></i></button>`);
        }
    }

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

// Use JavaScript to load the navigation content into the placeholder
$(function(){
    $("#navigation-placeholder").load("../Navi/NewsNavi.html");
});
