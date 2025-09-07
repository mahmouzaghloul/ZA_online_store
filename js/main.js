let BtnNodeList = document.querySelectorAll(".category_btn"); //output NodeList
let categoryBtn =  Array.from(BtnNodeList);  
let categoryNavList = document.querySelector(".category_nav_list");




categoryBtn.forEach(element=>{{
element.addEventListener("click",ele =>{
categoryNavList.classList.toggle("active");
ele.stopPropagation();
if (categoryNavList.classList.contains("active")) {
    categoryNavList.style.borderBottomLeftRadius ='17px';
    categoryNavList.style.borderBottomRightRadius ='17px';
     element.style.borderTopLeftRadius ='17px';
     element.style.borderTopRightRadius ='17px';

    
}else{
     element.style.borderTopLeftRadius ='0px';
     element.style.borderTopRightRadius ='0px';
}

});

}});

// All onclick on All elements  
document.addEventListener('click',ele=>{
    // Make sure if no click in the categoryNavList
if (!categoryNavList.contains(ele.target)) {
    categoryNavList.classList.remove("active");
}

// onclick on All elements none borderRadius in class categoryBtn
categoryBtn.forEach(loop=>{
    loop.style.borderTopLeftRadius ='0px';
     loop.style.borderTopRightRadius ='0px';
});

});

var swiper = new Swiper(".slide_swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullests:true,//
        clickable:true,
    },
    autoplay:{
        dalay:250,
    },
    loop:true
});