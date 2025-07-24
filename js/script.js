//Close Navbar Toggler on Click
document.addEventListener("click", (event) => {
  const thisTarget = event.target;
  if (thisTarget.closest("#header-nav")) {
    // if clicked inside main navbar element. do nothing.
  } else {
    // if clicked outside main navbar element. close it using Bootstrap way.
    const bsNavCollapse = new bootstrap.Collapse("#navbarSupportedContent", {
      toggle: false,
    });
    bsNavCollapse.hide();
  }
});

//Dynamically load Homepage
(function (global) {
  var dc = {};

  var homeHtml = "snippets/home-snippet.html";

  // Convenience function for inserting innerHTML for 'select'
  var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  // Show loading icon inside element identified by 'selector'.
  var showLoading = function (selector) {
    var html = "<div class='text-center'>";
    html += "<img src='images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
  };

  // On page load (before images or CSS)
  document.addEventListener("DOMContentLoaded", function (event) {
    // On first load, show home view
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      homeHtml,
      function (responseText) {
        document.querySelector("#main-content").innerHTML = responseText;
      },
      false
    );
  });

  global.$dc = dc;
})(window);
