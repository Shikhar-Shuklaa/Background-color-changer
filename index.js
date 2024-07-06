let mydoc = document.getElementById('btn')
mydoc.addEventListener('click',()=>{
    let random = '#'+Math.floor(Math.random()*'0xFFFFFF').toString(16)
    document.body.style.backgroundColor = random
})