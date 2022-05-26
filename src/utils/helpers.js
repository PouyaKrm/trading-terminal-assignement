export const getIndexById = (items, id) => items.findIndex(e => e.id === id);
export const checkIsLastElementByIndex = (items, index) => index === -1 || index === items.length - 1;
export const checkIsFirstElementByIndex = (items, index) => index === -1 || index === 0;
