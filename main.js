"use strict";
// switch 
let day = "sunday ";
switch (day) {
    case 'monday  ':
        console.log("Start of the work week!");
        break;
    case 'sunday ':
        console.log('sunday  :', "Rest and recharge!");
        break;
    case 'friday  ':
        console.log("Weekend is near!");
        break;
    default:
        break;
}
//================================switch================================
let months = "December";
switch (months) {
    case "January":
        console.log("January - Start of the year!");
        break;
    case "February":
        console.log("February - Short and sweet.");
        break;
    case "March":
        console.log("March - Spring is coming.");
        break;
    case "April":
        console.log("April - Showers bring May flowers.");
        break;
    case "May ":
        console.log("May - Flowers are blooming.");
        break;
    case "June ":
        console.log("June - Summer begins.");
        break;
    case "July ":
        console.log("July - Independence Day!");
        break;
    case "Augest":
        console.log("August - Hot summer days.");
        break;
    case "September":
        console.log("September - Back to school.");
        break;
    case "October":
        console.log("October - Spooky season!");
        break;
    case "Movember":
        console.log("November - Time for Thanksgiving.");
        break;
    case "December":
        console.log("December - Holiday season!");
        break;
    default:
        break;
}
//==================================== switch case ====================================================
let num = 80;
switch (true) {
    case num > 85:
        console.log('A+ : Excellent work! Keep it up! ');
        break;
    case num > 80:
        console.log(" A+ : Outstanding performance!");
        break;
    case num > 78:
        console.log(' A : Great job! Keep striving for excellence!');
        break;
    case num > 70:
        console.log(" A : Well done! Keep up the good work!");
        break;
    case num > 65:
        console.log(" B : Good effort! Keep improving!");
        break;
    case num > 60:
        console.log(" B : Nice work! Aim higher next time!");
        break;
    default:
        console.log(" F  : Don't be discouraged. Seek help and keep trying");
        break;
}
