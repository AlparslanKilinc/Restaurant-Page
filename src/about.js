import './style.css';
import './reset.css';
import shop from './Food/shop.jpg';

const about = (()=>{
    let aboutPage = document.createElement('div');
    aboutPage.className='about';

    let header = document.createElement('h1');
    header.textContent="About Us";

    let box = document.createElement('div');
    box.className='about-box';
    

    let shopPic = document.createElement('img');
    shopPic.src=shop;

    let text = document.createElement('p');
    text.style.padding='1rem';
    text.textContent="It takes many hands to craft the perfect cup of coffee"+ 
    " from the farmers who tend to the red-ripe coffee cherries, to the master"+ 
    " roasters who coax the best from every bean, and to the barista who serves"+
    " it with care. We are committed to the highest standards of quality and"+
    " service, embracing our heritage while innovating to create new experiences to savor.";

    let learn = document.createElement('button');
    learn.textContent='Learn More';
    learn.className='learn';
  

    
    
    box.appendChild(text);
    box.appendChild(learn);
    aboutPage.appendChild(header);
    aboutPage.appendChild(shopPic);
    aboutPage.appendChild(box);

    return aboutPage;
})

export {about};