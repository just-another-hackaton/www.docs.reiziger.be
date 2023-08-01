# Permissiebeheer 

In reiziger maken we gebruik van enkele permissies om de toegangen tot bepaalde delen van de applicatie te beheren.
Een gemachtigde administrator of webmaster kan deze ten alle tijden in Reiziger toewijzen of intrekken bij van bepaalde gebruikers. 

## Permissies toevoegen

Permissies kunnen noet vanuit de applicatie worden toegevoegd enkel een ontwikkelaar kan permissies definieren voor de applicatie. 
Doormiddel van de json file die word meegeleverd en gebruik word door de seeder van de applicatie, die verantwoordelijk is voor de permissies. 

Deze permissie seeder kunt u tijdens de deployment van Reiziger simpelweg toevoegen doormiddel van de database seeds in de applicatie. 
Die u kunt uitvoeren doormiddel van het volgende commando: 

```bash 
php artisan db:seed 
```

## Gebruikersbeheer permissies

Om gebruikers te beheren in de applicatie hebben we bijhorende permissies geimplementeerd als veiligheid voor de machtiging en vertrouwen die een gebruiker krijgt in de applicatie. 
Hieronder vind u een oplijsting van de permissies die betrekking hebben tot het gebruikersbeheer in Reiziger.

| Permissie          | Beschrijving                                                                |
| :----------------- | :-------------------------------------------------------------------------- |
| `users.viewAny`    | De gebruiker mag het overzicht van de gebruikers in de applicatie bekijken. |
| `users.write`      | De gebruiker mag nioeuwe accounts voor personen aanmaken in de applicatie.  |
| `users.deactivate` | De gebruiker 
| `users.activate`   | 
| `users.update`     |
| `users.view`       |
| `users.delete`     |

## Huurders permissies

## Verhurings permissies

## Lokalen permissies

## Werkpunten permissies

## Authorizatie permissies

