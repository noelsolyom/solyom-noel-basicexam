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