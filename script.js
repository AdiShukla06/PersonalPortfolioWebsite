console.log("Script running...")
document.querySelector(".cross").style.display = "none";

document.querySelector('.hamburger').addEventListener("click", ()=>{
    
    document.querySelector('.navright').classList.toggle('navgo')
    if(document.querySelector('.navright').classList.contains('navgo')){
        document.querySelector('.ham').style.display = "inline"
        document.querySelector('.cross').style.display = "none"
    }
    else{
        setTimeout(() => {
            document.querySelector('.cross').style.display = "inline"
        document.querySelector('.ham').style.display = "none"
        }, 100);
        
    }
})


const viewProjectButton0 = document.querySelector("#view-project-button0");

viewProjectButton0.addEventListener("click", function() {
  window.open("https://github.com/AdiShukla06/MindEase", "_blank");
});

const viewProjectButton1 = document.querySelector("#view-project-button1");

viewProjectButton1.addEventListener("click", function() {
  window.open("https://github.com/AdiShukla06/IOTA-3.0", "_blank");
});

const viewProjectButton2 = document.querySelector("#view-project-button2");

viewProjectButton2.addEventListener("click", function() {
  window.open("https://www.instagram.com/theprofitlabs/reels/", "_blank");
});

const viewProjectButton3 = document.querySelector("#view-project-button3");

viewProjectButton3.addEventListener("click", function() {
  window.open("https://github.com/AdiShukla06/PersonalPortfolioWebsite", "_blank");
});





