const icon = document.getElementById("icon");
const heartsContainer = document.getElementById('heartsContainer')
let isTabActive = true;

document.addEventListener('visibilitychange', () => {
  isTabActive = !document.hidden
})

function checkActiveSite() {
  return isTabActive
}

icon.addEventListener("click", () => {
  console.log(242)
  icon.classList.add("icon-animation")
})

icon.addEventListener('animationend', () => {
	createHeart();
})

function createHeart() {
  if ( !checkActiveSite()) return setTimeout(createHeart, 100);
  const heart = document.createElement("div");
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  const randomNum = +Math.random().toFixed(2);
  console.log(randomNum)
  const heartImg = document.createElement('img')
  heartImg.src =
		randomNum == 0.37
			? './assets/images/icons/викк копия.png'
			: randomNum == 0.29
			? './assets/images/icons/викк 2 копия.png'
			: randomNum == 0.77
			? './assets/images/icons/викк 3 копия.png'
			: './assets/images/icons/love-icon.svg';

  heartImg.style.transform = `rotate(${Math.random() * 45}deg)`
  
  heart.appendChild(heartImg);

  heartsContainer.appendChild(heart);
  
  heart.addEventListener('animationend', () => {
		heart.remove()
	});
  setTimeout(createHeart, 100)
  // createHeart()
}