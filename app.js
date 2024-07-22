// var city = "kARAchi";
// alert(city.toLowerCase());
// var city2 = "lahoRE";
// alert(city2.toUpperCase());
// var city = ["karachi", "lahore", "islamabad", "multan"];
// var citytochek = prompt("enter your city");
// citytochek = citytochek.toLowerCase();
// for (i = 0; i < city.length; i++) {
//     if (citytochek === city[i]) {
//         alert("one of cleannste city")
//     }
// }
// var city = ["KARACHI", "LAHORE", "ISLAMABAD", "MULTAN"];
// var citytochek = prompt("enter your city");
// citytochek = citytochek.toUpperCase();
// for (i = 0; i < city.length; i++) {
//     if (citytochek === city[i]) {
//         alert("one of cleannste city")
//     }
// }
// var city = ["Karachi", "Lahore", "Islamabad", "Multan"];
// var citytochek = prompt("enter your city");
// var first = citytochek.slice(0, 1);
// var all = citytochek.slice(1)
// first = first.toUpperCase()
// all = all.toLowerCase()
// var overall = first + all
// for (i = 0; i < city.length; i++) {
//     if (overall === city[i]) {
//         alert("one of cleannste city")
//     }
// }

// var month = prompt("enter month name");
// var length = month.length;
// if (length > 3) {
//     alert(month.slice(0, 3))
// }


// var user = prompt("enter your fullname");
// alert(user.slice(2, 6));
// alert(user.length)


// var text = "the second world war held in 1938 in of at in";
// var index = text.indexOf("in");
// alert(index);
// var text = "the second world war held in 1938 in of at in";
// var ind = text.lastIndexOf("in");
// alert(ind);

// var para = "you are my best mom";
// var char = para.charAt(5);
// alert(char);

// var exl = prompt("enter text");
// for (i = 0; i < exl.length; i++) {
//     if (exl.charAt(i) === "!") {
//         alert("exclam find")
//     }
// }
// var text = "today is clebrate the World War II dhudyf "
// text = text.replace("World War II", "the Second World War");
// alert(text);


// var user = "hello world"
// user = user.replace("hello", "hey");
// alert(user);

var number = 173.5;
alert(Math.round(number));

var number = 173.2;
alert(Math.ceil(number));

var number = 173.5;
alert(Math.floor(number));

document.write(Math.random() * 2)

var num = 123.442566;
var fix = num.toFixed(2);
alert(fix);


var num1 = "2";
var num2 = 3
var num = parseFloat(num1) + num2;
alert(num)

var parse = parseFloat("22.1") + 1;
alert(parse)

var num = 122.1;
document.write(num.toFixed(2));