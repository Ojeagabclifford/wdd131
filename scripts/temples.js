const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');




hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



function setActive(activeLink) {
    //sets active navigation
    const links = document.querySelectorAll(".links");
    links.forEach((link) => link.classList.remove(".active"));
    activeLink.classList.toggle("active");
}





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


