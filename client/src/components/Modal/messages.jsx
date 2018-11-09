import React from 'react';

export const exitButton = 'EXIT';
export const stayButton = 'SYAY';

export const saveButton = 'SAVE';
export const goBackButton = 'GO BACK';

export const deleteButton = 'DELETE';

export const ExitMessage = () => (
  <div className="modal-text">
    <p> You will exit this menu.</p>
    <p> All your changes will be lost! </p>
  </div>
);

export const SaveMessage = () => (
  <div className="modal-text">
    <p> You will save your changes on this note. </p>
    <p> The previous note will be lost! </p>
  </div>
);

export const SaveMessageCollection = () => (
  <div className="modal-text">
    <p> You will save your changes on this collection. </p>
    <p> The previous note will be lost! </p>
  </div>
);

export const DeleteMessage = () => (
  <div className="modal-text">
    <p> You will delete this note permanently! </p>
  </div>
);

export const DeleteAccountMessage = () => (
  <div className="modal-text">
    <p> You will delete this account permanently! </p>
  </div>
);

export const DeleteMessageCollection = () => (
  <div className="modal-text">
    <p> You will delete this collection permanently! </p>
  </div>
);
