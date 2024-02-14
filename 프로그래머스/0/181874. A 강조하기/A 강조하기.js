
const solution=myString=>[...myString].map(v=>v=='a'||v=='A'?'A':v>='A'&&v<='Z'?v.toLowerCase():v).join('');
