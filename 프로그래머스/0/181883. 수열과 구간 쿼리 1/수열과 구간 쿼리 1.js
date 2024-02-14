const solution=(arr,queries)=>queries.reduce((acc,[s,e])=>{
    const newArr = [...acc];
        for (let i = s; i <= e; i++) {
            newArr[i]++;
        }
        return newArr;
    }, arr);