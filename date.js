function creatingElement(element)
{
    var element=document.createElement(element)
    
    return element;
}

var div = creatingElement("div");
div.id="main";
document.body.append(div)

var input=creatingElement("input");

input.id="bday";
input.name="dob"
input.type="date"

div.appendChild(input);

var button=creatingElement("button");

button.id="btn";

button.innerHTML="Click Here"
button.setAttribute("onclick","datemani()")
div.appendChild(button);

var display=creatingElement("div");

display.id="display";

function datemani()
{
    var inputdata=document.getElementById("bday").value;
    if(Date.parse(inputdata))
    {
        var inputdate=new Date(inputdata)
        var current=new Date();

        var milli=parseInt(current.getTime())-parseInt(inputdate.getTime());

        var secound =Math.floor(milli/1000);

        var minute=Math.floor(secound/60);

        var hour=Math.floor(minute/60)

        var day=Math.floor(hour/24);

        var year=current.getFullYear()-inputdate.getFullYear();

        var month =(year*12)+(inputdate.getMonth()-current.getMonth())
    
    display.innerHTML=`
${year} <br>
${month}<br>
${day}<br>
${hour}<br>
${minute}<br>
${secound}<br>
${milli}<br>
`
document.body.append(display)
    }
    else{
        window.alert('Enter Proper Data')
    }
}
