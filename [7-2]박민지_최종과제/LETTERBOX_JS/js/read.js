const postId = parseInt(localStorage.getItem("clickedPostId"), 10);
const deletebtn = document.getElementById("deletebtn");

fetch("../data.json")
  .then(response => response.json())
  .then(data => {
      const newPosts = JSON.parse(localStorage.getItem("newPosts") || "[]");
      const allPosts = [...data, ...newPosts]; //전개연산자
      const post = allPosts.find(item => item.postId === postId); //postId가 일치하는 포스트의

      document.querySelector("#title h1").textContent = post.title;
      document.querySelector("#content h3").textContent = post.content;
      document.querySelector("#date h2").textContent = post.date; //제목내용날짜가져오기
    
  });

document.getElementById("backbtn").addEventListener("click", () => {
  history.back();
});

deletebtn.addEventListener("click", () => {
  window.location.href = "del.html";
});
