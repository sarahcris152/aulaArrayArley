function somar(a,b){
    return a + b;
}

function multiplicar(a,b){
    return a * b;
}

function operar(x,y,f){
    return f(x,y);
}

const r = operar(2,4,somar);
const s = operar(2,4,multiplicar);
console.log("R:",r);
console.log("S:",s);