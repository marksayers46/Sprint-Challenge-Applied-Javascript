// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


function Header() {
    let header = document.createElement('div');
    let date = document.createElement('span');
    let title = document.createElement('h1');
    let temp = document.createElement('span');
    let numbers = '98';
    let degree = 'o';
    
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = `MARCH 28, 2019`;
    title.textContent = `Lambda Times`;
    temp.innerHTML = numbers + '<sup>' + degree + '</sup>';

    return header;
}

let headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());