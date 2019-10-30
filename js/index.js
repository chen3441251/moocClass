/* 获取元素 */
function getElement(cls){
return document.querySelector(cls);
}
/* 获取所有的元素 */
function getElements(cls){
return document.querySelectorAll(cls);
}
/* 获取css属性 */
function getClass(element){
  return element.getAttribute('class') ; 
}
/* 设置元素样式 */
function setClass(element,cls){
    element.setAttribute('class',cls);
}

/* 为元素添加样式 */
function addClass(element,cls){
    //获取当前类名
    var baseCls=getClass(element);
    if(baseCls.indexOf()===-1){
            setClass(element,baseCls+" "+cls);
    }
}
/* 删除元素样式 */
function delClass(element,cls){
    //获取当前类名
    var baseCls=getClass(element);
    if(baseCls.indexOf(cls)!=-1){
        setClass(element,baseCls.split(cls).join(" ").replace(/\s+/g,""));
    }
}

/* 第一步：页面载入的时候初始化animation_init */
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
var setAnimationInit=function(screenCls){
     //获取需要设置动画的元素
    var animationElement= screenAnimateElements[screenCls];
    for(var i=0;i<animationElement.length;i++){
        var element=getElement(animationElement[i]);
        //获取本身自带的类名（元素可能有多个类名）
       var  baseCls=getClass(element);
       setClass(element,baseCls+" "+animationElement[i].substr(1)+"_animation_init");
    }
}
window.onload=function(){
    /* 遍历每一页(screen) */
    for(screenCls in screenAnimateElements){
        setAnimationInit(screenCls);
    }
}
/* 第二步:整个页面滚动到哪里动画就播放到哪里 */
var playScreenAnimationDone=function(screenCls){
    var animationElement= screenAnimateElements[screenCls];
    for(var i=0;i<animationElement.length;i++){
        var element=getElement(animationElement[i]);
        //获取本身自带的类名（元素可能有多个类名）
       var  baseCls=getClass(element);
       element.setAttribute("class",baseCls.replace("_animation_init","_animation_done"));
    }
}

window.onscroll=function(){
    var top  = document.body.scrollTop;
    
   if(top>0){
    playScreenAnimationDone(".screen-1");
   }
    if(top>800*1-100){
    playScreenAnimationDone(".screen-2");
   }
   if(top>800*2-100){
    playScreenAnimationDone(".screen-3");
   }
   if(top>800*3-100){
    playScreenAnimationDone(".screen-4");
   }
   if(top>800*4-100){
    playScreenAnimationDone(".screen-5");
   }
 
}
/*第三步 优化顶部导航栏*/
