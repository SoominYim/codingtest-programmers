const solution = s => [...s].map((v,i) =>{
    var last = s.slice(0,i).lastIndexOf(v)
    return last === -1 ? -1 : i - last
})
