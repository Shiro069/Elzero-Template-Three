let otherLinks = document.querySelector(".main-nav .mega");
let megaMenu = document.querySelector(".mega-menu");
otherLinks.addEventListener("click", (e) => {
	megaMenu.classList.toggle("hovered");
});

// Events CountDown Timer
let days = document.querySelector(".events .time .days");
let hours = document.querySelector(".events .time .hours");
let minutes = document.querySelector(".events .time .minutes");
let seconds = document.querySelector(".events .time .seconds");

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
	let currentDate = new Date().getTime();

	let dateDiff = countDownDate - currentDate;

	let theDays = Math.ceil(dateDiff / (1000 * 60 * 60 * 24));

	let theHours = Math.floor(
		(dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);

	let theMinutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

	let theSeconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

	days.innerHTML = theDays;
	hours.innerHTML = theHours < 10 ? `0${theHours}` : theHours;
	minutes.innerHTML = theMinutes < 10 ? `0${theMinutes}` : theMinutes;
	seconds.innerHTML = theSeconds < 10 ? `0${theSeconds}` : theSeconds;
}, 1000);

// Animating Progress on scroll and increasing the numbers
// animate progress
let ourSkills = document.querySelector(".our-skills");
let progSpans = document.querySelectorAll(".our-skills .progress span");

// animate numbers
let statsSection = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .number");

let started = false;
function StartCounting(el) {
	let goal = el.dataset.goal;
	let counter = setInterval(() => {
		el.textContent++;
		if (el.textContent === goal) {
			clearInterval(counter);
		}
	}, 2000 / goal);
}
window.onscroll = function () {
	// animate progress on scroll
	if (window.scrollY >= ourSkills.offsetTop - 210) {
		progSpans.forEach((progSpan) => {
			progSpan.style.width = progSpan.dataset.width;
		});
	}

	// increase numbers
	if (window.scrollY >= statsSection.offsetTop - 270) {
		if (!started) {
			nums.forEach((num) => StartCounting(num));
		}
		started = true;
	}

	// Start title animation
	let articles = document.querySelector(".articles");
	if (window.scrollY >= articles.offsetTop - 330) {
		document
			.querySelector(".articles .main-title")
			.classList.add("active-title");
	}
	let gallery = document.querySelector(".gallery");
	if (window.scrollY >= gallery.offsetTop - 330) {
		document
			.querySelector(".gallery .main-title")
			.classList.add("active-title");
	}
	let features = document.querySelector(".features");
	if (window.scrollY >= features.offsetTop - 330) {
		document
			.querySelector(".features .main-title")
			.classList.add("active-title");
	}
	let testimonials = document.querySelector(".testimonials");
	if (window.scrollY >= testimonials.offsetTop - 330) {
		document
			.querySelector(".testimonials .main-title")
			.classList.add("active-title");
	}
	let team = document.querySelector(".team");
	if (window.scrollY >= team.offsetTop - 330) {
		document.querySelector(".team .main-title").classList.add("active-title");
	}
	let services = document.querySelector(".services");
	if (window.scrollY >= services.offsetTop - 330) {
		document
			.querySelector(".services .main-title")
			.classList.add("active-title");
	}
	if (window.scrollY >= ourSkills.offsetTop - 330) {
		document
			.querySelector(".our-skills .main-title")
			.classList.add("active-title");
	}
	let workSteps = document.querySelector(".work-steps");
	if (window.scrollY >= workSteps.offsetTop - 330) {
		document
			.querySelector(".work-steps .main-title")
			.classList.add("active-title");
	}
	let events = document.querySelector(".events");
	if (window.scrollY >= events.offsetTop - 330) {
		document.querySelector(".events .main-title").classList.add("active-title");
	}
	let pricing = document.querySelector(".pricing");
	if (window.scrollY >= pricing.offsetTop - 330) {
		document
			.querySelector(".pricing .main-title")
			.classList.add("active-title");
	}
	let videos = document.querySelector(".videos");
	if (window.scrollY >= videos.offsetTop - 330) {
		document.querySelector(".videos .main-title").classList.add("active-title");
	}

  // Btn to up
  let btn = document.querySelector(".scroll-to-top-btn")
  if (window.scrollY >= 600) {
    btn.style.display = 'block'
  } else {
    btn.style.display = 'none'
  }
  btn.onclick = function () {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    })
  }
};
// End title animation

// Start Color Setting
let setting = document.querySelector(".setting");
setting.onclick = function () {
	setting.classList.toggle("active");
	document.querySelector(".setting i").classList.toggle("hidden");
};
let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
	box.addEventListener("click", (e) => {
		boxes.forEach((box) => {
			box.classList.remove("active");
		});
		e.currentTarget.classList.add("active");
		window.localStorage.setItem("color", e.currentTarget.dataset.color.split(" ")[1]);
		window.localStorage.setItem("altColor", e.currentTarget.dataset.color.split(" ")[0]);
		document.documentElement.style.setProperty("--main-clr",e.currentTarget.dataset.color.split(" ")[1]);
		document.documentElement.style.setProperty("--alt-clr",e.currentTarget.dataset.color.split(" ")[0]);
	});
});
if (window.localStorage.getItem("color") || window.localStorage.getItem("altColor")) {
	document.documentElement.style.setProperty("--main-clr",window.localStorage.getItem("color"));
	document.documentElement.style.setProperty("--alt-clr",window.localStorage.getItem("altColor"));
	boxes.forEach((box) => {
		box.classList.remove("active");
	});
  document.querySelector(`[data-color="${localStorage.getItem("altColor")} ${localStorage.getItem("color")}"]`);
}
// End Color Setting

// Header Links
let links = document.querySelectorAll(".header .link");
Array.from(links).forEach((link) => {
  link.style.cursor = "pointer"
  link.addEventListener("click", (e) => {
    megaMenu.classList.remove("hovered");
    let linkOffSet = document.querySelector(`.${link.dataset.place}`).offsetTop
    window.scrollTo({
      left: 0,
      top: linkOffSet,
      behavior: 'smooth',
    })
  })
})
document.querySelector(".go-down").onclick = function () {
  window.scrollTo({
    left: 0,
    top: document.querySelector(".articles").offsetTop,
    behavior: "smooth",
  })
}
document.body.classList.add("nothing");
document.querySelector(".project-info input").onclick = () => {
	document.querySelector(".project-info").remove();
	document.body.classList.remove("nothing");
}