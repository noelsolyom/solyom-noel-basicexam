Feladat megoldásának menete:

1. A kapott adatokat rendezd ár(cost_in_credits) szerint növekvő sorrendbe. (advanced bubble)

Mivel a userDatas egy json fájlból érkező objektumokat tartalmazó tömb, a benne szereplő minden objektum minden tulajdonságának  minden értékének típusa STRING.

Ahhoz, hogy ár(cost_in_credist) szerint sorba lehessen rendezni (mindegy milyen rendező algoritmussal) a cost_in_credits (és akár az összes többi számadatot tartalmazó kulcs-érték pár értékét) érdemes (sőt át kell) módosítani NUMBER típusúra.

FIGYELEM! Előfordul olyan record, ahol a cost_in_credits értéke null, ami viszont kapásból OBJECT típusú!

Egy gyors ellenőrzéssel megállapítom, hogy az éppen módosítndó objektumnak létezik e egyáltalán a módosítandó tulajdonsága.
    checkhIfObjectHasOwnProprty();
Ez után a cost_in_credits kulcsoknál szereplő null értékekek 0 (nulla) értékre módosítom.
    overwriteValueOfElementInArrayOfObjects();