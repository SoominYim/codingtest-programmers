const solution=s=>![...s].reduce((a,c)=>(a<0?a:(c=='('?++a:--a)),0)
