class Samochod {
    constructor(marka, pojemnosc, kolor, bezwypadkowy) {
      this.selfMarka = marka;
      this.selfPojemnosc = pojemnosc;
      this.selfKolor = kolor;
      this.selfBezwypadkowy = bezwypadkowy;
    }
    jedzieDoPrzodu = () => {
      return "Samochód jedzie do przodu";
  
    }
    przedstawSamochod = () => {
      return`
      Samochod: ${this.selfMarka},
      pojemność: ${this.selfPojemnosc},
      kolor: ${this.selfKolor},
      bezwypadkowy: ${this.selfbezwypadkowy},
      `;
    }
  }
  
  const samochodKarola = new Samochod("Mercedes", "2.0", "czarny", true);
  const samochodDamiana = new Samochod("Trabant", "2.0", "zółty", false);
  const samochodUli = new Samochod("BMW", "2.0", "czerwony", true);
  const samochodkAni = new Samochod("VW", "1.5", "zielony", false);



function iloscBezwypadkowych(array) {
    let counter = 0;
    array.forEach(auto => {
        if (auto.selfBezwypadkowy) {
        counter++;
    }
    })
    return "ilosc samochodów bezwyadkowych: " + counter;
}
let tablicaSamochodow =[samochodKarola, samochodDamiana, samochodUli,samochodkAni];
  
  console.log(iloscBezwypadkowych(tablicaSamochodow));