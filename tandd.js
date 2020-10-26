function creatingElement(element,id)
{
    var element=document.createElement(element)
    element.id=id;
    return element;
}


var div=creatingElement("h1","div1");
div.classList.add("text-center","border")
div.style.position="absolute";
div.innerHTML= "Random Number Will be Here"
div.style.top="400px";
div.style.left="500px"
document.body.append(div);

var button=creatingElement("button")
button.classList.add("btn","btn-primary")
var text=document.createTextNode("Click me")
button.style.position="absolute";
button.style.top="500px";
button.style.left="500px";


document.body.append(button)
button.append(text)

button.addEventListener("click",random)

function random()
{
    var eightrandom=Math.floor(10000000 + Math.random() * 90000000)
    var temp=eightrandom.toString().split('');

    var result=new Set(temp)
    
    if(result.size != temp.length)
    {
        random();
    }
    else{
        var num=Array.from(result).join("");
        div.innerHTML=num ;

    }
}



