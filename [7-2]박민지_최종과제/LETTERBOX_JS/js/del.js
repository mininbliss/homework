
const home = document.getElementById("home");
const yes = document.getElementById("yes");

home.addEventListener("click", ()=> {
    window.location.href = "main.html";
});

const postId = localStorage.getItem("clickedPostId"); //postId 로컬에서 가져왔고... 얘를 지워서 메인에 반영시켜야 됨

yes.addEventListener("click", () => {
  
  const deleted = JSON.parse(localStorage.getItem("deletedPosts") || "[]"); //삭제 목록 선언, 
  // 로컬 deletedPosts에서 가져오기 없으면 빈 배열

  deleted.push(postId);//삭제할 postId를 deleted 목록에 추가

  localStorage.setItem("deletedPosts", JSON.stringify(deleted)); //업데이트된 삭제 목록을 다시 로컬에 저장

    //하그리고 메인으로 이동
    window.location.href = "main.html";
});
