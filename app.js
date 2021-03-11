const totalCandy = 3
const wrapper = document.querySelector("#wrapper")

const getCandy = () =>{
    const imageName = "candy/" + Math.floor(Math.random()*totalCandy+1) + ".jpg"
    const imageNode = document.createElement("img")
    imageNode.src = imageName
    imageNode.classList.add("candy")
    const top = Math.floor(Math.random()*96) + "vh"
    const left = Math.floor(Math.random()*96) + "vw"
    const rotation = Math.floor(Math.random()*180 - 90) + "deg"
    imageNode.style.top = top
    imageNode.style.left = left
    imageNode.style.transform = "rotate( " + rotation + ")"
    return imageNode
}

const addCandy = (candy) =>{
    wrapper.appendChild(candy)
}

const removeCandy = (candy) =>{
    wrapper.removeChild(candy)
}

let candy = null;

setInterval(()=>{
    if(!candy){
        candy = getCandy()
        addCandy(candy)
    }else{
        removeCandy(candy)
        candy = null
    }
},2500)
