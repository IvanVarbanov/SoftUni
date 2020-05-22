function solve() {
    let quizzie = document.getElementById('quizzie');
    let sections = document.getElementsByTagName('section');
    let resultUl = document.getElementById('results');
    let resultH1 = document.querySelector('#results h1');

    let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let corretAnswersCounter = 0;
    let currentStep = 0;

    quizzie.addEventListener('click', (e) => {
        if (e.target.className === 'answer-text') {
            if (correctAnswers.includes(e.target.innerText)) {
                corretAnswersCounter++;
            }

            sections[currentStep].style.display = 'none';

            currentStep++;
            if (currentStep < sections.length) {
                sections[currentStep].style.display = 'block';
            }
        }

        if (currentStep === 3) {
            resultH1.textContent = `You have ${corretAnswersCounter} right answers`;

            if (corretAnswersCounter === 3) {
                resultH1.textContent = 'You are recognized as top JavaScript fan!';
            }

            resultUl.setAttribute('style', 'display: block');
        }
    });
}
