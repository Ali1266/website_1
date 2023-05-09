const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "image/close.svg";
    } else {
        navBtnImg.src = "image/burger.png";
    }
}

let buttonPlay = document.querySelector('.video-inner');
buttonPlay.onclick = function() {
  this.innerHTML = '<div><div class="video-item"></div><iframe class="video-element" src="https://www.youtube.com/embed/oiT6kLgLqi8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
};