"use strict";

const nav = document.querySelector(".nav");

const fixNav = () => {
  if (window.scrollY > nav.offsetHeight + 150) nav.classList.add("active");
  else nav.classList.remove("active");
};

window.addEventListener("scroll", fixNav);


for (const img of document.querySelectorAll("img")) {
	img.addEventListener('click', ev => {
		img.classList.toggle("active");
	})
}

myQuery.addEventListener('input', ev => {

	for(const result of document.querySelectorAll('.hidden')) {
		result.classList.remove('hidden');
	}

	const allSections = Array.from(document.querySelectorAll('main section'));

	const filteredSections = allSections.filter(section => {
		const name = section.dataset.name;
		return !name.includes(myQuery.value);
	});

	for (const section of filteredSections) {
		section.classList.add('hidden');
	}
});
