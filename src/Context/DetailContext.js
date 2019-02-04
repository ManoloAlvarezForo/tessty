import React from 'react';

const DetailContext = React.createContext({});

export const DetailProvider = DetailContext.Provider;
export const DetailConsumer = DetailContext.Consumer;