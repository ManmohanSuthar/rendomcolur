const getColur = () => {
    const rendomNum = Math.floor(Math.random()*16777215);
    const rendomCode = "#" + rendomNum.toString(16)
    document.body.style.backgroundColor = rendomCode;
    document.getElementById("colur-code").innerHTML = rendomCode;
    document.getElementById("colur-code").style.color = rendomCode
}

document.getElementById("btn").addEventListener(
    "click",
    getColur
);

getColur();