# Caching 

Een veelvoorkomend pijnpunt in applicaties is het optimaliseren en verminderen van het aantal requests dat u moet maken naar de applicatie. 
Stel dat we een dashboard hebben in de applicatie dat het aantal verhuringen, gebruikers en of werkpunten weergeeft. 
Een pagina zoals deze zal tientallen requests uitvoeren naar uw database voordat de pagina deze kan weergeven. 

Daarom hebben we nagedacht over hoe we dit het beste aanpakken zodat onze initiele request van de pagina geoptimaliseerd blijft en niet vertraagd. 
Daarom hebben we op bepaalde punten van de applicatie gebruik gemaakt van caching. Zodat we gegevens die we regelmatig opvragen opgeslagen kunnen worden in het toepassingsgeheugen. 
En we de gegevens al bij de hand hebben en niet terug hoeven naar de databank om te telkens op te vragen. 

## Caching strategie

Om het onderliggende systeem voor caching zo duidelijk mogelijk te houden beschrijven we hier in het kort hoe de caching layer is opgebouwd in Reiziger. 
We proberen om een zo duidelijk mogelijke strategie te handelen zodat het voor iedereen duidelijk is het we de zaken omtrent caching aanpakken.

### Naar de cache schrijven 

Wat we momen,teel naar de chache schrijven is het volgende. views, routes en database querieps die vaak voorkomen. 
De routes en views worden automatisch afgehandeld voor het Laravel framework. Vandaar dat we ons verder toespitsen in dit topic en de volgende op de database queries. 

Om te beginnen schrijven we namelijk vaak voorkomende data naar de cache zoals de resultaten van een overzicht dashboard.
Of specifieke data entries vanuit de database. De cache word behandeld in de repository functie of action class met de volgende code. 

```php 
use App\Domain\Lease\Models\Lease; 
use Illuminate\Support\Facades\Cache;

$verhuringen = Cache::remember('lease:<unique identifier>', $timeToLive, function () use ($leaseIdentifier): Lease {
    return Lease::find($leaseIdentifier);
});
```

Wat er gebeurd  is het volgende, eerst kijkt men of de verhuring beschikbaar is in de cache.
Indien het item niet beschikbaar is zal het worden opgehaald in de databank en worden gecached.
Om het vervolgens weer te geven in de pagina.

### Invalideren van de cache items

Het invalideren van cache items gebeurd wanneer de gedefinieerde time to live van de key is verstreken. Daarbij word het item verwijderd en automatisch hernieuwd. 
Bij verwijdering van een databank entiteit zal de cache key van de entiteit worden verwijderd en de cache key van het overzicht. 
Net zoals bij het wijzigen van een entiteit. 
Indien er een entiteit word aangemaakt zal alleen de overzichts cache worden verwijderd. 

Deze handelingen zullen plaatsvinden in [Observers](https://laravel.com/docs/10.x/eloquent#observers) die worden gedefinieerd in de models.  

## Naming conventies

In het onderliggen cching systeem hebben we een naming conventie ingebouwd in de benaming van cache keys. 
Om een beter te kunnen onthouden waarvoor het cache item staat.
Een kort overzicht vind je hier waar we bv de verhuringen als voorbeeld nemen.

#### `lease:<database id>`

Onder deze key bewaren de databank entiteit voor die gebruikt word in een specifieke informatie weergave van een verhuring. 

#### `lease:<form input type>`

Soms kan het voorvallen dat we formulier inputs moeten opstellen op basis van gegevens uit de database zoals een select field bijvoorbeeld. $
Omdat deze ook vaak weinig of niet gewijzigd word zoals gebruikers bv. Word deze ook gecached. En opgeslagen onder de volgende key: `user:select`



