const solution = (n, slicer, num_list) => 
n===1 ? num_list.slice(0,slicer[1]+1) :
n===2 ? num_list.slice(slicer[0]) : 
n===3 ? num_list.slice(slicer[0],slicer[1]+1) : num_list.slice(slicer[0],slicer[1]+1).filter((_, i) => i % slicer[2] === 0);