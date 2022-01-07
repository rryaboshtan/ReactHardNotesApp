export default function CategoriesMap({ category }) {
   if (category === 'Task') {
      return (
         <div className='round-fon'>
            <i className='fas fa-shopping-cart head'></i>
         </div>
      );
   } else if (category === 'Random Thought') {
      return (
         <div className='round-fon'>
            <i className='fas fa-user-md head'></i>
         </div>
      );
   } else {
      return (
         <div className='round-fon'>
            <i className='fas fa-quote-right head'></i>
         </div>
      );
   }
}
