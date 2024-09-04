function solution(name, yearning, photo) {
    var map = {}
    for (let i = 0; i < name.length; i++) {
        map[name[i]] = yearning[i];
    }
  return photo.map(v => {
        return v.reduce((acc, cur) => {
            return acc + (map[cur] || 0);
        }, 0)
  })
}