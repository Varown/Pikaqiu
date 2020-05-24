const string = `
.skin * {
    margin: 0px;
    padding: 0px;
  }
  .skin * {
    box-sizing: border-box;
  }
  .skin *::before,
  .skin *::after {
    box-sizing: border-box;
  }
  .skin {
    position: relative;
    background: #ffe600;
    min-height: 55vh;
  }
  
  
  
  .node {
    border: 10px solid red;
    border-bottom: none;
    width: 0px;
    height: 0px;
    border-color: black transparent;
    position: relative;
    left: 50%;
    top: 150px;
    margin-left: -10px;
    z-index: 10;
  }
  
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(8deg);
    }
    66% {
      transform: rotate(-8deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  
  .node:hover {
    transform-origin: 50% 100%;
    animation: wave 300ms infinite linear;
  }
  
  .yuan {
    width: 20px;
    height: 6px;
    position: absolute;
    top: -16px;
    left: -10px;
    border-radius: 6px 6px 0 0;
    background: black;
  }
  .eye {
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -32px;
    border-radius: 50%;
    background: black;
  }
  
  .eye::before {
    content: "";
    border: 3px solid #000;
    display: block;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: white;
    position: relative;
    left: 4px;
    top: 2px;
  }
  
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  
  .mouth {
    width: 180px;
    height: 180px;
    position: relative;
    left: 50%;
    top: 166px;
    margin-left: -90px;
  }
  
  .mouth .up .lit {
    position: absolute;
    z-index: 2;
    background: #ffe600;
    border: 2px solid black;
    height: 32px;
    width: 90px;
  }
  
  .mouth .up .left {
    border-color: transparent transparent black black;
    border-radius: 0px 0px 0px 88%;
    transform: rotate(-28deg);
  }
  
  .mouth .up .right {
    right: 0px;
    top: 0px;
    border-color: transparent black black transparent;
    border-radius: 0px 0px 88% 0px;
    transform: rotate(28deg);
  }
  
  .mouth .down {
    height: 166px;
    width: 100%;
    position: absolute;
    top: 10px;
    overflow: hidden;
  }
  .mouth .down .yuan1 {
    border: black 2px solid;
    height: 1000px;
    width: 150px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -75px;
    border-radius: 80px/300px;
    overflow: hidden;
    background: #9b000a;
  }
  .mouth .down .yuan1 .yuan2 {
    height: 1000px;
    width: 150px;
    position: absolute;
    top: 855px;
    left: 50%;
    margin-left: -75px;
    border-radius: 250px/300px;
    background: #ff485f;
  }
  .face {
    border: 2px solid black;
    height: 70px;
    width: 70px;
    position: absolute;
    left: 50%;
    top: 240px;
    z-index: 4;
    border-radius: 50%;
    background: red;
    margin-left: -35px;
  }
  .face.Left {
    transform: translateX(-144px);
  }
  .face.Right {
    transform: translateX(144px);
  }
  `;
let n = 1;
let time = 100;

demo.innerHTML = string.substr(0, n);

const run = () => {
  n += 1;

  if (n > string.length) {
    window.clearInterval(id);
  }

  demo.innerText = string.substr(0, n);
  demo2.innerHTML = string.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

const pause = () => {
  window.clearInterval(id);
};

const paly = () => {
  return setInterval(run, time);
};

let id = paly();

btnPause.onclick = () => {
  setTimeout(() => {
    pause();
  }, 0);
};

btnPlay.onclick = () => {
  setTimeout(() => {
    pause();
    id = paly();
  }, 0);
};
btnSlow.onclick = () => {
  setTimeout(() => {
    pause();
    time = 100;
    id = paly();
  }, 0);
};

btnNormal.onclick = () => {
  setTimeout(() => {
    pause();
    time = 30;
    id = paly();
  }, 0);
};
btnFast.onclick = () => {
  setTimeout(() => {
    pause();
    time = 0;
    id = paly();
  }, 0);
};
