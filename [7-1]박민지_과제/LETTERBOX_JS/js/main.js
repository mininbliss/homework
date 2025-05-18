fetch('../data.json')
    .then(response => response.json())

    .then(data => {
        const textbox = document.getElementById("textbox")
        data.forEach(element => {
            
            const textdiv = document.createElement("div");

            textdiv.innerHTML = `<h1>${element.title}</h1>`;

          // postId를 localStorage에 저장하고 read.html로 이동
        textdiv.addEventListener("click", () => {
            localStorage.setItem("clickedPostId", element.postId);
            window.location.href = "read.html";
        });


        textbox.appendChild(textdiv); 
        });
    });



document.getElementById("sendbtn").addEventListener("click", function() {
  window.location.href = "write.html"; 
});

