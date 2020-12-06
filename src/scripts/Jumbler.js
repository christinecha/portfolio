class Jumbler {
  constructor($element) {
    this.$element = $element

    this.makeSpans()

    this.$chars = Array.prototype.slice.call(this.$element.getElementsByClassName('char'))
  }

  makeSpans() {
    const innerHTML = this.$element.textContent.trim().split('              ').join('')
    const $children = Array.prototype.slice.call(this.$element.children)

    let _innerHTML = innerHTML

    const childrenMap = {}

    $children.forEach($child => {
      const i = innerHTML.indexOf($child.outerHTML)
      childrenMap[i] = $child.outerHTML
      _innerHTML = _innerHTML.split($child.outerHTML).join(i)
    })

    let _newInnerHTML = ''

    const words = _innerHTML.split(' ')

    words.forEach(word => {
      let _newWordHTML = '<span>'

      const chars = word.split('')

      if (childrenMap[word]) {
        console.log('hi', childrenMap[word], _newWordHTML)
        _newWordHTML += '<span class="char">' + childrenMap[word] + '</span>'
      } else {
        chars.forEach(char => {
          _newWordHTML += '<span class="char">' + char + '</span>'
        })
      }

      _newWordHTML += '</span>'
      _newInnerHTML += _newWordHTML + '<span class="space"> </span>'
    })

    this.$element.innerHTML = _newInnerHTML
  }

  jumble() {
    this.$chars.forEach($char => {
      const x = Math.random() * 40 - 20
      const y = Math.random() * 40 - 20
      const z = Math.random() * 20 - 10
      $char.style.transform = `translate3d(${x}px,${y}px,0) rotateZ(${z}deg)`
    })
  }

  unjumble() {
    this.$chars.forEach($char => {
      $char.style.removeProperty('transform')
    })
  }
}

module.exports = Jumbler
