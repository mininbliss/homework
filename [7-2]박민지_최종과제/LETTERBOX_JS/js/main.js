//localStorage.clear(); //리셋

fetch('../data.json')
    .then(res => res.json())
    .then(data => {
        const textbox = document.getElementById("textbox");
        const deleted = JSON.parse(localStorage.getItem("deletedPosts") || "[]").map(Number); 
        //로컬에 저장된 삭제 배열(삭제된 id 목록록) 가져오기 문자열을 숫자로 
        const newPosts = JSON.parse(localStorage.getItem("newPosts") || "[]"); //로컬에서 write 페이지지 새로 쓴 거 가져오기 

        const allPosts = [...data, ...newPosts]; //전개연산자로 두 배열 합치기

        const filteredData = allPosts.filter(item => !deleted.includes(item.postId)); //삭제되지 않은 글 필터링 

        filteredData.forEach(item => {
            const textdiv = document.createElement("div"); // 배열의 항목마다 div 새로 생성
            textdiv.innerHTML = `<h1>${item.title}</h1>`; //textdiv-h1 제목 화면에 보이게 
            
            textdiv.addEventListener("click", () => {
                localStorage.setItem("clickedPostId", item.postId);
                window.location.href = "read.html";
            });
            textbox.appendChild(textdiv); //textdiv가 textbox에 들어가게게
        });
    });

document.getElementById("sendbtn").addEventListener("click", function() {
  window.location.href = "write.html"; 
});
