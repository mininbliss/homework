
const home = document.getElementById("home");
const yes = document.getElementById("yes");

home.addEventListener("click", ()=> {
    window.location.href = "main.html";
});

const postId = localStorage.getItem("clickedPostId"); //postId 로컬에서 가져왔고... 얘를 지워서 메인에 반영시켜야 됨

yes.addEventListener("click", () => {
  
  const deleted = JSON.parse(localStorage.getItem("deletedPosts") || "[]"); //삭제 목록 선언, key: deletedpost 없으면 빈 배열열

  
  if (!deleted.includes(postId)) {
    deleted.push(postId);
  }//클릭한(삭제할) postId 목록에 추가

  localStorage.setItem("deletedPosts", JSON.stringify(deleted)); //업데이트된 삭제 목록을 다시 localStorage에 저장

  fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
      const filtered = data.filter(item => !deleted.includes(item.postId));
      console.log(filtered); // 삭제가 반영된 목록
    });

    //하그리고 메인으로 이동
    window.location.href = "main.html";
});
