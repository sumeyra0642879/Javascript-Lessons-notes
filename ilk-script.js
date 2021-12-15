document.write("<p>merhaba</p>")


//burası header için yazıldı
//console.log    ("Merhaba from");
//console.log("ggggggggggggggggggggggggggggggggggggggggggscript");

//alert("Sayfada uyarı mesajı")
//window.alert("Sayfada uyarı mesajı")

var firstNameMehmet= "Mehmet";
let lastNameMehmet= "türk";
const age = 47;

// console.log("Mehmet 46 yaşında");
console.log(firstNameMehmet , age , "yaşında");

let school= "lale";
console.log(school);

//Pascal Case
let FirstName = "Mehmet"; // geçerli

//Camel Case
let firstName = "Mehmet"; // tavsiye

//Snake Case 
let first_name = "Mehmet"; // geçerli

//Kebap Case
//let first-name = "Mehmet" // CSS'de kullanıyoruz

console.log(FirstName, firstName, first_name);

firstName = "Mustafa"; // yukarıda let olduğu için tekrar atanabilir

console.log(firstName);

const lastName = "Demir";
console.log(lastName);
var ageAyse = "35";

// lastName = "kara"  //// yukarıda const olduğu için tekrar atanamaz!
// console.log(lastName); //çalışmaz

console.log(ageAyse);

//var ageAyse= "42"; // yukarda atanmış değer olduğu halde tekrar atama yaptı var'a! sıkıntı!
//console.log(age);


let team1= "şahin", team2="doğan", team3="kartal", team4="atmaca"
console.log(team1 + team2 + team3, team4); // + birleştiriyor.  "," ayrı olduğunu ifade ediyor.

console.log(age+5);
console.log(age+"5");

// String
let dataString1 = "Merhaba";
let dataString2 = 'Merhaba' + age + " " + "yaşındaki" + " " + firstName; // + kelimeleri birleştirdiği için " " ile boşluk koymuş oluyoruz. 
let dataString3 = `Merhaba ${47} yaşındaki ${firstName}`
console.log(dataString2);
console.log(dataString3);


// Number
let numberValue1 = 5;
let numberValue2 = 5.5;
console.log(numberValue1+numberValue2 ) // 10.5
console.log(numberValue1,numberValue2 )  // 5 5.5

//Boolean
let isMarried = true; // false;
let ageIsOver18 = true;

//Undefined
let telefon;
console.log(telefon);


//Null
let nullValue = "";
console.log(nullValue)

function nameFunc(params) {
    let test = "fonksiyon içi";
    console.log(test);
    console.log(firstName) // local scope , global scope'a erişebilir.
}
nameFunc()

//console.log(test); // test local scope olduğu için çalışmaz

let myfirstName="su"
let mylastName="kaya"
let myAge="34"
console.log("ben" + " " + myfirstName + " " + mylastName +" " + myAge + " " + "yaşındayım")
console.log(`Ben ${myfirstName} ${mylastName} ${myAge} yaşındayım`)

