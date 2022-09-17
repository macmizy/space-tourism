
// crew work

const combtn = document.getElementById("commander")
const spebtn = document.getElementById("specialist")
const pilotbtn = document.getElementById("pilot")
const engbtn = document.getElementById("engineer")
const combtn1 = document.getElementById("commander1")
const spebtn1 = document.getElementById("specialist1")
const pilotbtn1 = document.getElementById("pilot1")
const engbtn1 = document.getElementById("engineer1")
const image1 = document.getElementById("imagee1")
const crewrole = document.getElementById("crewrole")
const crewname = document.getElementById("crewname")
const crewp = document.getElementById("crewp")
const image = document.getElementById("imagee")



combtn.addEventListener("click",async()=>{
    const result = await fetch("./data.json");
    const data = await result.json();


    combtn.setAttribute("aria-selected", true)
    spebtn.setAttribute("aria-selected", false)
    pilotbtn.setAttribute("aria-selected", false)
    engbtn.setAttribute("aria-selected", false)
    combtn1.setAttribute("aria-selected", true)
    spebtn1.setAttribute("aria-selected", false)
    pilotbtn1.setAttribute("aria-selected", false)
    engbtn1.setAttribute("aria-selected", false)

    image1.src = data.crew[0].images.webp
    image1.alt = data.crew[0].name
    image.src = data.crew[0].images.webp
    image.alt =data.crew[0].name
    crewname.innerHTML = data.crew[0].name
    crewrole.innerHTML = data.crew[0].role
    crewp.innerHTML = data.crew[0].bio

})

combtn1.addEventListener("click",async()=>{
    const result = await fetch("./data.json");
    const data = await result.json();


    combtn.setAttribute("aria-selected", true)
    spebtn.setAttribute("aria-selected", false)
    pilotbtn.setAttribute("aria-selected", false)
    engbtn.setAttribute("aria-selected", false)
    combtn1.setAttribute("aria-selected", true)
    spebtn1.setAttribute("aria-selected", false)
    pilotbtn1.setAttribute("aria-selected", false)
    engbtn1.setAttribute("aria-selected", false)

    image1.src = data.crew[0].images.webp
    image1.alt = data.crew[0].name
    image.src = data.crew[0].images.webp
    image.alt =data.crew[0].name
    crewname.innerHTML = data.crew[0].name
    crewrole.innerHTML = data.crew[0].role
    crewp.innerHTML = data.crew[0].bio

})

spebtn.addEventListener("click",async()=>{
    const result = await fetch("./data.json");
    const data = await result.json();


    combtn.setAttribute("aria-selected", false)
    spebtn.setAttribute("aria-selected", true)
    pilotbtn.setAttribute("aria-selected", false)
    engbtn.setAttribute("aria-selected", false)
    combtn1.setAttribute("aria-selected", false)
    spebtn1.setAttribute("aria-selected", true)
    pilotbtn1.setAttribute("aria-selected", false)
    engbtn1.setAttribute("aria-selected", false)

    image1.src = data.crew[1].images.webp
    image1.alt = data.crew[1].name
    image.src = data.crew[1].images.webp
    image.alt =data.crew[1].name
    crewname.innerHTML = data.crew[1].name
    crewrole.innerHTML = data.crew[1].role
    crewp.innerHTML = data.crew[1].bio

})

spebtn1.addEventListener("click",async()=>{
    const result = await fetch("./data.json");
    const data = await result.json();


    combtn.setAttribute("aria-selected", false)
    spebtn.setAttribute("aria-selected", true)
    pilotbtn.setAttribute("aria-selected", false)
    engbtn.setAttribute("aria-selected", false)
    combtn1.setAttribute("aria-selected", false)
    spebtn1.setAttribute("aria-selected", true)
    pilotbtn1.setAttribute("aria-selected", false)
    engbtn1.setAttribute("aria-selected", false)

    image1.src = data.crew[1].images.webp
    image1.alt = data.crew[1].name
    image.src = data.crew[1].images.webp
    image.alt =data.crew[1].name
    crewname.innerHTML = data.crew[1].name
    crewrole.innerHTML = data.crew[1].role
    crewp.innerHTML = data.crew[1].bio

})

pilotbtn.addEventListener("click",async()=>{
    const result = await fetch("./data.json");
    const data = await result.json();


    combtn.setAttribute("aria-selected", false)
    spebtn.setAttribute("aria-selected", false)
    pilotbtn.setAttribute("aria-selected", true)
    engbtn.setAttribute("aria-selected", false)
    combtn1.setAttribute("aria-selected", false)
    spebtn1.setAttribute("aria-selected", false)
    pilotbtn1.setAttribute("aria-selected", true)
    engbtn1.setAttribute("aria-selected", false)

    image1.src = data.crew[2].images.webp
    image1.alt = data.crew[2].name
    image.src = data.crew[2].images.webp
    image.alt =data.crew[2].name
    crewname.innerHTML = data.crew[2].name
    crewrole.innerHTML = data.crew[2].role
    crewp.innerHTML = data.crew[2].bio

})

pilotbtn1.addEventListener("click",async()=>{
    const result = await fetch("./data.json");
    const data = await result.json();


    combtn.setAttribute("aria-selected", false)
    spebtn.setAttribute("aria-selected", false)
    pilotbtn.setAttribute("aria-selected", true)
    engbtn.setAttribute("aria-selected", false)
    combtn1.setAttribute("aria-selected", false)
    spebtn1.setAttribute("aria-selected", false)
    pilotbtn1.setAttribute("aria-selected", true)
    engbtn1.setAttribute("aria-selected", false)

    image1.src = data.crew[2].images.webp
    image1.alt = data.crew[2].name
    image.src = data.crew[2].images.webp
    image.alt =data.crew[2].name
    crewname.innerHTML = data.crew[2].name
    crewrole.innerHTML = data.crew[2].role
    crewp.innerHTML = data.crew[2].bio

})

engbtn.addEventListener("click",async()=>{
    const result = await fetch("./data.json");
    const data = await result.json();


    combtn.setAttribute("aria-selected", false)
    spebtn.setAttribute("aria-selected", false)
    pilotbtn.setAttribute("aria-selected", false)
    engbtn.setAttribute("aria-selected", true)
    combtn1.setAttribute("aria-selected", false)
    spebtn1.setAttribute("aria-selected", false)
    pilotbtn1.setAttribute("aria-selected", false)
    engbtn1.setAttribute("aria-selected", true)

    image1.src = data.crew[3].images.webp
    image1.alt = data.crew[3].name
    image.src = data.crew[3].images.webp
    image.alt =data.crew[3].name
    crewname.innerHTML = data.crew[3].name
    crewrole.innerHTML = data.crew[3].role
    crewp.innerHTML = data.crew[3].bio

})

engbtn1.addEventListener("click",async()=>{
    const result = await fetch("./data.json");
    const data = await result.json();


    combtn.setAttribute("aria-selected", false)
    spebtn.setAttribute("aria-selected", false)
    pilotbtn.setAttribute("aria-selected", false)
    engbtn.setAttribute("aria-selected", true)
    combtn1.setAttribute("aria-selected", false)
    spebtn1.setAttribute("aria-selected", false)
    pilotbtn1.setAttribute("aria-selected", false)
    engbtn1.setAttribute("aria-selected", true)

    image1.src = data.crew[3].images.webp
    image1.alt = data.crew[3].name
    image.src = data.crew[3].images.webp
    image.alt =data.crew[3].name
    crewname.innerHTML = data.crew[3].name
    crewrole.innerHTML = data.crew[3].role
    crewp.innerHTML = data.crew[3].bio

})