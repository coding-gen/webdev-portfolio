let main = document.querySelector('.mainBox');
let content = document.createElement('div');
content.setAttribute('id', 'content');
content.style.width = '80%';
content.style.margin = '0 auto';
content.style.textAlign = 'center';
main.append(content);

let image = document.createElement('IMG');
image.setAttribute('src', '2021_square_vsmall.jpeg');
image.setAttribute('height', '300');
image.setAttribute('width', '300');
image.setAttribute('alt', 'a welcoming picture of Genevieve');
image.style.borderRadius = '50%';
image.classList.add('imgShadow');
content.append(image);

let para1 = document.createElement('p');
let text1 = document.createTextNode(`Hello! My name is Genevieve and I'm in a web development class. Welcome to my site!`);
para1.classList.add('introText', 'textLeft');


let para2 = document.createElement('p');
let text2 = document.createTextNode(`I am currently going back to school to get my Masters in Computer Science, with an expected graduation in June of 2023. I am combining my experience in databases and human languages, to specialize in Machine Learning for Natural Language Processing. The classes I am taking will help me to become a well rounded Data Engineer, and I hope to work in the area of automated translation of human languages. I am using final projects in my classes in order to build experience in the areas of NLP and translation.`)
para2.classList.add('textLeft');

let para3 = document.createElement('p');
let text3 = document.createTextNode(`Some highlights of my skills and work experience:`);
para3.classList.add('textLeft');

let skillsList = document.createElement('ul');
let tempList = [
    'Data Engineering',
    'Python for Data Science',
    'Database Performance and Query Processinge',
    'Distributed Cloud SQL Database Administration',
    'Linux Server Performance',
    'Human Languages (English, German, French, Spanish)',
    'Training and Documentation',
    'Community Building'
];
let bullet = document.createElement('li');
for (skill of tempList) {
    let bullet = document.createElement('li');
    bullet.append(skill);
    skillsList.append(bullet);
}
skillsList.classList.add('textLeft');


let para4 = document.createElement('p');
let text4 = document.createTextNode(`I've won awards in previous roles for building and delivering trainings, for demonstrating remarkable growth and learning, and for ensuring customer success.`);
para4.classList.add('textLeft');

let para5 = document.createElement('p');
let text5 = document.createTextNode(`I'm also great at gardening and training my two dogs. Ask me about home grown tomatoes to learn more (at your own risk)!`);
para5.classList.add('textLeft');

content.append(para1);
content.append(para2);
content.append(para3);
content.append(skillsList);
content.append(para4);
content.append(para5);

para1.append(text1);
para2.append(text2);
para3.append(text3);
para4.append(text4);
para5.append(text5);

let ghLink = document.createElement('a');
ghLink.setAttribute('href', 'https://github.com/coding-gen');
let ghIcon = document.createElement('i');
ghIcon.classList.add('fa', 'fa-github', 'iconLink');
ghIcon.style.fontSize = '60px';
ghLink.append(ghIcon);
content.append(ghLink);


let liLink = document.createElement('a');
liLink.setAttribute('href', 'https://github.com/coding-gen');
let liIcon = document.createElement('i');
liIcon.classList.add('fa', 'fa-linkedin', 'iconLink');
liIcon.style.fontSize = '60px';
liLink.append(liIcon);
content.append(liLink);