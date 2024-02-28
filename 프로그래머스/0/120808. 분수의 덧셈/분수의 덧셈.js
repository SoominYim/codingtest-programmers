const solution=(numer1,denom1,numer2,denom2)=>[(numer1*denom2+numer2* denom1),(denom1*denom2)].map((v,i)=>v/(gcd=(a,b)=>b?gcd(b,a%b):a)(...[(numer1*denom2+numer2*denom1),(denom1*denom2)]));
