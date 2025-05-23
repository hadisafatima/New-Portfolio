document.addEventListener('DOMContentLoaded', () => {
    
// export function AboutJS(){
    const heading = document.getElementById("aboutHeading");
    const aboutHeadingParent = document.getElementById('aboutHeadingParent');
    const headingParentImg = document.querySelector('#aboutHeadingParent img');

    
    setTimeout(() => {

        if(window.innerWidth < 640){
            heading.classList.add('headingChangeBfSM');
            setTimeout(() => {
                setTimeout(() => {
                    headingParentImg.classList.replace('hidden', 'inline');
                }, 20);
                aboutHeadingParent.classList.replace('justify-center', 'justify-start');
            }, 1000);
        }else{
            // console.log(window.innerWidth);
            heading.classList.add('headingChange');
            setTimeout(() => {
                headingParentImg.classList.replace('hidden', 'inline');
            }, 500);
        } // if-else ends

    }, 1000); // outest timeout


    // const aboutMenuTag = document.getElementById('aboutMenuTag');
    // const aboutMenuList = document.getElementById('aboutMenuList');
    // const aboutMenuListItems = document.querySelectorAll('#aboutMenuList li');

    // aboutMenuTag.addEventListener("click", () => {
    // const isHidden = aboutMenuList.classList.contains('hidden');

    // if (isHidden) {
    //     aboutMenuTag.classList.remove('bg-gray-600');
    //     aboutMenuTag.classList.add('bg-pink-500');

    //     aboutMenuTag.classList.remove('bottom-12');
    //     aboutMenuTag.classList.add('bottom-14'); // ✅ Valid Tailwind class

    //     aboutMenuList.classList.remove('hidden');
    // } else {
    //     aboutMenuList.classList.add('hidden');

    //     aboutMenuTag.classList.remove('bg-pink-500');
    //     aboutMenuTag.classList.add('bg-gray-600');
    // }
    // });

    // aboutMenuListItems.forEach(menuListItem => {
    // menuListItem.addEventListener('click', () => {
    //     aboutMenuListItems.forEach(i => {
    //     i.classList.remove('border-b-2', 'text-pink-600');
    //     });

    //     menuListItem.classList.add('border-b-2', 'text-pink-600');
    // });
    // });
// }


});