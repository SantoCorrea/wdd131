document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

/* ############  MENU CLICK FUNCTION  ########### */

const menuButton = document.getElementById("menu");
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuButton.classList.toggle("open");
});

/*##################### TEMPLE OBJECTS ################## */
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 13900,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
},

{
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 107300,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
},

{
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
}
];

/*##################### RENDER TEMPLE CARDS ################## */
const figGrid = document.querySelector(".fig-grid");
const heading = document.querySelector("main h2");
const navLinks = document.querySelectorAll(".nav-menu a");

function displayTemples(templeArray, title) {
    
    figGrid.innerHTML = "";
    heading.textContent = title;

    templeArray.forEach((temple) => {
        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";

        const figcaption = document.createElement("figcaption");
        figcaption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        figGrid.appendChild(figure);
    });
}

/*##################### FILTER FUNCTIONS ################## */
function getYear(dateString) {
    
    return parseInt(dateString.split(",")[0].trim());
}

function filterTemples(type) {
    switch (type) {
        case "old":
            return temples.filter((t) => getYear(t.dedicated) < 1900);
        case "new":
            return temples.filter((t) => getYear(t.dedicated) > 2000);
        case "large":
            return temples.filter((t) => t.area > 90000);
        case "small":
            return temples.filter((t) => t.area < 10000);
        default:
            return temples;
    }
}

/*##################### NAV MENU CLICK HANDLING ################## */
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const type = link.textContent.trim().toLowerCase();

        if (type === "home") {
            displayTemples(temples, "Home");
        } else {
            const filtered = filterTemples(type);
            const title = link.textContent.trim();
            displayTemples(filtered, title);
        }

        
        navMenu.classList.remove("open");
        menuButton.classList.remove("open");
    });
});

/*##################### INITIAL LOAD ################## */
displayTemples(temples, "Home");