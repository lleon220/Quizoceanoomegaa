const quiz_Data = [
    {
        question: "Podemos notar que existem cinco oceanos, quais desses são os certos?",
        a: "Atlântico, Índico, Pacífico, Glacial Ártico e Glacial Antártico",
        b: "Atlântico, Índico, Pacífico, Glacial Ártico e Mediterrâneo",
        c: "Atlântico, Índico, Pacífico, Africano  ,Glacial Antártico",
        d: "Mar vermelho Índico, Pacífico, Glacial Ártico, Glacial Antártico",
        correct: "a"
    },
    {
        question : "O termo sete mares foi amplamente utilizado em diferentes culturas ao longo do tempo, os mares que vão ser citados são os sete mares?",
        a: "Egeu, Noruega, Mediterrâneo, Negro, Vermelho, Groenlândiae o Golfo Pérsico.",
        b: "Egeu, Adriático, Mediterrâneo, Negro, Vermelho, Cáspio e o Golfo Pérsico.",
        c: "Egeu, Adriático, Mediterrâneo, Negro, Vermelho, Coral e o Golfo Pérsico.",
        d: "Egeu, Adriático,Sul da China Negro, Vermelho, Coral e o Caribe.",
        correct: "b"
    },
    {
        question : "Qual desses é considerado o maior mar do mundo?",
        a: "Mar do Sul da China",
        b: "Mar de Bering",
        c: "Mar de Coral",
        d: "Mar do Japão",
        correct: "c"
    },
    {
        question : "Pesquisadores afirmam que há cerca de 300 milhões de anos as terras do planeta estavam reunidas, formando, portanto, apenas um continente. Marque a alternativa que corresponde ao nome desse grande continente.",
        a: "Eurásia",
        b: "Pangeia",
        c: "Laurásia",
        d: "Mesopotamia",
        correct: "b"
    },
    {
        question : "Quais desses são os 3 tipos de mares?",
        a: "Mares Abertos , Mares Mediterrâneos , Mares Aral",
        b: "Mares Abertos , Mares interiores , Mares Cáspio",
        c: "Mares fechados , Mares Abertos , Mares interiores",
        d: "Mares Abertos , Mares interiores, Mares adriáticos",
        correct: "c"  
    },
    {
        question : "O Brasil é banhado pelo Oceano Pacífico.",
        a: "Verdadeiro",
        b: "Falso",
        c: "",
        d: "",
        correct: "a"
    },
    {
        question : " Qual a maior batalha naval da Primeira Guerra Mundial?",
        a: "batalha actium",
        b: "Batalha da Jutlândia",
        c: "Golfo de Leyte",
        d: "Batalha de Stalingrado",
        correct: "b"
    },
    {
        question : "Um episódio famoso da participação brasileira foi a “Batalha das Toninhas” em 1918. O cruzado Bahia abriu fogo contra um cardume de toninhas nas proximidades de Gibraltar pensando se tratar de um submarino Americano.",
        a: "Verdadeiro",
        b: "Falso",
        c: "",
        d: "",
        correct: "a"
    },
    {
        question : "Qual é a Marinha mais antiga do mundo?",
        a: "Marinha portuguesa",
        b: "Marinha Alemã",
        c: "Marinha Americana",
        d: "Marinha Russa",
        correct: "a"
    },
    {
        question : "Qual foi a maior batalha naval da Segunda Guerra Mundial?",
        a: "Batalha do Golfo de Leyte",
        b: "Batalha do Mar das Filipinas.",
        c: "Batalha da Jutlândia",
        d: "Batalha do Rio da Prata.",
        correct: "a"
    },
    {
        question : "Qual a força naval mais poderosa do mundo?",
        a: "China",
        b: "Russia",
        c: "EUA",
        d: "França",
        correct: "a"
    },
    {
        question : "Qual foi o motivo da Guerra do Paraguai",
        a: "Expansão territorial",
        b: "Recursos financeiros",
        c: "Bacia Platina",
        d: "Minas e agricultura",
        correct: "c"
    }
]

const questionEl = document.getElementById('questions')
const answerEl = document.querySelectorAll('.answer')
const quiz = document.getElementById('quiz')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById("b_text")
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const button = document.getElementById('button')

let currentQuiz  = 0;
let score = 0
loadQuiz();

function loadQuiz(){
deleteCheck()
const currentQuizData = quiz_Data[currentQuiz]
if(currentQuizData){
questionEl.innerText = currentQuizData.question
a_text.innerText = currentQuizData.a
b_text.innerText = currentQuizData.b
c_text.innerText = currentQuizData.c
d_text.innerText = currentQuizData.d
}
}

function checkAnswer(){
    let answer = undefined
    answerEl.forEach(el =>{
        if(el.checked){
            answer =  el.id;
        }  
    } );
         return answer
}

function deleteCheck(){
    answerEl.forEach(el =>{
        el.checked = false;   
    } )
}

button.addEventListener("click", ()=>{
    const answer = checkAnswer()
    if(answer){
        
        if(answer === quiz_Data[currentQuiz].correct){
            score++
        }
        currentQuiz++;
        if(currentQuiz < quiz_Data.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `<h2>Você acertou ${score} / ${quiz_Data.length}</h2> <button onclick="location.reload()">Refazer</button>`
        }
    }
    
}) 