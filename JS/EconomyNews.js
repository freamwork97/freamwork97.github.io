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
  "<a href='https://kr.investing.com/news/stock-market-news/article-997278'>‘1조 주식 소각’ 삼성물산, 수익성·주주가치 제고 두 마리 토끼 모두 잡는다</a>",
  "<a href='https://www.citytimes.co.kr/news/articleView.html?idxno=31722'>'무역전쟁' 예고한 트럼프…\"재집권시 대중관세 60%\"</a>",
  "<a href='https://kr.investing.com/news/stock-market-news/article-999558'>[개장] 뉴욕증시, 매파 파월에 하락..엔비디아 4%↑</a>",
  "<a href='https://www.citytimes.co.kr/news/articleView.html?idxno=31855'>테슬라 뚝뚝 떨어질수록…서학개미는 '줍줍'</a>",
  "<a href='https://www.citytimes.co.kr/news/articleView.html?idxno=31811'>이재용, 무죄·무죄·무죄에 삼성 '안도'…경제계도 일제히 '환영'</a>",
  "<a href='https://www.fnnews.com/news/202402041903211092'>뿌리째 흔들린 도요타… 품질 사기 부른 '상명하복 고질병' [글로벌 리포트]</a>",
  "<a href='https://n.news.naver.com/mnews/article/215/0001150024?sid=101'>'순익 128조' 버핏…日상사·옥시덴탈 \"무기한 보유\"</a>",
  "<a href='https://kr.investing.com/news/stock-market-news/article-1011054'>워런 버핏의 버크셔해서웨이 현금보유 223조 사상 최대···“국내외 투자할 기업이 없다”</a>",
  "<a href='https://n.news.naver.com/mnews/article/001/0014527083?rc=N&ntype=RANKING'>자사주 소각·배당 기업에 '밸류업' 稅혜택…상반기 중 발표(종합)</a>",
  "<a href='https://kr.investing.com/news/stock-market-news/article-432SI-1010636'>마이크로소프트 및 오픈AI가 지원하는 로봇 스타트업, 베조스와 엔비디아로부터 투자 확보 - 블룸버그뉴스</a>",
  "<a href='https://www.citytimes.co.kr/news/articleView.html?idxno=35699'>美 6월 금리인하 기대감↑…\"한국은 7~8월 전망\"</a>",
  "<a href='https://www.moneys.co.kr/article/2024031210472573657'>[특징주] 탑머티리얼, 테슬라 LFP 배터리 전면 적용 소식에 국내 유일 개발 완료 기업 '부각'</a>",
  "<a href='https://www.citytimes.co.kr/news/articleView.html?idxno=35624'>'꿈의 배터리' 개발 본격 시작…배터리 3사 뭉친다</a>",
  "<a href='https://www.citytimes.co.kr/news/articleView.html?idxno=35685'>천장 뚫은 비트코인…돈나무언니 \"150만달러도 가능\"</a>",
  "<a href='https://decenter.kr/NewsView/2D6LWFIAH8/GZ0304'>도널드 트럼프 “가상자산은 일종의 화폐, 당선되면 수용”</a>",
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
