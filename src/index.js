import './style.css';
import {home} from './home';
import {contact} from './contact';
import {menu} from './menu';

/// Global Variable 
let page = home();

const header = ((page)=>{
    let header = document.createElement('div');
    header.className="header";

    let Name = document.createElement('h1');
    Name.textContent="Alpey's";

    let address = document.createElement('p');
    address.textContent="345 Midland St,";
    address.style.fontStyle='italic';
    let address2 = document.createElement('p');
    address2.textContent="NEW YORK, NY 10019";
    address2.style.fontStyle='italic';

    

    let homeButton = document.createElement('button');
    let menuButton = document.createElement('button');
    let contactButton = document.createElement('button');

    homeButton.textContent="HOME";
    menuButton.textContent="MENU";
    contactButton.textContent="CONTACT";

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
    header.appendChild(Name);
    header.appendChild(address);
    header.appendChild(address2);
    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(contactButton);
    return header;
})(page);

const render = ((header,page)=>{
    document.body.innerHTML="";
    document.body.appendChild(header);
    document.body.appendChild(page);
});
render(header,page);



