let page = "search...";

function yourJsFunction(){
    $("#form").submit(function (e){
page = "searched"
e.preventDefault();

let query = $("#search").val();

let result = "";

let API_KEY = "6514eb32b5ac23faa54dce7e7d729875";

let url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' +query;

console.log(url);

$.get(url, function(data){
    console.log(data);

    data.organic_results.forEach(res =>{
    result = `
    <h1 style="color: white;">${res.title}</h1><br><br><a href="${res.url} target="_blank">${res.url}</a><br><br>
    <p style="color: white;">${res.snippet}</p>
    `
   $("#result").append(result);

    })
});
})

}


if (window.location.protocol == 'http:') {
     
    console.log("you are accessing us via "
        +  "an insecure protocol (HTTP). "
        + "Redirecting you to HTTPS.");
         
    window.location.href =
        window.location.href.replace(
                   'http:', 'https:');
}
else
    (window.location.protocol == "https:") {
        console.log("you are accessing us via"
            + " our secure HTTPS protocol.");
    }


 
   function enterfun() {
     if(page === "search..."){
     var ev = new KeyboardEvent('keydown', {altKey:false,
       bubbles: true,
       cancelBubble: false, 
       cancelable: true,
       charCode: 0,
       code: "Enter",
       composed: true,
       ctrlKey: false,
       currentTarget: null,
       defaultPrevented: true,
       detail: 0,
       eventPhase: 0,
       isComposing: false,
       isTrusted: true,
       key: "Enter",
       keyCode: 13,
       location: 0,
       metaKey: false,
       repeat: false,
       returnValue: false,
       shiftKey: false,
       type: "keydown",
       which: 13});
       //////////txtbox.dispatchEvent(ev);
     }else{
    window.location.reload();
     }
     }
