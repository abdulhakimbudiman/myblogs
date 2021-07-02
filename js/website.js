$("body").removeClass("no-js");

$(document).ready(function () {
  $("#main-scrollbar").append($("header"));

  $("img.lazy").Lazy({
    bind: "load scroll click mouseover",
    event: "scroll click mouseover",
    effect: "fadeIn",
    scrollDirection: "both",
    afterLoad: function (element) {
      element.removeClass("lazy");
      element.removeAttr("width");
      element.removeAttr("height");
    },
  });
});
