

function sliderInfo( state={}, action ){
  switch( action.type ){
    case('img'):
      return state = { ...state, data:action.info }
    default:
      return state
  }
}

export default sliderInfo

