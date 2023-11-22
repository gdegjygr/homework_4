 // Email
//  document.addEventListener('DOMContentLoaded', () => {
//     const gmailInput = document.querySelector('.email')
//     const gmaiResult = document.querySelector('.result')
//     const button = document.querySelector('.button')
   
//     if(gmailInput & gmaiResult & button){
//         const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
   
   
//     button.addEventListener('click', () => {
//         if (regExp.test(gmailInput.value)) {
//           gmaiResult.innerHTML = 'accept';
//         } else {
//           gmaiResult.innerHTML = 'pls return';
//         }
//       });
//     } else {
//         console.error('One or more elements not found.');
//       }   
//  })


 export function chekEmail(){

  const gmailInput = document.querySelector('.email')
  const gmaiResult = document.querySelector('.result')
  const testBtn = document.querySelector('.testBtn')
 
  if(gmailInput && gmaiResult && testBtn){
      const regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
 
  testBtn.addEventListener('click', (event) => {
      if (regExp.test(gmailInput.value)) {
        gmaiResult.innerHTML = 'accept';
        gmaiResult.style.color = 'green'
        event.preventDefault()
      } else {
        gmaiResult.innerHTML = 'egit mail';
        gmaiResult.style.color = 'red'
        event.preventDefault()
      }
    });
  } 

  
// window.addEventListener('beforeunload', (event) => {
//   event.preventDefault();
//   event.returnValue = '';
// });
}