function KeyUP(Element) {
    var len = Element.value.length;
    var over = (Element.id === "title") ? 30 : 1200;
    var str = len + "/" + over + "文字"
    document.getElementById("of" + Element.id).textContent = str;
}

function send(){
    var dom;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/post/final");
    xhr.onload = function(e){
        dom = e.target.responseXML;
        console.log(e.target.responseXML.title);
    }
    xhr.responseType  = "document";
    xhr.send();
}