
const solution = (intStrs,k,s,l) =>  intStrs.filter(str => ~~str.slice(s, s + l) > k).map(str => ~~str.slice(s, s + l));
                                                  