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

export function getColorizedDatesString(str) {
   const matches = str.match(/\d{1,2}\/\d{1,2}\/\d{4}/g);
   if (matches?.length) {
      for (let match of matches) {
         str = str.replace(match, `<span className='colorized'>${match}</span>`);
      }
   }

   return str;
}
