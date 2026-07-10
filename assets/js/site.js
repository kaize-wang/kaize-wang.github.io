(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem("kw-lang");
  var initial = stored || root.getAttribute("data-lang") || "zh";

  function setLanguage(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    localStorage.setItem("kw-lang", lang);
    document.querySelectorAll(".lang-toggle").forEach(function (button) {
      button.textContent = lang === "zh" ? "EN" : "中";
      button.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
    });
  }

  setLanguage(initial);

  document.querySelectorAll(".lang-toggle").forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(root.getAttribute("data-lang") === "zh" ? "en" : "zh");
    });
  });

  document.querySelectorAll(".nav-toggle").forEach(function (button) {
    var menuId = button.getAttribute("aria-controls");
    var menu = document.getElementById(menuId);
    if (!menu) return;

    button.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      });
    });
  });
})();
