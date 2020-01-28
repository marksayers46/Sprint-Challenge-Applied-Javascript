// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let data = axios.get('https://lambda-times-backend.herokuapp.com/topics');
console.log(data);

function tabMaker(items) {
    let tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = items;

    return tab;
}

let topics = document.querySelector('.topics');
data.then(response => {
    response.data.topics.forEach(elem => {
        topics.appendChild(tabMaker(elem));
        console.log(response);
    })    
})
.catch((err) => {
    console.log(err);
})