function zaplanujMission(nazwaMisij,typMisji){


    return{
    
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
const misja = zaplanujMission ("Misja na Marsa","Badawcza")

function dodajCzlonkaZalogi(nazwaMisji, czlonek){
nazwaMisji.zaloga.push(czlonek);
}
function zaladujLadownia(misja, ladownia){
misja.ladownia.push(ladownia)

}
function przemierzDystansu(misja, odleglosc){
    misja.dystans = odleglosc + 20
}

function iloscZapasow(misja){
    const Ilosc = misja.zapasy
zapasy.dystans = Ilosc = + 20
}




function showMisje(misja){
    console.log(
        `
  *** RAPORT MISJI: ${misja.nazwa} ***
Typ misji: ${misja.typ}
Przebyty dystans: ${misja.dystans}
Pozostałe zapasy: ${misja.zapasy}

--- ZAŁOGA ---
${misja.zaloga.map((zaloga) => "- " + zaloga).join("\n")}

--- SPRZĘT W ŁADOWNI ---

`
        
        
    )
}


showMisje(misja)


