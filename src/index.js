import './style.css';
import {home} from './home';
import {contact} from './contact';
import {menu} from './menu';

/// Global Variable 
let page = home();

const ButtonFactory = (name)=>{
    let Button = document.createElement('button');
    Button.textContent=name;
    Button.addEventListener('click',()=>{
        if(name==="CONTACT")page=contact();
        else if(name==="MENU")page=menu();
        else page=home();
        render(header,page);
    });
    return Button;
}

const header = (()=>{
    let header = document.createElement('div');
    header.className="header";

    let Name = document.createElement('h1');
    Name.className='name';
    Name.textContent="Alpey's";

    let address = document.createElement('p');
    address.textContent="345 Midland St,";
    address.style.fontStyle='italic';
    let address2 = document.createElement('p');
    address2.textContent="NEW YORK, NY 10019";
    address2.style.fontStyle='italic';
    let phone = document.createElement('p');
    phone.textContent="631-943-9856";
    phone.style.fontStyle='italic';

    let giftCards = document.createElement('h3');
    giftCards.textContent="GIFTS CARDS";

    let ourStory = document.createElement('h3');
    ourStory.textContent="OUR STORY";

    let Hours = document.createElement('h3');
    Hours.textContent="HOURS & LOCATION ";

    let community = document.createElement('h3');
    community.textContent="COMMUNITY";

    let join = document.createElement('h3');
    join.textContent="JOIN OUR TEAM";

    let reserve = document.createElement('h3');
    reserve.textContent="RESERVE";

    let email = document.createElement('h3');
    email.textContent="EMAIL SIGNUP";

    

    let menuButton = ButtonFactory("MENU");
    let contactButton = ButtonFactory("CONTACT");
    let homeButton = ButtonFactory("HOME");

   
    header.appendChild(Name);
    header.appendChild(address);
    header.appendChild(address2);
    header.appendChild(phone);
    header.appendChild(homeButton);
    header.appendChild(giftCards);
    header.appendChild(ourStory);
    header.appendChild(Hours);
    header.appendChild(menuButton);
    header.appendChild(community);
    header.appendChild(join);
    header.appendChild(reserve);
    header.appendChild(email);
    header.appendChild(contactButton);
    
    return header;
})();

const render = ((header,page)=>{
    document.body.innerHTML="";
    document.body.appendChild(header);
    document.body.appendChild(page);
});

render(header,page);





