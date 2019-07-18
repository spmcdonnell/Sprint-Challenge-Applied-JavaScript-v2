// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(data => {
    const cardArticles = data.data.articles;
    const cardsContainer = document.querySelector('.cards-container');

    // Build out cards with proper data attribute and stick in DOM
    for (key in cardArticles) {
        cardArticles[key].forEach(card => {
            cardsContainer.appendChild(createCard(card, key));
        });
    }
});

function createCard(data, category) {
    const { headline, authorPhoto, authorName } = data;
    // Create elements
    var card = document.createElement('div'),
        cardHeadline = document.createElement('div'),
        authorBox = document.createElement('div'),
        imageBox = document.createElement('div'),
        image = document.createElement('img'),
        author = document.createElement('span');

    // Add classes
    card.classList.add('card');
    cardHeadline.classList.add('headline');
    authorBox.classList.add('author');
    imageBox.classList.add('img-container');

    // Add content
    card.dataset.tab = category;
    cardHeadline.textContent = headline;
    image.src = authorPhoto;
    author.textContent = `By ${authorName}`;

    // Build card
    card.appendChild(cardHeadline);
    card.appendChild(authorBox);
    authorBox.appendChild(imageBox);
    authorBox.appendChild(author);
    imageBox.appendChild(image);

    return card;
}
