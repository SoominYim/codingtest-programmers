const solution=emergency=>emergency.map((v)=>emergency.slice().sort((a,b)=>b-a).indexOf(v)+1);
