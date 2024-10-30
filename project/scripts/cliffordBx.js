

  







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

const mes = document.querySelector('.c')
const form = document.querySelector('form')

form.addEventListener('submit', (e) =>
{
  e.preventDefault();
  const fd = new FormData(form);
  for (item of fd){
    const obj = Object.fromEntries(fd);
    const json = JSON.stringify(obj);
    localStorage.setItem('form',json);

    alert(`Thanks for proving your detials:${obj.name} 
    Email:${obj.email} `)
    document.getElementById('names').innerHTML = `
     Your comment: ${obj.written}`;
  }
})







