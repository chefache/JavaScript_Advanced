function daysInMonth (month, year) {
    console.log(new Date(year, month, 0).getDate());
}

daysInMonth(1985, 3);