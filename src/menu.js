
const itemFactory = ( (name,price,content)=>{
    let box = document.createElement('div');
    let nameBox = document.createElement('h2');
    let priceBox = document.createElement('div');
    let contentBox = document.createElement('div');
    nameBox.textContent=name;
    priceBox.textContent=price;
    contentBox.textContent=content;


    priceBox.style.fontWeight='bold';
    priceBox.style.fontStyle='italic';

    box.className='menuItem';
    box.appendChild(nameBox);
    box.appendChild(priceBox);
    box.appendChild(contentBox);

    return box;
})

const menu = (()=>{
    let menuPage = document.createElement('div');
    menuPage.className='menuPage';

    let header = document.createElement('h1');
    header.textContent='MENU';
    header.style.textAlign='center';

    let menuItems = document.createElement('div');
    menuItems.className='menu';

    let CafféAmericano= itemFactory('Caffé Americano','2.99$',
    "A shot of espresso combined with hot water");
    let RedEye= itemFactory('Red-eye','2.99$',
    'Filtered coffee combined with one shot of espresso');
    let CafféLatte = itemFactory('Caffé latte', '3.99$',
    'A double shot of espresso topped with steamed milk.');
    let Cappuccino = itemFactory('Cappuccino','2.99$',
    'A single shot of espresso topped with steamed and frothed milk.');
    let CinnamonLatte = itemFactory('Cinnamon Latte','3.75$',
    'Espresso with steamed milk. topped with cinnamon.');
    let PeppermintMocha = itemFactory('Peppermint Mocha','5.50$',
    'Peppermint and dark chocolate mocha topped with a dollop of whipped cream.');

    menuItems.appendChild(header);
    menuItems.appendChild(CafféAmericano);
    menuItems.appendChild(PeppermintMocha);
    menuItems.appendChild(CinnamonLatte);
    menuItems.appendChild(RedEye);
    menuItems.appendChild(CafféLatte);
    menuItems.appendChild(Cappuccino);
    menuPage.appendChild(header);
    menuPage.appendChild(menuItems);

    return menuPage;
})

export {menu};