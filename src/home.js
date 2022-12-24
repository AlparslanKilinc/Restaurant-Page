import './style.css';

const home = (()=>{
    let home = document.createElement('div');
    home.className='page';
    home.innerHTML="Hello";

    return home;
})

export {home};