const solution=(my_string,queries)=>queries.reduce((a,[s,e])=>[...a.slice(0, s),...[...a.slice(s,e+1)].reverse(),...a.slice(e+1)],my_string).join('')