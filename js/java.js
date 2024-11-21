// Leason 6
// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is:', banner.nodeType);
// console.log('#page-banner node name is:', banner.nodeName);
// console.log('#page-banner has child nodes:', banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

//Leason 7
// const bookList = document.querySelector('#book-list');

// console.log('book list parent element:', bookList.parentElement);
// console.log('book list parent node:', bookList.parentNode);

// console.log('all node children:');
// Array.from(bookList.childNodes).forEach(function(node){
//   console.log(node);
// });

// console.log('all element children:');
// Array.from(bookList.children).forEach(function(node){
//   console.log(node);
// });

// const titles = bookList.querySelectorAll('.name');

// console.log('Book titles:');
// Array.from(titles).forEach(function(title){
//   console.log(title.textContent);
// });
//Leason 8
// const bookList = document.querySelector('#book-list');

// console.log('#book-list next sibling:', bookList.nextSibling);
// console.log('#book-list next element sibling:', bookList.nextElementSibling);
// console.log('#book-list previous sibling:', bookList.previousSibling);
// console.log('#book-list previous element sibling:', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';
//Leason 9
// const listItems = document.querySelectorAll('#book-list ul li');

// Array.from(listItems).forEach(function(item){
//   item.addEventListener('click', (e) => {

//     const li = e.target.parentElement;
//     console.log('child element to remove:', li);
//     console.log('parent element to remove child from:', li.parentElement);
//     li.parentNode.removeChild(li);

//   });
// });

// // prevent default behaviour

// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', function(e){
//   e.preventDefault();
//   console.log('Navigation to', e.target.textContent, 'was prevented');
// });
//Leason 10
// const list = document.querySelector('#book-list ul');

// // delete books
// list.addEventListener('click', (e) => {
//   if(e.target.className == 'delete'){
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   }
// });