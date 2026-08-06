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


  // 點選選單後，自動收合
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


  // 手機版切回電腦版時，自動關閉選單
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
// 柴油車定檢月份快速查詢
// ==========================================

const monthSelect = document.getElementById("monthSelect");
const monthBtn = document.getElementById("monthBtn");
const monthResult = document.getElementById("monthResult");


if (monthBtn && monthSelect && monthResult) {

  monthBtn.addEventListener("click", () => {

    const month = Number(monthSelect.value);


    // 沒有選月份
    if (!month) {

      monthResult.textContent = "請先選擇行照原發照月份";

      return;

    }


    // 計算前一個月
    const previousMonth =
      month === 1
        ? 12
        : month - 1;


    // 計算下一個月
    const nextMonth =
      month === 12
        ? 1
        : month + 1;


    // 顯示結果
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


  // 找不到按鈕就跳過
  if (!button) return;


  button.addEventListener("click", () => {

    const isOpen =
      item.classList.contains("active");


    // 先把其他問題全部關閉
    document
      .querySelectorAll(".faq-item")
      .forEach(otherItem => {

        otherItem.classList.remove("active");

      });


    // 原本沒有開啟，就開啟目前這題
    if (!isOpen) {

      item.classList.add("active");

    }

  });

});
