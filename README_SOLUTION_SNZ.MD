**FONTOS MEGJEGYZÉSEK**
Az app.js fájlba írt függvények majdnem minden lépése kommentelve van. Ebből fakadóan a fájl majdnem kétszer akkora, mint kommentek nélkül lenne. Az egyes függvényekben törekedtem a változók és függvények neveinek oly megválasztására, hogy azok beszéldesek legyenek.

Mivel az összes függvény egyazon fájlban található, emiatt az app.js fájl hosszú, több, mint 300 sor. Időhiány miatt nem válogattam szét az egyes függvényeket funkciójuk szerint (általános, rendező, keresó, modosító függvények), úgy az egyes fájlok külön-külön sokkal rövidebbek lennének.

Feladat megoldásának menete:

1. A kapott adatokat rendezd ár(cost_in_credits) szerint növekvő sorrendbe. (advanced bubble)
**MEGJEGYZÉSEK**
Mivel a userDatas egy json fájlból érkező objektumokat tartalmazó tömb, a benne szereplő minden objektum minden tulajdonságának  minden értékének típusa STRING.

Ahhoz, hogy ár(cost_in_credist) szerint sorba lehessen rendezni (mindegy milyen rendező algoritmussal) a cost_in_credits (és akár az összes többi számadatot tartalmazó kulcs-érték pár értékét) érdemes (sőt át kell) módosítani NUMBER típusúra.

FIGYELEM! Előfordul olyan record, ahol a cost_in_credits értéke null, ami viszont kapásból OBJECT típusú!

Azért, hogy a módosítások során ne változzon a tömbök tartalma, minden lépésben valódi másolatot készítek az éppen aktuális tömbről.
    copyArray();
    MEGJEGYZÉS: Az eslint hibát jelez a for-in ciklusnál amikor objektumot járok be, miszerint váratlan problémába ütközhetek az objektum prototípusánál meglévő tulajdonságok miatt. Nem jöttem rá ennek a hibának kiküszöbölésére.

**VÉGREHAJTÁS**
Egy gyors ellenőrzéssel megállapítom, hogy az éppen módosítndó objektumnak létezik e egyáltalán a módosítandó tulajdonsága.
    checkhIfObjectHasOwnProprty();
Ez után a cost_in_credits kulcsoknál szereplő null értékekek 0 (nulla) értékre módosítom.
    overwriteValueOfObjectProprty();
Ez után a cost_in_credits tulajdonságok értékeinek a típusát átmódosítom STRINGről NUMBER-re.
    setTypeOfPropertyInObjectOfArray();
Ha ezzel megvagyok, javított buborékrendezéssel rendezem az adatokat.
    advBubbleSortArrayOfObjects();

2. Töröld az összes olyan adatot (tehát az objektumot a tömbből), ahol a consumables értéke NULL. Fontos, hogy ne csak undefined-ra állítsd a tömbelemet!!!

**Végrehajtás**
Függvénnyel megvizsgálom atömbben tárolt objektumok tulajdonságait, és amennyiben az adott tulajdonságnál a keresési feltételnek megfelelő érték van, törlöm az adott elemet a tömbből
    deleteElementFromArrayOfObjects();

3. Az összes NULL értéket (minden objektum minden tulajdonságánál) módosítsd "unknown"-ra

Bejárom a tömb elemetit, és ha az adott elem objektum, végignézem a tulajdonságait, és ahol null értéket találok módosítom "unknown"-ra.
    setValueOfObjectProperty();

4. Írasd ki így kapott hajók adatait.

**Végrehajtás**

Bejárom a tömbben tárolt objektumokat és sorban kiírom az adatokat a konzolra.
    printObjectDatas();

5. Készítened kell egy statisztikát, mely kiírja a következő statisztikai adatokat: 

* Egy fős (crew = 1) legénységgel rendelkező hajók darabszáma.
* A legnagyobb cargo_capacity-vel rendelkező hajó neve (model)
* Az összes hajó utasainak (passengers) összesített száma
* A leghosszabb(lengthiness) hajó képének a neve

**Végrehajtás**

   * Egy fős (crew = 1) legénységgel rendelkező hajók darabszáma.
    Végigjárom a tömbben tárolt objektumokat, és ahol a crew tulajdonság egyenlő 1, azokat megszámolom.
    A számolást az előző (adatok kiírása konzolra) ciklussal teszem meg.
    Mivel a crew tulajdonság jelen pillanatban string typusú, ugyan megtehetném, hogy laza egyenlőséget vizsgálok, ám úgy döntöttem,mivel várhatóan számérték szerepel a crew tulajdonság értéknél, ezért kapásból számmá is alakítom az előzőleg megírt függvényemmel. Mivel korábban minden null értéket "unknown"ra állítottam, ezt a kivételt feltételvizsgálathoz kötöm.
        setTypeOfPropertyInObjectOfArray();
    Így már érték és típusegyenlőséget is vizsgálhatok.

* A legnagyobb cargo_capacity-vel rendelkező hajó neve (model)
    Végigjárom a tömbben tárolt objektumokat, és figyelem a cargo_capacity értéket.
    A vizsgálathoz új ciklust fogok használni, habár használhattam volna az előzőt is.
    Mivel a cargo_capacity tulajdonság jelen pillanatban string typusú, ugyan megtehetném, hogy laza egyenlőséget vizsgálok, ám úgy döntöttem, mivel várhatóan számérték szerepel a cargo_capacity tulajdonság értéknél, ezért kapásból számmá is alakítom az előzőleg megírt függvényemmel. Mivel korábban minden null értéket "unknown"ra állítottam, ezt a kivételt feltételvizsgálathoz kötöm.
        setTypeOfPropertyInObjectOfArray();
    Így már valódi számokat hasonlíthatok össze.

* Az összes hajó utasainak (passengers) összesített száma
    Végigjárom a tömbben tárolt objektumokat, és figyelem a passangers értéket.
    A vizsgálathoz új ciklust fogok használni, habár használhattam volna az előzőt is.
    Mivel a passangers tulajdonság jelen pillanatban string typusú, ugyan megtehetném, hogy laza egyenlőséget vizsgálok, ám úgy döntöttem, mivel várhatóan számérték szerepel a passengers tulajdonság értéknél, ezért kapásból számmá is alakítom az előzőleg megírt függvényemmel. Mivel korábban minden null értéket "unknown"ra állítottam, ezt a kivételt feltételvizsgálathoz kötöm.
        setTypeOfPropertyInObjectOfArray();
    Így már valódi számokat adhatok össze.

* A leghosszabb(lengthiness) hajó képének a neve
    Mivel hasonló már volt, ezért egy korábbi ciklusban végzem el a keresést.
    Mivel a lengthiness tulajdonság jelen pillanatban string typusú, ugyan megtehetném, hogy laza egyenlőséget vizsgálok, ám úgy döntöttem, mivel várhatóan számérték szerepel a lengthiness tulajdonság értéknél, ezért kapásból számmá is alakítom az előzőleg megírt függvényemmel. Mivel korábban minden null értéket "unknown"ra állítottam, ezt a kivételt feltételvizsgálathoz kötöm.
        setTypeOfPropertyInObjectOfArray();
    Így már valódi számokat hasonlíthatok össze.

6. Legyen lehetőség a hajókra rákeresni _model_ szerint. (logaritmikus/binary sort)

    * A keresett nevet paraméterként kapja a függvényed.
    * A keresés nem case sensitive
    * Nem csak teljes egyezést vizsgálunk, tehát ha a keresett szöveg szerepel a hajó nevében már az is találat
    * Ha több találatunk is lenne, azt a hajót adjuk vissza, amelyiknek a neve ABC sorrendben a legelső lenne.
    * Írasd ki a hajó adatait.

    MEGJEGYZÉS: ahhoz, hogy logaritmikus keresőalgorimust hasunálhassak bármilyen adatstruktúrán, feltétel, hogy a keresési szempont szerint rendezetten legyenek az adatok.

    Összetett a feladat;
    Első lépésben sorbarendezem az adatokat "model" azaz név szerint.
    
    A keresőalgoritmus paraméterként kapja meg a keresett nevet.
        A keresőalgoritmus nem case sensitive és részleges egyezést is vizsgál.
        Az első találatot adja vissza a függvény.
    
    A hajó adatait a konzolra írom ki.

    A hajó adatait a HTML-be is exportálom