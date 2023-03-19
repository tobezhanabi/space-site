const navMenu = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const menuLink = document.querySelectorAll(".menuLink");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  const isOpen = hamburger.classList.contains("active");
  const openMenu = document.querySelector(".openMenu");
  const closeMenu = document.querySelector(".closeMenu");

  console.log("when");

  if (isOpen) {
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
  } else {
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
  }
}

// transfeing data
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const destinationImage = document.querySelector(".destination-image");
    const destinationName = document.querySelector(".destination-name");
    const destinationParagraph = document.querySelector(
      ".destination-paragraph"
    );
    const destinationDistance = document.querySelector(".destination-distance");
    const destinationTime = document.querySelector(".destination-time");
    const destinationLink = document.querySelectorAll(".destination-link");

    destinationLink.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const destinations = event.target.classList[1];
        console.log(destinations);
        updateContent(destinations);
      });
    });

    function updateContent(destinations) {
      const selectedDestination = data.destinations.find(
        (d) => d.name === destinations
      );

      if (!selectedDestination) {
        console.log(`${destinations} was not found`);
      }

      destinationImage.src = selectedDestination.images.png;
      destinationName.textContent = selectedDestination.name;

      destinationParagraph.textContent = selectedDestination.description;
      destinationDistance.textContent = selectedDestination.distance;
      destinationTime.textContent = selectedDestination.travel;
    }
  })
  .catch((error) => console.log(error));

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.crew);

    const crewImage = document.querySelector(".crew-picture");
    const crewRole = document.querySelector(".crew-role");
    const crewName = document.querySelector(".crew-name");
    const crewParagraph = document.querySelector(".crew-paragraph");
    const crewLinks = document.querySelectorAll(".crew-select");

    crewLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const crew = event.target.classList[1];
        console.log(`this${crew}`);
        updateCrew(crew);
      });
    });
    function updateCrew(crew) {
      const selectedCrew = data.crew.find((c) => c.role2 === crew);
      console.log("selectedCrew:", selectedCrew);
      console.log("crew:", crew);
      console.log(data.crew);
      if (!selectedCrew) {
        console.log(`${crew} is not found`);
      } else {
        crewImage.src = selectedCrew.images.png;
        crewName.textContent = selectedCrew.name;
        crewParagraph.textContent = selectedCrew.bio;
        crewRole.textContent = selectedCrew.role;
        console.log(crewName.textContent);
      }
    }
  })
  .catch((error) => console.log(error));

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const technologyName = document.querySelector(".technology-name");
    const technologyParagraph = document.querySelector(".technology-paragraph");
    const technologyImagePortrait = document.querySelector(
      ".technology-image-portrait"
    );
    const technologyImageLandscape = document.querySelector(
      ".technology-image-landscape"
    );
    const technologyLinks = document.querySelectorAll(".technology-link");

    technologyLinks.forEach((link) => {
      link.addEventListener("click");
    });
  });
