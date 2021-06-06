// Needed data for the Quiz
let data = [
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
        question: "Which ocean lies on the east coast of the United States?",
        choice: ["Eastern", "Pacific", "Indian", "Atlantic"],
        answer: "Atlantic"
    },

    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
        question: "Which is the world's highest mountain?",
        choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
        answer: "Mount Everest"
    },

    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
        question: "Which of these cities is not in Europe?",
        choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
        answer: "Moscow"
    },

    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
        question: "True or False: Iceland is covered in ice.",
        choice: [true, false],
        answer: false
    },

    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "The United Kingdom is comprised of how many countries?",
        choice: [1, 2, 3, 4],
        answer: 4
    },

    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "Which of the following countries do not border France?",
        choice: ["Germany", "Netherlands", "Spain", "Italy"],
        answer: "Netherlands"
    },

    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
        question: "Which U.S. state is the Grand Canyon located in?",
        choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
        answer: "Arizona"
    },

    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
        question: "Which is the smallest country, measured ™by total land area?",
        choice: ["Maldives", "Monaco", "Vatican"],
        answer: "Vatican"
    },

    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
        question: "Which is the longest river in the world?",
        choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
        answer: "Nile River"
    },

    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
        question: "Which is the largest body of water?",
        choice: ["indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Nile River"],
        answer: "Pacific Ocean"
    }
]



// It a JS-Project, so I wanted to "flex" and show my "new-Skills"
document.querySelector('body').style.backgroundImage =  'jassets/img/quizbg.png';
document.querySelector('body').style.backgroundSize = "50%";
document.querySelector('body').style.backgroundRepeat = "repeat";




// Create Elements from JS to HTML
let content = document.getElementById('content');
let contentWrap = document.createElement('div', { className: 'contentWrap' });
let container = document.createElement('div');
let header = document.createElement('figure');
let headerLogo = document.createElement('img');
let audio = document.createElement('audio');
let quizAudio = document.createElement('source');
let tooltip = document.createElement('span');



// Using a tooltip for the gamer 
let tooltiptext = document.createTextNode('For more "game-time" feeling, you can play some audio if you like');



// For more "game-time" feeling unsing some audio and with controls and a loop for a better UX, 
// so the user has the choice if he wants to hear some game sound
audio.setAttribute('controls', true);
audio.setAttribute('loop', true);
headerLogo.src = 'assets/img/quiz-logo.png';
quizAudio.src = 'assets/audio/audio.m4a';



// Id's, and Class needed for styling with CSS
content.id = 'hero';
container.id = 'container';
header.id = 'header';
headerLogo.id = 'headerLogo';
contentWrap.className = 'contentWrap';
tooltip.className = 'tooltiptext';
audio.id = 'myAudio';



// Putting the Element together 
content.appendChild(container);
container.appendChild(header);
header.appendChild(headerLogo);
document.getElementById('container').appendChild(contentWrap);
header.appendChild(audio);
audio.appendChild(quizAudio);
header.appendChild(tooltip);
tooltip.appendChild(tooltiptext);



// Game function: using forEach for the data
data.forEach((element) => {

    let img = document.createElement('img');
    img.src = element.url;
    document.querySelector('.contentWrap').appendChild(img);

    let questionTag = document.createElement('h3');
    question = element.question;
    let questionQuiz = document.createTextNode(question);
    questionTag.appendChild(questionQuiz);
    document.querySelector('.contentWrap').appendChild(questionTag);

    let answerChoice = element.choice;
    answerChoice.forEach(choice => {
        let answerBtn = document.createElement('button');
        answerBtn.innerHTML = choice;
        document.querySelector('.contentWrap').appendChild(answerBtn);

        answerBtn.addEventListener('mouseup', () => {
            if (choice === element.answer) {
                answerBtn.classList.add('correct')
            } else {
                answerBtn.classList.add('wrong');
            }
        })
    })

});



// Trying to put some spice for the wring answer. But the confetti-canon will not work :( 
// tried to return the function an insert to the "if" but still not working..s
// function randomInRange(min, max) {
//     return Math.random() * (max - min) + min;
// }

// confetti({
//     angle: randomInRange(55, 125),
//     spread: randomInRange(50, 70),
//     particleCount: randomInRange(50, 100),
//     origin: { y: 0.6 }
// });



