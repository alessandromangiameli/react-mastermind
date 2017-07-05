export default function GameService() {
    
    this.generateCode = () => {
        this.code = [];
        for (let i = 0; i < 4; i++) {
            let randomNumber = Math.floor(Math.random() * 6) + 1;
            this.code.push(randomNumber);
        }
        return this.code;
    }

    this.makeRow = (id) => {
        return {
            id,
            holes : [0,0,0,0],
            results : [],
            status : false
        }
    }

    this.checkRow = (row) => {
        row.holes.forEach((item, index) => {
            if(item === this.code[index]) {
                row.status.push(1);
            }
        });

        if(row.status === [1,1,1,1]) {
            row.status = true;
        }
        return row;
    }

    return {
        generateCode: this.generateCode,
        makeRow : this.makeRow,
        checkRow : this.checkRow
    }
}