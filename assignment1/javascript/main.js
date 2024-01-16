const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

// darkmode click on and off

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');

    if(this.classList.toggle('bi-brightness-high-fill')){

        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';

    }else{

        body.style.background = '#27354a';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});

//scrolls back to top

const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});


