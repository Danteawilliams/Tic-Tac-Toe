(function () {

    const tds = document.querySelectorAll("#game tbody td");
    const nXOrO = document.querySelectorAll("tbody td");
    const xOrO = Array.from(nXOrO);
    const message = document.getElementById("message");
    
    
    tds.forEach( e => {
        e.addEventListener("click", whoWon);
    });

    function whoWon() {
        let whichMove = this.innerHTML;
        
        if(xOrO[0].innerHTML == "X" && xOrO[1].innerHTML == "X" && xOrO[2].innerHTML == "X")
            endGame("X");
        if(xOrO[0].innerHTML == "O" && xOrO[1].innerHTML == "O" && xOrO[2].innerHTML == "O")
            endGame("O");
        if(xOrO[3].innerHTML == "X" && xOrO[4].innerHTML == "X" && xOrO[5].innerHTML == "X")
            endGame("X");
        if(xOrO[3].innerHTML == "O" && xOrO[4].innerHTML == "O" && xOrO[5].innerHTML == "O")
            endGame("O");
        if(xOrO[6].innerHTML == "X" && xOrO[7].innerHTML == "X" && xOrO[8].innerHTML == "X")
            endGame("X");
        if(xOrO[6].innerHTML == "O" && xOrO[7].innerHTML == "O" && xOrO[8].innerHTML == "O")
            endGame("O");
        
        if(xOrO[0].innerHTML == "X" && xOrO[3].innerHTML == "X" && xOrO[6].innerHTML == "X")
            endGame("X");
        if(xOrO[0].innerHTML == "O" && xOrO[3].innerHTML == "O" && xOrO[6].innerHTML == "O")
            endGame("O");
        if(xOrO[1].innerHTML == "X" && xOrO[4].innerHTML == "X" && xOrO[7].innerHTML == "X")
            endGame("X");
        if(xOrO[1].innerHTML == "O" && xOrO[4].innerHTML == "O" && xOrO[7].innerHTML == "O")
            endGame("O");
        if(xOrO[2].innerHTML == "X" && xOrO[5].innerHTML == "X" && xOrO[8].innerHTML == "X")
            endGame("X");
        if(xOrO[2].innerHTML == "O" && xOrO[5].innerHTML == "O" && xOrO[8].innerHTML == "O")
            endGame("O");

        
        if(xOrO[0].innerHTML == "X" && xOrO[4].innerHTML == "X" && xOrO[8].innerHTML == "X")
            endGame("X");
        if(xOrO[0].innerHTML == "O" && xOrO[4].innerHTML == "O" && xOrO[8].innerHTML == "O")
            endGame("O");
        if(xOrO[2].innerHTML == "X" && xOrO[4].innerHTML == "X" && xOrO[6].innerHTML == "X")
            endGame("X");
        if(xOrO[2].innerHTML == "O" && xOrO[4].innerHTML == "O" && xOrO[6].innerHTML == "O")
            endGame("O");
    }

    function endGame(winner) {
        message.innerHTML = winner + " IS THE WINNER!";
    }

})();