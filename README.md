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

Na enquêtes, brainstormsessies en micro-prototyping hebben we enkele concepten bedacht. Hieruit kozen we fincaal 1 concept:

'Een volle vuilbak toont aan waar een lege is.'

## Gebruikersflow

1. Gebruiker loopt rond met afval
2. Ziet een volle vuilbak
3. Scant QR-code op de vuilbak
4. Wordt doorverwezen naar onze website
5. Kaart wordt weergegeven met:
   - Locatie van de gebruiker
   - Locaties van andere vuilbakken
6. Gebruiker heeft twee mogelijkheden:
   - Handmatig naar lege vuilbak zoeken
   - Op "Zoek vuilbak" knop drukken
7. Geselecteerde vuilbak is gemarkeerd op kaart
8. Gebruiker klikt op "Route" knop
9. Google Maps opent in nieuw tabblad met routeaanwijzingen
10. Gebruiker navigeert naar de lege vuilbak
11. Als deze vuilbak ook vol is, kan de gebruiker dit melden via de app

## Technologie Stack

- **Frontend**: React + Vite
- **Styling**: CSS
- **Kaart**: [Leaflet](https://leafletjs.com/) en [OpenStreetMap](https://www.openstreetmap.org/)  
- **Database**:  [Supabase](https://supabase.com/)

## API
We doen 2 API calls naar onze database:
- GET, voor het ophalen van alle vuilbakken
- POST, voor het updaten van een status van een vuilbak


