# Lempikahvit - frontend

Kyseessä on frontend (React/TypeScript) web-sovellukselle, jossa voi tallentaa tiedot lempikahvilaaduistaan. 

Käyttää oletuksena porttia 3000 ja olettaa [backendin](https://github.com/tvuori/lempikahvit-backend) palvelimen olevan käynnissä portissa 3001.

Listaa palvelimelta haetut tallennetut lempikahvit ja tarjoaa mahdollisuuden uuden lisäämiseen lomakkeen kautta. Listalla olevia kahveja voi myös poistaa perässä olevan ruksin kautta. 

Uusista lempikahveista on annettava nimi, pakkauksen paino, pakkauksen hinta sekä paahtoaste välillä 1-5. Tiedot tallennetaan palvelimelle, kunhan [backend](https://github.com/tvuori/lempikahvit-backend) on taustalla käynnissä oletusosoitteessa http://localhost:3001/coffees

## Installation

```bash
npm install
```

## Usage

```bash 
npm start
```
Löytyy tämän jälkeen selaimella osoitteesta http://localhost:3000/
