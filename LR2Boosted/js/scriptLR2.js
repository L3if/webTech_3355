    let initialForm = document.createElement("form");
    initialForm.id = initialForm;
    initialForm.style.width = "70%";
    initialForm.classList.add("mx-auto");
    let formDiv = document.createElement("div");
    formDiv.id = "formDiv";
    formDiv.style.width = "200px";
    formDiv.classList.add("mx-auto");
    formDiv.classList.add("form-group");
    //formDiv.classList.add("justify-content-md-center");
	let label1 = document.createElement("label");
	label1.innerText = "Columns";
	initialForm.id = "initialForm";
	let inputForm1 = document.createElement("input");
    inputForm1.type = "number";
    inputForm1.classList.add("form-control");
	inputForm1.id="Col_Num";
	inputForm1.value = "3";
	let label2 = document.createElement("label");
	label2.innerText = "Rows";
    let inputForm2 = document.createElement("input");
    inputForm2.classList.add("form-control");
	inputForm2.type = "number";
	inputForm2.id = "Row_Num";
	inputForm2.value = "5";
	breaktmp = document.createElement("br");
	formDiv.appendChild(label1);
	//formDiv.appendChild(breaktmp);
	//formDiv.innerHTML += "<br> <br />";
	formDiv.appendChild(inputForm1);
	formDiv.appendChild(breaktmp);
	//formDiv.innerHTML += "<br> <br />";
	formDiv.appendChild(label2);
	//formDiv.appendChild(breaktmp);
	//formDiv.innerHTML += "<br> <br />";
	formDiv.appendChild(inputForm2);
	//initialForm.innerHTML += "<br>";
	okButton = document.createElement('button');
	okButton.id = "okButton";
    okButton.classList.add("btn");
    okButton.classList.add("btn-primary");
    okButton.type = "button";
    okButton.innerText = "Paehali";
    okButton.onclick = goToParamPage;
    //okButton.onclick = main;
    //okButton.onclick = tryGet;

	formDiv.appendChild(okButton);
	initialForm.appendChild(formDiv);
    document.body.appendChild(initialForm);
    
document.getElementById("nav_container").appendChild(createBreadcrumb());

function createBreadcrumb()
{
    let breadcrumb = document.createElement('nav');
    breadcrumb.setAttribute('aria-label', 'breadcrumb');
    let breadcrumbOl = document.createElement('ol');
    breadcrumbOl.classList.add('breadcrumb');
    pathArr = window.location.pathname.split("/");
    for (let i = 1; i<pathArr.length; i++)
    {
        if (i<pathArr.length-1)
        {
            let currPathItem = document.createElement('li');
            currPathItem.classList.add('breadcrumb-item');
            //currPathItem.innerText = pathArr[i];
            currPathItemLink = document.createElement('a');
            uplevelPath = pathArr.slice(0, i+1).join('/') + "/index.html";
            let newUrl = new URL(window.location);
            newUrl.pathname = uplevelPath;
            currPathItemLink.href = newUrl;
            currPathItemLink.innerText = pathArr[i];
            currPathItem.appendChild(currPathItemLink);
            breadcrumbOl.appendChild(currPathItem);
        } else
        {
            let currPathItem = document.createElement('li');
            currPathItem.classList.add('breadcrumb-item');
            currPathItem.classList.add('active');
            currPathItem.innerText = pathArr[i];
            breadcrumbOl.appendChild(currPathItem);
        }
    }
    breadcrumb.appendChild(breadcrumbOl);
    return breadcrumb
}

function goToParamPage()
{
    let parsedUrl= new URL(location.protocol + '//' + location.host + location.pathname);
    parsedUrl.searchParams.set('col',inputForm1.value);
    parsedUrl.searchParams.set('row',inputForm2.value);
    console.log(parsedUrl.href);
    var url = parsedUrl.href;
    var mystring = "table";
    var ind1 = url .lastIndexOf('/');
    var ind2 = url .lastIndexOf('.');
    new_url = url.substring(0,ind1+1 )+ mystring + url.substring(ind2 );
    window.location = new URL(new_url);
}

function tryGet()
{
    //window.open("https://ya.ru");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "../LR2/LR2.html", false ); // false for synchronous request
    xmlHttp.send();
    document.write(xmlHttp.responseText);
    
    return xmlHttp.responseText;
}

function createBordersDropdown()
{
    let borderStyles = ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"];
    let sel = document.createElement("select");
    sel.classList.add("mx-auto");
    sel.classList.add("custom-select");
    borderStyles.forEach(function(item) {
        let opt = document.createElement("option");
        opt.value = item;
        opt.innerText = item;
        sel.appendChild(opt);
    });

    return sel;
}


function createRow(row_num, cols)
{
    let row = document.createElement("div");
    row.id = "row_" + String(row_num);
    row.classList.add("row");

    for (let i = 0; i < cols; i++)
    {
        let colID = ["col", String(row_num), String(i + 1)].join("_");
        let txtID = ["txt", String(row_num), String(i + 1)].join("_");
        let divID = ["div", String(row_num), String(i + 1)].join("_");
        let btnID = ["btn", String(row_num), String(i + 1)].join("_");
        let col = document.createElement("div");
        col.classList.add("col");
        col.classList.add("BORDERFILTER");
        let div = document.createElement("div");
        
        let txt = document.createElement("textarea");
        txt.classList.add("input-group-text");
        txt.classList.add("mx-auto");
        txt.classList.add("my-1");
        txt.style.resize = "none";
        txt.id = txtID;
        
        let btn = document.createElement("button");
        btn.type = "button";
        btn.classList.add("btn");
        btn.classList.add("btn-dark");
        btn.classList.add("mx-auto");
        btn.classList.add("my-1")
        btn.innerText = "save";
        btn.id = btnID;
        btn.addEventListener("click", function(event) {
            saveInput(this.id);
        });
    
        div.appendChild(txt);
        div.innerHTML += "<br/>";
        div.id = divID;
        div.appendChild(btn);
        
        col.appendChild(div);
        col.id = colID;
        col.style = "border: 1px solid #000; width: 60px; height = 30px;"

        row.appendChild(col);
    }

    return row;
}

function createTable(rows, cols)
{
    let table = document.createElement("div");
    let tableHeader = document.createElement("h1");
    tableHeader.classList.add("mx-auto");
    tableHeader.innerText = "Header";
    tableHeader.id = 'tableHeader';
    table.appendChild(tableHeader);
    table.id = "main_table";
    //table.style.border = "1px solid #000";
    //table.style.height = String(30 * (rows + 1)) + "px";
    //table.style.width = String(60 * (cols + 1)) + "px";
	table.style.width = "100 %";
	table.style.height = rows*10 + "%";
    for (let i = 0; i < rows; i++)
    {
        let row = createRow(i + 1, cols);
        table.appendChild(row);
    }
    
    return table;
}

function saveInput(btnID)
{
    let txt = document.getElementById("txt" + btnID.split("btn")[1]);
    let div = document.getElementById("div" + btnID.split("btn")[1]);
    let col = document.getElementById("col" + btnID.split("btn")[1]);
    col.innerText = txt.value;
    div.style = "display: none;";
}
function randomInteger(min, max) 
{
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[randomInteger(0, letters.length - 1)];
    }
    return color;
}
function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1); // remove #
    color = parseInt(color, 16); // convert to integer
    color = 0xFFFFFF ^ color; // invert three bytes
    color = color.toString(16); // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color; // prepend #
    return color;
}

bodyColor = getRandomColor();
document.body.style.backgroundColor = bodyColor;
invertedBodyColor = invertColor(bodyColor);



function main()
{   
    functionsBlock = document.createElement('div');
    functionsBlock.id = 'functionsBlock';
    
    functionsBlock.style.width = "70%";
    functionsBlock.classList.add("mx-auto");
    document.body.appendChild(functionsBlock);
	var rows = document.getElementById('Row_Num').value;
	var columns = document.getElementById('Col_Num').value;
	
	if (rows == 0 || columns == 0)
    {
        alert("not zero plz");
        return false;
    }

    //let formDiv = document.getElementById("formDiv");
    document.getElementById("formDiv").style.display = "none";
    
    let table = createTable(rows, columns);
    document.getElementById("initialForm").appendChild(table);
    let fb = document.createElement("div");
    fb.id = "func_block";
    
    //change table border`
    let changeTableBorder = document.createElement("div");
    changeTableBorder.style.float = "left";
    changeTableBorder.style.margin = "5px";

    let lbl = document.createElement("label");
    lbl.innerText = "Change Table Borders";

    let thick = document.createElement("input");
    thick.id = "input_thick";
    thick.type = "text";
    thick.value = table.style.width.split("px")[0];
    // restrict non-digit input
    thick.onkeypress = function(event) {
        return (event.keyCode >= 48 && event.keyCode <= 57 && this.value.length <= 2);
    }
    // change button text
    thick.onkeyup = function(event) {
        let s = this.value || 0;
        let b = document.getElementById("apply_btn");
        let l = b.innerText.split(" ");
        if (l.length > 1)
        {
            l[1] = s + "px";
            b.innerText = l.join(" ");
        }
        else
        {
            b.innerText = "Apply " + s + "px and border " + document.getElementById("sel_border").value;
        }

    }

    // select border style
    let sel = createBordersDropdown();
    sel.id = "sel_border";
    sel.onchange = function(event) {
        let b = document.getElementById("apply_btn");
        let l = b.innerText.split(" ");
        if (l.length > 1)
        {
            l[4] = this.value;
            b.innerText = l.join(" ");
        }
        else
        {
            b.innerText = "Apply " + document.getElementById("input_thick").value + "px and border " + this.value;
        }
    };

    btn = document.createElement("button");
    btn.type = "button";
    btn.id = "apply_btn";
    btn.innerText = "Apply";
    btn.addEventListener("click", function(event) {
        let t = document.getElementById("BORDERFILTER");
        //$(".BORDERFILTER").css("border", document.getElementById("sel_border").value);
        $(".BORDERFILTER").css("border", document.getElementById("input_thick").value + "px " + document.getElementById("sel_border").value);
        //t.style.border = document.getElementById("sel_border").value;
        //t.style.width = document.getElementById("input_thick").value + "px";
    });

    // fill up 'change table borders' container
    lbl.classList.add("input-group-text");
    lbl.classList.add("mx-auto");
    lbl.classList.add("my-1");
    changeTableBorder.appendChild(lbl);
    //changeTableBorder.appendChild(document.createElement("br"));
    thick.classList.add("input-group-text");
    thick.classList.add("mx-auto");
    thick.classList.add("my-1");
    changeTableBorder.appendChild(thick);
    sel.classList.add("input-group-text");
    sel.classList.add("mx-auto");
    sel.classList.add("my-1");
    changeTableBorder.appendChild(sel);
    //changeTableBorder.appendChild(document.createElement("br"));
    btn.classList.add("btn-secondary");
    btn.classList.add("btn");
    btn.classList.add("mx-auto");
    btn.classList.add("my-1");
    changeTableBorder.appendChild(btn);
    document.getElementById('functionsBlock').appendChild(changeTableBorder);

    //Change header
    // container 'change header;
    let addHeader = document.createElement("div");
    addHeader.style.float = "left";
    addHeader.style.margin = "5px";

    lbl = document.createElement("label");
    lbl.innerText = "Add Header to Table";

    let inp = document.createElement("input");
    inp.type = "text";
    inp.id = "inp_header";
    inp.value = "Header";

    btn = document.createElement("button");
    btn.type = "button";
    btn.innerText = "Change Header"
    btn.addEventListener("click", function(event) {
        let headCol = document.getElementById("tableHeader");
        /*if (headCol === null)
        {
            let headRow = document.getElementById("main_table").insertRow(0);
            headRow.style.width = document.getElementById("main_table").style.width;
            headRow.style.textAlign = "center";
            headRow.id = "header_row";
            
            headCol = document.createElement("td");
            headCol.style.textAlign = "center";
            headCol.innerText = document.getElementById("inp_header").value;
            headCol.colSpan = document.getElementById("Col_Num").value;
            headCol.id = "table_header";
            
            headRow.prependChild(headCol);
        }
        else*/
        {
            headCol.innerText = document.getElementById("inp_header").value;
        }
        
        
    });

    lbl.classList.add("input-group-text");
    lbl.classList.add("mx-auto");
    lbl.classList.add("my-1");
    addHeader.appendChild(lbl);
    inp.classList.add("input-group-text");
    inp.classList.add("mx-auto");
    inp.classList.add("my-1");
    addHeader.appendChild(inp);
    btn.classList.add("btn");
    btn.classList.add("btn-secondary");
    btn.classList.add("mx-auto");
    btn.classList.add("my-1");
    addHeader.appendChild(btn);
    document.getElementById('functionsBlock').appendChild(addHeader);

    //remove rows
    let removeRow = document.createElement("div");
    removeRow.style.float = "left";
    removeRow.style.margin = "5px";

    lbl = document.createElement("label");
    lbl.innerText = "Remove String";

    inp = document.createElement("input");
    inp.type = "text";
    inp.value = "1";
    inp.id = "strToRemove";

    btn = document.createElement("button");
    btn.type = "button"
    btn.innerText = "Remove";

    btn.addEventListener("click", function(event) {
        let tb = document.getElementById("main_table");
        let l = tb.childNodes;
        let i = Number(document.getElementById("strToRemove").value);
        if (l[0].id != "header_row")
        {
            i--;
            if (i < 0 || i >= l.length)
            {
                alert("Wrong row index!");
                return;
            }
        }
        else if (i < 1 || i >= l.length)
        {
            alert("Wrong row index!");
            return;
        }

        let r = l[i+1];
        tb.removeChild(r);
    });

    lbl.classList.add("input-group-text");
    lbl.classList.add("mx-auto");
    lbl.classList.add("my-1");
    removeRow.appendChild(lbl);
    inp.classList.add("input-group-text");
    inp.classList.add("mx-auto");
    inp.classList.add("my-1");
    removeRow.appendChild(inp);
    btn.classList.add("btn");
    btn.classList.add("btn-secondary");
    btn.classList.add("mx-auto");
    btn.classList.add("my-1");
    removeRow.appendChild(btn);
    document.getElementById('functionsBlock').appendChild(removeRow);

     // Magic
     let magic = document.createElement("div");
     magic.style.float = "left";
     magic.style.margin = "5px";
 
     lbl = document.createElement("label");
     lbl.innerText = "Magic!";
 
     btn = document.createElement("button");
     btn.type = "button";
     btn.innerText = "Magic!!!";
     btn.addEventListener("click", function(event) {
         let chc = randomInteger(1, 4);
         
         let l = document.getElementById("main_table").childNodes;
         let lowRowIndex = l[0].id == "header_row" ? 1 : 0;
         let highRowIndex = l.length - 1;
         let rw = randomInteger(lowRowIndex, highRowIndex);
 
         let cl = l[rw].childNodes;
         let ci = randomInteger(0, cl.length - 1);
         let c = cl[ci];
 
         if (chc > 2)
         {
             getRandomColor();
             randomInteger();
             c.style.background = getRandomColor();
             c.style.fontSize = String(randomInteger(15, 25)) + "px";
         }
         else
         {
             let colID = c.id.split("col");
             let txtID = colID.join("txt");
             let btnID = colID.join("btn");
             let divID = colID.join("div");
 
             let div = document.createElement("div");
             let txt = document.createElement("textarea");
             txt.style.resize = "none";
             txt.id = txtID;
             
             let btn = document.createElement("button");
             btn.type = "button";
             btn.innerText = "save";
             btn.id = btnID;
             btn.addEventListener("click", function(event) {
                 saveInput(this.id);
             });
         
             div.appendChild(txt);
             div.innerHTML += "<br/>";
             div.id = divID;
             div.appendChild(btn);
 
             c.innerText = "";
             c.appendChild(div);
         }  
     });
     
     lbl.classList.add("input-group-text");
     lbl.classList.add("mx-auto");
     lbl.classList.add("my-1");
     magic.appendChild(lbl);
     btn.classList.add("btn");
     btn.classList.add("btn-secondary");
     btn.classList.add("mx-auto");
     btn.classList.add("my-1");
     magic.appendChild(btn);
     document.getElementById('functionsBlock').appendChild(magic);
 
     //Remove Table
     let removeTable = document.createElement("div");
     removeTable.style.float = "left";
     removeTable.style.margin = "5px";
 
     btn = document.createElement("button");
     btn.type = "submit";
     btn.classList.add("btn");
     btn.classList.add("btn-secondary");
     btn.classList.add("mx-auto");
     btn.classList.add("my-1");
     btn.innerText = "Remove";
     btn.addEventListener("click", function(event) {
         document.getElementById("formDiv").style.display = "block";
         document.body.removeChild(document.getElementById("functionsBlock"));
         let initialForm = document.getElementById("initialForm");
         initialForm.removeChild(document.getElementById("main_table"));
     });
 
     removeTable.appendChild(btn);
     document.getElementById('functionsBlock').appendChild(removeTable);
    
}

$( document ).ready(function() {
    console.log( "ready!" );
    document.getElementById('footer').style.backgroundColor = invertedBodyColor;
    document.getElementById('footer').style.color = bodyColor;

});

 //test string for vs studio code commits