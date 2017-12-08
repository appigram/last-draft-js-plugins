import React from 'react'

import {
  AddImageButton,
  AddEmbedButton,
  AddGifButton,
  AddEmojiButton
} from 'draft-js-buttons-plugin'

import BlockTypeSelect from '../BlockTypeSelect'

const defaultStructure = [
  AddImageButton,
  AddEmbedButton,
  AddGifButton,
  AddEmojiButton
]

const DefaultBlockTypeSelect = ({ getEditorState, setEditorState, theme, structure, store, openModal, closeModal }) => (
  <BlockTypeSelect
    getEditorState={getEditorState}
    setEditorState={setEditorState}
    theme={theme}
    store={store}
    openModal={openModal}
    closeModal={closeModal}
    structure={defaultStructure}
  />
)

export default DefaultBlockTypeSelect
