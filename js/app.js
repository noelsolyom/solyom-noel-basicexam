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
function setTypeOfObjectProperty(inputObject, propertyName, newType) {
  // Definiáljuk a kimeneti változót
  var objectToReturn = {};
  // Megvizsgáljuk, hogy a módosítandó tulajdonság létezik e az objektumokban.
  if (chechkIfObjectHasOwnProprty(inputObject, propertyName)) {
    // Másolatot készítünk az objektumról
    objectToReturn = copyObject(inputObject);
    // Amennyiben létezik a tulajdonság, megvizsgáljuk, hogy number-ré vagy string-gé akarjuk módosítani értéket
    // Amennyiben numberré szeretnénk módosítani és pillanatnyilag nem number típusú
    if (typeof objectToReturn[`${propertyName}`] !== 'number' && newType === 'number') {
    // Elátroljuk a régi értéket egy változóban
      var temp = Number(objectToReturn[`${propertyName}`]);
      // Majd hozzárendeljük a változóban tárolt értéket az objektum tulajdonságához
      objectToReturn[`${propertyName}`] = temp;
      // Amennyiben string-gé szeretnénk módosítani és pillanatnyilag nem string típusú
    } else if (typeof objectToReturn[`${propertyName}`] !== 'string' && newType === 'string') {
      objectToReturn[`${propertyName}`] = objectToReturn[`${propertyName}`].toString;
      // Amennyiben rosszul adtuk meg az új tulajdonság típuság, vagy egyéb típusú a vizsgált tulajdonság, -1-el visszatérünk
    } // else {objectToReturn = -1;}
    // Amennyiben nincs ilyen tulajdonsága az objektumoknak, -1-el visszatérünk
  }  else {objectToReturn = -1;}
  // A függvény visszatér a viszatérési értékkel
  return objectToReturn;
}

function setValueOfObjectProperty(inputObject, propertyName, newValue) {
  // Definiáljuk a kimeneti változót
  var objectToReturn = {};
  // Megvizsgáljuk, hogy a módosítandó tulajdonság létezik e az objektumokban.
  if (chechkIfObjectHasOwnProprty(inputObject, propertyName)) {
    // Másolatot készítünk az objektumról
    objectToReturn = copyObject(inputObject);
    // Amennyiben létezik a tulajdonság, módosítjuk az értékét

    objectToReturn[`${propertyName}`] = newValue;
    // Amennyiben nincs ilyen tulajdonsága az objektumoknak, -1-el visszatérünk
  }  else {objectToReturn = -1;}
  // A függvény visszatér a viszatérési értékkel
  return objectToReturn;
}

// Javított buborékrendezés objektumokkal feltöltött tömbre. STRING-RE!
// Paraméter: tömb, objektum tulajdonsága.
// Visszatérési érték, sorbarendezett új tömb
function advBubbleSortArrayOfObjectsString(inputArray, propertyName) {
  var arrayToReturn = copyArray(inputArray);
  var i = arrayToReturn.length - 1;
  var j = 0;
  while (i >= 2) {
    var csere = 0;
    for (j = 0; j < i; j++) {
      var str1 = arrayToReturn[j][`${propertyName}`].toString();
      var str2 = arrayToReturn[j + 1][`${propertyName}`].toString();
      if (str1.localeCompare(str2) > 0) {
        [arrayToReturn[j], arrayToReturn[j + 1]] = [arrayToReturn[j + 1], arrayToReturn[j]];
        csere = j;
      }
    }
    i = csere;
  }
  return arrayToReturn;
}

// Javított buborékrendezés objektumokkal feltöltött tömbre. NUMBER-re!
// Paraméter: tömb, objektum tulajdonsága.
// Visszatérési érték, sorbarendezett új tömb
function advBubbleSortArrayOfObjectsNumber(inputArray, propertyName) {
  var arrayToReturn = copyArray(inputArray);
  var i = arrayToReturn.length - 1;
  var j = 0;
  while (i >= 2) {
    var csere = 0;
    for (j = 0; j < i; j++) {
      if (arrayToReturn[j][`${propertyName}`] > arrayToReturn[j + 1][`${propertyName}`]) {
        [arrayToReturn[j], arrayToReturn[j + 1]] = [arrayToReturn[j + 1], arrayToReturn[j]];
        csere = j;
      }
    }
    i = csere;
  }
  return arrayToReturn;
}

// Törli a tömbből az adott elemet, ha az adott kulcs értéke megegyezik a keresési feltétellel
// Bemeneti paraméterek: Tömb, ami obektumokkal van feltöltve; kulcs, ahol keres; érték, amit keres
// Visszatérési érték: Módosított tömb, a törölt elemek nélkül. -1, ha nem tömböt adtunk meg
function deleteElementFromArrayOfObjects(inputArray, key, value) {
  // Definiáljuk a kimeneti változót
  var arrayToReturn;
  // Megvizsgáljuk, tömböt adtunk e meg paraméternek
  if (Array.isArray(inputArray)) {
    // Másolatot készítünk a bemeneti paraméterről
    arrayToReturn = copyArray(inputArray);
    // Tömb bejárása ciklussal
    for (var i = 0; i < arrayToReturn.length; i++) {
      // Ha a bemeneti változó adott kulcsának értéke megegyezik a keresési feltétellel
      if (arrayToReturn[i][key] === value) {
        // A bemeneti változó adott elemének törlése
        arrayToReturn.splice(i, 1);
        // Mivel a tömb rövidebb lett, a ciklusváltozó egyel történeő vissazállítása (következő elem is lehet megfelel a feltételeknek)
        i -= 1;
      }
    } // Ha nem tömböt adtunk meg, a visszatérési érték -1.
  } else {arrayToReturn = -1;}
  // A függvény visszatér a visszatérési értékkel
  return arrayToReturn;
}

// Objektum adatainak kiírása
// Bemeneti paraméter: Objektum
function printObjectDatas(inputObject) {
// Megvizsgálom, hogy objektumot adtunk e meg paraméternek és az nem null
  if (typeof inputObject === 'object' && inputObject !== null) {
    // létrehozzuk a változót, amiben a sorokat fogjuk tárolni
    var lines = '';
    // Bejárjuk az objektumot
    for (var i in inputObject) {
      if (Object.prototype.hasOwnProperty.call(inputObject, i)) {
        lines += i + ' : ' + inputObject[i] + '\n';
      }
    }
  }
  return lines;
}

// Logaritmikus keresés rendezett objektumokkal feltöltött tömbben
// Szövegrészletre való keresésre is. Nem case szenzitív
// Paraméter: Tömb, objektumokkal feltöltve, a kulcs, amikben keresünk, érték, ami alapján keresünk
// A visszatérési érték a megtalált objektum, ha nincs találat akkor üres objektum, különben -1
function binarySearcArrayOfObjectsByKey(InputArray, key, value) {
  // A bemeneti változók és keresett érték megfelelőségének vizsgálata
  // Tömböt kell megadni, amiben van leglalább egy elem, és a keresési feltételek is definiálva vannak
  if ( (Array.isArray(InputArray)) && (InputArray.length > 0) && (key !== 'undefined') && (value !== 'undefined') )  {
    // Változók definiálása (és inicializálása, amennyiben szükséges)
    var firstIndex = 0;
    var lastIndex = InputArray.length - 1;
    var middleIndex;
    var flag = false;
    // Feltételezzük, hogy nem lesz találat
    var objectToReturn = {};
    // A ciklus addig megy, amíg a jelzőváltozó hamis, tehát még nincs találatunk és az első index kisebb, mint az utolsó index
    //                                                                            (tehát még nem folyott el a tömb)
    while (!flag && firstIndex <= lastIndex) {
      // A középső indexet a paraméterként átadott tömb középső elemének indexére állítjuk
      middleIndex = Math.floor((firstIndex + lastIndex) / 2);
      // Ha a paraméter tömb middleindex indexű elemének kulcsában található érték megegyezik a keresési feltétellel

      if (InputArray[middleIndex][key].toLowerCase().indexOf(value.toLowerCase()) > -1) {
        // A jelzőváltozót igazra állítjuk
        flag = true;
        // A visszatérési érték a megtalált objektum
        objectToReturn = InputArray[middleIndex];
        // És kilép a ciklusból
        break;
        // Ha a keresési feltétel kisebb, mint a paraméter tömb middleindex indexű elemének kulcsában található érték
      } else if (value.toLowerCase() < InputArray[middleIndex][key].toLowerCase()) {
        // Az utolsó indexet a középső indexel egyel kisebb értékkel tesszük egyenlővé
        lastIndex = middleIndex - 1;
        // Egyébként (tehát ha a keresési feltétel nagyobb, mint a paraméter tömb middleindex indexű elemének kulcsában található érték)
      } else {
        // Az első indexet a középső indexel egyel nagyobb értékkel tesszük egyenlővé
        firstIndex = middleIndex + 1;
      }
    }
    // Ha a bemenetre nem megfelelően adtuk meg a bemeneti változót és/vagy a keresési paramétereket
  }  else {
    // A visszatérési értéket -1-gyel deklaráljuk és inicializáljuk
    objectToReturn = -1;
  }
  return objectToReturn;
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

  //
  // Feladatok végrehajtása
  //
  // Másolatot készítünk a userDatas-ról és innentől ezzel a tömbbel dolgozunk
  var userDatasCopy = copyArray(userDatas);
  //
  // A userDAtasCopy-ban tárolt tömb objektumaiban cost_in_credits tulajdonságoknál szereplő null értékek 0-ra módosítása
  for (var i in userDatasCopy) {
    if (chechkIfObjectHasOwnProprty(userDatasCopy[i],  'cost_in_credits')) {
      if (userDatasCopy[i].cost_in_credits === null) {
        overwriteValueOfObjectProprty(userDatasCopy[i],  'cost_in_credits', 0);
      }
    }
  }

  var userDatasSet = copyArray(userDatasCopy);

  // Az userDatasSet-ban tárolt objektumok cost_in_credist tulajdonságaiban tárolt értékek number típusúvá alakítása
  for (var j in userDatasSet) {
    if (chechkIfObjectHasOwnProprty(userDatasSet[j],  'cost_in_credits')) {
      userDatasSet[j] = setTypeOfObjectProperty(userDatasSet[j], 'cost_in_credits', 'number' );
    }
  }

  // az userDatasSet-ben tárolt tömb sorbarendezése a tömbbent tárolt cost_in_credits tulajdonság alapján javított buborékrendezéssel
  var userDatasSorted = advBubbleSortArrayOfObjectsNumber(userDatasSet,  'cost_in_credits');
  // Elemek törlése az userDatasSorted-ben tárolt tömbből, ahol a consumables értéke null
  var userDatasConsumables = deleteElementFromArrayOfObjects(userDatasSorted, 'consumables', null);

  // Bejárom a userDatasConsumables tömböt
  for (var k in userDatasConsumables) {
    if (Object.prototype.hasOwnProperty.call(userDatasConsumables, k)) {
      // Bejárom a tömbben tárolt objektumokat
      for (var l in userDatasConsumables[k]) {
        // Amennyiben olyan tulajdonságot találok, ahol az érték null
        if (userDatasConsumables[k][l] === null) {
          // Módosítom az aktuális elem tulajdonságának értékét "unknown"ra
          userDatasConsumables[k] = setValueOfObjectProperty(userDatasConsumables[k], l, 'unknown');
        }
      }
    }
  }

  // változó létrehozása adatok számlálásához
  var countData = 0;
  var list = '';
  for (var m = 0; m < userDatasConsumables.length; m++) {
    // Megvizsgálom, hogy a crew tulajdonság nem lett e korábban módosítva.
    if (userDatasConsumables[m].crew !== 'unknown') {
      // Amennyiben nem unknown szerepel értékként, módosítom az érték típusát számra.
      userDatasConsumables[m] = setTypeOfObjectProperty(userDatasConsumables[m], 'crew', 'number' );
    }
    // Megszámolom a crew===1 értékkel rendelkező járműveket
    if (userDatasConsumables[m].crew === 1) {countData += 1;}
    // Kiírom a kapott objektumok értékeit
    console.log(printObjectDatas(userDatasConsumables[m]));
    // Összegyűjtöm a kapott értékeket
    list += printObjectDatas(userDatasConsumables[m]) + '\n';
  }
  // És kirakom a HTML-be
  document.getElementsByClassName('list')[0].innerHTML =  list;
  // Kiírom konzolra a crew===1 járművek mennyiségét.
  console.log('Number of vechiles where Crew = 1: ' + countData);

  // Változó létrehozása a legnagyobb cargo capacity-vel rendelkező objektum adatainak tárolsásához
  var hightestData1 = 0;
  // Változó létrehozása a legnagyobb lenghtiness értékkel rendelkező objektum adatanak a tárolásához
  var hightestData2 = 0;

  for (var n = 0; n < userDatasConsumables.length - 1; n++) {
    if (chechkIfObjectHasOwnProprty(userDatasConsumables[n], 'cargo_capacity') && userDatasConsumables[n].cargo_capacity !== 'unknown') {
      userDatasConsumables[n] = setTypeOfObjectProperty(userDatasConsumables[n], 'cargo_capacity', 'number' );
      if (userDatasConsumables[n].cargo_capacity !== 'unknown' && (userDatasConsumables[n].cargo_capacity < userDatasConsumables[n + 1].cargo_capacity) ) {
        hightestData1 = userDatasConsumables[n + 1];
      }
    }
    if (chechkIfObjectHasOwnProprty(userDatasConsumables[n], 'lengthiness') && userDatasConsumables[n].lengthiness !== 'unknown') {
      userDatasConsumables[n] = setTypeOfObjectProperty(userDatasConsumables[n], 'lengthiness', 'number' );
      if (userDatasConsumables[n].lengthiness !== 'unknown' && (userDatasConsumables[n].lengthiness < userDatasConsumables[n + 1].lengthiness) ) {
        hightestData2 = userDatasConsumables[n + 1];
      }
    }
  }

  // Kiírom konzolra a legnagyobb cargo capacityvel rendelkező jármű nevét.
  console.log('Model name having the highest cargo capacity: ' + hightestData1.model);

  // Változó létrehozása a passengers értékek összesítéséhez.
  var sumData = 0;

  for (var p = 0; p < userDatasConsumables.length - 1; p++) {
    if (chechkIfObjectHasOwnProprty(userDatasConsumables[p], 'passengers') && userDatasConsumables[p].passengers !== 'unknown') {
      userDatasConsumables[p] = setTypeOfObjectProperty(userDatasConsumables[p], 'passengers', 'number' );
      sumData += userDatasConsumables[p].passengers;
    }
  }

  // Kiírom konzolra a passengers összesített értékét.
  console.log('Sum of passengers: ' + sumData);

  // Kiírom konzolra a legnagyobb leghtiness érékkel rendelkező jármű képének a nevét.
  console.log('Image of the vechile having the highest leghtiness: ' + hightestData2.image);

  // az userDatasConsumables-ben tárolt tömb sorbarendezése a tömbbent tárolt model tulajdonság alapján javított buborékrendezéssel
  // Akár külön változóban is megadhatom, hogy mi alapján és mit szeretnék keresni
  var searcyBy = 'model';
  var searchValue = document.querySelector('#search-text').value;


  // A keresési feltételeket váltzóként adom át a sorbarendező és kereső algoritmusoknak
  var userDatasSearchBy = advBubbleSortArrayOfObjectsString(userDatasConsumables,  searcyBy);
  // Az userDatasName-ben tárolt tömbben rákeresek a szóegyezésre
  var objectToSearch = binarySearcArrayOfObjectsByKey(userDatasSearchBy, searcyBy, searchValue);
  // kiírom konzolja az így kapott hajó adatait
  console.log(printObjectDatas(objectToSearch));
  //
  //
  //
  // /////////////////////////////////////////////////////////////////////////////////////////////////////
  // HTML manipulációlk
  document.getElementsByClassName('spaceship-name')[0].innerHTML = objectToSearch.model;

  document.getElementsByClassName('spaceship-data')[0].innerHTML =   printObjectDatas(objectToSearch);
}


getData('/json/spaceships.json', successAjax);
