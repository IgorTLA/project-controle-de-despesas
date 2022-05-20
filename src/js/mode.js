const body = document.querySelector('body'),
    modeToggle = body.querySelector('.mode-toggle'),
    sidebar = body.querySelector('aside'),
    sidebarToggle = body.querySelector('.sidebar-toggle');

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
})

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('close')
})

//Adicionando Active class na tab selecionada
// const list = document.querySelectorAll('li')

// function activeLink() {
//     list.forEach((item) =>
//         item.classList.remove('active'))
//     this.classList.add('active')
// }

// console.log(activeLink())

// list.forEach((item) =>
//     item.addEventListener('click', activeLink))