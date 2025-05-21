const title = document.getElementById("title");
const content = document.getElementById("content");
const today = document.getElementById("today");

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1; 
const day = now.getDate();

today.textContent = `${year}.${month}.${day}`;

document.getElementById("sendbtn").addEventListener("click", () => {
    const titleValue = title.value;
    const contentValue = content.value;
    const dateValue = today.textContent;

    const newPost = {
        postId: Date.now(), // Id 부여
        title: titleValue,
        content: contentValue,
        date: dateValue
    };

    const savedPosts = JSON.parse(localStorage.getItem("newPosts") || "[]");
    savedPosts.push(newPost); // 배열에 추가 
    localStorage.setItem("newPosts", JSON.stringify(savedPosts)); //새 글 저장

    window.location.href = "main.html";  
});





document.getElementById("backbtn").addEventListener("click", () => {
    history.back();
});