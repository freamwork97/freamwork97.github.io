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
  "<a href='https://www.citytimes.co.kr/news/articleView.html?idxno=37923'>파운드리 키우는 인텔…AI발 반도체 '전쟁'</a>",
  "<a href='https://www.itworld.co.kr/news/337509'>글로벌 칼럼 | AI 글래스로 현실화된 멀티모달 AI의 파급력</a>",
  "<a href='https://n.news.naver.com/mnews/article/277/0005421602?sid=101'>[2024 미래기업포럼]HD현대 \"그룹 내 AI 솔루션 확대로 글로벌 선도 기업 도약\"</a>",
  "<a href='https://www.digitaltoday.co.kr/news/articleView.html?idxno=518433&page=2&total=173801'>퀄컴, AI 허브에 스냅드래곤 X 시리즈 플랫폼 지원</a>",
  "<a href='https://n.news.naver.com/article/030/0003210408?sid=105'>퀄리타스반도체, 반도체 전설 짐 켈러 '텐스토렌트'에 20억 투자</a>",
  "<a href='https://www.greened.kr/news/articleView.html?idxno=314718'>삼성SDI 전고체 2차전지 적층 기술 특허 공개...'꿈의 전고체 배터리' 어디까지 왔나?</a>",
  "<a href='https://www.aitimes.com/news/articleView.html?idxno=160371'>\"애플, 10일 WWDC서 오픈AI 계약 발표\"</a>",
  "<a href='https://n.news.naver.com/mnews/article/022/0003939417'>오픈AI·구글 직원들 “AI 통제 못하면 인간 멸종”</a>",
  "<a href='https://ddaily.co.kr/page/view/2024060101491482216'>인텔 루나레이크, NPU 성능 3배↑ '자신만만'…왜? [컴퓨텍스 2024]</a>",
  "<a href='https://www.digitaltoday.co.kr/news/articleView.html?idxno=520539'>오픈AI \"인공지능 사고 해석 가능하다\"</a>",
  "<a href='https://www.thelec.kr/news/articleView.html?idxno=28390'>삼성전자 “HBM 16단부터 하이브리드 본딩 필수”</a>",
  "<a href='https://n.news.naver.com/article/138/0002174936?sid=105'>‘LG-히타치’ 합작 HLDS, 하반기 SK하이닉스 낸드 받아 ‘슈퍼멀티’ SSD 출사표 [현장에선]</a>",
  "<a href='https://daily.hankooki.com/news/articleView.html?idxno=1092247'>삼성디스플레이, 아이패드 프로용 OLED 양산 정상궤도</a>",
  "<a href='https://www.etoday.co.kr/news/view/2371705'>[단독] 낸드 차세대 시장 연다… 삼성전자, 하반기 9세대 탑재 SSD 신제품 출시</a>",
  "<a href='https://www.digitaltoday.co.kr/news/articleView.html?idxno=522285'>거침없는 엔비디아 영토 확장...클라우드 이어 서버 제조사까지 위협</a>",
  "<a href='https://v.daum.net/v/20240708082917410'>KAIST 연구진 일냈다…“엔비디아 독주 막을 신기술”</a>",
  "<a href='https://n.news.naver.com/mnews/article/030/0003225529'>'고성능 반도체 기판 두각' 삼성전기, 퀄컴 이어 AMD에 FC-BGA 공급</a>",
  "<a href='https://n.news.naver.com/article/030/0003226290?sid=105'>'제조 무인화 실현' 삼성전자, 생기연 내 제조로봇팀 신설</a>",
  "<a href='https://www.thelec.kr/news/articleView.html?idxno=29649'>'SK하이닉스, 구글 웨이모에 HBM2E 샘플 공급... \"완성차로 확대될 것\"</a>",
  "<a href='https://n.news.naver.com/article/008/0005079697?sid=105'>[단독]구글 대항마 '퍼플렉시티' CEO 내달 방한…SKT와 협력안 발표</a>",
  "<a href='https://www.sisajournal-e.com/news/articleView.html?idxno=405020&page=2&total=14758'>삼성전자, 내년 낸드 투자 줄이고 D램 집중</a>",
  "<a href='https://www.digitaltoday.co.kr/news/articleView.html?idxno=531819'>아마존, 차세대 알렉사 음성AI 10월 공개...앤트로픽 클로드 투입</a>",
  "<a href='https://n.news.naver.com/mnews/article/293/0000058154?sid=105'>AI 기업에 4천억 쏟은 SKT, 'AI 수익화' 전략은</a>",
  "<a href='https://n.news.naver.com/article/092/0002344628?cds=news_edit'>인텔, 2나노 양산 백지화...\"1.8나노 공정에 집중\"</a>",
  "<a href='https://zdnet.co.kr/view/?no=20240907121854'>인텔의 위기…모빌아이·설계·파운드리 줄줄이 매각 검토</a>",
  "<a href='https://www.businesspost.co.kr/BP?command=article_view&num=366024'>삼성전자 인텔 '파운드리 분사' 추진 쉽지 않아, TSMC와 경쟁에 큰 약점</a>",
  "<a href='https://www.digitaltoday.co.kr/news/articleView.html?idxno=533883'>기업용 메신저 슬랙, AI에이전트 대거 투입...세일즈포스 외 타사 에이전트도 지원</a>",
  "<a href='https://n.news.naver.com/article/029/0002902800?sid=105'>골드만삭스 손들고 나간 애플카드, JP모건이 대체하나</a>",
  "<a href='https://www.digitaltoday.co.kr/news/articleView.html?idxno=533895&page=2&total=186132'>AI 모델 개발 비용 낮춰라....엔비디아, 옥토AI도 인수 추진</a>",
  "<a href='https://www.digitaltoday.co.kr/news/articleView.html?idxno=533898'>MS·블랙록, AI 데이터센터 투자 프로젝트 발표…130조원 규모</a>",
  "<a href='https://v.daum.net/v/20240919081049002'>“엔비디아 GPU 없이도” KAIST, AI 학습속도 104배 높였다</a>",
  "<a href='https://www.aitimes.com/news/articleView.html?idxno=163954'>'소라' 개발하던 오픈AI 리더, 구글로 이직…”세계 모델 개발할 것”</a>",
  "<a href='https://n.news.naver.com/mnews/article/001/0014970570?sid=104'>\"TSMC, 첨단 2나노 웨이퍼 장당 3만달러 책정\"…4·5 나노의 2배</a>",
  "<a href='https://n.news.naver.com/mnews/article/092/0002347410'>국내 AI 반도체, 삼성·TSMC 파운드리 다각화</a>",
  "<a href='https://www.yna.co.kr/view/AKR20241011005451091'>美 반도체 기업 AMD, 새 AI 칩 공개…\"엔비디아 칩 능가\"(종합)</a>",
  "<a href='https://www.itworld.co.kr/news/353560'>인텔, 13·14세대 코어 프로세서 충돌 문제로 집단 소송 직면</a>",
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
