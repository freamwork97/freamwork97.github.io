$(function(){
    
    const links = [
        "<a href='https://n.news.naver.com/article/016/0002223642?sid=101'>“비트코인 ETF 출시 임박에 기관들 선행매매…자금 유입세 더 빨라질 듯” [투자360]</a>",
        "<a href='https://n.news.naver.com/mnews/article/293/0000048930?sid=101'>美 10월 CPI 예상치 하회...'금리인상 종료' 기대감 커졌다</a>",
        "<a href='https://n.news.naver.com/mnews/article/001/0014332246?rc=N&ntype=RANKING'>'서울 편입론'까지 부른 신도시 교통난…광역철도망 연결이 관건</a>",
        "<a href='https://n.news.naver.com/mnews/article/022/0003875154?sid=101'>포스코 광양제철소 누빈 LG전자 ‘AI 자율주행로봇’, 무인 시설관리 실증사업 완료</a>",
        "<a href='https://n.news.naver.com/mnews/article/003/0012212203?sid=105'>검찰 가는 김범수…경영쇄신 카드 꺼낸 카카오</a>",
        "<a href='https://kr.investing.com/news/stock-market-news/article-968202'>워런 버핏의 버크셔 해서웨이, 일부 우량주 포지션 철회</a>",
        "<a href='http://www.digitaltoday.co.kr/news/articleView.html?idxno=494590'>스페이스X, 2024년 '스타링크' 분리 상장 논의 중</a>",
        "<a href='https://n.news.naver.com/mnews/article/001/0014335235?rc=N&ntype=RANKING'>공매도 상환 90일·담보비율 105% 일원화…\"운동장 평평하게\"(종합)</a>",
        "<a href='https://n.news.naver.com/mnews/article/001/0014340174?rc=N&ntype=RANKING'>\"이차전지·AI 한다더니…\" 사업목적 추가후 절반은 추진 안돼</a>",
        "<a href='https://kr.investing.com/news/economy/article-969335'>\"내년도 쉽지 않다\"…韓 경제 2.0% 성장 전망</a>",
        "<a href='https://www.ajunews.com/view/20231119142128073'>아마존·알리바바, 11번가에 눈독…큐텐 매각 협상 불발 후폭풍</a>",
        "<a href='https://kr.investing.com/news/economy/article-969529'>은행권, ‘역대 최대’ 이자수익 거둬…3분기 누적 44兆 돌파</a>",
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

        for (let i = 1; i <= totalPages; i++) {
            const button = `<button class="btn btn-sm btn-outline-secondary" onclick="changePage(${i})">${i}</button>`;
            paginationContainer.append(button);
        }
    }

    window.changePage = function(pageNumber) {
        displayLinks(pageNumber);
    };

    displayLinks(1);
    generatePaginationButtons();
});

$(function(){
    $("#navigation-placeholder").load("../Navi/NewsNavi.html");
});