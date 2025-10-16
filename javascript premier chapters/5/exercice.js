function favcolor(name, color){
    return name + " your fav color is " + color + ".";
}
console.log(favcolor("ismail", "black")); 

function numbers(a, b){
    return a + b;
}
console.log(numbers(8, 4));

function introduce(name, city){
    return "hello, my name is  " + name + " and i live at " + city + ".";
}
console.log(introduce("ismail", "tangier"));


function intro(name, age){
    if (age < 18){
        return name + " you are a junior";

    }else {
        return name + " your are a minor";
    
    }
}
console.log(intro("ismail", 17));

function deert(age){
    if (age < 18){
        return " you are a child ";
    }else if (age == 18){
        return " you are a teenager ";
    }else {
        return " you are an adult ";
    }
    
}
console.log(deert(15));
console.log(deert(18));
console.log(deert(20));


    function division(a, b){
        if (b != 0){
            return "result = " + a / b;
        }else{
            return "EROR";
        }
    }
console.log(division(10, 2));


function repeat(name, times) {
    for (var i = 0; i < times; i++) {
        console.log(i + 1 + " : hello, " + name + "!");

    }

}
repeat("ismail", 5);


function count(number){
    while (number > 0) {
        console.log(number);
        number = number - 2;
    }
    console.log("Go!");
}
count(10);

var i = 0;
while (true){
    console.log("loop number: " + i);
    i++;
    if (i > 7){
        break;
    }
}

var secret = 5;
var guess = 1;

while(true) {
    console.log(" trying guess: " + guess);

    if(guess === secret) {
        console.log(" found the secret number :" + secret);
        break;
    }
    guess++;
}


function countt(limit) {

var number = 1;
while(true) {
    console.log(number)
    if (number === limit){
        break;
    
    }
number++;
}
}
countt(7); 



function counttt(limit) {
    var number = 6;
    while(true) {
        console.log(number);
        if (number === limit) {
            break;
        }
        number--;
    }
}
counttt(1);

/* */
 function calculer(a, b, operation){
    if ( operation === "+"){
        return a + b;
    } else if ( operation === "-"){
        return a - b;
    } else if ( operation === "*"){
        return a * b;
    } else if ( operation === "/"){
        return a / b;
    } else {
        return " operation invalide "
    }
 }
 console.log(calculer(10, 12,"+"));
 console.log(calculer(10, 12,"-"));
 console.log(calculer(10, 12,"*"));
 console.log(calculer(10, 12,"/"));



function counts(limit) {
    var number = 2;
    while(number <= 10) {
        console.log(number);
        number = number + 2;
        }
        
    }
counts(10);


function start(go) {
    var number = 1;
    while(true) {
        console.log(number);
        if (number === 3){
            break;
        }
        number++;
    }
}
start(1);


function sum(limit1) {
    var i = 1;
    var total = 0;
    while (i <= limit1) {
       total = total + i;
       i++;   
    } 
    console.log(total);    
    }
sum(10);


function summ(limitt) {
    var y = 2;
    var totall = 0;
    while(y <= limitt) {
        totall = totall + y;
        y = y + 2;
    }
    console.log(totall);
}
summ(10);


function dome(limt) {
    var h = 1;
    var totl = 0;
    while(h <= limt) {
        totl = totl + h;
        h = h + 2;
    }
    console.log(totl);
}
dome(9)



function bro(limittt, type) {
    var tott = 0;
    if (type === "even") {
        var bo = 2;
        while (bo <= limittt) {
            tott = tott + bo;
            bo = bo + 2;
        }
    }else if (type === "odd") {
        var no = 1;
        while(no <= limittt) {
            tott = tott + no;
            no = no + 1;
        }
    }
    console.log(tott);
}
bro(6, "even");
bro(7, "odd");


function yu(limmm) {
    let h = 1;
    let tottt = 0;
    while (h <= limmm) {
        tottt = tottt + h;
        h++;
    }
    console.log(tottt);
}
yu(7);


function duh(limp) {
    let t = 1;
    let totll = 0;
    while (t <= limp) {
        totll = totll + t;
        t = t + 2;
    }
    console.log(totll);
}
duh(9);

function stars(size) {
    let rows = 1;
    while (rows <= size) {
        let line = "";
        let col = 1;
    while (col <= size) {
        line = line + "*";
        col++;
    } 
    console.log(line);
    rows++;  
    }
}
stars(5);


function facture(n) {
    let k = 5;
    let totaaal = 1;
    while (k >= 1) {
        totaaal = totaaal * k;
        k--;
    }
    console.log(" la facture de 5 est : " + totaaal);
}
facture(5);


function starss(sizz) {
    let row = 1;
    
        while (row <= sizz) {
            let linee = "";
            let cool = 1;

            while (cool <= sizz) {
            if (row === 1 || row === sizz){
                linee = linee + "*";
            }else {
                if (cool === 1 || cool === sizz) {
                    linee = linee + "*";
                }else {
                    linee = linee + " ";
                }
            }
            cool++;
                
            }

            console.log(linee);
            row++;
        }
        
}
 
starss(5);


function starsss(sizzz) {
    let roww = 1;
    
        while (roww <= sizzz) {
            let linnee = "";
            let cooll = 1;

            while (cooll <= roww) {
            if (roww === 1 || roww === sizzz){
                linnee += "*";
            }else {
                if (cooll === 1 || cooll === roww) {
                    linnee += "*";
                }else {
                    linnee += " ";
                }
            }
            cooll++;
                
            }

            console.log(linnee);
            roww++;
        }
        
}
 
starsss(5);


function sos(limmpp) {
    let z = 2;
    
    while (z <= 10) {
        console.log(z);
        z+= 2;
        
    }
}
sos(10);

 
function linnnee(roop) {
     let xo = 1;
     while (xo <= roop) {
     let lino = "" ;
     let s = 1;
     while (s <= xo) { 
        lino = lino + "*";
        s++;
    }
    console.log(lino)
    xo++;
    } 
    xo = roop - 1;
    while (xo >= 1) {
    let lino = "";
    let s = 1;
    while (s <= xo) {
        lino = lino + "*";
        s++;
    }
    console.log(lino);
    xo--;
}

}
 linnnee(4);


 function linnne(roopp) {
    let go = 1;
    while (go <= roopp) {
    let linoo = "" ;
    let o = 4;
    while (o >= go) { 
       linoo = linoo + "*";
       o--;
       
   } 
   console.log(linoo);
   go++;
} 
  
} 
linnne(4);


 function linnne(roopp) {
    let go = 1;
    while (go <= roopp) {
    let linoo = "" ;
    let o = 4;
    while (o >= go) { 
       linoo = linoo + "*";
       o--;
       
   } 
   console.log(linoo);
   go++;
} 
  
} 
linnne(4);



function diamond1(zise) {
    let v = 1;
    while (v <= zise) {
        let leni = "";

        let space = 1;
        while (space <= zise - v) {
            leni = leni + " ";
            space++;
        }
        console.log(leni);
        v++;    
    }
}
diamond1(4);


function diamond2(sozo) {
    let m = 1;
    while (m <= sozo) {
        let lono = "";

        let star = 1;
        while (star <= 2 * m - 1) {
            lono = lono + "*";
            star++;
        }
        console.log(lono);
        m++;
    }
}
diamond2(4);


function diamond3(soso) {
    let q = 1;
    while (q <= soso) {
        let nile = "";

        let spade = 1;
        while (spade <= soso - q) {
            nile = nile + " ";
            spade++;
        }

        let stak = 1;
        while (stak <= 2 * q - 1) {
            nile = nile + "*";
            stak++
        }
        console.log(nile);
        q++;
    }
}
diamond3(4);
