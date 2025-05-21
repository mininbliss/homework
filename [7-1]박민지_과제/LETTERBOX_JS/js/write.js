const title = document.getElementById("title");
const content = document.getElementById("content");
const today = document.getElementById("today");

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1; 
const day = now.getDate();

today.textContent = `${year}.${month}.${day}`;

// document.getElementById("sendbtn").addEventListener("click", ()=> {
//     localStorage.setItem("title", title.value);
//     localStorage.setItem("today", today.textContent)
//       localStorage.setItem("today", content.value)
// });
//어떻게 저장시키지? 저장시켜서 main, read, del 모두에 write한 새 쪽지를 반영 시켜야 됨..

document.getElementById("backbtn").addEventListener("click", () => {
    history.back();
});