function insert(num){
    document.getElementById('output2').value =  document.getElementById('output2').value + num
}
function clear(){
    document.form.textbox.value =""
}
function op(){
    let first = document.getElementById('output2').value
    let firstlength = first.length
 

    if (first.charAt(firstlength-1) == "+" || first.charAt(firstlength-1) == "-" || first.charAt(firstlength-1) == "*" || first.charAt(firstlength-1) == "/"){
     document.getElementById('output2').value + ""
    }
    else{
    document.getElementById('output1').value = first
    }
}
function del(){
    let str = document.getElementById('output2').value;
    let newstr = str.substring(0, str.length - 1);
    document.getElementById('output2').value = newstr;
}
function insertdot(){
    str = document.getElementById('output2').value;
    if(str.includes(".")){
        document.getElementById('output2').value +""
    }else{
        document.getElementById('output2').value = document.getElementById('output2').value +"."
    }
}