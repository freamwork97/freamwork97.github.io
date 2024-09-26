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
  "<a href='https://www.news1.kr/articles/5356305'>삼성전자 주주들의 '응원·걱정' 교차…'주주와의 대화' 첫 시도[주총]</a>",
  "<a href='https://www.mk.co.kr/news/stock/10968541'>금값 사상 최고가 행진…금ETF 수익률 급등</a>",
  "<a href='https://www.citytimes.co.kr/news/articleView.html?idxno=36688'>\"수도권 30% 시차출근제 도입시 양평고속도로 13개 건설 효과“...인천시, 도시 재창조 나선다 [출근길 한국시티 핫이슈]</a>",
  "<a href='https://www.citytimes.co.kr/news/articleView.html?idxno=36709'>마이너스금리 해제한 日…10월 추가 인상 가능성</a>",
  "<a href='https://www.citytimes.co.kr/news/articleView.html?idxno=37059'>6개 은행 홍콩ELS 손실 배상액 2조원 전망…배상 규모 이달 중 확정</a>",
  "<a href='https://news.einfomax.co.kr/news/articleView.html?idxno=4303300'>삼성-네이버 AI반도체 '1조' 빅딜 막전막후…'공동 개발 후 공급 계약'</a>",
  "<a href='https://n.news.naver.com/article/015/0004964964?sid=101'>WSJ \"SK하이닉스,인디애나에 5.3조 규모 칩패키징시설 건설\"</a>",
  "<a href='https://www.joongang.co.kr/article/25238180'>[단독] '反엔비디아' 동맹…인텔, 네이버에 먼저 손 내밀었다</a>",
  "<a href='https://zdnet.co.kr/view/?no=20240327005752'>AI PC 생태계 확대 나선 인텔 \"중소 개발자 지원 강화\"</a>",
  "<a href='https://biz.sbs.co.kr/article/20000163206?division=NAVER'>'쿠다'가 뭐길래…구글·인텔·퀄컴 뭉쳐 '킹비디아'에 맞선다</a>",
  "<a href='https://www.citytimes.co.kr/news/articleView.html?idxno=37635'>삼성전자 지난해 반도체 매출 3위로 '뚝'…인텔·엔비디아에 앞자리 내줘</a>",
  "<a href='https://www.moneys.co.kr/article/2024051814321265389'>美 128년 역사 '다우지수' 첫 4만선 뚫었다</a>",
  "<a href='https://www.hankyung.com/article/2024052247205'>유럽은행총재 \"6월 금리인상 가능성 높다\"</a>",
  "<a href='https://n.news.naver.com/mnews/article/215/0001162971?sid=101'>국민연금發 쇼크…\"6년뒤 주식시장 충격\"</a>",
  "<a href='https://n.news.naver.com/mnews/article/001/0014701637?rc=N&ntype=RANKING'>1기 신도시 '재건축 첫타자' 2.6만가구+α…분당 최대 1.2만가구</a>",
  "<a href='https://n.news.naver.com/article/016/0002312851?sid=101'>[속보] 美 증권거래위, 이더리움 현물 ETF 상장 승인 [투자360]</a>",
  "<a href='https://n.news.naver.com/article/011/0004344865?sid=104'>中 반도체업체 SMIC, 파운드리 점유율 세계 3위로</a>",
  "<a href='https://n.news.naver.com/mnews/article/001/0014716799?rc=N&ntype=RANKING'>내달 개인투자용 국채 첫 판매…연간 1억원까지 구매 가능</a>",
  "<a href='https://v.daum.net/v/20240621102048760'>환율 1390원선 넘자…당국, 외환스와프 증액 대응(종합)</a>",
  '<a href=\'https://n.news.naver.com/mnews/article/031/0000846768\'>"라인야후 日 인프라로" 주문에 손정의 "책임지고 하겠다"</a>',
  "<a href='https://n.news.naver.com/article/015/0005013375?sid=101'>\"경쟁자에서 협력자로\"…삼성·미디어텍 반도체 '밀월'</a>",
  "<a href='https://www.etnews.com/20240724000286'>'비수기에도 아이폰15 선전' LG이노텍, 2분기 영업익 726% 급증'</a>",
  "<a href='https://n.news.naver.com/mnews/article/003/0012690049'>TSMC, 미중 불확실성에 '긴급주문' 몰린다…삼성전자는?</a>",
  "<a href='https://n.news.naver.com/article/081/0003470549?type=breakingnews'>[속보] “삼성전자 HBM3E 8단, 엔비디아 퀄테스트 통과”</a>",
  "<a href='https://n.news.naver.com/mnews/article/374/0000398589?sid=101'>단말기 따로, 통신비 따로…'완전자급제' 논의 급물살</a>",
  "<a href='https://www.thelec.kr/news/articleView.html?idxno=29761'>단통법 폐지 입법 12월 마무리</a>",
  "<a href='https://v.daum.net/v/20240825074850883'>\"이러다 거덜난다\"…국가예산의 5배라니 '헉'</a>",
  "<a href='https://n.news.naver.com/mnews/article/001/0014892861?rc=N&ntype=RANKING'>금리 올려도 주담대 급증…은행권, 결국 대출 만기·한도 줄인다(종합)</a>",
  "<a href='https://n.news.naver.com/mnews/article/119/0002865427?sid=101'>LG, 8개 계열사 R&D 전문가 모여 미래성장동력 발굴 나서</a>",
  "<a href='https://n.news.naver.com/mnews/article/016/0002354122'>호실적은 기본, ‘기대감’과 싸움 앞둔 엔비디아 2분기 실적…“글로벌 증시 방향성 가른다” [투자360]</a>",
  "<a href='https://n.news.naver.com/mnews/article/001/0014894721?rc=N&ntype=RANKING'>[1보] SK이노-E&S 합병안 주총 통과…찬성률 85.75%</a>",
  "<a href='https://n.news.naver.com/mnews/article/001/0014896821?rc=N&ntype=RANKING'>삼성SDI, GM과 美 전기차 배터리 합작법인 설립…35억달러 투자</a>",
  "<a href='https://n.news.naver.com/mnews/article/003/0012754388'>유안타證 \"현대차, 예상보다 높은 수준 밸류업…목표가↑\"</a>",
  "<a href='https://n.news.naver.com/mnews/article/001/0014899256?rc=N&ntype=RANKING'>AI칩 선두 엔비디아 분기매출 예상넘은 300억달러…시간외주가↓(종합)</a>",
  "<a href='https://n.news.naver.com/mnews/article/215/0001177676?sid=004'>TSMC 잡겠다더니…인텔, 결국 파운드리 분할 수순 [글로벌마켓 A/S]</a>",
  "<a href='https://n.news.naver.com/mnews/article/009/0005358525'>‘삼성이 SK를 추격·인텔은 최악 구조조정’...엔비디아가 확바꾼 반도체 다이내믹스 [★★글로벌]</a>",
  "<a href='https://n.news.naver.com/mnews/article/001/0014907057?rc=N&ntype=RANKING'>5대 은행 8월 가계대출·주담대 증가폭 모두 '역대 최대'</a>",
  "<a href='https://v.daum.net/v/20240902115536441'>‘수출 골든크로스’ 초읽기… 한국, 68년만에 일본 추월 보인다</a>",
  "<a href='https://www.citytimes.co.kr/news/articleView.html?idxno=56076'>국민연금 보험료율 9→13% 인상…세대별 차등 적용</a>",
  "<a href='https://n.news.naver.com/article/015/0005030557'>\"최고의 HBM4 출시\"…삼성, TSMC와 맞손</a>",
  "<a href='https://n.news.naver.com/mnews/article/001/0014915884?rc=N&ntype=RANKING'>반도체 등 수출호조에 7월 경상수지 91.3억달러 흑자</a>",
  "<a href='https://n.news.naver.com/mnews/article/001/0014915779?rc=N&ntype=RANKING'>오픈AI \"챗GPT 기업용 버전 유료 이용자 100만명 돌파\"(종합)</a>",
  "<a href='https://www.hankyung.com/article/2024090967275'>\"30년 만의 새로운 반도체 지수\"…나스닥, ASOX 출시(종합)</a>",
  "<a href='https://n.news.naver.com/mnews/article/001/0014924227?rc=N&ntype=RANKING'>애플·구글, EU '과징금 폭탄' 소송 패소</a>",
  "<a href='https://n.news.naver.com/mnews/article/031/0000868978?sid=101'>\"SW 기술 논의의 장\"…LG전자, 마곡서 'LG SDC 2024' 개최</a>",
  "<a href='https://www.yna.co.kr/view/AKR20240914028100009'>\"인텔, 군사용 반도체 제조 美보조금 4조6천억원 받는다\"</a>",
  "<a href='https://news.einfomax.co.kr/news/articleView.html?idxno=4324996'>버핏의 유력 후계자였던 제인 부회장, 버크셔 지분 55% 매각</a>",
  "<a href='https://v.daum.net/v/20240915060013977'>장기 투자 하면 안되겠네… 코스피 절반 10년 새 시총 역주행</a>",
  "<a href='https://n.news.naver.com/mnews/article/277/0005473037?sid=101'>[대만칩통신]TSMC '3나노' 수요가 공급 초과…국내외 동시 증산</a>",
  "<a href='https://www.yna.co.kr/view/AKR20240917006100091'>인텔, 파운드리 사업부 분사…유럽 등 공장 건설 일시 중단</a>",
  "<a href='https://www.yna.co.kr/view/AKR20240917024200009?input=1195m'>인텔에 승리?…\"TSMC, ASML 차세대 노광장비 특별가로 곧 도입\"</a>",
  "<a href='https://www.digitaltoday.co.kr/news/articleView.html?idxno=533868'>인텔, AWS 데이터센터칩 생산한다...유럽·아시아 공장 구축은 일단 보류</a>",
  "<a href='https://n.news.naver.com/mnews/article/014/0005242391?sid=101'>구글에 물린 EU 반독점 과징금 2조원... 법원서 '취소'</a>",
  "<a href='https://n.news.naver.com/article/001/0014939216?sid=101'>WSJ \"美 퀄컴, 인텔에 인수 제안…당국 합병심사 등 장애물\"</a>",
  "<a href='https://www.chosun.com/economy/industry-company/2024/09/20/EVMESDDHW5GTXB4PPO5JHUK52Q/'>한국, 사상 첫 '美 최대 투자국' 됐다</a>",
  "<a href='https://news.einfomax.co.kr/news/articleView.html?idxno=4325583'>버크셔, BofA 주식 또 팔았다…남은 지분율 10.8%</a>",
  "<a href='https://www.donga.com/news/Economy/article/all/20240922/130075981/2'>공매도 금지 11개월… ‘韓 관찰대상국’ 경고장 우려</a>",
  "<a href='https://n.news.naver.com/mnews/article/119/0002875690?sid=101'>'비둘기 날개' 펼친 금통위원…한은 기준금리 인하 '초읽기'</a>",
  "<a href='https://www.viva100.com/main/view.php?key=20240924010006578'>코리아 밸류업 지수 발표…주주환원 등 평가해 100개 종목 선정</a>",
  "<a href='https://n.news.naver.com/mnews/article/001/0014949629?rc=N&ntype=RANKING'>尹대통령, 'AI 국가 총력전' 선포…\"2027년까지 3대 강국 도약\"</a>",
  "<a href='https://n.news.naver.com/mnews/article/001/0014949251?rc=N&ntype=RANKING'>올해도 세수쇼크 '30조 마이너스'…2년 연속 역대급 펑크</a>",
  "<a href='https://n.news.naver.com/article/021/0002661927?type=breakingnews'>[속보]고려아연·영풍정밀 공개매수가 상향에 동반 강세</a>",
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
