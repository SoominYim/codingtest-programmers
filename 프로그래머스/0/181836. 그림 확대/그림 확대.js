const solution=(picture,k)=>[...picture.map(a=>Array.from({length: k},()=>[...a].map(b=>b.repeat(k)).join('')))].flat()
