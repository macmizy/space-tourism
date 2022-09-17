// destinations work

const moonbtn = document.getElementById('moon')
const marsbtn = document.getElementById('mars')
const europabtn = document.getElementById('europa')
const titanbtn = document.getElementById('titan')

let desth2 = document.getElementById("desth2")
let destp = document.getElementById("destp")
let destkilo = document.getElementById("destkilo")
let destdays = document.getElementById("destdays")
let destimg = document.getElementById("destimg")



moonbtn.addEventListener("click", async()=>{
    const result = await fetch("./data.json");
    const data = await result.json();

    moonbtn.setAttribute("aria-selected", true)
    marsbtn.setAttribute("aria-selected", false)
    europabtn.setAttribute("aria-selected", false)
    titanbtn.setAttribute("aria-selected", false)

    destimg.src = data.destinations[0].images.webp;
    destimg.alt = "moon"
    desth2.innerHTML = data.destinations[0].name;
    destp.innerHTML = data.destinations[0].description;
    destkilo.innerHTML = data.destinations[0].distance;
    destdays.innerHTML = data.destinations[0].travel;
})

marsbtn.addEventListener("click",async()=>{
    const result = await fetch("./data.json");
    const data = await result.json();


    moonbtn.setAttribute("aria-selected", false)
    marsbtn.setAttribute("aria-selected", true)
    europabtn.setAttribute("aria-selected", false)
    titanbtn.setAttribute("aria-selected", false)

    destimg.src = data.destinations[1].images.webp;
    destimg.alt = "mars"
    desth2.innerHTML = data.destinations[1].name;
    destp.innerHTML = data.destinations[1].description;
    destkilo.innerHTML = data.destinations[1].distance;
    destdays.innerHTML = data.destinations[1].travel;
})

europabtn.addEventListener("click",async()=>{
    const result = await fetch("./data.json");
    const data = await result.json();


    moonbtn.setAttribute("aria-selected", false)
    marsbtn.setAttribute("aria-selected", false)
    europabtn.setAttribute("aria-selected", true)
    titanbtn.setAttribute("aria-selected", false)

    destimg.src = data.destinations[2].images.webp;
    destimg.alt = "europa"
    desth2.innerHTML = data.destinations[2].name;
    destp.innerHTML = data.destinations[2].description;
    destkilo.innerHTML = data.destinations[2].distance;
    destdays.innerHTML = data.destinations[2].travel;
})

titanbtn.addEventListener("click",async()=>{
    const result = await fetch("./data.json");
    const data = await result.json();


    moonbtn.setAttribute("aria-selected", false)
    marsbtn.setAttribute("aria-selected", false)
    europabtn.setAttribute("aria-selected", false)
    titanbtn.setAttribute("aria-selected", true)

    destimg.src = data.destinations[3].images.webp;
    destimg.alt = "titan"
    desth2.innerHTML = data.destinations[3].name;
    destp.innerHTML = data.destinations[3].description;
    destkilo.innerHTML = data.destinations[3].distance;
    destdays.innerHTML = data.destinations[3].travel;
})