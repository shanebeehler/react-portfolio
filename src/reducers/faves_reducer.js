import { FAVE_IMAGE, UNFAVE_IMAGE } from '../actions/constants';

export default function(state = { images: [] }, action) {
  switch (action.type) {
    case FAVE_IMAGE:
      return Object.assign({}, state, {
        images: [...state.images, action.image]
      })
    case UNFAVE_IMAGE:
      return Object.assign({}, state, {
        images: state.images.filter((item) => item !== action.image)
      })
    default:
      return state
  }
}
