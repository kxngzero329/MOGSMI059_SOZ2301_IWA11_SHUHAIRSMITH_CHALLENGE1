const root1 = {
    order : document.querySelector('[data-key="order1"]'),
    biscuits : document.querySelector('[data-biscuits="10"]'),
    donuts : document.querySelector('[data-donuts="13"]'),
    pancakes : document.querySelector('[data-pancakes="0"]'),
    status : document.querySelector('[data-delivered="false"]'),
}

const count = document.querySelectorAll('.count')
const finalStatus = document.querySelectorAll('.status')

const biscuits1 = root1.biscuits.dataset.biscuits;
count[0].textContent = biscuits1;
const donuts1 = root1.donuts.dataset.donuts;
count[1].textContent = donuts1;
const pancakes1 = root1.pancakes.dataset.pancakes;
count[2].textContent = pancakes1;

const status1a = root1.status.dataset.status;
const status1b = status1a === "true" ? "Delivered" : "Pending...";
finalStatus[0].lastElementChild.textContent = status1b;

const root2 = {
    order : document.querySelector('[data-key="order2"]'),
    biscuits : document.querySelector('[data-biscuits="5"]'),
    donuts : document.querySelector('[data-donuts="0"]'),
    pancakes : document.querySelector('[data-pancakes="2"]'),
    status : document.querySelector('[data-delivered="false"]'),
    }

const biscuits2 = root2.biscuits.dataset.biscuits;
count[3].textContent = biscuits1;
const donuts2 = root2.donuts.dataset.donuts;
count[4].textContent = donuts2;
const pancakes2 = root2.pancakes.dataset.pancakes;
count[5].textContent = pancakes2;

const status2a = root2.status.dataset.status;
const status2b = status2a === "true" ? "Delivered" : "Pending...";
finalStatus[1].lastElementChild.textContent = status2b;

const root3 = {
    order : document.querySelector('[data-key="order3"]'),
    biscuits : document.querySelector('[data-biscuits="12"]'),
    donuts : document.querySelector('[data-donuts="11"]'),
    pancakes : document.querySelector('[data-pancakes="15"]'),
    status : document.querySelector('[data-delivered="true"]'),
    } 

const biscuits3 = root3.biscuits.dataset.biscuits;
count[6].textContent = biscuits3;
const donuts3 = root3.donuts.dataset.donuts;
count[7].textContent = donuts3;
const pancakes3 = root3.pancakes.dataset.pancakes;
count[8].textContent = pancakes3;

const status3a = root3.status.dataset.status;
const status3b = status3a === "true" ? "Delivered" : "Pending...";
finalStatus[2].lastElementChild.textContent = status3b;