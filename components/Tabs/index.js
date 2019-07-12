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
    // Add 'All' tab
    var allTab = document.createElement('div');

    allTab.classList.add('tab');
    allTab.dataset.tab = 'all';
    allTab.textContent = 'All';

    document.querySelector('.topics').appendChild(allTab);

    // Add tabs relevant to remote data
    data.forEach(item => {
        var listItem = document.createElement('div');

        listItem.classList.add('tab');
        listItem.dataset.tab = item;
        listItem.textContent = item;

        document.querySelector('.topics').appendChild(listItem);
    });
}

function selectCard(cardElement, dataType) {
    // Accounting for inconsistent data-tab naming
    if (dataType === 'node.js') {
        dataType = 'node';
    }

    // Show relevant cards
    if (cardElement.dataset.tab === dataType) {
        cardElement.style.display = 'flex';
    }
}

function selectTab(e) {
    if (e.target.classList.contains('tab')) {
        // Grab some values
        const tabs = document.querySelectorAll('.tab');
        const type = e.target.dataset.tab;
        const cards = document.querySelectorAll('.card');

        // Make all tabs inactive and cards invisible
        tabs.forEach(tab => tab.classList.remove('active-tab'));
        cards.forEach(card => (card.style.display = 'none'));

        // Add class to clicked tab
        e.target.classList.add('active-tab');

        // Filter cards
        if (type === 'all') {
            cards.forEach(card => (card.style.display = 'flex'));
        } else {
            cards.forEach(card => selectCard(card, type));
        }
    }
}

// Start functionality
document.querySelector('.tabs > .topics').addEventListener('click', e => selectTab(e));
