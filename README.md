Uppgiften: Skapa en inloggningssida

Länk till en testbar sida:
https://romanmatvichuk.github.io/Inloggning/

Länk till ett repo med uppgiften:
https://github.com/RomanMatvichuk/Inloggning

Beskrivning:

Projektet innehåller 3 filer: index.html, script.js, style.css.

index.html innehåller alla vyer. Visa är döljda från början.
script.js innehåller variabler och funktioner.
style.css sidans design. Lånat på w3schools.com

Först när man kommer till denna sida kollas inloggningsstatus med "loginStatus()".
Är "localStorage" innehåller "userName" då få användaren se döljd sidan.
Annars startar inloggningsformen för att mata in användarnamn och lösenord.
Vid felaktiga uppgifter användaren blir informerad med meddelanet.
Användarnamnet och lösenordet jämförs med konstanta variabler.
Om allting stämmer så sparas "userName" i "localStorage" och en döljd sida tas fram.
Vid utloggning töms "localStorage" och sidan döljs igen. Inloggningsform tillkommer.
