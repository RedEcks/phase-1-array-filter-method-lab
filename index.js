// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase()===name.toLowerCase());

}

function fuzzyMatch(drivers,firstInitials){
    return drivers.filter(driver=>driver.substring(0,2)===firstInitials)
}

function matchName(drivers,name){
    return drivers.filter(driver=> driver.name===name)
}
