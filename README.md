# Trash Tracker - Lege Vuilbakken Vinden in Gent

## Probleemstelling

Tijdens onze verkenningsfase in Gent zijn we meerdere malen een terugkerend probleem tegengekomen: volle vuilbakken. Wanneer mensen een volle vuilbak tegenkomen, laten zij hun afval vaak naast of op de vuilbak staan, in plaats van naar een ander alternatief te zoeken.

Dit veroorzaakt aanzienlijke problemen:

- Straten worden vuiler, wat tot meer ongedierte leidt
- Negatieve invloed op het klimaat
- Slechte gebruikerservaring voor bewoners en toeristen

## Doelgroep

Onze oplossing is ontworpen voor iedereen die in Gent rondloopt:

- **Bewoners** die naar een geschikte plek zoeken om hun afval weg te gooien
- **Toeristen** die de stad verkennen

## Conceptkeuze

Na enquêtes, brainstormsessies en micro-prototyping hebben we drie concepten bedacht:

1. **Haalbaar**: Een app met locaties van vuilbakken die leeg zijn
2. **Creatief**: Een volle vuilbak toont aan waar een lege is
3. **Moonshot**: Efficiënte workflow voor ondergrondse vuilnisbakken

We kozen het Creatieve Concept, dat ook gemeenschappelijke aspecten heeft met het Haalbare concept.

## MVP-definitie

### Wat hebben we wel gebouwd ✅

- Een **website** om gemakkelijk lege vuilbakken in Gent te lokaliseren
- **Interactieve kaart** met:
  - De locatie van de gebruiker
  - Locaties van alle vuilbakken
- **"Zoek vuilbak" knop** om automatisch de dichtstbijzijnde lege vuilbak te selecteren
- **Route knop** die aanwijzingen opent in Google Maps
- **Rapportagesysteem** waarmee gebruikers vuilbakken kunnen melden als leeg of vol

### Wat hebben we niet gebouwd ❌

- Routebegeleiding in de app zelf (verwijst naar Google Maps)
  - Hoewel minder optimaal, kunnen gebruikers toch externe routebegeleiding gebruiken

## Gebruikersflow

Gebruiker loopt rond met afval
       ↓
Ontmoet een volle vuilbak
       ↓
Scant QR-code op de vuilbak
       ↓
Wordt doorverwezen naar onze website
       ↓
Kaart wordt weergegeven met:
- Locatie van de gebruiker
- Locaties van alle vuilbakken
       ↓
Gebruiker heeft twee mogelijkheden:
├─ Handmatig naar lege vuilbak zoeken
└─ Op "Zoek vuilbak" knop drukken
       ↓
Geselecteerde vuilbak is gemarkeerd op kaart
       ↓
Gebruiker klikt op "Route" knop
       ↓
Google Maps opent in nieuw tabblad met routeaanwijzingen
       ↓
Gebruiker navigeert naar de lege vuilbak
       ↓
Als deze vuilbak ook vol is,
kan de gebruiker dit melden via de app

## Technologie Stack

- **Frontend**: React + Vite
- **Styling**: CSS
- **Kaarten**: Google Maps API
- **Database**: Supabase
- **QR Code Scanner**: Custom QR Scanner Hook
