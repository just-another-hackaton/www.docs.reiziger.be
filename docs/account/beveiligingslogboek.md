---
editLink: true
---

# Beveiligings logboek van een account

::: danger
Documentatie van deze feature word uitgeschreven als referentie voor de feature. Maar kan hierdoor op elk moment van de ontwikkeling nog worden gewijzigd.
:::

Om een betere beveiliging van het gebruikersaccount aan te bieden hebben we een optionele feature ontwikkeld die het toelaat
om de handelingen die een gebruiker uitvoerd omtrent zijn account te monitoren en te loggen in de applicatie. Deze feature kan
met een simpele configuratie waarde geactiveerd en gedeactiveerd worden.

## Configuratie van de feature

**Ik wil het beveiligingslogbboek volledig uitschakelen.**

Standaard is deze geactiveerd in de applicatie. Indien u deze feature niet wenst te gebruiken kunt u deze feature deactiveren doormiddel van
`ApplicationFeatures::securityLog()` uit de configuratie array van `reiziger.features` te verwijderen.

**Ik wil specifieke log handelingen uitschakelen.**

U kunt ook specifieke log handelingen uitschakelen doormiddel van de waardaes in `reiziger.security-log.<entry-name>` op false te zetten.
Indien deze op fasle staat zal de event wil uitvoeren. Maar de benodigde logica voor het weg schrijven naar de log negeren.


## Wat word er gemonitord

Om de gebruikersaccounts een beter inzicht te geven over de veiligheid van hun account. Hebben de volgende events geimplementeerd
in de applicatie. Die logboek berichten registreerd gerelateerd aan het gebruikersaccount:

#### `account.lockout`

* **Event:**
* **Listener:**
* **Beschrijving:** Er zijn teveel authenticatie pogingen het account word uit beveiliging tijdelijk verhinderd om aan te melden.

#### `account.email-changed`

* **Event:**
* **Listener:**
* **Beschrijving:** De gebruiker heeft zijn email adres gewijzigd in de applicatie

#### `account.password-changed`

* **Event:**
* **Listener:**
* **Beschrijving:** De gebruiker heeft zijn wachtwoord gewijzigd in de applicatie.

#### `authentication.log-out-other-devices`

* Event:
* Listener:
* Beschrijving: De gebruiker heeft al zijn apperaturten uitgelogd vanop een afstand.

#### `account.password-reset`

* **Event:**
* **Listener:**
* **Beschrijving:** Wordt naar het logboek geschreven omdat de gebruiker zijn wachtwoord heeft gereset doormiddel van de "wachtwoord vergeten" functie.

#### `account.logout`

* **Event:**
* **Listener:**
* **Beschrijving:** De gebruiker heeft zich uitgelogd in de applicatie.

#### `authentication.successful`

* **Event:**
* **Listener:**
* **Beschrijving:** De gebruiker heeft zicht met success aangemeld in de applicatie.

#### `authentication.failed`

* **Event:**
* **Listener:**
* **Beschrijving:** De gebruiker heeft een aanmeldingspoging uitgevoerd die niet met success is uitgevoerd door de applicatie.

#### `account.verified`

* **Event:**
* **Listener:**
* **Beschrijving:** De gebruiker verifieerd zijn email address in de applicatie.
