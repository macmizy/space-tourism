// technology work

const btn1 = document.getElementById("1")
const btn2 = document.getElementById("2")
const btn3 = document.getElementById("3")
const techname = document.getElementById("techname")
const techp = document.getElementById("techp")
const image =document.getElementById("image")
const image1 = document.getElementById("image1")

btn1.addEventListener("click",async()=>{
    const result = await fetch("./data.json");
    const data = await result.json();


    btn1.setAttribute("aria-selected", true)
    btn2.setAttribute("aria-selected", false)
    btn3.setAttribute("aria-selected", false)

    techname.innerHTML = data.technology[0].name
    techp.innerHTML = data.technology[0].description
    image.src = data.technology[0].images.landscape
    image.alt = data.technology[0].name
    image1.src = data.technology[0].images.portrait
    image1.alt = data.technology[0].name
})

btn2.addEventListener("click",async()=>{
    const result = await fetch("./data.json");
    const data = await result.json();


    btn1.setAttribute("aria-selected", false)
    btn2.setAttribute("aria-selected", true)
    btn3.setAttribute("aria-selected", false)

    techname.innerHTML = data.technology[1].name
    techp.innerHTML = data.technology[1].description
    image.src = data.technology[1].images.landscape
    image.alt = data.technology[1].name
    image1.src = data.technology[1].images.portrait
    image1.alt = data.technology[1].name
})

btn3.addEventListener("click",async()=>{
    const result = await fetch("./data.json");
    const data = await result.json();


    btn1.setAttribute("aria-selected", false)
    btn2.setAttribute("aria-selected", false)
    btn3.setAttribute("aria-selected", true)

    techname.innerHTML = data.technology[2].name
    techp.innerHTML = data.technology[2].description
    image.src = data.technology[2].images.landscape
    image.alt = data.technology[2].name
    image1.src = data.technology[2].images.portrait
    image1.alt = data.technology[2].name
})