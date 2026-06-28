// // closure
// // scopes
// // 3 types of scopes
// // global scope outside variable
// // function scope inside function variable
// //  block scope {}(let / const) -- var no scope


// let globalVar = "i am watching everyone"  // global scope
// function myFunction(){
//     let funcVar = "I am only in function" // function scope

//     if(true) {
//         let blockVar = "i am only in If-Block"    // block scope 
//         var varVar = "I am var i  ignore block"   // function scope

//         console.log(globalVar)
//         console.log(funcVar)
//         console.log(blockVar)
//     }

//     console.log(varVar)

// }

// myFunction()


//closure basic syntax

// outer function
// function outerfunction(){
//     let outervar = "i am outer"  //variable

//     //inner function
//     function innferfunction(){
//         console.log(outervar)

//     }
//     return innerfunction;
// }
// let myFunc = outerfunction()

// myFunc()

// function createCounter(startFrom = 0) {
//     let count = startFrom;
//     return {
//         increment(){count++; return count;},
//         decrement() {count--; return count;},
//         reset() {count =startFrom; return count;},
//         getcount() {return count;}

//     };
// }
// let cartCounter = createCounter(0);
// let visitorCount = createCounter(1000);

// console.log(cartCounter.increment())
// console.log(cartCounter.increment())
// console.log(cartCounter.decrement())

// console.log(visitorCount.increment())


//project2

// function makeGreeter (language){}
// let greetings = {
//     english: "hello",
//     urdu:"assalm alykom",
//     arabic: "Marhaba",
// };
// return function(name){
//     return `${greetings[language]}, ${name}!`
//     }


// let greetEnglish = makeGreeter(`english`);
// let greetUrdu = makeGreeter(`urdu`);
// let greetArabic = makeGreeter(`arabic`)

// console.log(greetArabic(`Hina`));
// console.log(greetEnglish(`nazish`));
// // consol.log(greetUrdu(`Izma`));

// //shopping cart

function createCart(pricePerItem) {
    let count = 0;          // private closure
    let history = [];       // private

    function logAction(action) {
        let time = new Date().toLocaleTimeString();
        history.push({ action, count, time });
        updateUI();
    }

    function updateUI() {
        document.getElementById("countDisplay").textContent = count;

        document.getElementById("totalDisplay").textContent =
            `Rs. ${(count * pricePerItem).toLocaleString()}`;

        const log = document.getElementById("logcontainer");

        log.innerHTML = history
            .slice(-5)
            .reverse()
            .map(
                (h) => `
                <div class="log-entry">
                    <span class="action ${h.action}">
                        ${h.action.toUpperCase()}
                    </span>
                    <span>Count: ${h.count}</span>
                    <span class="time">${h.time}</span>
                </div>
            `
            )
            .join("");
    }

    return {
        add() {
            count++;
            logAction("add");
        },

        remove() {
            if (count > 0) {
                count--;
            }
            logAction("remove");
        },

        reset() {
            count = 0;
            history = [];
            logAction("reset");
        },

        getTotal() {
            return count * pricePerItem;
        },

        getCount() {
            return count;
        }
    };
}

let cartAction = createCart(499);

console.log(cartAction.getCount()); // 0
console.log(cartAction.getTotal()); // 0

cartAction.add();
cartAction.add();

console.log(cartAction.getCount()); // 2
console.log(cartAction.getTotal()); // 998