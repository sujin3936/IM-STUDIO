
/*문구 이미지 효과*/
function fadeIn(img) {
    var opacity = 0;
    var timer = setInterval(function() {
    if (opacity >= 1) {
        clearInterval(timer);
    }
    img.style.opacity = opacity;
    opacity += 0.02;
    }, 50);
}
window.onload = function() {
    var title2 = document.getElementById("title2");
    var titleImg = title2.getElementsByTagName("img")[0];
    fadeIn(titleImg);
};

/*스크롤 효과*/
class Scrooth {
    constructor({element = window, strength=15, acceleration = 1.2,deceleration = 0.975}={}) {
        this.element = element;
        this.distance = strength;
        this.acceleration = acceleration;
        this.deceleration = deceleration;
        this.running = false;

        this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
        this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
        this.scroll = this.scroll.bind(this);
    }

    scrollHandler(e) {
        e.preventDefault();

        if (!this.running) {
            this.top = this.element.pageYOffset || this.element.scrollTop || 0;
            this.running = true;
            this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
            this.isDistanceAsc = true;
            this.scroll();
        } else {
            this.isDistanceAsc = false;
            this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
        }
    }

    scroll() {
        if (this.running) {
            this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
            Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
            Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;

            this.top += this.currentDistance;
            this.element.scrollTo(0, this.top);

            requestAnimationFrame(this.scroll);
        }
    }
}

const scroll = new Scrooth({
    element: window,
    strength: 15,
    acceleration: 1.5,
    deceleration: 0.975,
}); 

/*텍스트 효과*/
const content = "Our\nVision";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i < content.length) {
        setTimeout(typing, 400)
    }
}
setTimeout(typing, 5000)

/*아이콘 변경*/ 
function mOver(obj) {
    obj.innerHTML = "arrow_forward"
}
  
  function mOut(obj) {
    obj.innerHTML = "add"
 }





 
