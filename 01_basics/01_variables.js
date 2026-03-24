const accountId = 144553
let accountEmail = "ritika@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // not a good practice ..even though memory gets alloted for the variable.
let accountState; // can add semicolon or not ..it's completely your choice.

// accountId = 2 not allowed

accountEmail = "hc@hc.com"
accountPassword = "2211228"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
