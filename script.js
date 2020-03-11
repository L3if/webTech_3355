
	let initialForm = document.createElement("form");
	initialForm.id = initialForm;
	let formDiv = document.createElement("div");

	let label1 = document.createElement("label");
	label1.innerText = "Columns";
	initialForm.id = "initialForm";
	let inputForm1 = document.createElement("input");
	inputForm1.type = "number";
	inputForm1.id="Col_Num";
	inputForm1.value = "3";
	let label2 = document.createElement("label");
	label2.innerText = "Rows";
	let inputForm2 = document.createElement("input");
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
	okButton.type = "button";
	okButton.innerText = "Paehali";
	okButton.onclick = main;
	formDiv.appendChild(okButton);
	initialForm.appendChild(formDiv);
document.body.appendChild(initialForm);

function createRow(row_num, cols)
{
    let row = document.createElement("tr");
    row.id = "row_" + String(row_num);

    for (let i = 0; i < cols; i++)
    {
        let colID = ["col", String(row_num), String(i + 1)].join("_");
        let txtID = ["txt", String(row_num), String(i + 1)].join("_");
        let divID = ["div", String(row_num), String(i + 1)].join("_");
        let btnID = ["btn", String(row_num), String(i + 1)].join("_");
        let col = document.createElement("td");
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
        
        col.appendChild(div);
        col.id = colID;
        col.style = "border: 1px solid #000; width: 60px; height = 30px;"

        row.appendChild(col);
    }

    return row;
}

function createTable(rows, cols)
{
    let table = document.createElement("table");
    table.id = "main_table";
    table.style.border = "1px solid #000";
    table.style.height = String(30 * (rows + 1)) + "px";
    table.style.width = String(60 * (cols + 1)) + "px";
    for (let i = 0; i < rows; i++)
    {
        let row = createRow(i + 1, cols);
        table.appendChild(row);
    }
    
    return table;
}

function main()
{
	var rows = document.getElementById('Row_Num').value;
	var columns = document.getElementById('Col_Num').value;
	
	if (rows == 0 || columns == 0)
    {
        alert("not zero plz");
        return false;
    }

    let formDiv = document.getElementById("formDiv");
    formDiv = "display: none;";
    
    let table = createTable(rows, columns);
    document.getElementById("initialForm").appendChild(table);
    let fb = document.createElement("div");
    fb.id = "func_block";
	
}
