function leapYears(year) {

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    console.log(isLeap);

}

leapYears(2024);
leapYears(2025);

