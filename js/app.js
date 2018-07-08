// ide deklaráljátok a függvényeket.
//
//
//
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
//
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

// Függvény objektum másolásához
// Bemeneti paraméter: objektum
// Visszatérési érték: Objektum másolata. -1, ha a paraméter nem objektum
function copyObject(inputObject) {
  // Megvizsgáljuk, hogy a bemeneti paraméter objektum e
  if (typeof inputObject === 'object') {
    // Ha objektum és nem null
    if (inputObject !== null) {
      // Eltároljuk a paraméter tulajdonságait
      var key = Object.keys(inputObject);
      // Eltároljuk a paraméter értékeit
      var value = Object.values(inputObject);
      // létrehozunk egy segédváltozót
      var temp = {};
      // Bejárjuk az objektumot
      for (var i = 0; i < key.length; i++) {
        // És a segédváltozóban létrehozzuk a tulajdonságot, majd hozzárendeljük az értéket
        temp[`${key[i]}`] = value[i];
      } // A visszatérési értékhez hozzárendeljük a segédváltozót
      objectToReturn = temp;
      // Ha null-t adtunk meg, visszatérünk null-al
    } else {objectToReturn = inputObject;}
    // Amennyien nem objektum, a visszatérési értéket -1-re állítjuk
  } else {var objectToReturn = -1;}
  // A függvény visszatér a visszatérési értékkel
  return objectToReturn;
}

// Függvény, ami másolatot készít a paraméterként átadott tömbről
// Paramméter: Tömb
// Visszatérési érték: a paraméterként átadott tömb másolata. -1, ha a paraméterként átadott változó nem tömb.
function copyArray(inputArray) {
  // visszatérési érték definiálása.
  var arrayToReturn = [];
  // Megvizsgálom, hogy a paraméterként átadott tömb valóban tömb e.
  if (Array.isArray(inputArray)) {
    // Ha tömböt adtunk meg, bejárjuk a tömböt
    for (var i in inputArray) {
      // Ha az éppen aktuális elem objektum ÉS nem null
      if (typeof inputArray[i] === 'object' && inputArray[i] !== null) {
        // Létrehozunk egy segédváltozót, amibe majd az objektum tulajdonság-érték párjait vesszük fel
        var temp = copyObject(inputArray[i]);
        // A segédváltozóban lévő objektumot hozzáfűzzük a kimeneti változóhoz
        arrayToReturn.push(temp);
        // Amennyiben a vizsgált elem nem objektum vagy null
      } else {
        // A segédváltozóba felvesszük az értéket
        temp = inputArray[i];
        // És hozzáfűzzük a kimeneti változóhoz
        arrayToReturn.push(temp);
      }
    }
  }
  // A függvény visszatér a visszatérési értékkel
  return arrayToReturn;
}

// Függvény, ami felülírja a paraméterként átadott objektum adott tulajdonságának értékét.
// Paraméter: objektum, tulajdonság, új érték.
// MEGJEGYZÉS: sokkal elegánsabb lenne, ha az objektum prototípusánál vennénk fel új metódusként az alábbi függvényt.
function overwriteValueOfObjectProprty(inpuObject, propertyName, newValue) {
  // Megvizsgáljuk, hogy a paraméterként kapott objektum rendelkezik e a módosítandó tulajdonsággal. (Máskülömben új
  // tulajdonság jönne létre az adott objektumban.)
  if (chechkIfObjectHasOwnProprty(inpuObject, propertyName)) {
    // Aa paraméterként kapott objektum adott tulajdonságának értékét módosítjuk az új értékre.
    inpuObject[`${propertyName}`] = newValue;
  }
}

// Függvény abjektum adott tulajdonságánál az érték típusának módosítása
// Paraméter: Objektum, tulajdonság, új típus
// Megjegyzés: csak akkor módosít, ha a tulajdonság típusa nem egyezik meg az új típussal
// Visszatérési érték: módosított új objektum, ha rosszul adtuk meg az új típust vagy a tulajdonságot, akkor -1.
function setTypeOfObjectProperty(inputObject, property, newType) {
  // Definiáljuk a kimeneti változót
  var objectToReturn = {};
  // Megvizsgáljuk, hogy a módosítandó tulajdonság létezik e az objektumokban.
  if (chechkIfObjectHasOwnProprty(inputObject, property)) {
    // Másolatot készítünk az objektumról
    var temp = 0;
    // Amennyiben létezik a tulajdonság, megvizsgáljuk, hogy number-ré vagy string-gé akarjuk módosítani értéket
    // Amennyiben numberré szeretnénk módosítani és pillanatnyilag nem number típusú
    if (typeof inputObject[`${property}`] !== 'number' && newType === 'number') {
    // Módosítjuk az érték típusát
      inputObject[`${property}`] = parseInt(inputObject[`${property}`]);
    } else if (newType === 'string') {
      for (i in copyOfArray) {
        if (typeof copyOfArray[i][`${property}`] !== newType) {
          copyOfArray[i][`${property}`] = copyOfArray[i][`${property}`].toString();
        }
        arrayToReturn.push(copyOfArray[i]);
      } // Amennyiben rosszul adtuk meg az új tulajdonság típuság, -1-el visszatérünk
    } else {var inputArray = -1;}
    // Amennyiben nincs ilyen tulajdonsága az objektumoknak, -1-el visszatérünk
  } else {arrayToReturn = -1;}
  // A függvény visszatér a viszatérési értékkel
  return objectToReturn;
}

// Javított buborékrendezés objektumokkal feltöltött tömbre.
// Paraméter: tömb, objektum tulajdonsága.
function advBubbleSortArrayOfObjects(inputArray, propertyName) {
  var arrayToReturn = copyArray(inputArray);
  var i = arrayToReturn.length - 1;
  var j = 0;
  while (i >= 2) {
    var csere = 0;
    for (j = 0; j < i; j++) {
      if (arrayToReturn[j][`${propertyName}`] > arrayToReturn [j + 1][`${propertyName}`]) {
        [arrayToReturn[j], arrayToReturn[j + 1]] = [arrayToReturn[j + 1], arrayToReturn[j]];
        csere = j;
      }
    }
    i = csere;
  }
  return arrayToReturn;
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
  // Másolatot készítünk a userDatas-ról és innentől ezzel a tömbbel dolgozunk
  var userDatasCopy = copyArray(userDatas);

  // A userDAtasCopy-ban tárolt tömb objektumaiban cost_in_credits tulajdonságoknál szereplő null értékek 0-ra módosítása
  for (var i in userDatasCopy) {
    if (chechkIfObjectHasOwnProprty(userDatasCopy[i],  'cost_in_credits')) {
      if (userDatasCopy[i].cost_in_credits === null) {
        overwriteValueOfObjectProprty(userDatasCopy[i],  'cost_in_credits', 0);
      }
    }
  }

  var userDatasCopySet = copyArray(userDatasCopy);

  // Az userDatasCopy-ban tárolt objektumok cost_in_credist tulajdonságaiban tárolt értékek number típusúvá alakítása
  for (var i in userDatasCopySet) {
    if (chechkIfObjectHasOwnProprty(userDatasCopySet[i],  'cost_in_credits')) {
      setTypeOfObjectProperty(userDatasCopySet[i], 'cost_in_credits', 'number' );
    }
  }

  // az userDatasCopySet-ben tárolt tömb sorbarendezése a tömbbent tárolt cost_in_credits tulajdonság alapján javított buborékrendezéssel
  var userDatasCopySetSorted = advBubbleSortArrayOfObjects(userDatasCopySet,  'cost_in_credits');

  console.log(userDatasCopySetSorted);
}
getData('/json/spaceships.json', successAjax);
