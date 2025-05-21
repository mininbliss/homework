//localStorage.clear(); //리셋

fetch('../data.json')
    .then(response => response.json())

    .then(data => {
        const textbox = document.getElementById("textbox")

        //id 숫자 배열로
        const deleted = JSON.parse(localStorage.getItem("deletedPosts") || "[]").map(Number);

        //삭제 반영된 새로운 목록 
        const filteredData = data.filter(item => !deleted.includes(item.postId));


        filteredData.forEach(element => {
            const textdiv = document.createElement("div");

            textdiv.innerHTML = `<h1>${element.title}</h1>`;//div글씨씨

        textdiv.addEventListener("click", () => {
            localStorage.setItem("clickedPostId", element.postId);
            window.location.href = "read.html";// postId를 localStorage에 저장하고 read.html로 이동
        });

        textbox.appendChild(textdiv); //textbox에 반영
        });
    });


document.getElementById("sendbtn").addEventListener("click", function() {
  window.location.href = "write.html"; 
});

