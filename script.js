const quiz=[
    {
        question:"Q1.What is the full form of RAM?",
        a:"Remote Access Memory",
        b:"Random Access Memory",
        c:"Readable Access Memory",
        d:"Robotic Access Memory",
        ans:"ans2"
    },
    { 
        question:"Q2:What is smallest unit of the information?",
        a:"Bit",
        b:"Nibble",
        c:"Byte",
        d:"Kilobyte",
        ans:"ans1"
    },
    {
        question:"Q3.What is the speed of computer measured in?",
        a:"Megabytes",
        b:"10",
        c:"Gigahertz",
        d:"Nanoseconds",
        ans:"ans3"
    },
    {
        question:"Q4.Which of the following is the extension of Notepad?",
        a:".ppt",
        b:".xls",
        c:".png",
        d:".txt",
        ans:"ans4"
    },
    {
        question:"Q5.What is the full form of USB?",
        a:"Unshielded System Board",
        b:"Universal System Board",
        c:"Universal System Bus",
        d:"Unshielded System Board",
        ans:"ans3"
    }
];

const question=document.querySelector('.question');
const option1=document.querySelector('#opt1');
const option2=document.querySelector('#opt2');
const option3=document.querySelector('#opt3');
const option4=document.querySelector('#opt4');
const answers=document.querySelectorAll('.answer');
const submit=document.querySelector('#submit');
const score=document.querySelector('.scr');

let qC=0;

let yscore=0

const selectedAnswer=()=>{
    let answer;
    answers.forEach((Ele)=>{
        if(Ele.checked){
            
            answer=Ele.id;
        }
        
    });

    return answer;
}

const loadQuestion=()=>{
    question.innerHTML=quiz[qC].question;
    option1.innerHTML=quiz[qC].a;
    option2.innerHTML=quiz[qC].b;
    option3.innerHTML=quiz[qC].c; 
    option4.innerHTML=quiz[qC].d;
    
}


const clearOpt=()=>{
    answers.forEach(cE=>cE.checked=false);
}


loadQuestion();

submit.addEventListener('click',()=>{
    const answerS=selectedAnswer();
   
    if(answerS== quiz[qC].ans){
        yscore++;

    }

    clearOpt();

    qC++;

    if(qC<quiz.length){
    loadQuestion();    }
    else{
    showScore.innerHTML=`<h3>Your Score : ${yscore}/${quiz.length}</h3>`;
    }
})
