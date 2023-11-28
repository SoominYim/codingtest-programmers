const solution = (spell, dic) =>
  dic.some((cur) => 
    cur.length === spell.length &&
    spell.every((char) => [...cur].includes(char))
  ) ? 1 : 2;