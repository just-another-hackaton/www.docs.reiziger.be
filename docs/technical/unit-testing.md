# Unit testing 

Om te garenderen dat het project functionaliteiten werken hebben we unit tests toegevoegd aan het project. Die we kunnen laten lopen om te checken of alles werkt. 
Deze staan bij in de github repo. Maar worden bij een download of clone van een repo naar productie omgevingen niet mee importeerd. 
Omdat unit tests niet thuis horen in een procductie omgeving. 

## Configuratie

De hoofdconfiguratiev van de testsuite is uitgeschreven in de `phpunit.xml` file in de root van het project. 
Deze kunnen simpel weg overschreven worden door de [configuratie flags](https://pestphp.com/docs/cli-api-reference) van PestPHP. 
Indien je meer flexibiliteit nodig hebt in je testing.

## Testing commando's

Voor de unit tests maken we gebruik van PestPHP en PHPUnit. De tests kunnen simpel weg worden uitegevoerd met enkele commando's die we hier onder gedocumenteerd hebben voor. 

### `$ vendor/bin/pest`

::: tip
Dit commando heeft ook een composer alias command genaamd: `composer test`
:::

Met dit commando testen we de hele testsuite zonder enige extra configuratie van groepen bv.
Aangezien de testsuite redelijk groot is raden we je aan om je verder in te lezen op de [configuratie flags](https://pestphp.com/docs/cli-api-reference) van PestPHP.

### `$ vendor/bin/pest --group <name>`

Met dit commando can je tests suites laten lopen tegen een bepaalde testing groep. 
Indien een specifiek deeltje van de applicatie wilt testing. 
Even verderop in de documentatie vind je een overzicht van alle geimplementeerde groepen.

## Code Coverage commando 

(todo)

## Testing groupen

(todo)