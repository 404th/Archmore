

function sliderInfo( state={}, action ){
  console.log( 'actiondan => ' + action )
  switch( action.type.info ){
    case('img'):
     return state = { ...state, images:action.info }
    default:
      return state
  }
}

export default sliderInfo

