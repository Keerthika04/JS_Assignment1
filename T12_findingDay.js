const getDayOfWeek =(num)=> {
    let day;

    switch (num) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "Invalid day number (enter between 1 - 7)";
    }

    return day;
}

console.log(getDayOfWeek(8)); 
console.log(getDayOfWeek(1)); 
console.log(getDayOfWeek(7)); 
console.log(getDayOfWeek(3)); 
