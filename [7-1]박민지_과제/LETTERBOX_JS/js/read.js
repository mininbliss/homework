const postId = parseInt(localStorage.getItem("clickedPostId"), 10);

fetch("../data.json")
.then((response) => response.json())
.then((data) => {
const post = data.find((item) => item.postId === postId);

  document.querySelector("#title h1").textContent = post.title;
  document.querySelector("#content h3").textContent = post.content;
  document.querySelector("#date h2").textContent = post.date;

});

document.getElementById("backbtn").addEventListener("click", () => {
history.back();
});