import React from 'react';

const DialogContext = React.createContext({});

export const DialogProvider = DialogContext.Provider;
export const DialogConsumer = DialogContext.Consumer;