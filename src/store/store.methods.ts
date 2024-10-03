export const loadState = <T>(key: string): T | undefined => {
  try {
    const state = localStorage.getItem(key); 

    if (state) {
      return JSON.parse(state); 
    } else {
      return undefined;
    }
  } catch(e) {
    console.error(e);
    return undefined;
  }
};

export const saveState = <T>(state: T, key: string) => {
  const stringState = JSON.stringify(state);
  localStorage.setItem(key, stringState);
};