

console.log("Sonal")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

// buttons.forEach(button => {
  // console.log(button);
  // button.addEventListener('click', function(e){
  // console.log(e.target.id);
    // switch(e.target.id){
        // case 'yellow':
          //  body.style.backgroundColor = e.target.id;
          //  break;
        // case 'deepskyblue':
            //  body.style.backgroundColor=e.target.id;
            //  break;
        // case 'orange':
            // body.style.backgroundColor=e.target.id;
            // break; 
        // case 'grey':
            //  body.style.backgroundColor=e.target.id;
            // break;       
        // case 'purple':
            // body.style.backgroundColor=e.target.id;
            // break;
        // default:
            // body.style.backgroundColor= 'black' ;   
// 
    // }
  // })
// });
// 
  
buttons.forEach(function (button){
    // console.log(button);
    button.addEventListener('click',function(e){
      //  console.log(e.target);
       switch(e.target.id){
        case 'yellow':
             body.style.backgroundColor = 'yellow';
             break;
        case 'deepskyblue':
             body.style.backgroundColor='deepskyblue';
             break;
        case 'orange':
            body.style.backgroundColor="orange";
            break; 
        case 'grey':
             body.style.backgroundColor="grey";
            break;       
        case 'purple':
            body.style.backgroundColor="purple";
            break;
       default:
            break;  
       }
    })
});
body.addEventListener('click',function(e){
  console.log(e.target.id);
  if(e.target.id === 'text'){
    body.style.backgroundColor="#212121"
  }
});