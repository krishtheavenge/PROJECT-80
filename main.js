function getPara1(){
    var inputs=[];
    for(var i = 1 ; i <= 6 ;i++)
    {
inputs.push(document.getElementById("para1_input_box" + i).value);
    }
    inputs.join(" . ")
    document.getElementById("showPara1").innerHTML = inputs.join(" . ")
}
