// //화면 이미지로 저장
// const dlBtn = document.querySelector(".download-btn");

// dlBtn.addEventListener("click", function () {
//     html2canvas(document.querySelector("#card")).then(canvas => {
//         // if(window.innerWidth < 1024) {
//         //     document.querySelector("#card").setAttribute("style", "width=800px")
//         // }
//         saveAs(canvas.toDataURL("image/jpg"), "등록증.jpg")
//     })
// })

// // 캡쳐된 파일을 이미지 파일로 내보냄
// function saveAs(uri, filename) {
//     const link = document.createElement("a");
//     if (typeof link.download === 'string') {
//         link.href = uri;
//         link.download = filename;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     } else {
//         window.open(uri);
//     }
// }



//화면 이미지로 저장
// function download(){
//     html2canvas(document.querySelector("#card")).then(canvas => {
//     // document.body.appendChild(canvas)
//     // $('body').append('<img src="' + canvas.toDataURL("image/jpeg") + '"/>');
//     let el = document.getElementById("target");
//     let eel = document.getElementById('name');
//     eel.style.height = eel.scrollHeight + 'px';
//     el.href = canvas.toDataURL("image/jpeg");
//     el.download = "등록증.jpg";
//     el.click();  
// })
// };



//화면 이미지로 저장
function download(){
    
    if(window.innerWidth > 1100) {
        let name = document.getElementById('name');
        let birth = document.getElementById('birth');
        let date = document.getElementById('date');   
        name.style.top = "31.4%";
        birth.style.top = "47.4%";
        date.style.top = "61.6%";

        html2canvas(document.querySelector("#card")).then(canvas => {
            if(window.innerWidth < 1024) {
                document.querySelector("#card").setAttribute("style", "width=800px")
                }  
        let el = document.getElementById("target");

        el.href = canvas.toDataURL("image/jpeg");
        el.download = "등록증.jpg";
        el.click();  
        })
    name.style.top = "29.5%";
    birth.style.top = "45.5%";
    date.style.top = "60%";

    } else if(window.innerWidth <= 1100 && window.innerWidth > 882){
        let name = document.getElementById('name');
        let birth = document.getElementById('birth');
        let date = document.getElementById('date');   
        name.style.top = "31%";
        birth.style.top = "47%";
        date.style.top = "61%";
    
        html2canvas(document.querySelector("#card")).then(canvas => {
            if(window.innerWidth < 1024) {
                document.querySelector("#card").setAttribute("style", "width=800px")
                }  
        let el = document.getElementById("target");
    
        el.href = canvas.toDataURL("image/jpeg");
        el.download = "등록증.jpg";
        el.click();  
        })
    name.style.top = "30%";
    birth.style.top = "46%";
    date.style.top = "60%";
    
    } else if(window.innerWidth <= 882 && window.innerWidth > 734){
        let name = document.getElementById('name');
        let birth = document.getElementById('birth');
        let date = document.getElementById('date');   
        name.style.top = "30%";
        birth.style.top = "46%";
        date.style.top = "60%";
    
        html2canvas(document.querySelector("#card")).then(canvas => {
            if(window.innerWidth < 1024) {
                document.querySelector("#card").setAttribute("style", "width=800px")
                }  
        let el = document.getElementById("target");
    
        el.href = canvas.toDataURL("image/jpeg");
        el.download = "등록증.jpg";
        el.click();  
        })
    name.style.top = "29%";
    birth.style.top = "45%";
    date.style.top = "59%";
    
    } else if(window.innerWidth <= 734 && window.innerWidth > 644) {
        let name = document.getElementById('name');
        let birth = document.getElementById('birth');
        let date = document.getElementById('date');   
        name.style.top = "29%";
        birth.style.top = "45%";
        date.style.top = "59%";
    
        html2canvas(document.querySelector("#card")).then(canvas => {
            if(window.innerWidth < 1024) {
                document.querySelector("#card").setAttribute("style", "width=800px")
                }  
        let el = document.getElementById("target");
    
        el.href = canvas.toDataURL("image/jpeg");
        el.download = "등록증.jpg";
        el.click();  
        })
    name.style.top = "27%";
    birth.style.top = "43%";
    date.style.top = "57%";

    } else if(window.innerWidth <= 644) {
        let name = document.getElementById('name');
        let birth = document.getElementById('birth');
        let date = document.getElementById('date');   
        name.style.top = "28%";
        birth.style.top = "44%";
        date.style.top = "58%";
    
        html2canvas(document.querySelector("#card")).then(canvas => {
            if(window.innerWidth < 1024) {
                document.querySelector("#card").setAttribute("style", "width=800px")
                }  
        let el = document.getElementById("target");
    
        el.href = canvas.toDataURL("image/jpeg");
        el.download = "등록증.jpg";
        el.click();  
        })
    name.style.top = "26%";
    birth.style.top = "42%";
    date.style.top = "56%";

    }
};


//날짜호출
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
if ( month < 10) month = "0" + month;
if ( day < 10) day = "0" + day;
document.getElementById("date").value = year + month + day;



//동그라미 클릭 시 작동

let arrow4 = document.querySelectorAll('.choice');
let arrow3 = document.querySelectorAll('.arrow');
let icon = document.querySelectorAll('.menu > .choice > span');


function clickArrow(event){
    event.stopPropagation() //https://gcomx.blogspot.com/2018/02/blog-post_20.html
};

function cercleClick(event){

        if (event.target.classList[1] === "choice_click") {
            event.target.classList.remove("choice_click");
            event.target.childNodes[2].classList.remove("arrow_active");
            event.target.childNodes[0].classList.remove("icon_active");
        } else { 
            for (let i = 0; i < arrow4.length; i++) {
                arrow4[i].classList.remove("choice_click");
                arrow3[i].classList.remove("arrow_active");
                icon[i].classList.remove("icon_active");
            }
            event.target.classList.add("choice_click");
            event.target.childNodes[2].classList.add("arrow_active");
            event.target.childNodes[0].classList.add("icon_active");
        }
    }
    
    function init() {
        for (let i = 0; i < arrow4.length; i++) {
          arrow4[i].addEventListener("click", cercleClick);
          arrow3[i].addEventListener("click",clickArrow);
        }
      };

    init();
   


    //화살표 클릭 시 작동
    // https://goddino.tistory.com/45

      let num1 = 1;
      let num2 = 1;
      let num3 = 1;
      let num4 = 1;
      let num5 = 1;

      
      function hairSlide(idx){

          if (idx) {
              if (num1 == 8) return;
              num1++;
          } else {
              if (num1 == 1) return;
              num1--;
          }
        let hairImg = document.getElementById("hair");
        hairImg.setAttribute("src", "sorce/hair0" + num1 + ".png");
      };

      function browSlide(idx){
        if (idx) {
            if (num2 == 8) return;
            num2++;
        } else {
            if (num2 == 1) return;
            num2--;
        }
      let browsImg = document.getElementById("brows");
      browsImg.setAttribute("src", "sorce/brows0" + num2 + ".png");
    };

    function eyesSlide(idx){
        if (idx) {
            if (num3 == 6) return;
            num3++;
        } else {
            if (num3 == 1) return;
            num3--;
        }
      let eyesImg = document.getElementById("eyes");
      eyesImg.setAttribute("src", "sorce/eyes0" + num3 + ".png");
    };

    function lipsSlide(idx){
        if (idx) {
            if (num4 == 7) return;
            num4++;
        } else {
            if (num4 == 1) return;
            num4--;
        }
      let lipsImg = document.getElementById("lips");
      lipsImg.setAttribute("src", "sorce/lips0" + num4 + ".png");
    };

    function clothSlide(idx){
        if (idx) {
            if (num5 == 8) return;
            num5++;
        } else {
            if (num5 == 1) return;
            num5--;
        }
      let clothImg = document.getElementById("cloth");
      clothImg.setAttribute("src", "sorce/cloth0" + num5 + ".png");
    };