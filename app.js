class Candy{
    constructor(container,{appearTime = 2500,disappearTime= 2500, offset = 0},{size = "100px"}, ...images){
        if(!container)
            throw "Please provide a container for the candy"
        if(images.length === 0)
            throw "You need to provide the images for the candy in an array"
        this.container = container
        this.candy = null
        this.appearTime = appearTime
        this.disappearTime = disappearTime,
        this.images = images
        this.size = size
        setTimeout(()=>{
            this.addCandy(this.candy)
        },offset)
    }
    
    getImageName(){
        const number = Math.floor(Math.random()*this.images.length)
        return this.images[number]
    }

    makeCandy(){
        const imageName = `candy/${this.getImageName()}.jpg`
        const imageNode = document.createElement("img")
        imageNode.src = imageName
        const top = Math.floor(Math.random()*96) + "vh"
        const left = Math.floor(Math.random()*96) + "vw"
        const rotation = Math.floor(Math.random()*180 - 90) + "deg"
        imageNode.style.width = this.size
        imageNode.style.height = this.size
        imageNode.style.borderRadius = "50%"
        imageNode.style.position = "absolute"
        imageNode.style.top = top
        imageNode.style.left = left
        imageNode.style.transform = "rotate( " + rotation + ")"
        return imageNode
    }
    
    addCandy(){
        this.candy = this.makeCandy()
        this.container.appendChild(this.candy)
        setTimeout(()=>{
            this.removeCandy()
        },this.appearTime)
    }
    
    removeCandy(){
        this.container.removeChild(this.candy)
        this.candy = null
        setTimeout(() =>{
            this.addCandy()
        },this.disappearTime)
    }
}

new Candy(document.querySelector("#wrapper"),{
    appearTime:5000,
    disappearTime: 10000,
    offset: 3000},
    {size : "50px"},
    "1","2","3")

new Candy(document.querySelector("#wrapper"),"1","2","3")