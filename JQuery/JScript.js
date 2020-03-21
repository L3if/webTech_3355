

$(document).ready(function () {
    $('h2').css("color", "green");
    $('h2').css("text-align", "center");
    $('.refs').css("text-decoration", "none");
    $('.refs').css("color", "crimson");
    $('pis').css("text-align","left");
    $('#mainText').css({"width": "50%","color": "green"});

    //$("h2").hide();
    
    //перевод элементов в disabled
    //alert('после алерта применятся стили');
    DisableForm();

   
    //создание ссылок для второго задания
    CreateLinks2Task();
    AddEmoji('SecondTaskLinks');
    httpToHttps('SecondTaskLinks');

    document.body.appendChild(createTable(3,2));

    AJAX();

    $("#btn_1_2").click(function()
    {
        $("#div_1_1").fadeToggle();
    });
    
    $("#btn_2_2").click(function()
    {
        $("#div_2_1").toggle();
    });

    $("#btn_3_2").click(function()
    {
        $("#div_3_1").slideToggle();
    });

});

function AJAXButtonFunc()
{
    alert('ASD');
    $.getJSON( "https://inxaoc.github.io/example/ajax.json", function( data )
        {
            let buildDiv = document.createElement('div');
            buildDiv.innerHTML+= (build(data));
            document.body.appendChild(buildDiv);
        });

    //$("body").load( "https://inxaoc.github.io/example/ajax-1.html")
    
}

function build(list) {
        var html = '', item, deep;
        for (item in list) {
            deep = typeof list[item] == 'object';
        
            html += '<li><a>' +item+ '</a>' +(deep ? build(list[item]) : '')+ '</li>';
        }
        return '<ul>' + html + '</ul>';
    }
    

function GetInnerKeys(object)
{
    let keys = [];
    keys = Object.keys(object)
};

function DisableForm()
{
    $('.FormInputs').prop("disabled", true);
};

function CreateLinks2Task()
{
    let newLink = document.createElement("a");
    newLink.className = "SecondTaskLinks";
    newLink.id = 'google';
    newLink.text = "google";
    newLink.href = "http://google.com";
    newLink.target = "_blank";
    document.body.append(newLink);
    document.body.append(document.createElement("br"));

    newLink = document.createElement("a");
    newLink.className = "SecondTaskLinks";
    newLink.id = 'bing';
    newLink.text = "bing";
    newLink.href = "http://bing.com";
    newLink.target = "_blank";
    document.body.append(newLink);
    document.body.append(document.createElement("br"));

    newLink = document.createElement("a");
    newLink.className = "SecondTaskLinks";
    newLink.id = 'yandex';
    newLink.text = "yandex";
    newLink.href = "http://yandex.com";
    newLink.target = "_blank";
    document.body.append(newLink);
    document.body.append(document.createElement("br"));

    let ReverseButton = document.createElement("button")
    ReverseButton.type = 'button';
    ReverseButton.innerText = 'Reverse';
    ReverseButton.onclick = ReverseButtonFunc;
    ReverseButton.style.position = 'fixed';
    ReverseButton.style.right = "10px";

    document.body.prepend(ReverseButton);


}

function AddEmoji(Selectedclass)
    {
        $("." + Selectedclass).prepend(String.fromCodePoint(0x2197));
    };

function httpToHttps(Selectedclass)
    {   
        $("a[href]").each(function(){
            if( this.protocol === "http:" && this.className === Selectedclass)
                this.protocol = "https:"
        });
    }

function ReverseButtonFunc()
{
    $('.SecondTaskLinks').removeAttr("target");
    $('.SecondTaskLinks').each(function()
    {
        document.getElementById(this.id).innerText= document.getElementById(this.id).innerText.replace(String.fromCodePoint(0x2197),'');
        
    })

    //$('.SecondTaskLinks').prop('innerText',this.innerText.replace(String.fromCodePoint(0x2197),''));
    
}

function createTable(rows, cols)
{
    let table = document.createElement("table");
    table.id = "main_table";
    table.style.border = "1px solid #000";
	table.style.width = "50 %";
	table.style.height = rows*10 + "%";
    for (let i = 0; i < rows; i++)
    {
        let row = createRow(i + 1, cols);

        table.appendChild(row);
    }
    
    return table;
}

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
        
        if (i === 0)
        {
            let txt = document.createElement("div");
        txt.innerText = "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией языка ECMAScript (стандарт ECMA-262[6]). JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам."
        txt.style.resize = "none";
        txt.id = divID;
        
        col.appendChild(txt);
        col.id = colID;
        col.style = "border: 1px solid #000; width: 40%; height = 30px;"

        row.appendChild(col);
        }
        else
        {
            let btn = document.createElement("button");
            btn.id = btnID;
            btn.innerHTML = btnID;
                        
            col.appendChild(btn);
            col.id = colID;
            col.style = "border: 1px solid #000; width: 60px; height = 30px;"
    
            row.appendChild(col);
        }
        
    }

    return row;
}

function AJAX()
{
    let AjaxBtn = document.createElement("button")
    AjaxBtn.type = 'button';
    AjaxBtn.id = 'AjaxBtn';
    AjaxBtn.innerText = 'AJAX';
    AjaxBtn.onclick = AJAXButtonFunc;
    AjaxBtn.style.position = 'fixed';
    AjaxBtn.style.left = "10px";
    AjaxBtn.style.bottom = "10px";

    document.body.append(AjaxBtn);
}

