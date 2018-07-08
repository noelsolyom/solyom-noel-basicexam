// ide deklaráljátok a függvényeket.
//
//
//
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// Függvény, ami megállapítja, hogy a paraméterként adott objektumnak lépezik e a keresett tulajdonsága.
// Paraméter: objektum, keresett tulajdonság.
// Visszatérési érték 1, ha létezik a keresett tulajdonság.
// A visszatérési érték 0, ha a paraméterként nem objektumot, vagy null-t adtunk át.
// A visszatérési érték -1, ha nem létezik a keresett tulajdonság.
function chechkIfObjectHasOwnProprty(inpuObject, propertyName) {
  // Visszatérési érték definiállása és inicializálása. Feltételezzük, hogy az objektum rendelkezik a keresett tulajdonsággal.
  var valueToReturn = 1;
  // Megvizsgáljuk, hogy a paraméterként átadott objetum valóban objektum-e ÉS az nem null.
  if ((typeof inpuObject === 'object') && (inpuObject !== null)) {
    // Megvizsgáljuk, hogy a paraméterként átadott objektumnak létezik e a keresett tulajdonsága.
    if (!inpuObject.hasOwnProperty(propertyName)) {
    // Amennyiben a paraméterként átadott objektumnak nincs a keresett tulajdonsága, a visszatérési értéket -1-re állítjuk
      valueToReturn = -1;
    }
    // Amennyiben a paraméterként nem objektumot, vagy null-t adtunk, a visszatérési értéket 0-ra állítjuk.
  } else {valueToReturn = 0;}
  // A függvény visszaadja a visszatérési értéket.
  return valueToReturn;
}

// Függvény, ami felülírja a paraméterként átadott objektum adott tulajdonságának értékét.
// Paraméter: objektum, tulajdonság, új érték.
// MEGJEGYZÉS: sokkal elegánsabb lenne, ha az objektum prototípusánál vennénk fel új metódusként az alábbi függvényt.
function overwriteValueOfObjectProprty(inpuObject, propertyName, newValue); {
  // Megvizsgáljuk, hogy a paraméterként kapott objektum rendelkezik e a módosítandó tulajdonsággal. (Máskülömben új)
  // tulajdonság jönne létre az adott objektumban.
  if (chechkIfObjectHasOwnProprty(inpuObject, propertyName)) {
    // A paraméterként kapott objektum adott tulajdonságának értékét módosítjuk az új értékre.
    inpuObject[`${propertyName}`] = newValue;
  }
}


function getData(url, callbackFunc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callbackFunc(this);
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}

function successAjax(xhttp) {
  // Innen lesz elérhető a JSON file tartalma, tehát az adatok amikkel dolgoznod kell
  var userDatas = JSON.parse(xhttp.responseText);
  // Innen lehet hívni.
  




}
getData('/json/spaceships.json', successAjax);
