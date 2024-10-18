interface ThisInterFace {
  lastCall?: number,
  timeout?: number | undefined
}

export function useDebounce <T>(callback: (...args: T[]) => void, delay: number) {
  return function perform (this: ThisInterFace, ...args: T[]){
    const previousCall = this.lastCall;

    this.lastCall = Date.now();

    if (previousCall && this.lastCall - previousCall <= delay) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};