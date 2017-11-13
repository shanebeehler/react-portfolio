import { FAVE_IMAGE, UNFAVE_IMAGE } from './constants';

export function faveImage(image) {
  return {
    type: FAVE_IMAGE,
    image: image
  }
}

export function unfaveImage(image) {
  return {
    type: UNFAVE_IMAGE,
    image: image
  }
}
