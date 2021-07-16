# MIAAU :musical_note:

>Music Is All Around Us...
> 
>...all we have to is listen


## Ontdek artiesten wereldwijd

MIAAU is een aanvulling op Spotify. In Spotify is het namelijk niet mogelijk om per land te zoeken naar artiesten.

MIAAU combineert twee muziekdatabases om deze zoekopdrachten wel mogelijk te maken. Vervolgens kun je de artiest afspelen in Spotify.

## Installatie
* Kloon deze repository met je favoriete IDE. 
* Installeer alle benodigde libraries d.m.v `npm install`
* Configureer je eigen firebase backend: https://firebase.google.com/
* Configureer je Spotify App: https://developer.spotify.com/documentation/general/guides/app-settings/   
* Maak een .env bestand en zet daarin je Firebase gegevens en je Spotify Cliënt ID.

```javascript
  REACT_APP_API_FIREBASE=
  REACT_APP_AUTH_DOMAIN=
  REACT_APP_PROJECT_ID=
  REACT_APP_STORAGE_BUCKET=
  REACT_APP_MESSAGING_SENDER_ID=
  REACT_APP_APP_ID=
  REACT_APP_MEASUREMENTID=
  REACT_APP_API_SPOTIFY_CLIENT_ID=
  ````  

### Start de applicatie
Start de applicatie middels het commando: `npm start`

### Inloggen
De applicatie vraagt je om in te loggen. Heb je nog geen account? Kies er dan voor om een nieuw account te registreren
en login met je nieuw aangemaakte account.

### Ontdek
Na het inloggen kun je twee selecties maken. Kies je gewenste bestemming en een muziekgenre.

Vervolgens kun je een keuze maken voor één van de gevonden artiesten. Wanneer deze ook in de database van Spotify staat,
kun je er voor kiezen de muziek in Spotify te openen. Anders krijg je alternatieve muziekbronnen en/of informatiebronnen.


### Test
Wil je één van de geschreven tests uitvoeren? Gebruik dan het commando: `npm test`

