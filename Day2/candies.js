    function candies(n, m){
        if (m % n === 0){
            return m;
        }
        const temp = m - (m % n);
        let numCandy = temp/n;
        return numCandy * n;
    }

    console.log(candies(3,10));