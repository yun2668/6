const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");


// ==========================================
// 手機版選單
// ==========================================

if (menuBtn && mainNav) {

  menuBtn.addEventListener("click", () => {

    const open = mainNav.classList.toggle("active");

    menuBtn.setAttribute(
      "aria-expanded",
      open ? "true" : "false"
    );

    menuBtn.textContent = open ? "✕" : "☰";

  });


  // 點擊選單連結後，自動收合
  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("active");

      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );

      menuBtn.textContent = "☰";

    });

  });


  // 從手機版切回電腦版時，自動關閉選單
  window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {

      mainNav.classList.remove("active");

      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );

      menuBtn.textContent = "☰";

    }

  });

}



// ==========================================
// 柴油車檢驗月份快速查詢
// ==========================================

const monthSelect = document.getElementById("monthSelect");
const monthBtn = document.getElementById("monthBtn");
const monthResult = document.getElementById("monthResult");


if (monthBtn && monthSelect && monthResult) {

  monthBtn.addEventListener("click", () => {

    const month = Number(monthSelect.value);


    // 沒有選擇月份
    if (!month) {

      monthResult.textContent =
        "請先選擇行照原發照月份";

      return;

    }


    // 前一個月
    const previousMonth =
      month === 1
        ? 12
        : month - 1;


    // 下一個月
    const nextMonth =
      month === 12
        ? 1
        : month + 1;


    // 顯示查詢結果
    monthResult.innerHTML =

      `原發照月份為 <strong>${month} 月</strong><br>` +

      `原則上可於 ` +

      `<strong>${previousMonth} 月、${month} 月、${nextMonth} 月</strong>` +

      ` 辦理柴油車定期排氣檢驗。`;

  });

}



// ==========================================
// 常見問題 FAQ
// ==========================================

document.querySelectorAll(".faq-item").forEach(item => {

  const button =
    item.querySelector(".faq-question");


  if (!button) return;


  button.addEventListener("click", () => {

    const isOpen =
      item.classList.contains("active");


    // 先把全部 FAQ 關閉
    document
      .querySelectorAll(".faq-item")
      .forEach(otherItem => {

        otherItem.classList.remove("active");

      });


    // 如果目前這題原本沒開，就打開
    if (!isOpen) {

      item.classList.add("active");

    }

  });

});
