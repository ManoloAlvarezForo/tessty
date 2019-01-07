import React from 'react';

const TitleContext = React.createContext({});

export const TitleProvider = TitleContext.Provider;
export const TitleConsumer = TitleContext.Consumer;