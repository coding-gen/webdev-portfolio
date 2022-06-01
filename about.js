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

let para2 = document.createElement('p');
let text2 = document.createTextNode(`I am currently going back to school to get my Masters in Computer Science, with an expected graduation in June of 2023. I am combining my experience in databases and human languages, to specialize in Machine Learning for Natural Language Processing. The classes I am taking will help me to become a well rounded Data Engineer, and I hope to work in the area of automated translation of human languages. I am using final projects in my classes in order to build experience in the areas of NLP and translation.`)

let para3 = document.createElement('p');
let text3 = document.createTextNode(`Some highlights of my skills and work experience:`);

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
    console.log(bullet)
    skillsList.append(bullet);
}

let para4 = document.createElement('p');
let text4 = document.createTextNode(`I've won awards in previous roles for building and delivering trainings, for demonstrating remarkable growth and learning, and for ensuring customer success.`);

let para5 = document.createElement('p');
let text5 = document.createTextNode(`I'm also great at gardening and dog training! Ask me about home grown tomatoes to learn more (at your own risk)!`);

// para1.style.fontWeight = 'bold';

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

