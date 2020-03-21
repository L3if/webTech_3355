

$(document).ready(function () {
    $('h2').css("color", "green");
    $('h2').css("text-align", "center");
    $('.refs').css("text-decoration", "none");
    $('.refs').css("color", "crimson");
    $('pis').css("text-align","left");
    $('#mainText').css({"width": "50%","color": "green"});

    //$("h2").hide();
    
    //неревод элементов в disabled
    //alert('после алерта применятся стили');
    DisableForm();

   
    //создание ссылок для второго задания
    CreateLinks2Task();
    AddEmoji('SecondTaskLinks');
    httpToHttps('SecondTaskLinks');


});

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

    document.body.prepend(ReverseButton)


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
    alert();
    $('.SecondTaskLinks').removeAttr("target");
    $('.SecondTaskLinks').each(function()
    {
        alert(this.id);
        document.getElementById(this.id).innerText= document.getElementById(this.id).innerText.replace(String.fromCodePoint(0x2197),'');
        
    })

    //$('.SecondTaskLinks').prop('innerText',this.innerText.replace(String.fromCodePoint(0x2197),''));
    
}

