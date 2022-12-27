import './style.css';
import './reset.css';
import beans from './Food/beans.jpg';
import americano from './Food/americano.jpg';
import espresso from './Food/espresso.jpg';
import latte from './Food/latte.jpg';
import mocha from './Food/mocha.jpg';
import tea from './Food/tea.jpg';
import coffee from './Food/coffee.jpg';
import cup from './Food/cup.jpg';
import machine from './Food/machine.jpg';
import twoCups from './Food/2cups.jpg';
import icon from './Food/icon.svg';



const home = (()=>{
    let home = document.createElement('div');
    home.className='home';

    let bean = document.createElement('img');
    bean.src=beans;
    /// style 
    bean.style.gridColumn='1';
    bean.style.gridRow='1/2';

    let cups = document.createElement('img');
    cups.src=twoCups;
    /// style 
    cups.style.gridColumn='1/3';
    cups.style.gridRow='5/6';

    let americanoPic = document.createElement('img');
    americanoPic.src=americano;
    /// style 
    americanoPic.style.gridColumn='2';
    americanoPic.style.gridRow='1/2';


    let lattePic = document.createElement('img');
    lattePic.src=latte;
    /// style 
    lattePic.style.gridColumn='3';
    lattePic.style.gridRow='1/4';


    let coffeePic = document.createElement('img');
    coffeePic.src=coffee;
    /// style 
    coffeePic.style.gridColumn='4';
    coffeePic.style.gridRow='1/2';

    let cupPic = document.createElement('img');
    cupPic.src=cup;
    /// style 
    cupPic.style.gridColumn='4';
    cupPic.style.gridRow='2/5';



    /// Second Half
    let machinePic = document.createElement('img');
    machinePic.src=machine;
    /// style 
    machinePic.style.gridColumn='3/5';
    machinePic.style.gridRow='5/6';

   

    let mochaPic = document.createElement('img');
    mochaPic.src=mocha;
    /// style 
    mochaPic.style.gridColumn='2/3';
    mochaPic.style.gridRow='4/5';


    
    let teaPic = document.createElement('img');
    teaPic.src=tea;
    /// style 
    teaPic.style.gridColumn='1/3';
    teaPic.style.gridRow='2/4';

    let espressoPic = document.createElement('img');
    espressoPic.src=espresso;
    /// style 
    espressoPic.style.gridColumn='1/2';
    espressoPic.style.gridRow='4/5';


    /// Menu 
    let menuDiv = document.createElement('div');
    menuDiv.style.gridColumn='3/4';
    menuDiv.style.gridRow='4';
    menuDiv.className='menuDiv';
    
    let para = document.createElement('p');
    para.textContent="Whether you're searching for something new to warm your mug, seeking the best brew method for your favorite blend or exploring our rarest offerings, you’ve come to the right place.";
    para.style.fontSize='100%';
    menuDiv.appendChild(para);



    home.appendChild(bean);
    home.appendChild(cups);
    home.appendChild(teaPic);
    home.appendChild(cupPic);
    home.appendChild(coffeePic);
    home.appendChild(machinePic);
    home.appendChild(lattePic);
    home.appendChild(americanoPic);
    home.appendChild(mochaPic);
    home.appendChild(espressoPic);
    home.appendChild(menuDiv);

    return home;
});


export {home};