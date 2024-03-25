function changeImage(){
    const images=[
        'url("images/1.jpg")',
        'url("images/2.avif")',
        'url("images/3.jpg")',
        'url("images/Rectangle\ 4.png")'
    ]

    const bgImage= document.getElementById("bgImage")

   const bg = images[Math.floor(Math.random()*images.length)]

   bgImage.style.backgroundImage = bg
   console.log('changed');
}

setInterval(changeImage,2000)