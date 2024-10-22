const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');




hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


  







const currentDate = new Date(); 

const current_time = currentDate.toLocaleDateString("en-US", {
    year: "numeric", 
    month: "short", 
    day: "numeric", 
    hour: "numeric", 
    minute:"numeric", 
    hour12: true
}) 

document.getElementById("currentyear").innerHTML = "Last Modification:"+current_time;












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


    // Add more temple objects here...

    {templeName: "Provo Utah United state",
    location: "Provo Utah United state",
    dedicated: "1972, February, 9",
    area: 4876
  ,
   imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-utah/400x250/provo-temple-767801-wallpaper.jpg"
},


    {templeName: "Accra Ghana Acrra",
        location: "Accra Ghana Acrra",
        dedicated: " 2004 January 11",
        area: 17500
      ,
       imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
},

{templeName: "Atlanta Georgia Atlanta",
    location: "Atlanta Georgia Atlanta",
    dedicated: " 1983 June 1-4",
    area: 34500 
  ,
   imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/400x250/atlanta-temple-lds-811746-wallpaper.jpg"

},

{templeName: "Bern Switzerland",
    location: "Bern Switzerland",
    dedicated: "1955 September 11–15",
    area: 35546 
  ,
   imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784290-wallpaper.jpg"

},
{templeName: "Asunción Paraguay ",
    location: "Asunción Paraguay ",
    dedicated: "2002 May 19",
    area: 11906
  ,
   imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/1-68dfd881f93cb86e99828aa547eac056189c55ff.jpeg"

},

]


// old temples\

const oldTemples = temples.filter(temple =>{
    const dedicatedYear = parseInt(temple.dedicated.split(',')[0], 10)
    return dedicatedYear< 1900

});


const newTemples = temples.filter(temple =>{
    const dedicatedYear = parseInt(temple.dedicated.split(',')[0], 10)
    return dedicatedYear < 2000

});


const largeTemples = temples.filter(temple => temple.area>90000);

const smallTemples = temples.filter(temple => temple.area<10000);


const allTemples = temples;


const templeContainer = document.getElementById('temple-container');

function displayTemples(templeArray) {
    const templeContainer = document.getElementById('temple-container');
    templeContainer.innerHTML = '';
  
    templeArray.forEach(temple => {
      const templeCard = document.createElement('div');
      templeCard.className = 'temple-card';
  
      templeCard.innerHTML =
            `<div class="card">
        <h3>${temple.templeName}</h3>
        <table>
            <tr>
                <th>Location:</th>
                <td>${temple.location}</td>
            </tr>
            <tr>
                <th>Dedicated:</th>
                <td>${temple.dedicated}</td>
            </tr>
            <tr>
                <th>Size:</th>
                <td>${temple.area} sq ft</td>
            </tr>
        </table>
        <img loading="lazy" src="${temple.imageUrl}" width="268" height="168" alt="${temple.templeName} Temple">
    </div>`
  
  
      templeContainer.appendChild(templeCard);
    });
  }

    document.getElementById('old').addEventListener('click',(event)=>{
        event.preventDefault();
        displayTemples(oldTemples)

    });
    document.getElementById('new').addEventListener('click',(event)=>{
        event.preventDefault();
        displayTemples(newTemples)

    });
    document.getElementById('large').addEventListener('click',(event)=>{
        event.preventDefault();
        displayTemples(largeTemples)

    });
    document.getElementById('small').addEventListener('click',(event)=>{
        event.preventDefault();
        displayTemples(smallTemples)

    });
    document.getElementById('home').addEventListener('click',(event)=>{
        event.preventDefault();
        displayTemples(allTemples)

    });



displayTemples(allTemples);


function setActive(activeLink) {
    //sets active navigation
    const links = document.querySelectorAll(".navLink");
    links.forEach((link) => link.classList.remove("active"));
    activeLink.classList.toggle("active");
}


