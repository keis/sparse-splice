suite('sparse-splice', function () {
  var sparseSplice = require('../lib/sparse-splice')
    , source
    , remove

  set('iterations', 1000)

  function randuniqarr(min, max, length) {
    var arr = []
      , r

    while(length--) {
      r = Math.round(Math.random() * (max - min) + min)
      while (~arr.indexOf(r)) {
        r++
      }
      arr.push(r)
      max--
    }
    return arr
  }

  before(function () {
    var i
    source = []
    for (i = 0; i < 10000; i++) {
      source.push({val: i})
    }
    remove = randuniqarr(0, 10000, 500)
  })

  bench('', function () {
    var arr = source.slice()
    sparseSplice(arr, remove)
  })
})
