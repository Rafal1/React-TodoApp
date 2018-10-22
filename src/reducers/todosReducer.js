const todos = (state = [{ squares: Array(9).fill(null) }], action) => {
    switch (action.type) {
      case 'CHANGE-USER-ID':
        function filterFunc(value, index) {
          return index <= action.stepNumber
        }
        const historyMod = state.filter(filterFunc)
        let sq = historyMod[historyMod.length - 1].squares.slice()
        console.log('historyMod:' + JSON.stringify(historyMod))
        sq[action.clickedSquare] = action.nextSymbol
  
        return [
          ...historyMod,
          {
            squares: sq
          }
        ]
      default:
        return state
    }
  }
  
  export default todos