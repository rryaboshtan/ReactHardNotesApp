export function debounce(fn, delay = 1000) {
   let timer = null;

   if (delay === 0) {
      return fn;
   }
   return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
         fn.apply(this, args);
      }, delay);
   };
}

export const options = { month: 'long', day: 'numeric', year: 'numeric' };