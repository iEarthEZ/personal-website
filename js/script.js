(function () {
  var statusEl = document.getElementById("status");
  if (!statusEl) return;

  var hour = new Date().getHours();
  var message = "probably online";
  if (hour >= 0 && hour < 6) message = "up way too late";
  else if (hour >= 6 && hour < 12) message = "just got up";
  else if (hour >= 22) message = "up way too late";

  statusEl.textContent = message;
})();


(function () {
  var buttons = document.querySelectorAll(".copy-row[data-copy]");

  buttons.forEach(function (button) {
    var hint = button.querySelector(".copy-hint");
    var defaultLabel = hint ? hint.textContent : "copy";

    button.addEventListener("click", function () {
      var value = button.getAttribute("data-copy");

      function showCopied() {
        button.classList.add("copied");
        if (hint) hint.textContent = "copied";
        setTimeout(function () {
          button.classList.remove("copied");
          if (hint) hint.textContent = defaultLabel;
        }, 1500);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(showCopied, function () {
          /* clipboard permission denied; row still shows the tag as text */
        });
      }
    });
  });
})();
