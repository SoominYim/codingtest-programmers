const solution=(A,B)=>(A=A.sort((a,b)=>a-b),B=B.sort((a,b)=>b-a),A.reduce((a,c,i)=>a+c*B[i],0));
