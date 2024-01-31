$(function () {
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
    "<a href='https://n.news.naver.com/mnews/article/366/0000949982?sid=101'>[단독] ‘홍콩 ELS’ 3兆 손실 우려… 금감원, KB국민은행 현장 조사 착수</a>",
    "<a href='https://n.news.naver.com/mnews/article/009/0005225075?sid=101'>약달러 타고 지붕 뚫은 금값 JP모건 \"내년 2300弗 돌파\"</a>",
    "<a href='https://n.news.naver.com/mnews/article/011/0004272276?sid=100'>[속보]尹 “네덜란드·美·日과 반도체 협력…경제는 안보의 대명사”</a>",
    "<a href='https://n.news.naver.com/mnews/article/009/0005226872?sid=101'>원유 ETF·ETN에 투자한 개미들 눈물</a>",
    "<a href='http://www.digitaltoday.co.kr/news/articleView.html?idxno=497747'>카카오 김범수 \"사명까지 바꿀 각오\"...강력한 경영 쇄신 예고</a>",
    "<a href='https://n.news.naver.com/mnews/article/023/0003804396?sid=101'>경제전문가 73% “韓 경제, 장기간 1~2% 저성장 지속될 것”</a>",
    "<a href='https://kr.investing.com/news/economy/article-984816'>올해 美 금리 내려도…\"제로금리 다시 안 온다\"</a>",
    "<a href='https://n.news.naver.com/mnews/article/001/0014422323?rc=N&ntype=RANKING'>동학개미 삼성전자 매수 평단은…\"8만전자 앞두고 수익권 전환\"</a>",
    "<a href='https://n.news.naver.com/article/648/0000022260'>공모펀드 뜯어고치는 금융당국…국민 재산증식 역할할까</a>",
    "<a href='https://n.news.naver.com/mnews/article/001/0014432433?rc=N&ntype=RANKING'>[2보] 삼성전자 작년 영업이익 6.5조원…15년만의 최저치</a>",
    "<a href='https://n.news.naver.com/mnews/article/016/0002249654?sid=101'>삼성전자 ‘영업익 3조’ 못 미쳤지만...증권가는 “10만전자” 기대감</a>",
    "<a href='https://n.news.naver.com/mnews/article/001/0014433594?rc=N&ntype=RANKING'>태영, 채권단 '워크아웃 무산' 압박에 SBS 지분 담보까지 언급</a>",
    "<a href='https://n.news.naver.com/article/366/0000961558?type=breakingnews'>한국은행, 새해 첫 기준금리 연 3.5%로 8연속 동결</a>",
    "<a href='https://www.yna.co.kr/view/AKR20240111011753072?input=1195m'>美증권위, 11개 비트코인 현물 ETF 상장 승인…11일부터 거래(종합)</a>",
    "<a href='https://n.news.naver.com/mnews/article/022/0003894008?sid=101'>美, 비트코인 현물 ETF 승인…국내서는 차단 나서 [한강로 경제브리핑]</a>",
    "<a href='https://n.news.naver.com/mnews/article/001/0014440169?rc=N&ntype=RANKING'>ETF 거래 첫날 비트코인 4만9천달러 찍고 하락…이더리움은 급등(종합)</a>",
    "<a href='https://kr.investing.com/news/stock-market-news/article-989476'>홍해 해상 물류대란…'에너지주 반등' 촉매제 되나</a>",
    "<a href='https://n.news.naver.com/mnews/article/001/0014453245?rc=N&ntype=RANKING'>대통령실, 비트코인 ETF에 \"특정 방향성 갖지 말도록 했다\"</a>",
    "<a href='https://kr.investing.com/news/stock-market-news/article-990969'>中개미 피난처 된 일본 증시…닛케이 ETF에 뭉칫돈</a>",
    "<a href='https://kr.investing.com/news/economy/article-992080'>\"올해 성장률 2.2% 전망…국가채무 걱정 안해도 돼\"</a>",
    "<a href='https://kr.investing.com/news/stock-market-news/article-992212'>전자업계 실적시즌 개막…SK하이닉스, 1년만에 적자 탈출하나</a>",
    "<a href='https://kr.investing.com/news/stock-market-news/article-992759'>[공시] 삼성생명, 삼성전자 지분 매수...”세계 반도체 시장 호재 전망”</a>",
    "<a href='https://kr.investing.com/news/stock-market-news/article-992776'>\"테슬라보다 MS\"…서학개미 올해 베팅은 'AI'</a>",
    "<a href='https://kr.investing.com/news/stock-market-news/article-993330'>상장사, 작년 자사주 4.8조 태웠다…신한지주·현대차 1·2위</a>",
    "<a href='https://n.news.naver.com/mnews/article/001/0014478384?rc=N&ntype=RANKING'>삼성전자 \"2026년까지 3년간 잉여현금흐름 50% 주주환원\"</a>",
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

    linksContainer.html(`<li>${pageLinks.join("</li><hr><li>")}</li><hr>`);
  }

  function generatePaginationButtons() {
    paginationContainer.empty();

    const createButton = (label, onclick, icon) =>
      `<button class="btn btn-sm btn-outline-secondary" ${
        onclick ? `onclick="${onclick}"` : "disabled"
      }>${icon} ${label}</button>`;

    paginationContainer.append(
      createButton(
        '<i class="bi bi-chevron-double-left"></i>',
        currentPage === 1 ? null : "changePage(1)",
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>'
      )
    );
    paginationContainer.append(
      createButton(
        '<i class="bi bi-chevron-left"></i> 이전',
        currentPage === 1 ? null : `changePage(${currentPage - 1})`,
        '<i class="bi bi-chevron-left"></i>'
      )
    );

    for (let i = 1; i <= totalPages; i++) {
      paginationContainer.append(createButton(i, `changePage(${i})`, ""));
    }

    paginationContainer.append(
      createButton(
        '<i class="bi bi-chevron-right"></i> 다음',
        currentPage === totalPages ? null : `changePage(${currentPage + 1})`,
        '<i class="bi bi-chevron-right"></i>'
      )
    );
    paginationContainer.append(
      createButton(
        '<i class="bi bi-chevron-right"></i> <i class="bi bi-chevron-double-right"></i>',
        currentPage === totalPages ? null : `changePage(${totalPages})`,
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'
      )
    );
  }

  window.changePage = function (pageNumber) {
    currentPage = pageNumber;
    displayLinks(currentPage);
    generatePaginationButtons();
  };

  // Initialize current page
  let currentPage = 1;

  displayLinks(currentPage);
  generatePaginationButtons();
});
