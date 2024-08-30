let btn3 = document.querySelector('#btn3');
let dialog = document.querySelector('dialog');
let cancelBtn = document.querySelector('#btn5');
let btn4 = document.querySelector('#btn4');
let container = document.querySelector('.demo');
let task = document.querySelector('#name');
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        })
        target.classList.add('active');
    })
})
btn3.addEventListener('click', function() {
    dialog.showModal();
})

cancelBtn.addEventListener('click', function() {
    dialog.close();
})

btn4.addEventListener('click', function(event) {
    let paragraph = document.createElement('div')
    let button = document.createElement("button")
    let button2 = document.createElement("button")
    button.innerHTML = "Add";
    button2.innerHTML = "Remove";
    paragraph.innerText = task.value;
    container.appendChild(paragraph);
    // container.appendChild(button);
    // container.appendChild(button2);
    paragraph.appendChild(button);
    paragraph.appendChild(button2);
    button2.addEventListener('click', function() {
        paragraph.remove();
    })
    button.addEventListener('click', function() {
        let dialog2 = document.createElement("dialog");
        let task = document.createElement('input')
        task.type = 'text';

        dialog2.showModal();
    })
})
