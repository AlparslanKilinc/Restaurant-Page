import './style.css';
import './reset.css'
import {home} from './home';
import {about} from './about';
import {menu} from './menu';

/// Global Variable 
let page = home();

const ButtonFactory = (name)=>{
    let Button = document.createElement('button');
    Button.textContent=name;
    Button.addEventListener('click',()=>{
        if(name==="ABOUT")page=about();
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

    let box = document.createElement('div');
    box.className='box';

    let address = document.createElement('p');
    address.textContent="345 Midland St,";
    address.style.fontStyle='italic';
    
    let address2 = document.createElement('p');
    address2.textContent="NEW YORK, NY 10019";
    address2.style.fontStyle='italic';
    let phone = document.createElement('p');
    phone.textContent="631-943-9856";
    phone.style.fontStyle='italic';

    let divider = document.createElement('div');
    divider.className='divider';

    let giftCards = document.createElement('p');
    giftCards.textContent="GIFTS CARDS";

    let ourStory = document.createElement('p');
    ourStory.textContent="OUR STORY";

    let Hours = document.createElement('p');
    Hours.textContent="HOURS & LOCATION ";

    let community = document.createElement('p');
    community.textContent="COMMUNITY";

    let join = document.createElement('p');
    join.textContent="JOIN OUR TEAM";

    let reserve = document.createElement('p');
    reserve.textContent="RESERVE";

    let email = document.createElement('p');
    email.textContent="EMAIL SIGNUP";

    

    let menuButton = ButtonFactory("MENU");
    let aboutButton = ButtonFactory("ABOUT");
    let homeButton = ButtonFactory("HOME");

    box.appendChild(Name);
    box.appendChild(address);
    box.appendChild(address2);
    box.appendChild(phone);
   
    divider.appendChild(homeButton);
    divider.appendChild(giftCards);
    divider.appendChild(ourStory);
    divider.appendChild(Hours);
    divider.appendChild(menuButton);
    divider.appendChild(community);
    divider.appendChild(join);
    divider.appendChild(reserve);
    divider.appendChild(email);
    divider.appendChild(aboutButton);

    header.appendChild(box);
    header.appendChild(divider);
   
    return header;
})();

const render = ((header,page)=>{
    document.body.innerHTML="";
    document.body.appendChild(header);
    document.body.appendChild(page);
});

render(header,page);





