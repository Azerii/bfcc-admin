let blah 
function fac(n,blah) {
 blah = n * (n -1);
  
  if (n - 2 > 0)
    fac(n - 2,blah)
   else console.log(blah)
}
fac(8)