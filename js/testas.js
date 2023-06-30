console.clear();

// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
console.log('\n ......  -1- ........');

const a = 5;
const b = 10;


function greaterOrEqual(val) {
    if (val > a) {
    return `Tavo skaičius yra didesnis.`;
    }
    if (val === a) {
    return `Mūsų skaičiai yra vienodi! 🤣`;
    }
    return `Mano skačius ${a} didesnis!`;
}

console.log(greaterOrEqual(12));
console.log(greaterOrEqual(5));

console.log(greaterOrEqual(1));
console.log(greaterOrEqual(-100));
console.log(greaterOrEqual(0));

// arba: 

function compare (a, b) {
    if(a > b){
        return `${a} yra daugiau už ${b}.`;
    }else if(a < b){
        return `${b} yra mažiau už ${a}.`;
    }else {
        return `Skaičiai ${a} ir ${b} yra lygūs!`;
    }
}
console.log(compare(a, b));




// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
console.log('\n ......  -2- ........');

for (let i = 1; i <= 10; i++) {
    console.log(i);
}




// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
console.log('\n ......  -3- ........');

for (let i = 0; i <= 10; i++) {
    if (i === 0 || i % 2 ===0) {
    console.log(i);
    }
}




// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.log('\n ......  -4- ........');


for (let i = 0; i < 5; i++) {
    const randomNo = Math.floor(Math.random() * 10) + 1;
    console.log(randomNo);
}




// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
console.log('\n ......  -5- ........');

let n = '';

while (n <= 10) {
    console.log(n = Math.floor(Math.random() * 10));
    if (n === 5) {
        break;
    }    
}




// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
console.log('\n ......  -6- ........');

const arr = [];

for (let i = 0; i <= 30; i++) {
    arr.push(Math.floor(9 + Math.random() * 20) + 1);
}

let res = 0;

for (let i = 0; i < arr.length; i++) {
    if (res < arr[i]) {
        res = arr[i];
    }
}

console.log(res);
// console.log(res, arr);



// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
console.log('\n ......  -7- ........');

const letters = [];

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;


for (let i = 0; i < 100; i++) {
    letters.push(Math.floor(Math.random() * 4));
}

for (let i = 0; i < letters.length; i++) {
    if (letters[i] === 0) {
        letters[i] = 'A';
        countA++;
    } else if (letters[i] === 1) {
        letters[i] = 'B';
        countB++;
    } else if (letters[i] === 2) {
        letters[i] = 'C';
        countC++;
    } else if (letters[i] === 3) {
        letters[i] = 'D';
        countD++;
    } 
}

//console.log(letters);

console.log(`Total: 
${countA} -> A; 
${countB} -> B; 
${countC} -> C; 
${countD} -> D.`);




// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas letters).
console.log('\n ......  -8- ........');

let sumNo = 0;
let sumArrL = 0;

function lygineSuma (a, b) {


    if ( 
        typeof a === 'null'||
        typeof a === 'NaN' || 
        typeof a === 'boolean'|| 
        typeof a === 'string' ||
        !isFinite(a)) {
        return 'ERROR: pirmas parametras privalo būti normalus skaičius arba masyvas.';
    }

    if (
        typeof b === 'null'||
        typeof b === 'NaN' || 
        typeof b === 'boolean' || 
        typeof b === 'string' ||
        !isFinite(b)) {
        return 'ERROR: antras parametras privalo būti normalus skaičius arba masyvas.';
    }

    if(typeof a === 'number' && typeof b === 'number'){
        sumNo = a + b;
        if(sumNo % 2 === 0){
            return `Skaičių suma: ${sumNo}`;
        }else{
            return `Skaičių suma: - nelyginė`;
        }
    }else if(typeof a === 'object' && typeof b === 'object'){
        sumArrL = a.length + b.length;
        if(sumArrL % 2 === 0){
            return `Masyvų ilgių suma: ${sumArrL}`;
        }else{
            return `Masyvų ilgių suma: - nelyginė`;
        }
    }
}


console.log(lygineSuma('labas', 2));
console.log(lygineSuma('5', 2));
console.log(lygineSuma([], 2));
console.log(lygineSuma(true, 2));
console.log(lygineSuma(false, 2));
console.log(lygineSuma(lygineSuma, 2));
console.log(lygineSuma(undefined, 2));
console.log('.............');
console.log(lygineSuma(7, 'labas'));
console.log(lygineSuma(7, '5'));
console.log(lygineSuma(7, []));
console.log(lygineSuma(7, true));
console.log(lygineSuma(7, false));
console.log(lygineSuma(7, lygineSuma));
console.log(lygineSuma(7, undefined));
console.log('.............');
console.log(lygineSuma(NaN, 2));
console.log(lygineSuma(Infinity, 2));
console.log(lygineSuma(-Infinity, 2));
console.log('.............');
console.log(lygineSuma(7, NaN));
console.log(lygineSuma(7, Infinity));
console.log(lygineSuma(7, -Infinity));
console.log('------------');
console.log(lygineSuma(2, 2), '->', 4);
console.log(lygineSuma(7, 5), '->', 12);
console.log(lygineSuma(-7, 5), '->', -2);
console.log(lygineSuma(7, -5), '->', 2);
console.log(lygineSuma(-7, -5), '->', -12);
console.log(lygineSuma(0, -5), '->', -5);
console.log(lygineSuma(0, 5), '->', 5);
console.log(lygineSuma(-5, 0), '->', -5);
console.log(lygineSuma(5, 0), '->', 5);
console.log(lygineSuma(0.5, 0.5), '->', 1);
console.log('.............');
// Failed the Test! 🤔
console.log(lygineSuma([5, 2], [2 , 3]), '->', 4);
console.log(lygineSuma([1, 2], [1 , 1, 5]), '->', 5);

console.log('------------');

// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)



// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
console.log('\n ......  -9- ........');


function yraPirminisSkaicius (num) {
    if (typeof a !== 'number' || !isFinite(a)) {
        return 'Galimi tik sveikieji skaičiai!';
    }

    if (num < 2) {
        return `Pateiktas skaičius ${num} nėra pirminis.`;
    }

    let root = Math.ceil(Math.sqrt(num));
    console.log(root); 

    for(let i = 2; i <= root; i++) {
        if (num % i === 0) {
            return  `Pateiktas skaičius ${num} nėra pirminis.`;
        }
    }
    return `Pateiktas skaičius ${num} yra pirminis`;
}

console.log(yraPirminisSkaicius(5));
console.log(yraPirminisSkaicius(127));
console.log(yraPirminisSkaicius(1));




// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų)
console.log('\n ......  -10- ........');

const tel = [3,7,0,5,5,5,2,3,5,5];
const tel2 = [+3705525551];
const tel3 = [37005563355];
const tel4 = [+37055555];
const tel5 = [+3,7,0,5,5,2,5,5,5,1];

let telefonoNumeris = (str) => {
    //Išrinkti numbers is masysvo:
    let cleanTel = ('' + str).replace(/\D/g, '');
        
    //Masyvo ilgis 10:
    let match = cleanTel.match(/^(\d{3})(\d{3})(\d{4})$/);
      
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        };
      
        return null
    };

console.log(telefonoNumeris(tel));
console.log(telefonoNumeris(tel2));
console.log(telefonoNumeris(tel3));
console.log(telefonoNumeris(tel4));
console.log(telefonoNumeris(tel5));




//Personal Notes: 

// arrPlusArr = (arr1, arr2) => arr1.concat(arr2).reduce((prev, curr) => prev + curr);

// console.log(arrPlusArr([2, 5, 7, 10,], [10, 20, 1, 2]), 57);


// function sumArr (a, b) {
//     return a.length + b.length; 
// }

// console.log(sumArr([2,4],[7,1,]), 14);

// const g = [2,4];
// console.log(typeof g);


    // randoNo.push(5); 
                    // +1 Math nebereiktu... 
    // randNo.splice(9, 1, 5);
    // const newArr = [...randNo, ...[5]]; 
                    // +1 Math nebereiktu...
    // const newArray =randNo.concact([5]);
                    //+1 Math nebereiktu...
    //  ????  //
    // randNo.push(5);

/* Nr8. pratimo bandymas:

function lygineSuma (a, b) {
    // if (typeof a !== 'number' || !isFinite(a)) {
        if (typeof 
        typeof a === 'null'||
        typeof a === 'NaN' || 
        typeof a === 'boolean'|| 
        typeof a === 'string' ||
        !isFinite(a)) {
        return 'ERROR: pirmas parametras privalo būti normalus skaičius arba masyvas.';
    }

    // if (typeof b !== 'number' || !isFinite(b)) {
        if (
        typeof b === 'null'||
        typeof b === 'NaN' || 
        typeof b === 'boolean' || 
        typeof b === 'string' ||
        !isFinite(b)) {
        return 'ERROR: antras parametras privalo būti normalus skaičius arba masyvas.';
    }

    if (typeof a !== typeof b) {
        return `ERROR: Kintamųjų tipai turi būti vienodi!`
    }

    if (typeof a === 'number' && typeof b === 'number') {
        if ((a + b) % 2 === 1) {
            return `Kintamųjų suma yra nelyginė.`;
        } else {
            return a + b;
        }

    if (typeof a === 'object' && typeof b === 'object') {
       if ((a.length + b.length) % 2 === 1) {
            return `Masyvų ilgių suma yra nelyginė.`;
        } else {
            return a.length + b.length;
        }
    }
    }
}
*/