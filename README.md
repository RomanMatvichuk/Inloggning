Uppgiften: Skapa en inloggningssida

Länk till en testbar sida:
https://romanmatvichuk.github.io/Inloggning/

Länk till ett repo med uppgiften:
https://github.com/RomanMatvichuk/Inloggning

Beskrivning:

Projektet innehåller 3 filer: index.html, script.js, style.css.

index.html innehåller alla vyer. Visa är dolda från början.
script.js innehåller variabler och funktioner.
style.css är sidans design. Lånat på w3schools.com.

När sidan öppnas kontrolleras inloggningsstatusen med funktionen "loginStatus()".
Om "localStorage" innehåller nyckeln "userName" ser användaren en dold sida.
Annars startar inloggningsformen för att mata in ett användarnamn och ett lösenord.
Vid felaktiga uppgifter informeras användaren med ett meddelande.
Användarnamnet och lösenordet jämförs med konstanta variabler.
Om allt stämmer så sparas nyckeln "userName" i "localStorage" och en dold sida tas fram.
Vid utloggning töms "localStorage" och sidan döljs igen. Inloggningsformen tillkommer.
För att visa och dölja vissa delar av HTML används attributet style.display.
