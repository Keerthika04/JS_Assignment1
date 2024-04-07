const countDown =(num)=> {

    if ( num < 0 || !Number.isInteger(num)) {
        console.log("Please provide a valid input.");
        return;
    }

    while (num >= 0) {
        console.log(num);
        num--;
    }
}

countDown(10); 
