const solution=my_string=>[...my_string].reduce((a,c)=>(c.match(/[A-Z]/)&&a[c.charCodeAt()-65]++,c.match(/[a-z]/)&&a[c.charCodeAt()-71]++,a),Array(52).fill(0));