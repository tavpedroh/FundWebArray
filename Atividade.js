
const btn1 = document.querySelector("#exec1")
const btn2 = document.querySelector("#exec2");
const btn3 = document.querySelector("#exec3");
const btn4 = document.querySelector("#exec4");
const btn5 = document.querySelector("#exec5");
const btn6 = document.querySelector("#exec6");

const getVal = seletor => document.querySelector(seletor).value

const geraListaHTML = (listaObj, atribs) => {
    let resultadoHTML = listaObj.reduce(function(acum, elem) {
        return acum + `<li>${elem[atribs[0]]} ${elem[atribs[1]]}</li>`
    },"<ul>")
    resultadoHTML += "</ul>"
    return resultadoHTML
}


btn1.onclick = () => {
    let anoInicial = getVal("#ano-inicio")
    let anoFinal = getVal("#ano-fim")
    const listaResultado = inventors.filter( (inventor) =>{
        return inventor.year > anoInicial && inventor.year < anoFinal
    })
    document.querySelector("#result1").innerHTML = geraListaHTML(listaResultado, ["first", "last"])
}

btn2.onclick = () => {
    const result = inventors.map(inv => `${inv.first} ${inv.last}`);
    document.getElementById('result2').innerHTML = result.join(', ');
}

btn3.onclick = () => {
    const result = inventors.slice().sort((a, b) => a.year - b.year);
    document.getElementById('result3').innerHTML = result.map(inv => `${inv.first} ${inv.last} (${inv.year})`).join(', ');
}

btn4.onclick = () => {
    const totalYears = inventors.reduce((sum, inv) => sum + (inv.passed - inv.year), 0);
    document.getElementById('result4').innerHTML = `${totalYears} anos`;
}

btn5.onclick = () => {
    const result = inventors.slice().sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
    document.getElementById('result5').innerHTML = result.map(inv => `${inv.first} ${inv.last} (${inv.passed - inv.year} anos)`).join(', ');
}

btn6.onclick = () => {
    const unique = [...new Set(data)];
    document.getElementById('result6').innerHTML = unique.join(', ');
}