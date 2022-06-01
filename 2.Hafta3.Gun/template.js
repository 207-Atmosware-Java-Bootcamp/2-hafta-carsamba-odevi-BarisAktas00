
// Kelime girme
var word;
word=String(prompt("Kelime giriniz."));
// Kelime uzunluğu 
document.write(word.length + "<br>");

//Cümle girme
var sentence;
sentence=String(prompt("Cümle giriniz"));

//Cümlenin boşluklarını kaldırıp uzunluğunu bulma
sentenceNoSpace=sentence.replace(/ /g,"");
document.write(sentenceNoSpace.length + "<br>");

//Bütün cümleyi küçük harf ile gösterme

document.write(sentence.toLowerCase()+"<br>");


//Bütün cümleyi BÜYÜK harf ile gösterme

document.write(sentence.toUpperCase()+"<br>");

//İlk Harf Nedir?

document.write(sentence.charAt(0)+ "<br>");

//Cümle Java ile başlıyor mu?

document.write(sentence.startsWith("Java") + "<br>");

// Cümlenin sonuna -ben java öğreniyorum girilmesi

document.write(sentence.concat(" ben java öğreniyorum") + "<br>");


// 0-4 arasindaki index gösterimi

document.write(sentence.substring(0,4) + "<br>");


// Girilen kelime ile ilk kelimeyi yer değiştirmek

var firstWord;

firstWord=sentence.substring(0,sentence.indexOf(" "));

var newWord;
newWord=String(prompt( "Yeni kelimeyi giriniz"));


document.write(sentence.replace(firstWord,newWord) + "<br>" );




