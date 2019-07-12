// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    // Create elements
    var header = document.createElement('div'),
        headerDate = document.createElement('span'),
        headerTitle = document.createElement('h1'),
        headerTemp = document.createElement('span');

    // Add classes
    header.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    // Add content
    headerDate.textContent = 'MARCH 28, 2019';
    headerTitle.textContent = 'Lambda Times';
    headerTemp.textContent = '98°';

    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(headerTemp);

    return header;
}

document.querySelector('.header-container').appendChild(Header());
