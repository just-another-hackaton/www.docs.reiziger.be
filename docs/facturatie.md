# Facturatie 

:::info
Dit portaal en de benodigde features is nog volop in aanbouw en hierdoor kunnen de correctheid en volledigheid van de documentatie nog niet garanderen.
:::

Reiziger staat toe dat er facturen kunnen opgemaakt in de behering van een verhuring.
Deze functionaliteit zal alleen maar beschikbaar zijn wanneer een verhruing als bevestigd staat geregistreerd in de applicatie. 

De opzet van de facturatie is dat beheerders van verhuringen een centraal en duidelijk overzicht kunnen hebben en opbouwen van de kosten die in rekening worden gebracht
tijdens een verhuur zoals bv het verbruik van gas, water en electriciteit. Maar ook bv kortingen, schade aan het materieel en of domein. 

## Initiele gegevens 

Wanneer een verhuring word bevestigd zal er in de achtergrond een automatisch proces plaatsvinden die de basis gegevens voor de facturatie opslaat in een databank tabel. 
Zoals de opsteller, ontvanger, volgnummer en de korte beschrijving. De bedoeling dan is dat de persoon die verantwoordelijk is voor de facturatie en of verhuur de diensten 
of items manueel toevoegt in het facturatie overzicht.

### Samenstelling van het volgnummer.



## Configuratie

Om het facturatie systeem meer aan te passen naar de noden van de eindgebruiker van dit product maken we gebruiken van enkele configuratie waarden. Hieronder beschrijven we 
zo goed mogelijk alle mogelijke waardes en variablen van de ocnfiguratie die betrekken hebben tot het facturatie systeem.

:::danger
Aangezien deze feature nog volop in opbouw is zal dit stukje later in de ontwikkeling worden uitgewerkt.
:::

## Factuur afronden (afsluiten)

:::warning
Indien de factuur is afgerond zal deze ook niet meer kunnen worden gewijzigd in reiziger. Dus we adviseren u om alles goed na te kijken voor u gebruik maakt van deze functionaliteit.
:::

Als men klaar is met alle diensten of items in te voegen in het factuur overzicht kan men op de knop 'factuur afronden' klikken om de facuur finaal te maken en zal de knopen vervangen worden
met een export knop. Met deze knop kunt u de factuur download in een pdf formaat zodat u deze makkelijk kunt mailen naar de huurder. 

Alsook zal de betalingsstatus gewijzigd worden naar `open` en zal er als betalings deadline een x aantal dagen worden gebruikt die u makkelijk zelf kunt configureren. Zoals hier boven in de sectie 'Configuratie' staat aangegeven. 

## Facturatie statussen

De volgende statussen zijn mogelijk in de applicatie bij een factuur. 

### `nvt`

De status 'niet van toepassing' zal gebruikt worden als de factuur nog in opbouw is en er nog geen betalingstatus aan moet worden gegeven. Indien deze factuur is afgrond zal de eerste betalingsstatus worden aangeduid op de factuur.

### `onbetaald`

De factuur is afgerond in de applicatie en staat open voor betaling door de huurder van het domein en of materieel. 

### `betwist`

De factuur is opgemaakt en verzonden naar de huurder. Maar echter betwist hij diensten en of andere items die vermeld staan op het factuur. 

### `geannuleerd`

De factuur voor de verhuring is incorrect en is daarbij ook ingetrokken wegens de opstelling van een nieuwe factuur met de nodige correcties.

### `betaald`

De huurder heeft heeft de factuur geaccepteerd en betaald binnen de afgesproken termijn. 

### `termîjn verstreken`

De huurder is er niet in geslaagd om de factuur te betalen in de wettelijk en of afgesproken termijn. 

## Het checken van een verlopen betalingstermijn

In de achtergrond zal er via de scheduler elke dag om 00u01 een check worden gestart die nakijkt of de facturen die buiten de datum van de betalingstermijn
nog niet staan aangegegeven als `betaald' te makeren als 'termijn verstreken' in de applicatie. Zodat administrators met gepaste middelen kunnen handelen en een duidelijk 
overzicht hebben van de facturen die nog betaald moeten worden. 