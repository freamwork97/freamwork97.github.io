$(function () {
  $("#TISNavi").load("../Navi/TISNavi.html");
});

$(function () {
  $("#NewsNavi").load("../Navi/NewsNavi.html");
});

$(function () {
  $("#ProjectNavi").load("../Navi/ProjectNavi.html");
});

$(function () {
  $("#HeaderNavi").load("../Navi/HeaderNavi.html", function () {
    const path = window.location.pathname;
    $("#HeaderNavi .nav-link").each(function () {
      const href = $(this).attr("href");
      if (!href) return;
      // 루트('/')는 매칭 제외, 그 외 경로 세그먼트로 비교
      const segment = href.split("/").filter(Boolean)[0];
      if (segment && path.includes("/" + segment + "/")) {
        $(this).addClass("active");
      }
    });
  });
});
