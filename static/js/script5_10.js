/*let x = 22;
if (x >= 1 && x%x == 0 ){
    if(x%2 != 0) {
        console.log("primo");
    } else if (x==2) {
        console.log("primo");
    } else {
    console.log("não primo");
   } 
} 
*/
//ou 

let x = 2;
let n = 0;

for (i = 1; i <= x; i++) {
    if (x % i == 0 ){
        n++;
    }
}

if(n == 2) {
    console.log ("primo");
} else {
    console.log ('não primo');
}