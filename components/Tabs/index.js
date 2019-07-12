// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(data => {
    createTabs(data.data.topics);
});

function createTabs(data) {
    var allTab = document.createElement('div');

    allTab.classList.add('tab');

    allTab.dataset.tab = 'all';

    allTab.textContent = 'All';

    document.querySelector('.topics').appendChild(allTab);

    data.forEach(item => {
        var listItem = document.createElement('div');

        listItem.classList.add('tab');

        listItem.dataset.tab = item;

        listItem.textContent = item;

        document.querySelector('.topics').appendChild(listItem);
    });
}

function selectCard(cardElement, dataType) {
    if (dataType === 'node.js') {
        dataType = 'node';
    }

    if (cardElement.dataset.tab === dataType) {
        cardElement.style.display = 'flex';
    }
}

function selectTab(e) {
    if (e.target.classList.contains('tab')) {
        const tabs = document.querySelectorAll('.tab');
        const type = e.target.dataset.tab;
        const cards = document.querySelectorAll('.card');

        tabs.forEach(tab => tab.classList.remove('active-tab'));
        cards.forEach(card => (card.style.display = 'none'));

        e.target.classList.add('active-tab');

        if (type === 'all') {
            cards.forEach(card => (card.style.display = 'flex'));
        } else {
            cards.forEach(card => selectCard(card, type));
        }
    }
}

document.querySelector('.tabs > .topics').addEventListener('click', e => selectTab(e));
