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
  "<a href=\"https://www.joongdo.co.kr/web/view.php?key=20231119010006166\">ETRI-ADD '6G 위성통신' 선점 힘 모은다… KPS 등 협력</a>",
  '<a href="https://www.ciokorea.com/news/315359">노키아, 인간의 음성으로 네트워크 재구성하는 인공지능 기술 공개</a>',
  '<a href="https://n.news.naver.com/mnews/article/016/0002233796?sid=105">[IT과학칼럼] 6G 선점 위한 저궤도 위성통신의 중요성</a>',
  '<a href="https://www.psnews.co.kr/news/articleView.html?idxno=2040327">SK, 대구에 8천억원 규모 AI 데이터센터 투자</a>',
  "<a href=\"http://www.digitaltoday.co.kr/news/articleView.html?idxno=496979\">구글 딥마인드, '모방 학습'으로 AI 기술 향상…연구</a>",
  '<a href="http://www.digitaltoday.co.kr/news/articleView.html?idxno=496983">메타-IBM 주도 AI 얼라이언스 뜬다...AI기업·연구기관 50여곳 참여</a>',
  '<a href="https://n.news.naver.com/mnews/article/031/0000795154?sid=105">\'"망사용료\' 논의 끝나지 않았다…AI 시대 맞은 지금부터 진짜" [IT돋보기]</a>',
  '<a href="https://www.aitimes.com/news/articleView.html?idxno=155791">구글, 공부 노트 만들어 주는 AI 앱 ‘노트북LM’ 미국내 출시</a>',
  '<a href="https://n.news.naver.com/article/025/0003328101?sid=105">[단독] 네이버·삼성 공동 개발한 AI 반도체, 19일 공개된다 | 팩플</a>',
  '<a href="https://n.news.naver.com/mnews/article/023/0003804843?sid=105">네이처, 올해의 과학계 인물에 챗 GPT 선정...非인간 최초</a>',
  '<a href="https://n.news.naver.com/mnews/article/011/0004274590?sid=102">IT·SW 등 170여개사 4000명 상주…‘제2의 판교밸리’로 급성장</a>',
  '<a href="https://www.aitimes.com/news/articleView.html?idxno=155878">인텔 "생성 AI 현실화는 온디바이스 AI뿐...PC 업체 수십곳이 ‘코어 울트라’ 탑재"</a>',
  "<a href=\"https://www.aitimes.com/news/articleView.html?idxno=155885\">MS, '애저 AI 스튜디오' 대폭 확장...오픈 소스 LLM 40개 추가</a>",
  '<a href="https://n.news.naver.com/mnews/article/030/0003166210">韓이 제안한 6G 주파수 3개 대역, 세계전파통신회의서 채택</a>',
  "<a href=\"https://n.news.naver.com/article/092/0002315275?sid=105\">거대 AI 모델, 인간 도움 없이 '초소형 AI' 만든다</a>",
  "<a href=\"http://www.digitaltoday.co.kr/news/articleView.html?idxno=498450\">네이버, 국민건강보험공단과 초대규모 AI 기반 공공 서비스 혁신 '맞손'</a>",
  '<a href="https://www.yna.co.kr/view/AKR20231218068400017?input=1195">카톡에 AI로 대화 요약·말투 변경 기능 도입</a>',
  "<a href=\"https://n.news.naver.com/article/020/0003537615?sid=105\">인텔, 첫 인텔 4 공정 기반의 '인텔 코어 울트라' 국내에 소개</a>",
  '<a href="https://www.aitimes.com/news/articleView.html?idxno=156089">미디어젠-ETRI "구글 \'컨포머\'보다 빠른 컨볼루션 신경망 아키텍처 개발"</a>',
  '<a href="https://www.chosun.com/economy/tech_it/2023/12/26/TZSMNRPWRNAGFLAJRIBUE5PKCQ/">네이버 개발자 3명이 만든 세계 1위 ‘솔라’, AI업계를 뒤흔들다</a>',
  '<a href="https://www.itworld.co.kr/news/317489">프로젝트 룸 : 새로운 자바 동시성 모델 이해하기</a>',
  '<a href="https://zdnet.co.kr/view/?no=20231228172824">새해 AI PC 원년...인텔·퀄컴·애플·AMD 각축전</a>',
  "<a href=\"https://zdnet.co.kr/view/?no=20240106000928\">삼성D, 360도 접히는 '인앤아웃 플립' 등 폴더블 혁신 깜짝 공개</a>",
  "<a href=\"https://n.news.naver.com/mnews/article/018/0005650845?sid=101\">'SK표' AI·친환경 출격...CES서 기술력 뽐낸다[CES 2024]</a>",
  '<a href="https://kr.investing.com/news/stock-market-news/article-432SI-987602">엔비디아 헬스케어 부문, 이미 10억 달러 규모 – JP모건</a>',
  '<a href="https://byline.network/2024/01/08-136/">[CES 2024] 삼성의 전략은 ‘모든 것에 AI를‘</a>',
  '<a href="https://www.newsis.com/view/?id=NISX20240109_0002585897&cID=13005&pID=13100">제4이통 도전 스테이지파이브, 8000억 확보…"재무건전성 자신"</a>',
  '<a href="https://kr.investing.com/news/stock-market-news/article-988773">AI 이끌 차세대 반도체 한눈에…CES에 드러낸 삼성의 자신감 [CES]</a>',
  '<a href="https://kr.investing.com/news/stock-market-news/article-988750">[CES 2024] 최첨단 기술 향연...韓 기업들 어떤 제품 선보였나</a>',
  "<a href=\"https://n.news.naver.com/mnews/article/001/0014444247?rc=N&ntype=RANKING\">622조 투입 반도체클러스터 '세계 최대·최고'로…정부 총력지원</a>",
  '<a href="https://n.news.naver.com/mnews/article/001/0014451601?rc=N&ntype=RANKING">삼성 "이젠 AI폰"…13개 언어 실시간 통번역·동그라미로 검색(종합)</a>',
  '<a href="https://www.newsis.com/view/?id=NISX20240118_0002597616&cID=10406&pID=13100">카카오, AI 언어모델 \'허니비\' 첫 공개…정부 "AI 대중화 전력투구"</a>',
  '<a href="https://kr.investing.com/news/stock-market-news/article-992777">\'오픈AI\' 올트먼, 경계현 삼성전자 사장 만날 듯…"신 AI 동맹 구축"</a>',
  "<a href=\"https://www.aitimes.com/news/articleView.html?idxno=156709\">챗봇이 텍스트를 '이해'할 수 있다고 주장하는 논문 등장</a>",
  "<a href='https://www.aitimes.com/news/articleView.html?idxno=156960'>허깅 페이스, 오픈 소스 'AI 챗봇 메이커' 출시...'GPT 빌더'와 경쟁</a>",
  "<a href='https://www.aitimes.com/news/articleView.html?idxno=157101'>엔비디아, 'GPU 대안 AI칩'까지 제작 지원한다</a>",
  "<a href='https://www.yna.co.kr/view/AKR20240320005500091?input=1195m'>젠슨 황 엔비디아 CEO \"삼성전자 HBM 테스트 중…기대 크다\"(종합)</a>",
  "<a href='https://news.skhynix.co.kr/post/gtc2024-review'>엔비디아 ‘GTC 2024’ 찾은 SK하이닉스, “AI 메모리 솔루션의 미래 선도한다”</a>",
  "<a href='https://view.asiae.co.kr/article/2024032113580350964'>인스웨이브시스템즈, ‘2024 금융 이노베이션 컨퍼런스’ 개최</a>",
  "<a href='https://www.news1.kr/articles/?5362183'>삼성 '엑시노스' 생태계 확장…\"폴더블폰에도 최초 탑재\"</a>",
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
