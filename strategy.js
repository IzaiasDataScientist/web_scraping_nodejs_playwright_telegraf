class Strategy {

    constructor(listTeamOne, listTeamTwo, scoreTeamOne, scoreTeamTwo) {
        this.listTeamOne = listTeamOne;
        this.listTeamTwo = listTeamTwo;
        this.scoreTeamOne = scoreTeamOne;
        this.scoreTeamTwo = scoreTeamTwo;
    }
    
    jogosNaoEmpatados() {
        if (this.scoreTeamOne != this.scoreTeamTwo) {
            return (this.listTeamOne + " x " + this.listTeamTwo + " => não esta empatado " + this.scoreTeamOne + " x " + this.scoreTeamTwo + "\n")
        }
    }

    jogosEmpatados() {
        if (this.scoreTeamOne === this.scoreTeamTwo) {
            return (this.listTeamOne + " x " + this.listTeamTwo + " => Jogo Empatado " + this.scoreTeamOne + " x " + this.scoreTeamTwo + "\n")
        }
    }

    maisGols() {
        if (Number(this.scoreTeamOne) + Number(this.scoreTeamTwo) > 3) {
            return (this.listTeamOne + " x " + this.listTeamTwo + " => Mais de 3 Gols " + this.scoreTeamOne + " x " + this.scoreTeamTwo + "\n")
        }
    }

    maiorDoisGols() {
        if (Number(this.scoreTeamOne) > 2 || Number(this.scoreTeamTwo) > 2) {
            return (this.listTeamOne + " x " + this.listTeamTwo + " => Maior que 2 Gols " + this.scoreTeamOne + " x " + this.scoreTeamTwo + "\n")
        }
    }    
}

export { Strategy };