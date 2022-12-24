import './style.css';
import {home} from './home';
import {contact} from './contact';
import {menu} from './menu';

/// Global Variable 
let page = home();

const header = ((page)=>{
    let header = document.createElement('div');

    let homeButton = document.createElement('button');
    let menuButton = document.createElement('button');
    let contactButton = document.createElement('button');

    homeButton.innerHTML="HOME";
    menuButton.innerHTML="MENU";
    contactButton.innerHTML="CONTACT";

    homeButton.addEventListener('click',()=>{
        page=home();
        render(header,page);
    });
    menuButton.addEventListener('click',()=>{
        page=menu();
        render(header,page);
    });
    contactButton.addEventListener('click',()=>{
        page=contact();
        render(header,page);
    });

    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(contactButton);
    return header;
})(page);

const render = ((header,page)=>{
    document.body.innerHTML="";
    let body = document.createElement('div');
    /// Add the Header and the current Page to the Body
    body.appendChild(header);
    body.appendChild(page);
    document.body.appendChild(body);
});
render(header,page);



