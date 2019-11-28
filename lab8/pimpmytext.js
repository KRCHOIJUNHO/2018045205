function onclicked(){        
    //document.getElementById('ex4').style.fontSize = "24pt";  
    //console.log($('ex4').style.fontSize);
    setInterval(function(){
        //getStyle 로 바꿔쓸수 있음  
        if ($('ex4').style.fontSize == "") {
            $('ex4').style.fontSize = "14pt";
        } 
        else {
            var size = $('ex4').style.fontSize;
            size = parseInt(size) + 2;
            $('ex4').style.fontSize = `${size}pt`;
        }
    }, 500);
}

//var button = document.
// button/onclick = myfunction;
// function myfunction(){}
// while(div.firstChild){
//    div.removeChile(div.firstChild)
//}
//getStyle()


function onchanged(cb){
    if(cb.checked){
        //document.getElementById('ex4').style.color = "green";
        $('ex4').style.color = "green";
        $('ex4').style.textDecoration = "underline";
        document.querySelector('body').style.background = "url(https://selab.hanyang.ac.kr/courses/cse326/2019/labs/images/8/hundred.jpg)";
    }
    else {
        //document.getElementById('ex4').style.color = "";
        //$('ex4').style.removeProperty("color");
        $('ex4').style.color = "";
        $('ex4').style.textDecoration = "";
        document.querySelector('body').style.background = ""
    }
}

function onclicked_ex6(){
    $('ex4').style.textTransform = "uppercase";
    var s = $('ex4').value;
    s = s.split(".").join("-izzle.");
    $('ex4').value = s;
}

function piglatin(){
    var text = $('ex4').value;
    var ans = text.split("");
    
    for(var i=0; i<text.length; i++){
        if(ans[i] == "a" || ans[i] == "e" || ans[i] == "i" || ans[i] == "o" || ans[i] == "u"){
            ans.push("ay");
            break;
        }   
        else {
            ans.push(ans[i]);
            ans[i] = "";
            if(i == text.length-1){
                ans.push("ay");
            }
        }
    }
    
    $('ex4').value = ans.join("");
	
}

function Malkovitch(){
    if($('ex4').value.length >= 5){
        $('ex4').value = "Malkovich";
    }
}