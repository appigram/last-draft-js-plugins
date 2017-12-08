import {
  ImageModal,
  ColorModal,
  EmbedModal,
  EmojiModal,
  GifModal
} from 'draft-js-modal-plugin'

const getModalByType = (type) => {
  if (type === 'image') { return ImageModal }
  if (type === 'color') { return ColorModal }
  if (type === 'embed') { return EmbedModal }
  if (type === 'emoji') { return EmojiModal }
  if (type === 'gif') { return GifModal }
  return undefined
}

export default getModalByType
