const solution = (num_list,n) => Array.from({length:num_list.length/n}, v => num_list.splice(0,n))
