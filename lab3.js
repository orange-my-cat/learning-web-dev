function wordle(target, guess){
    const tsplit = target.split('');
    const gsplit = guess.split('');
    if (tsplit.length != 5 || gsplit.length != 5){
        alert('Each word may only have 5 letters.');
    } 
    else {
        let results = ''
        for(i=0; i < 5; i++) {
            for(j=0; j<5;j++){
                if(tsplit[j] == gsplit[i]){
                    if(i==j){
                        results = results.concat('the ', i+1, ' letter is in the correct position ');
                        break;
                    }else{
                        results = results.concat('the ', i+1, ' letter apears in the word, but in a different position ');
                        break;
                    }
                }else if (j==4){
                    results = results.concat('the ', i+1, ' letter does not appear in the word ')
                }
            }

        }
        document.getElementById('results').innerHTML = results;
    }
}
