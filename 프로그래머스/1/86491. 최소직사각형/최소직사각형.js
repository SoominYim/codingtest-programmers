const solution = s => s.reduce(([maxW,maxH],[w,h])=>[Math.max(maxW,Math.max(w,h)),Math.max(maxH,Math.min(w,h))],[0,0]).reduce((acc,cur)=>acc*cur);