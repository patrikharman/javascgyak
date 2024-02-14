var szam = 2;
export function elagazas1() {
    if (szam === 2) {
        console.log("An számunk = " + szam)
        console.log(typeof szam)
    } else {
        console.log("A számunk nem = " + szam)
        console.log(typeof szam)
    }
}
/* a szam változóról döntsük el,hogy ps-e?*/

function elagazas2() {

    if (szam % 2 === 0) {
        console.log("A szam 0")
    } else if (szam % 2 === 0) {
        console.log(szam + "páros")
    } else {
        console.log(szam + "páratlan")
    }
}


/*írjukki a konzolra az alábbi üzenetet 10-szer*/
function forCiklus() {
    for (let index = 0; index < 10; index++) {
        console.log("Ez az első üzenet" + index);

    }
}

/*while ciklussal*/

function whileCiklus() {
    let index = 0;
    while (index < 10) {
        console.log("Ez az első üzenet" + index);
        index++;
    }
}