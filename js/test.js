var screenAnimateElements={
    '.screen-1':[
        '.screen-1__heading',
        '.screen-1__shadow',
        '.screen-1__phone',
    ],
    '.screen-2':[
        '.screen-2__subheading',
        '.screen-2__heading',
        '.screen-2__phone',
        '.screen-2__point',
        '.screen-2__point_i_1',
        '.screen-2__point_i_2',
        '.screen-2__point_i_3',
    ],
    '.screen-3':[
        '.screen-3__subheading',
        '.screen-3__heading',
        '.screen-3__phone',
        '.screen-3__features',
        
    ],
    '.screen-4':[
        '.screen-4__subheading',
        '.screen-4__heading',
        '.screen-4__type__item_i_1',
        '.screen-4__type__item_i_2',
        '.screen-4__type__item_i_3',
        '.screen-4__type__item_i_4',
        
    ],
    '.screen-5':[
        '.screen-5__subheading',
        '.screen-5__heading',
        '.screen-5__bg',
        
    ],
}
/* 设置每一屏元素的动画 */
function setScreenAnimate(screenCls){
    //获取当前屏的元素
    var screen=document.querySelector(screenCls);
    //获取需要设置动画的元素
   var animationElement= screenAnimateElements[screenCls];
   var setAnimationClass=false;//是否动画初始化
   var isAnimationClassDone=false;//是否已经完成动画
   screen.onclick=function(){
       /* 设置animattion-init */
       if(setAnimationClass===false){
        for(var i=0;i<animationElement.length;i++){
            var element=document.querySelector(animationElement[i]);
            //获取本身自带的类名（元素可能有多个类名）
           var  baseCls=element.getAttribute("class");
           element.setAttribute("class",baseCls+" "+animationElement[i].substr(1)+"_animation_init");
        }
        setAnimationClass=true;
        return;
    }
        if(isAnimationClassDone===false){
            for(var i=0;i<animationElement.length;i++){
                var element=document.querySelector(animationElement[i]);
                //获取本身自带的类名（元素可能有多个类名）
               var  baseCls=element.getAttribute("class");
               element.setAttribute("class",baseCls.replace("_animation_init","_animation_done"));
            }
            isAnimationClassDone=true;
            return;
        }
        if(isAnimationClassDone===true){
            for(var i=0;i<animationElement.length;i++){
                var element=document.querySelector(animationElement[i]);
                //获取本身自带的类名（元素可能有多个类名）
               var  baseCls=element.getAttribute("class");
               element.setAttribute("class",baseCls.replace("_animation_done","_animation_init"));
            }
            isAnimationClassDone=false;
            return;
        }
   }
}
for(element in screenAnimateElements){
    setScreenAnimate(element);
}
