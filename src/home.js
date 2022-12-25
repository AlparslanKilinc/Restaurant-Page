import './style.css';
import beans from './Food/beans.jpg';
import americano from './Food/americano.jpg';
import espresso from './Food/espresso.jpg';
import latte from './Food/latte.jpg';
import mocha from './Food/mocha.jpg';
import tea from './Food/tea.jpg';

const home = (()=>{
    let home = document.createElement('div');
    home.className='home';

    let bean = document.createElement('img');
    bean.src=beans;
    /// style 
    bean.style.gridColumn='1';
    bean.style.gridRow='1';



    let americanoPic = document.createElement('img');
    americanoPic.src=americano;
    /// style 
    americanoPic.style.gridColumn='2';
    americanoPic.style.gridRow='1';


    let lattePic = document.createElement('img');
    lattePic.src=latte;
    /// style 
    lattePic.style.gridColumn='3';
    lattePic.style.gridRow='1';

   

    let mochaPic = document.createElement('img');
    mochaPic.src=mocha;
    /// style 
    mochaPic.style.gridColumn='1';
    mochaPic.style.gridRow='2';


    
    let teaPic = document.createElement('img');
    teaPic.src=tea;
    /// style 
    teaPic.style.gridColumnStart='2';
    teaPic.style.gridColumnEnd='4';
    teaPic.style.gridRow='2';


    home.appendChild(bean);
    home.appendChild(teaPic);
    home.appendChild(lattePic);
    home.appendChild(americanoPic);
    home.appendChild(mochaPic);

    return home;
})

export {home};