const solution = ([id,pw],db) => {
  if(db.find(([dbId,dbPw]) => dbId === id && dbPw === pw)) return "login"
  else if (db.find(([dbId,dbPw]) => dbId === id)) return "wrong pw"
  else return "fail"
}