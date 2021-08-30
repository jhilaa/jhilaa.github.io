function myFunction(parametre_entree) {
if (typeof(parametre_entree) == 'number') {
return 0 }
if (typeof(parametre_entree) == 'boolean') return 0
// so parametre_entree is a string
r_list=[]; j = 0
for(i=0;i<parametre_entree.length;i++){
if (parametre_entree[i] == ' ') { if (i != j){
r_list.push(parametre_entree.substring(j, i))
} j = i+1}}
r_list.push(parametre_entree.substring(j, i))
return r_list;
}

function myFunction(parametre_entree) {
    if (typeof(parametre_entree)=='number' || typeof(parametre_entree)=='boolean') {return 0}
    for (let i=0;i<parametre_entree.length;i++) {
        if (parametre_entree[i]==' ') {
            if (i!=j) {
                r_list.push(parametre_entree.substring(j,i)) }
                j=i+1
            }
        }
    r_list.push(parametre_entree.substring(j,i))
    return r_list;
}



//-------------------------------------------------
function gt(a, b) { return (a > b) } function st(a, b) { return (a < b) } function f(a, operator) { if (operator == '+') { r = a[0]; // smaller for (i of a) { if (gt(i, r)) { r = i } } } else { r = a[0]; // bigger for (i of a) { if (st(i, r)) r =i } } return r }


//--------------------------------------------------
// tableau de résultat
o = []
a = "Fizz"
b = "Buzz" // variable "buz" pour les multiples de 3
f = function(i){for(d=1;d<=i;d++)o.push(d%15==0?a+b:d%3==0?a:d%5==0?b:d);return o}

//---------------------------------------------------
function factorialFunction(n, temp) {
/* variables temp & basic & b for calculation */
    temp = basic = 0;b = 1
    for(i=0;i<n;i++) {
// logic but wrong affectations
// b = basic
// temp += basic
temp=basic+b;basic=b;b=temp}
    return temp
}}