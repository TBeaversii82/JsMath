
function AddTwoInputs(num1, num2)
{
    return Number(num1) + Number(num2);
}

function SubTwoInputs(num1, num2)
{
    return Number(num1) - Number(num2);
}

function MultiTwoInputs(num1, num2)
{
    return Number(num1) * Number(num2);
}

function DivTwoInputs(num1, num2)
{
    return Number(num1) / Number(num2);
}

function FindLowestInputs(num1, num2, num3, num4, num5)
{
    return Math.min(num1, num2, num3, num4, num5);
}

function FindGreatestInputs(num1, num2, num3, num4, num5)
{
    return Math.max(num1, num2, num3, num4, num5);
}

function FindMeanInputs(num1, num2, num3, num4, num5)
{
    return ((+num1+ +num2+ +num3+ +num4+ +num5) / 5);
}

function NewSum() {
    let input1 = document.getElementById("newNum1").value;
    let input2 = document.getElementById("newNum2").value;

    let result = AddTwoInputs(input1, input2);

    document.getElementById("result").innerHTML = result;
}

function NewSub() {
    let input1 = document.getElementById("newNum3").value;
    let input2 = document.getElementById("newNum4").value;

    let result = SubTwoInputs(input1, input2);

    document.getElementById("result1").innerHTML = result;
}

function NewMulti() {
    let input1 = document.getElementById("newNum5").value;
    let input2 = document.getElementById("newNum6").value;

    let result = MultiTwoInputs(input1, input2);

    document.getElementById("result2").innerHTML = result;
}

function NewDiv() {
    let input1 = document.getElementById("newNum7").value;
    let input2 = document.getElementById("newNum8").value;

    let result = DivTwoInputs(input1, input2);

    document.getElementById("result3").innerHTML = result;
}

function NewFL() {
    let input1 = document.getElementById("newNum9").value;
    let input2 = document.getElementById("newNum10").value;
    let input3 = document.getElementById("newNum11").value;
    let input4 = document.getElementById("newNum12").value;
    let input5 = document.getElementById("newNum13").value;

    let result = FindLowestInputs(input1, input2, input3, input4, input5);

    document.getElementById("result4").innerHTML = result;
}

function NewFG() {
    let input1 = document.getElementById("newNum14").value;
    let input2 = document.getElementById("newNum15").value;
    let input3 = document.getElementById("newNum16").value;
    let input4 = document.getElementById("newNum17").value;
    let input5 = document.getElementById("newNum18").value;

    let result = FindGreatestInputs(input1, input2, input3, input4, input5);

    document.getElementById("result5").innerHTML = result;
}

function NewMean() {
    let input1 = document.getElementById("newNum19").value;
    let input2 = document.getElementById("newNum20").value;
    let input3 = document.getElementById("newNum21").value;
    let input4 = document.getElementById("newNum22").value;
    let input5 = document.getElementById("newNum23").value;

    let result = FindMeanInputs(input1, input2, input3, input4, input5);

    document.getElementById("result6").innerHTML = result;
}

function Clear() {
    document.getElementById("newNum1").value = "";
    document.getElementById("newNum2").value = "";
    document.getElementById("newNum3").value = "";
    document.getElementById("newNum4").value = "";
    document.getElementById("newNum5").value = "";
    document.getElementById("newNum6").value = "";
    document.getElementById("newNum7").value = "";
    document.getElementById("newNum8").value = "";
    document.getElementById("newNum9").value = "";
    document.getElementById("newNum10").value = "";
    document.getElementById("newNum11").value = "";
    document.getElementById("newNum12").value = "";
    document.getElementById("newNum13").value = "";
    document.getElementById("newNum14").value = "";
    document.getElementById("newNum15").value = "";
    document.getElementById("newNum16").value = "";
    document.getElementById("newNum17").value = "";
    document.getElementById("newNum18").value = "";
    document.getElementById("newNum19").value = "";
    document.getElementById("newNum20").value = "";
    document.getElementById("newNum21").value = "";
    document.getElementById("newNum22").value = "";
    document.getElementById("newNum23").value = "";

    document.getElementById("result1").innerText = "";
    document.getElementById("result2").innerText = "";
    document.getElementById("result3").innerText = "";
    document.getElementById("result4").innerText = "";
    document.getElementById("result5").innerText = "";
    document.getElementById("result6").innerText = "";

}