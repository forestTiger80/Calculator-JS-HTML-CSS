 
 let fn, ln,op;

function add(){
    fn = document.calc.text.value;
    document.calc.text.value = '';
    op ='+';
    console.log(fn);
}
function subtraction(){
    fn = document.calc.text.value;
    document.calc.text.value = '';
    op='-';
    console.log(fn);
}
function division(){
    fn = document.calc.text.value;
    document.calc.text.value = '';
    op='/';
    console.log(fn);
}
function multiplication(){
    fn = document.calc.text.value;
    document.calc.text.value = '';
    op='*';
    console.log(fn);
}



function give_me_the_result() {
    ln = document.calc.text.value;
    

    const res = Number(fn) + Number(ln);
    
    document.calc.text.value = res;
}


