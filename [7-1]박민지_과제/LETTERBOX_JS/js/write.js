const title = document.getElementById("title");
const content = document.getElementById("content");
const today = document.getElementById("today");

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1; 
const day = now.getDate();

today.textContent = `${year}.${month}.${day}`;


document.getElementById("sendbtn").addEventListener("click", ()=> {
    console.log(title.value); 
    console.log(today.textContent);
    console.log(content.value);
});

document.getElementById("backbtn").addEventListener("click", () => {
    history.back();
});