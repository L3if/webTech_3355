// Generating $count blank lines to insert into page
function getBlankLines(count=0)
{
    return "<br/>".repeat(count + 1);
}

// Generating random integer
function randomInteger(min, max) 
{
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

// Generating random string for id
function MakeId(length) 
{
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateRandomFormField()
{
    var ff = ["checkbox", "radio", "submit", "text"];
    var choice = randomInteger(0, 3);

    var anotherField = document.createElement("input");
    anotherField.type = ff[choice];
    anotherField.id = MakeId(6);
    anotherField.name = ff[choice] + "_" + anotherField.id;

    return anotherField;
}

function getRandomColor() 
{
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.body.style.backgroundImage = "url('https://i0.wp.com/www.craftycreations.net/wp-content/uploads/2019/08/Stone-Block-e1566147610895.png)'";


// 1. document.write. Task with URL and strings
var firstTitle = document.createElement("h1");
firstTitle.innerText = "1. document.write, URL, strings";
document.body.append(firstTitle);

// String and its data to body
var userInput = prompt("Enter any line:", "Any Line");
document.write(userInput); // Bad way: DOM-based XSS
document.write(getBlankLines());
document.write("Words Count: ", userInput.split(" ").length, ';\t',
                 "Letters Coount: ", userInput.split(" ").join("").length);
document.write(getBlankLines(1));

// Task with URL
document.write("URL: ", document.URL, "<br/>");
document.write("Protocol (Scheme): ", document.URL.split(":")[0], "<br/>");
var tmp = document.URL.split("/");
tmp = tmp[tmp.length - 1].split(".");
if (tmp.length >= 2)
{
    document.write("File name: ", tmp[tmp.length - 2],
                   ";\tFile extention: ", tmp[tmp.length - 1].split("?")[0]);
}
else
{
    document.write("File name: ", tmp[tmp.length - 1], ";\tFile extention: Unknown");
}
document.write(getBlankLines(1));

// Task with parameters
if (document.URL.indexOf("?") == -1)
{
    var warningElem = document.createElement("p");
    warningElem.style = "color:#FF0000";
    warningElem.innerText = "No paramenters in URL were occured!";
    document.body.append(warningElem);
}
else
{
    var paramArray = document.URL.substr(document.URL.indexOf("?") + 1).split("#")[0].split("&");
    var paramDict = {};
    paramArray.forEach(element => {
        tmp = element.split("=");
        paramDict[tmp[0]] = tmp[1];
    });
    var strParamDict = JSON.stringify(paramDict);
    document.write(strParamDict);
}
document.write(getBlankLines(2));

// -===========================================================================================-

// 2 Documents Tags
var secondTitle = document.createElement("h1");
secondTitle.innerText = "2. HTML Tags with JS";
document.body.append(secondTitle);

// Creating anchors
var anchorsCount = 0;
while (true)
{
    var randCount = String(randomInteger(1, 10));
    var anchorsCount = Number(prompt("Number of anchors from 1 to 10:", randCount));
    if (isNaN(anchorsCount) || anchorsCount < 1 || anchorsCount > 10)
    {
        alert("Wrong!");
    }
    else
    {
        break;
    }
    
}
document.write("Anchors count: ", anchorsCount, "<br/>");
for (var i = 0; i < anchorsCount; i++)
{
    var anotherAnchor = document.createElement("a");
    anotherAnchor.id = MakeId(6);
	anotherAnchor.name = "anchor_" + String(i + 1);
    anotherAnchor.innerText = "Anchor №" + String(i + 1);
    document.body.append(anotherAnchor);
    document.write("<br/>");
}
document.write("<br/>");

// Creating links
var linksCount = 0;
while (true)
{
    var randCount = String(randomInteger(1, 10));
    linksCount = prompt("Enter count of links from 1 to 10:", randCount);
    if (isNaN(linksCount) || linksCount < 1 || linksCount > 10)
    {
        alert("Wrong!");
    }
    else
    {
        break;
    }
}
document.write("Links count: ", linksCount, "<br/>");
for (var i = 0; i < linksCount; i++)
{
    var anotherLink = document.createElement("link");
    anotherLink.id = MakeId(6);
    anotherLink.title = "Link to nowhere №" + String(i + 1);
    anotherLink.href = document.URL.split("?")[0] + "/" + anotherLink.id;
    document.body.append(anotherLink);
}
document.write(getBlankLines(1));

// Creating n copies of image pic.png
var picsCount = 0;
while (true)
{
    var randCount = String(randomInteger(1, 10));
    picsCount = prompt("Enter count of image copies from 1 to 10:", randCount);
    if (isNaN(picsCount) || picsCount < 1 || picsCount > 10)
    {
        alert("Wrong!");
    }
    else
    {
        break;
    }
}
document.write("Images copies count: ", picsCount, "<br/>");
for (var i = 0; i < picsCount; i++)
{
    var anotherPic = document.createElement("img");
    anotherPic.src = "pic.png";
    anotherPic.id = MakeId(10) + Number(i + 1);
    anotherPic.style.height = String(randomInteger(100, 300))+ "px";
    anotherPic.style.width = String(randomInteger(100, 300))+ "px"
    document.body.append(anotherPic);
}
document.write(getBlankLines(1));

// Document tags info
document.write("Anchors count (by JS): ", document.getElementsByTagName("a").length, "<br/>");
document.write("Links count (by JS): ", document.getElementsByTagName("link").length, "<br/>");
document.write("Firts anchor innerHTML:", "<br/>");
document.write(document.getElementsByTagName("a")[0].innerHTML, "<br/>");
var images = document.getElementsByTagName("img");
document.write("Images count (by JS): ", images.length, "<br/>");
document.write("First image width: ", images[0].style.width, "<br/>");

var maxWidth = -1;
var heightSum = 0;
for (var i = 0; i < images.length; i++)
{
    tmp = Number(images[i].style.width.split("px")[0]);
    if (tmp > maxWidth)
    {
        maxWidth = tmp;
    }
    heightSum += Number(images[i].style.height.split("px")[0]);
}
document.write("Max width: ", maxWidth, "<br/>");
document.write("Heights sum: ", heightSum, getBlankLines(2));

// -==========================================================================================-

// 3 Forms
var formsTitle = document.createElement("h1");
formsTitle.innerText = "3. Forms";
document.body.append(formsTitle);

// Creating forms
var formsCount = 0;
while (true)
{
    var randCount = String(randomInteger(10, 20));
    formsCount = prompt("Enter count forms from 10 to 20:", randCount);
    if (isNaN(picsCount) || formsCount < 10 || formsCount > 20)
    {
        alert("Wrong!");
    }
    else
    {
        break;
    }
}

for (let i = 0; i < formsCount; i++)
{
    //document.write("<br/>------------- Form " + String(i + 1) + " -------------<br/>");
	let tmp = randomInteger(20, 70);
	let fancyHeader = document.createElement('h1');
	fancyHeader.innerHTML = "_-xX   Form " + String(i + 1) + "  Xx-_";
	fancyHeader.style.fontStyle = "italic";
	fancyHeader.style.width = tmp + "%";
	fancyHeader.style.position = "relative"
	fancyHeader.style.left = randomInteger(0, (100 - tmp) / 2) + '%';
	fancyHeader.style.color = getRandomColor();
	document.body.appendChild(fancyHeader);
	
    let anotherForm = document.createElement("form");

    // ids and names
    anotherForm.id = MakeId(10);
    anotherForm.name = "Form_" + anotherForm.id;

    // fields
    let fieldsCount = randomInteger(2, 6);
    for (let j = 0; j < fieldsCount; j++)
    {
        let af = generateRandomFormField();
        anotherForm.innerHTML += (af.name.split("_")[0] + "_" + String(j + 1) + ": ");
        anotherForm.appendChild(af);
        anotherForm.innerHTML += "<br/>";
    }
	anotherForm.style.backgroundColor = getRandomColor();
	
	anotherForm.style.width = tmp + "%";
	anotherForm.style.position = "relative"
	anotherForm.style.left= randomInteger(0, (100 - tmp) / 2) + '%';
	
	

    // Name button
    let nameButton = document.createElement("button");
    nameButton.innerHTML = "Показать имя формы";
    nameButton.id = "namebutton_" + String(i + 1);
    nameButton.type = "button";
    nameButton.onclick = () => alert(nameButton.innerText);
        let image = document.createElement('img');
        image.style.width = '20px';
        image.style.height = '20px';
        image.style.verticalAlign = 'bottom';
        image.src = "https://banner2.cleanpng.com/20180624/owk/kisspng-computer-icons-icon-design-life-icon-5b2fde9ad91503.7376561515298638348892.jpg";
        nameButton.prepend(image);
    anotherForm.appendChild(nameButton);

    // accessoryButton
    let acButton = document.createElement("button");
    acButton.innerHTML = "Принадлежность";
    acButton.type = "button";
    acButton.id = "acbutton_" + String(i + 1);
        let image3 = document.createElement('img');
        image3.style.width = '20px';
        image3.style.height = '20px';
        image3.style.verticalAlign = 'bottom';
        image3.src = "https://f0.pngfuel.com/png/136/100/black-and-white-hand-logo-png-clip-art.png";
        acButton.prepend(image3);
    anotherForm.appendChild(acButton);

    //Reset Button
    let resetButton = document.createElement("button");
    resetButton.innerHTML = "Сбросить";
    resetButton.type = "reset";
    resetButton.id = "reset_" + String(i + 1);
        let image2 = document.createElement('img');
        image2.style.width = '20px';
        image2.style.height = '20px';
        image2.style.verticalAlign = 'bottom';
        image2.src = "https://c7.hotpng.com/preview/62/190/370/book-computer-icons-book.jpg";
        resetButton.prepend(image2);
    anotherForm.appendChild(resetButton);

    // Fields Button
    let fieldsButton = document.createElement("button");
    fieldsButton.innerHTML = "Показать количество полей";
    fieldsButton.type = "button";
    fieldsButton.id = "fb_" + String(i + 1);
        let image1 = document.createElement('img');
        image1.style.width = '20px';
        image1.style.height = '20px';
        image1.style.verticalAlign = 'bottom';
        image1.src = "https://c7.hotpng.com/preview/890/442/478/computer-icons-software-testing-icon-design-survey.jpg";
        fieldsButton.prepend(image1);
    anotherForm.appendChild(fieldsButton);

    // Make DOM
    document.body.appendChild(anotherForm);

    // Action to alert form id
    let b = document.getElementById(acButton.id);
    b.onclick = () => alert(b.parentElement.id);
    
    // Action to alert form elements count
    let f = document.getElementById(fieldsButton.id);
    f.onclick = () => alert(f.parentElement.getElementsByTagName("input").length);
}
