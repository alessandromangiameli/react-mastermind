export default function GameService() {
    
    
    this.generateCode = (allowDuplicate = false) => {
        this.code = []; 
        for (let i = 0; i < 4; i++) {
            let randomNumber = this.makeRandomNumber();
            if(!allowDuplicate) {
                while(this.code.indexOf(randomNumber) > -1) {
                    randomNumber = this.makeRandomNumber();
                }
            }
            this.code.push(randomNumber);
        }
        
        return this.code;
    }

    this.makeRandomNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
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
                row.results.push({
                    item,
                    value : 'ok'
                });           
            } else {
                if(this.code.indexOf(item) != -1) {
                    row.results.push({
                        item,
                        value : 'ko' 
                    });    
                } 
            }
        });

        if(row.results === [1,1,1,1]) {
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