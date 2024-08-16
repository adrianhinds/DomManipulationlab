// Part 1: Getting Started
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');
//Part 2: Creating a Menu Bar
const topMenueEl = document.getElementById('top-menu');
topMenueEl.style.height = '100%';
topMenueEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenueEl.classList.add('flex-around');
//Part 3: Adding Menu Buttons
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  const subMenueEl =document.getElementById('sub-menu');
subMenueEl.style.height='100';
subMenueEl.style.backgroundColor= 'var(--sub-menu-bg)';
subMenueEl.classList.add('flex-around');
subMenueEl.style.position = "absolute";
subMenuEl.style.top = '0';

// Part 4 Adding Menu Interaction
let topMenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener("click", function(event) {
  event.preventDefault();
  if(!event.target.matches("a")) {
    return;
  }
  console.log('Works')
});
//Part 5: