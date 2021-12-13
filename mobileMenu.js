let menu = document.querySelector('.hamburger-menu');
menu.addEventListener('click',event=>{
    let allElements = document.querySelectorAll('body *');
    
    let body = document.querySelector('body');
    // body.replaceChildren()
  
    
    Array.from(allElements).forEach((node)=>{
        
        node.setAttribute('style','display:none')
    })
    let showMenu = document.querySelector('.mobile-menu')
    console.log(showMenu)

    showMenu.setAttribute('style', 'display:block')

})