module.exports = function sparseSplice(arr, remove) {
  remove.sort().reverse().forEach(function (idx) {
    arr.splice(idx, 1)
  })
}
