//Declare Variables/ arikmetik
document.write('<h1>Declare Variables/ arikmetik</h1><br>');
let bayabas = 100;
bayabas = 50;
document.write('ang price ng bayabas'+' '+'ay '+bayabas);

const guava = 200;
console.log(guava);

let smallapple=10, bigapple=10, apple=0;

apple=smallapple+bigapple;
document.write('the sum of two numbers are '+apple+'<br>');

apple += 10;
document.write('the new total of apples are '+apple+'<br>');
apple -= 10;
document.write('the new total of apples are '+apple+'<br>');
apple *= 10;
document.write('the new total of apples are '+apple+'<br>');
apple /= 10;
document.write('the new total of apples are '+apple+'<br><br><br>');


//modulo
document.write('<h1>Modulo</h1><br>');
let pears = 75 % 80;
document.write('the remainder of apples are '+pears+'<br>');


//increment
document.write('<h1>Increment</h1><br>');
pears++;
document.write('the increment by 1 of apples are '+pears+'<br>');
pears++;
document.write('the increment by 1 of apples are '+pears+'<br>');

//decrement
document.write('<h1>Decrement</h1><br>');
pears--;
document.write('the increment by 1 of apples are '+pears+'<br>');
pears--;
document.write('the increment by 1 of apples are '+pears+'<br><br>');

// try to letters increment and decrement
// let fname='Raymond'; lname='Estrella';
// document.write(fname+' '+lname+'<br>')
// fname+=' M';
// document.write(fname+' '+lname+'<br>')
// lname +=' Magtibay';
// document.write(fname+' '+lname+'<br>')


let array = ["R",'a','y','m','o','n','d'];
document.write('<h1>Array</h1><br>');
document.write(array[0]);
document.write(array[1]+'<br>');
document.write(array[2]+'<br>');
document.write(array[3]+'<br>');
document.write(array[4]+'<br>');
document.write(array[5]+'<br>');
document.write(array[6]+'<br>');
document.write(array+'<br><br>');

let one=1;
document.write(one+'<br>');
one=2;
document.write(one+'<br>');
one += one;
document.write(one+'<br>');
one++;
document.write(one+'<br>');
one='Raymond';
document.write(one+'<br><hr>');

//epal lang to
let sum = 100 + 50;
document.getElementById("try").innerHTML = sum;

//toString Method
let name =["R",'a','y','m','o','n','d'];
document.write('<h5>ToStringMethod</h5>');
document.write('toString() Method: '+name.toString()+'<br><hr>');

//Join Method ' ' or | inside join
document.write('<h5>Tojoin</h5>');
let fname =["R",'a','y','m','o','n','d'];
document.write('Join() Method: '+fname.join('|')+'<br><hr>');

//Pop Method Remove Last Value
let pop = fname.pop();
document.write('<h5>PopMethod Remove Last Value</h5>');
document.write('Pop Method(): '+pop+'<br>');
document.write('already pop: '+fname.join('|')+'<br><hr>');

//push method insert to Last value
let push = fname.push(' (Edylene)');
document.write('<h5>PushMethod insert to Last value</h5>');
document.write('Push Method(): '+push+'<br>');
push=fname.push(' (Agulto)');
document.write('already Push: '+fname.join('')+'<br><hr>');

//shift method remove first value
let shift = fname.shift();
document.write('<h5>Shift Method remove first value</h5>');
document.write('Shift Method(): '+shift+'<br>');
document.write('already shift: '+fname.join('')+'<br><hr>');

//Unshift method add to first value
let unshift = fname.unshift('(R)');
document.write('<h5>Unshift method add value to first value</h5>');
document.write('UnShift Method(): '+unshift+'<br>');
document.write('already unshift: '+fname.join('')+'<br>');
fname.unshift('Val ');
document.write('already unshift: '+fname.join('')+'<br><hr>');

//Pinagsamang array (Concat)
let wife=['E','d','y','l','e','n','e'];
fname =["R",'a','y','m','o','n','d']; //already declared above fname, kaya walang let
let kasal = fname.concat(wife);
document.write('pinagsamang array(Concat): '+kasal.join('')+'<br>');

let surname=['Estrella','Agulto'];
let familyname = kasal.concat(surname);
document.write('Family Name(Concat): '+familyname.join('')+'<br><hr><hr><hr><hr>');





//Excersice for Join
let prutas = ['melon','mangga','ubas','pinya'];
document.write('Join(Separator): '+prutas.join('"')+'<br><hr>');
//Excersice for pop (remove Last index array)
let pop2 = prutas.pop();
document.write('Pop Function: '+pop2+'<br>');
document.write('Poped: '+prutas.join('+')+'<br><hr>');
//Excersice for push (Add to last index array)
let push2 = prutas.push('saging');
document.write('Push Function: '+push2+'<br>');
document.write('Pushed: '+prutas.join('-')+'<br><hr>');
//Excersice for shift (remove first index array)
let shift2=prutas.shift();
document.write('Shift Function: '+shift2+'<br>');
document.write('Shifted: '+prutas.join('/')+'<br><hr>');
//Excersice for unshift (add to first index array)
let unshift2=prutas.unshift('Pakwan');
document.write('Unshift Function: '+unshift2+'<br>');
document.write('Unshifted: '+prutas.join('*')+'<br><hr>');
//Excersice for concat
let gulay = ['Karot','Sili','Luya','bawang'];
let pinagsama = prutas.concat(gulay);
document.write('Pinagsama: '+pinagsama.join('===')+'<br><hr><hr><hr>');

//Testing
let pangalan = ['V','A','L'];
let delindexlast=pangalan.pop();
document.write('Poped: '+pangalan.join('+')+'<br><hr>');
let addindexlast=pangalan.push('LDO');
document.write('Pushed: '+pangalan.join('-')+'<br><hr>');
let delindexfirst=pangalan.shift();
document.write('Shifted: '+pangalan.join('\\')+'<br><hr>');
let addindexfirst=pangalan.unshift('VV');
document.write('Unshifted: '+pangalan.join('**')+'<br><hr>');

let apelido=['E','S','T'];
let sudlong=pangalan.concat(apelido);
document.write('Poped: '+sudlong.join('=')+'<br><hr>');


//Try it myself to insert data in array
let ako=[];
let output=ako.push('ako0');
document.write('Array: '+ako+'<br>');
output=ako.push('ako1');
document.write('Array: '+ako.join(' ')+'<br>');
output=ako.push('ako2');
document.write('Array: '+ako.join(' ')+'<br>');
output=ako.unshift('-ako1');
document.write('Array: '+ako.join(' ')+'<br>');
output=ako.unshift('-ako2');
document.write('Array: '+ako.join(' ')+'<br>');
//Try it myself to remove data in array
output=ako.pop();
document.write('Array: '+ako.join(' ')+'<br>');
output=ako.shift();
document.write('Array: '+ako.join(' ')+'<br>');
output=ako.shift();
document.write('Array: '+ako.join(' ')+'<br>');
output=ako.pop();
document.write('Array: '+ako.join(' ')+'<br>');
output=ako.push('ako1');
document.write('Array: '+ako.join(' ')+'<br>');
output=ako.push('ako2');
document.write('Array: '+ako.join(' ')+'<br>');
output=ako.push('ako3');
document.write('Array: '+ako.join(' ')+'<br><br>');

let me=['me0','me1','me2','me3'];
let merj=ako.concat(me);
document.write('Merging Array: '+merj.join(' ')+'</br>');
merj=me.concat(ako);
document.write('Merging Array: '+merj.join(' ')+'</br><hr>');

//change value by index
me[0]="Raymond";
me[2]="Estrella";
document.write(me.join(' ')+'<br><hr>');

//object
let motor={
    brand: "Skygo",
    model: "SG125",
    year: "2016",
    color: "black",
}
document.write('Motor Brand: '+motor.brand+'<br>');
document.write('Motor Model: '+motor.model+'<br>');
document.write('Motor Year: '+motor['year']+'<br>');
document.write('Motor Color: '+motor['color']+'<br><br>');
//change value of object
motor['brand']="Honda";
motor['model']="TMX-125";
motor.year="2022";
motor.color="White";
document.write('Motor Brand: '+motor.brand+'<br>');
document.write('Motor Model: '+motor.model+'<br>');
document.write('Motor Year: '+motor['year']+'<br>');
document.write('Motor Color: '+motor['color']+'<br><hr>');