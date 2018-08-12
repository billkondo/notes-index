import React from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';

export const stringifyContent = (contentState) => JSON.stringify(convertToRaw(contentState));

export const parseContent = (editorContent) => convertFromRaw(JSON.parse(editorContent));
