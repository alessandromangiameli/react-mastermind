export default function GameService() {
    this.generateCode = () => {
        let code = [];
        for (let i = 0; i < 4; i++) {
            let randomNumber = Math.floor(Math.random() * 6) + 1;
            code.push(randomNumber);
        }

        return code;
    }

    return {
        generateCode : this.generateCode
    }
}
