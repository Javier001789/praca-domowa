function zaplanujMission(nazwaMisij, typMisji) {


    return {

        nazwa: nazwaMisij,
        typ: typMisji,
        zaloga: ["Szkiper", "Kowalski"],
        dystans: 10,
        celeBadawcze: ["Poszukiwanie wody"],
        ladownia: {
            narzedzia: ["flashlight"],
            zapasy: 100
        }

    }

}
const misja = zaplanujMission("Misja na Marsa", "Badawcza")

function dodajCzlonkaZalogi(zaplanujMission, zaloga) {
    zaplanujMission.zaloga.push(zaloga);

}
function zaladujLadownia(zaplanujMission, ladownia) {
    zaplanujMission.ladownia.narzedzia.push(ladownia)

}

function przemierzDystansu(misja) {
    const Odleglosc = misja.dystans
    misja.dystans = Odleglosc + 20
}

function iloscZapasow(misja, liczba) {
    //const ilosc = misja.ladownia.zapasy
    // ladownia.zapasy.dystans = Ilosc = + 20
    misja.ladownia.zapasy += liczba
}




function showMisje(misja) {
    console.log(
        `
  *** RAPORT MISJI: ${misja.nazwa} ***
Typ misji: ${misja.typ}
Przebyty dystans: ${misja.dystans}
Pozostałe zapasy: ${misja.ladownia.zapasy}

--- ZAŁOGA ---
${misja.zaloga.map((zaloga) => "- " + zaloga).join("\n")}

--- SPRZĘT W ŁADOWNI ---
${misja.ladownia.narzedzia.map((ladownia) => "- " + ladownia).join("\n")}
`


    )
}


showMisje(misja)
przemierzDystansu(misja)
showMisje(misja)
iloscZapasow(misja, 20)
showMisje(misja)


