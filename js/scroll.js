var Scrollbar = window.Scrollbar;
var ismobile = $(window).width() > 991;

var main = Scrollbar.init(document.querySelector("#main-scrollbar"), {
  damping: 0.05,
  alwaysShowTracks: ismobile,
});
