/* 
let count = 5;
const count1 = 10;
console.log(count)
console.log(count1)
let sum = count + count1;
console.log(sum)
let namenew = "nermin";
let sum2 = namenew + count
console.log(sum2);
count = 10

//exponentiation
let count2 = count ** 3;
console.log(count2);


//Modulus (Remainder)
let count3 = 25
let Modulus = 25 % 4
console.log(Modulus);

//let ile yaradilmis variable deyeri deyise biler ama eyni ad ile iki variable ola bilmez


//increment
let count4 = 5;
count4++;
console.log(count4);


//Decrement
let count5 = 6;
count5--;
console.log(count5);




//Assignment Operators
let count6 = 15;
count6 += 5;
console.log(count6);

//Object
let person = {
    color: 'white',
    legs: 2,
    eyes: 2,
    haircolor: 'black',
}
console.log(person.haircolor)


//data type
let num = 5;
console.log(typeof num);
let str = 'nerimo';
console.log(typeof str);
let bool = true;
console.log(typeof bool)
console.log(typeof person)



let array2 = [1, 'car', 52, 'javascript', ['hesen', 'memmed']];
console.log(array2);
console.log(array2.length);

array2[5] = 'html';
console.log(array2)

//lenght  elementlerin sayini gosterir
console.log(array2.length); //elements count
let result = array2.join('') //
console.log(result)

//pop and push 
let array3 = ['hi', 'hello', 'namaste'];
array3.pop() // delete last element
console.log(array3)

let array4 = ['hi', 'hello', 'namaste']
array4.push('good bye')
console.log(array4)




for (let i = 10; i > 3; i--) {
    console.log(i);
}


let array = [1, 'car', 52, 'javascript'];
for (let k = 0; k < array.length; k++) {
    console.log(array[k], k)
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let l = 0; l < array1.length; l++) {
    if (array1[l] % 2 == 0) {
        console.log(array1[l])
    }
}


//task1
let pragma = 135
let course = 120
console.log(pragma - course)
if (pragma - course > 10) {
    console.log('Deyer 10-dan coxdur')
} else if (pragma - course < 10) {
    console.log('Deyer 10-dan azdir')
} else if (pragma - course == 0) {
    console.log('Deyer 0')
} else {
    console.log('Deyer menfidir')
}



//task2
let nomre1 = 20
let nomer1 = 8
let sum1 = nomre1 + nomer1
console.log(sum1)
console.log(sum1 * 3)



//task3
let num2 = 50
let num3 = 'hello'
if (num2 == 50) {
    console.log('50')
}
if (num3 == 50) {
    console.log('50')
}


//task4
let metn = 'welcome'
console.log(metn.length)
if (metn.length > 5)
    console.log('correct')
else {
    console.log('incorrect')
}

//task5
let arr = [5, 2, 6, 7, 8, 12, 4, 9];
for (let g = 0; g < arr.length; g++) {
    if (arr[g] % 3 == 0) {
        console.log(arr[g])
    }
    let max = 0;
    if (arr[g] > max) {
        max = arr[g]
    }
    console.log(max);
}


//task6
let arr1 = ['j', 'a', 'v', 'a', 's', 'r', 'i', 'p', 't'];
for (let h = 0; h < arr1.length; h++) {
    console.log(arr1[h], h)
    if (arr1[h] == 'a') {
        console.log(" Arrayda 'a' herfi var ")
    } else {
        console.log("Array 'a' herfi yoxdu")
    }
}


let num4 = 35;
let num5 = 50;
if (num4 == 50 && num5 == 50) {
    console.log('50');
} else {
    console.log('50 deyil');
}


function sum(5, 15) {
    if (5 > 15) {
        return 5
    } else if (5 < 15) {
        return 15
    }
    return 5 + 15

}

console.log(sum)



let start = document.getElementById('start')
start.addEventListener('click', function() {
        let input = prompt('parametrleri daxil et');

        function param(a, b, c) {
            if (+) {
                return a + b
            } else if (-) {
                return
            } else if (/) {
                return a + b
            }
        }
        console.log(param))





    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let body = document.querySelector('body');


    body.appendChild(ul); ul.innerText = 'hello'; ul.appendChild(li); li.innerText = 'how are you'




    function my
    function(a, b, c) {
        if (a + b) {
            return a + b
        } else if (a - b) {
            return a
        } else if (a / b) {
            return b
        }
    }
}


let block = document.querySelector('.block');
for (let i = 0; i < 4; i++) {
    let miniblock = document.createElement('div');
    miniblock.classList.add('qutu');
    block.appendChild(miniblock);
}



block.addEventListener('click', (event) => {
    console.log(event.target);
    array = ["orange", "lightblue", "white", "coral", "purple"]
    randomreng = Math.floor(Math.random() * array.length);
    event.target.style.backgroundColor = array[randomreng];
})



let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');

btn1.addEventListener('click', () => {
    document.body.style.backgroundImage = "url ('img/slider-3.jpeg)";
});
console.log(btn1)

btn2.addEventListener('click', () => {
    document.body.style.backgroundImage = "url ('img/slider-2.jpeg)";
});
console.log(btn2);



let arr = ['elcin', 'gunel', 'movsum'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], i)
    let str = 'gunel';
    console.log(typeof str);
} 




const numbers = [25, 7, 4, 234, 67]
const deyisen = numbers.filter(function(x) {
    return x > 20
})

console.log(deyisen)

const names = ['hesen', 'eli', 'susa', 'gulnar']
console.log(names.filter(name => name.length > 4))




const users = [{
        name: "hesen",
        age: 30
    },
    {
        name: "gulnar",
        age: 29
    },
    {
        name: "gulsen",
        age: 32
    }
]
console.log(users.filter(user => user.age === 30))