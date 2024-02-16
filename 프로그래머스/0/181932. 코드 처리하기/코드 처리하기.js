const solution = code =>(m=0,r='',[...code].forEach((c,i)=>m==0?(c!='1'&&i%2==0?r+=c:c=='1'&&(m=1)):(c!='1'&&i%2==1?r+=c:c=='1'&&(m=0))),r||'EMPTY');
