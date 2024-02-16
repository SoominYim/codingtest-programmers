const solution=numbers=>+numbers.match(/(zero|one|two|three|four|five|six|seven|eight|nine)/g).map(v=>["zero","one","two","three","four","five","six","seven","eight","nine"].indexOf(v)).join('')
