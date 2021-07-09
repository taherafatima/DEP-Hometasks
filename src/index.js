const args = require('yargs').argv;

class InvalidError extends Error {
    constructor(message) {
        super();
        this.name = "Invalid";
        this.message = message;
    }
}


const key = args.operation;
const valueslen = args._.length;
console.log(args);


switch(key){
    case 'addition':
        let sum = 0;
        for(let i = 0 ; i < valueslen ; i++)
            sum = sum + args._[i];
        console.log(sum);
        break;

    case 'multiply':
        let product = 1;
        for(let i = 0 ; i < valueslen ; i++)
            product = product * args._[i];
        console.log(product);
        break;   

    case 'subtraction':
        try {
            if(valueslen != 2)
                throw new InvalidError('Number of values must be only two.');
            
            let sub = args._[0] - args._[1];
            console.log(sub);
        } catch (err) {
            console.log(err.name + ":" + err.message);
        }
        break;

    case 'division':
        try {
            if(valueslen != 2)
                throw new InvalidError('Number of values must be only two.');
                try {
                    if(args._[1] === 0)
                        throw new InvalidError('Division by zero error. Second value should not be zero.')
                
                    let div = args._[0] / args._[1];
                    console.log(div);
                    
                    } catch (err){
                    console.error(err.name + ":" + err.message);
                }
        } catch (err) {
            console.log(err.name + ":" + err.message);
        }
        break;
        
    default :
        console.log("Invalid operation name. It must be addition/subtraction/multiply or division.");

}