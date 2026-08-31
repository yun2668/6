const menuBtn=document.getElementById("menuBtn");
const mainNav=document.getElementById("mainNav");

if(menuBtn&&mainNav){
  menuBtn.addEventListener("click",()=>{
    const open=mainNav.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded",open?"true":"false");
    menuBtn.textContent=open?"✕":"☰";
  });
  mainNav.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",()=>{
      mainNav.classList.remove("active");
      menuBtn.setAttribute("aria-expanded","false");
      menuBtn.textContent="☰";
    });
  });
  window.addEventListener("resize",()=>{
    if(window.innerWidth>760){
      mainNav.classList.remove("active");
      menuBtn.setAttribute("aria-expanded","false");
      menuBtn.textContent="☰";
    }
  });
}

const monthSelect=document.getElementById("monthSelect");
const monthBtn=document.getElementById("monthBtn");
const monthResult=document.getElementById("monthResult");

if(monthBtn&&monthSelect&&monthResult){
  monthBtn.addEventListener("click",()=>{
    const m=Number(monthSelect.value);
    if(!m){
      monthResult.textContent="請先選擇月份";
      return;
    }
    const previous=m===1?12:m-1;
    const next=m===12?1:m+1;
    monthResult.innerHTML=
      `原發照月份為 <strong>${m} 月</strong>：原則上可於 `+
      `<strong>${previous} 月、${m} 月、${next} 月</strong>辦理定期檢驗。`;
  });
}

document.querySelectorAll(".faq-item").forEach(item=>{
  const btn=item.querySelector(".faq-question");
  if(!btn)return;
  btn.addEventListener("click",()=>{
    const open=item.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach(other=>{
      other.classList.remove("active");
    });
    if(!open)item.classList.add("active");
  });
});
