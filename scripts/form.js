








const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  products.forEach(product => {
    const option = document.createElement("option");
    option.setAttribute("value",product.id);
    option.textContent = product.name
  
    document.querySelector("select").appendChild(option);
  })

  let formsSended = window.localStorage.getItem("forms") || 0


  const submit = document.getElementById('submitButton')
  submit.addEventListener('click'  , () => {
      formsSended++;
      window.localStorage.setItem("forms", formsSended);
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
  