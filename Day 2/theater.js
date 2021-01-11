function seatsInTheater(nCols, nRows, col, row){
    // total number 
    const total = nCols * nRows;
    // new column
    const newCols = nCols - col + 1;
    // new row
    const newRow = nRows - row;

    // the man behind you
    return newCols * newRow;
}

console.log(seatsInTheater(16, 11, 5 , 3));