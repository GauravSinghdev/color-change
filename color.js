

const arr = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F'];



const p = document.querySelector("#btn1")

p.addEventListener("click", () => {
    console.log("pressed")
    let str = "#";
    for(let i=0;i<6;i++)
    {
        str +=  arr[Math.floor(Math.random()*arr.length)];
    }

    console.log(str);
    
    document.querySelector("body").style.background = str;

    
})

const b = document.querySelector("#btn2");

b.addEventListener("click", () => {
    console.log("pressed")
    let str = "#";
    for(let i=0;i<6;i++)
    {
        str +=  arr[Math.floor(Math.random()*arr.length)];
    }

    console.log(str);
    
    document.querySelector(".container").style.background = str;

    if(str === "#320F15" || str === "#460957")
    {
        document.querySelector("h3").style.color = "#FFFFFF";
    }
})