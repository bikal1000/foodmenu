const breakfast = [
    {
        name: 'Natto (Japan)',
        price: '250.00',
        description: 'Fermented soy beans are classed as a delicacy in Japan and if you can get over the pungent cheesy smell, strong flavour and slimy mucus-like texture ',
        serveTime: '2',
        serveNos: '5',
        image: './assets/images/natto.jpg'
    },
    {
        name: 'Hagelslag (The Netherlands)',
        price: '350.00',
        description: 'These popular sprinkles (translated as hailstorm) come in a variety of shapes, sizes and flavours, including fruit and chocolate. ',
        serveTime: '6',
        serveNos: '8',
        image: './assets/images/hagelslag.jpg'
    },
    {
        name: 'Churros (Spain)',
        price: '450.00',
        description: 'Nothing beats churros and hot chocolate when falling out of a Spanish nightclub in the early hours. Similar to a long doughnut, they are deep fried',
        serveTime: '9',
        serveNos: '3',
        image: './assets/images/churros.jpg'
    },
]
const lunch = [
    {
        name: 'lunch 1',
        price: '250.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        serveTime: '2',
        serveNos: '5',
        image: './assets/images/lunch.jpeg'
    },
    {
        name: 'lunch 2',
        price: '350.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        serveTime: '6',
        serveNos: '8',
        image: './assets/images/lunch.jpeg'
    },
    {
        name: 'lunch 3',
        price: '450.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        serveTime: '9',
        serveNos: '3',
        image: './assets/images/lunch.jpeg'
    },
]
const dinner = [
    {
        name: 'dinner 1',
        price: '250.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        serveTime: '2',
        serveNos: '5',
        image: './assets/images/dinner.jpeg'
    },
    {
        name: 'dinner 2',
        price: '350.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        serveTime: '6',
        serveNos: '8',
        image: './assets/images/dinner.jpeg'
    },
    {
        name: 'dinner 3',
        price: '450.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        serveTime: '9',
        serveNos: '3',
        image: './assets/images/dinner.jpeg'
    },
]

const breakfastDiv = $('#breakfast .content-row');
const lunchDiv = $('#lunch .content-row');
const dinnerDiv = $('#dinner .content-row');
function dynamicFunc(name, price, description, serveTime, serveNos, image) {
    return ` 
    <div class="content-col">
    <figure class="content-img">
        <img src=${image} alt="dinner">
    </figure>
    <div class="content-detail">
        <h4 class="content-title">${name}</h4>
        <p>
           ${description}
        </p>
        <div class="misc-wraper">
            <div class="time">
                <img src="./assets/images/clock.png" alt=""> <span>${serveTime} min</span>
            </div>
            <div class="serve">
                <img src="./assets/images/fork.png" alt=""> <span>${serveNos} serve</span>
            </div>
        </div>
    </div>
    <div class="price-section">
        <p>Price</p>
        <h5 class="tag">Rs. ${price}</h5>
    </div>
</div>
    `;
}

breakfast.map(data => {
    const { name, image, price, description, serveNos, serveTime, } = data;
    breakfastDiv.append(dynamicFunc(name, price, description, serveTime, serveNos, image))
})

lunch.map(data => {
    const { name, image, price, description, serveNos, serveTime, } = data;
    lunchDiv.append(dynamicFunc(name, price, description, serveTime, serveNos, image))
});
dinner.map(data => {
    const { name, image, price, description, serveNos, serveTime, } = data;
    dinnerDiv.append(dynamicFunc(name, price, description, serveTime, serveNos, image))
})