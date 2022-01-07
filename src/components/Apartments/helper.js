export const categoriesMap = {
   Task: '<div class="round-fon"><i class="fas fa-shopping-cart head"></i></div>',
   Idea: '<div class="round-fon"><i class="far fa-lightbulb head"></i></div>',
   'Random Thought': '<div class="round-fon"><i class="fas fa-user-md head"></i></div>',
   Quote: '<div class="round-fon"><i class="fas fa-quote-right head"></i></div>',
};
export function defineIdProperty(note) {
   Object.defineProperty(note, 'id', {
      enumerable: false,
      configurable: false,
      writable: true,
      value: Math.random() * 200,
   });
}
