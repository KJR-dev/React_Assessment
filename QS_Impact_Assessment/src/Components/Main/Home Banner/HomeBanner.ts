const get = (element: string): HTMLElement | null =>
  document.getElementById(element);

const dots = [get("dot1"), get("dot2"), get("dot3"), get("dot4")];
const headline = get("headline");
const tagline = get("tagline");
const description = get("description"); // Ensure description element
const hero = get("heroBanner");

const heroHeaders = [
  "IMPACT AWARDS",
  "GLOBAL DAY OF ACTION",
  "BE A COMMUNITY LEADER",
  "MAKE A DIFFERENCE",
];

const heroTaglines = [
  "Upload Your Impact Report",
  "Your actions matter",
  "Co-create solutions",
  "We Are A Charity",
];

const heroDescriptions = [
  "You may very well be eligible for one of our many prizes that reward youth impacts on their community - related to sustainability! Free for everyone to join",
  "Your actions matter Join us, and take action by composting this December 14th. Support a regenerative future for sustainability!",
  "Learn and collaborate with global leaders from Asia and Africa over weekly virtual calls!",
  "Help us build a regenerative future by investing in and rewarding youth who contribute to their communities",
];

let counter: number = 0;

dots.forEach((dot, index) => {
  dot?.addEventListener("click", () => {
    counter = index;
    changePage();
  });
});

setInterval(() => {
  counter = (counter + 1) % dots.length;
  changePage(); // Ensure changePage is being called
}, 5000);

function resetContainer() {
  dots.forEach((dot, index) => {
    dot?.classList.remove("activeDot");
    hero?.classList.remove(`hero${index + 1}`);
  });
}

function changePage() {
  resetContainer();
  if (headline && tagline && hero) {
    headline.innerHTML = heroHeaders[counter];
    tagline.innerHTML = heroTaglines[counter];
    if (description) {
      description.innerHTML = heroDescriptions[counter]; // Check if description exists
    }
    hero.classList.add(`hero${counter + 1}`);
    dots[counter]?.classList.add("activeDot");
  }
}
