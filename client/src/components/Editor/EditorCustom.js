import React from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';

export const stringifyContent = (contentState) => {
  console.log(JSON.stringify(convertToRaw(contentState)));
  return JSON.stringify(convertToRaw(contentState));
}
export const parseContent = (editorContent) => convertFromRaw(JSON.parse(editorContent));
