function solve() {
    let cards = document.querySelectorAll('img');
    let score = document.querySelectorAll('#result span');
    let topPlayer = score[0];
    let bottomPlayer = score[2];
    let history = document.getElementById('history');

    cards.forEach((card) => {
        card.addEventListener('click', (e) => {
            let imgName = e.target.src.split('/').pop();

            if (imgName === 'card.jpg') {
                console.log(e);
                let parentID = e.target.parentElement.id;
                card.setAttribute('src', 'images/whiteCard.jpg');
                if (parentID === 'player1Div') {
                    topPlayer.textContent = card.name;
                } else {
                    bottomPlayer.textContent = card.name;
                }
            }

            if (topPlayer.textContent && bottomPlayer.textContent) {
                if (Number(topPlayer.textContent) > Number(bottomPlayer.textContent)) {
                    cards.forEach((card) => {
                        let cardName = card.src.split('/').pop();
                        let parentId = card.parentElement.id;
                        if (cardName === 'whiteCard.jpg' && parentId === 'player1Div' && !card.hasAttribute('style')) {
                            card.setAttribute('style', 'border: 2px solid green');
                        }

                        if (cardName === 'whiteCard.jpg' && parentId === 'player2Div' && !card.hasAttribute('style')) {
                            card.setAttribute('style', 'border: 2px solid red');
                        }
                    });
                    addHistory(topPlayer.textContent, bottomPlayer.textContent);
                    topPlayer.textContent = '';
                    bottomPlayer.textContent = '';
                } else {
                    cards.forEach((card) => {
                        let cardName = card.src.split('/').pop();
                        let parentId = card.parentElement.id;
                        if (cardName === 'whiteCard.jpg' && parentId === 'player1Div' && !card.hasAttribute('style')) {
                            card.setAttribute('style', 'border: 2px solid red');
                        }

                        if (cardName === 'whiteCard.jpg' && parentId === 'player2Div' && !card.hasAttribute('style')) {
                            card.setAttribute('style', 'border: 2px solid green');
                        }
                    });
                    addHistory(topPlayer.textContent, bottomPlayer.textContent);
                    topPlayer.textContent = '';
                    bottomPlayer.textContent = '';
                }
            }
        });
    });

    function addHistory(player1, player2) {
        history.textContent += `[${player1} va ${player2}] `;
    }
}
