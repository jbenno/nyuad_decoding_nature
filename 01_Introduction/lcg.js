main();

function main(){
 var mm = 25,
    aa = 11,
    cc = 17,
    zz = 3;
z = zz;

  for (var i = 1; i < 30; i++){
    z = rand(mm,aa,cc,z);
    document.write(z + "<br\>");
  };
};

function rand(m,a,c,z) {
  z = (a * z + c) % m;
  return z;
};