window.addEventListener('scroll', function(event){
    let scrollY = window.scrollY;
    if (scrollY > 50){
        this.document.querySelector('nav').classList.remove('transparent');
    }else{
        this.document.querySelector('nav').classList.add('transparent');
    }
})