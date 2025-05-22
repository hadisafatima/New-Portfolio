const H = document.getElementById("H");
const adzzZz = document.getElementById("adzzZz");

const logo = document.getElementById("logo");

const menuTag = document.getElementById('menuTag');

const menuList = document.getElementById('menuList');

const logoBgShape = document.getElementById('logoBgShape');

const homeScreenContent = document.getElementById('homeScreenContent');

const initial = document.getElementById('initial');

const homeScreenParent = document.getElementById('homeScreenParent');

console.log(window.innerWidth);
console.log(window.innerHeight);

H.addEventListener('animationend', (event) => {

  // if(window.innerWidth < '639px'){
  //   if(event.animationName === 'sizeReducer'){

  //   }
  // }
    if (event.animationName === 'sizeReducerFromSM') {
      adzzZz.classList.remove('hidden');
      adzzZz.classList.add('zShift');
    }

  });

console.log("before zRight animation");
logo.addEventListener('animationend', (event)=> {

  if(event.animationName === 'zRightFromSM'){
    console.log("after zRight animation");
  
    if(screen.innerWidth < '640px'){
      initial.classList.add('initialPlacement');
    }else {
      initial.classList.add('initialPlacementFromSM');
    }
 
  }

});

logo.addEventListener('animationend', (event)=> {
  if(event.animationName === 'zRightFromSM'){
    menuTag.classList.remove('hidden');
    menuTag.classList.add('animate-pulse');
    logoBgShape.classList.remove('hidden');

    setTimeout(() => {
      homeScreenParent.classList.add('contentVisibility')
    }, 2000);

    menuTag.addEventListener("click", () => {
      if(menuList.classList.contains('hidden')){ // need to check if hidden class is added if yes unhide it else do something else
        menuTag.classList.remove('bg-gray-600');
        menuTag.classList.add('bg-pink-500');
        
        menuTag.classList.remove('bottom-12');
        menuTag.classList.add('bottom-13');
        
        menuList.classList.remove('hidden');
        
      } else {
        menuList.classList.add('hidden');
        
        menuTag.classList.remove('opacity-[60%]');
        menuTag.classList.add('bg-gray-600');
        menuTag.classList.remove('bg-pink-500');
      }

    });

  } // animation

});