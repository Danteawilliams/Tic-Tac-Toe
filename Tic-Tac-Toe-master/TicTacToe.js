/*
Screen Logic
*/
(function () {
    let nextMove = "X"
    const tds = document.querySelectorAll("#game tbody td");
    const message = document.getElementById("message");
    tds.forEach( e => {
        e.addEventListener("click", xOrO);
    });

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", resetBoard);

    function xOrO() {
        message.innerHTML = "";

        if(this.innerHTML != "?"){
            console.log({cheating: true});
            message.innerHTML = "Invalid Move";
            return;
        }

        this.innerHTML = nextMove;
        nextMove = nextMove == "X" ? "O" : "X";               
    }

    function resetBoard() {
        tds.forEach(e => {
            e.innerHTML = "?";
        });
        message.innerHTML = "";
    }
})();
