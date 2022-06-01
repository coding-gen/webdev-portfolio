// Add your code here
let main = document.querySelector('main');
let content = document.createElement('div');
content.setAttribute('id', 'content');
content.style.margin = '0 auto';
content.style.textAlign = 'center';
main.append(content);

let image = document.createElement('IMG');
image.setAttribute('src', '2021_square_vsmall.jpeg');
image.setAttribute('height', '300');
image.setAttribute('width', '300');
image.setAttribute('alt', 'a welcoming picture of Genevieve');
image.style.borderRadius = '50%';
content.append(image);

let para1 = document.createElement('p');
let text1 = document.createTextNode(`Hello! My name is Genevieve and I'm in a web development class. Welcome to my site! When I'm not crafting state of the art webpages, I
enjoy gardening and walking my two dogs.`);
para1.classList.add('introText');

content.append(para1);
para1.append(text1);
content.append(para2);
para2.append(text2);
