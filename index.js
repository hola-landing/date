const no = document.getElementById("no");
const si = document.getElementById("si");
const dijoYes = document.getElementById("answer_yes");
const dijoNo = document.getElementById("answer_no");
let counter = 0;

const hideNo = () => {
    console.log("hola");
    let randomx = Math.floor(Math.random() * (window.innerWidth - 100));
    let randomy = Math.floor(Math.random() * (window.innerHeight - 100));
    counter = counter + 1;
    console.log(counter);
    no.style.position = "absolute";
    no.style.left = randomx + "px";
    no.style.top = randomy + "px";
    if(counter == 3){
        no.removeEventListener("mouseenter", hideNo);
    }
}


no.addEventListener("mouseenter", hideNo, false);
no.addEventListener("click", () => dijoNo.style.display = "block");
si.addEventListener("click", () => {dijoYes.style.display = "block"; dijoNo.style.display = "none"});
