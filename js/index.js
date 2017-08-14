// 属性获取
function getStyle(obj, name)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj, false)[name];
    }
}
//运动函数封装
function startMove(obj, attr, iTarget)
{
    clearInterval(obj.timer);
    obj.timer=setInterval(function (){
        var cur=0;

        if(attr=='opacity')
        {
            cur=Math.round(parseFloat(getStyle(obj, attr))*100);
        }
        else
        {
            cur=parseInt(getStyle(obj, attr));
        }

        var speed=(iTarget-cur)/10;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);

        if(cur==iTarget)
        {
            clearInterval(obj.timer);
        }
        else
        {
            if(attr=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            }
            else
            {
                obj.style[attr]=cur+speed+'px';
            }
        }
    }, 30);
};
//   弹窗关闭隐藏
var oWindow = document.getElementById('alertWindow'),
    oClose = document.getElementById('close'),
    oAsk = document.getElementById('ask'),
    oLater = document.getElementById('later')
    timer = null;
    oWindow.style.height = 0;
    oClose.style.height = 0;
    oAsk.style.height = 0;
    oLater.style.height = 0;
     oWindow.style.zIndex = -1;

    setTimeout(function () {
        startMove(oWindow,'height',310);
        startMove(oClose,'height',36)
        startMove(oAsk,'height',52)
        startMove(oLater,'height',52)
        oWindow.style.zIndex = 10;
    },30000);
     oLater.onclick = oClose.onclick = function () {
         startMove(this,'height',0)
         startMove(oAsk,'height',0)
         startMove(oLater,'height',0)
         startMove(oWindow,'height',0)
        oWindow.style.zIndex = -1;
          timer=setTimeout(function () {
            startMove(oWindow,'height',310);
            startMove(oClose,'height',36)
            startMove(oAsk,'height',52)
            startMove(oLater,'height',52)
              oWindow.style.zIndex = 10;
        },30000)
     };

    //tab 切换
$(function(){

    $('.part2City a').click(function(){
        $('.part2City a').removeClass('active');
        $(this).addClass('active');
        //选择城市的选中状态
        var a = $(this).index();
        $('.part2Class').hide();
        $('.part2Class').eq(a).show();
        //切换城市的时候，切换对应的课程表。
        if(!$('.part2Class').eq(a).find('li').hasClass('active'))
        {
            $('.part2Class').eq(a).find('li').eq(0).addClass('active');
        }
    })
    $('.part2ClassHeader ul li').click(function(){
        $('.part2ClassHeader ul li').removeClass('active');
        $(this).addClass('active');
        //点击li的时候切换背景
        var b=$(this).index();

        $(this).parent().parent().siblings('div').children().hide();
        $(this).parent().parent().siblings('div').children().eq(b).show();
        // li切换的时候，对应的课表进行切换
    })
    $('.aside ul li a').click(function(){
        $('.aside ul li a').removeClass('active');
        $(this).addClass('active');
    })
})

//返回顶部
$('.backToTop').click(function() {
    var top1 = $('body').scrollTop();
    $('body').animate({
        scrollTop: '0'
    },1000);
});

// 课程优惠切换
$('#part03_ul2 li').mouseover(function(){
    var index=$('#part03_ul2 li').index(this);
    // alert(index)
    $(this).addClass('pt3_active').find('a').css({'color':'#fff','marginTop':'18px'});
    $(this).siblings().removeClass('pt3_active').find('a').css({'color':'#000','marginTop':'5px'});

    $('#part03_ul3 li').eq(index).show();

    $('#part03_ul3 li').eq(index).siblings().hide();

})
jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:false});

//师资队伍显示
// $('#part04_set ul li').mouseover(function(){
//     $(this).addClass('act')
// })
// $('#part04_set ul li').mouseout(function(){
//     $(this).removeClass('act')
// });
$('#part04_set ul li').mouseover(function(){
    $(this).addClass('act');
    $(this).children('.img2').css('display','none');
    $(this).children('.img1').addClass('actt');
    $(this).children('.part04_txt').addClass('activ');

})
$('#part04_set ul li').mouseout(function(){
    $(this).removeClass('act');
    $(this).children('.img2').css('display','block');
    $(this).children('.img1').removeClass('actt');
    $(this).children('.part04_txt').removeClass('activ');

});



// 图书切换
jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:4});

//底部tab切换
$('#ul li').click(function () {
    $(this).addClass('page07-active').siblings().removeClass();
    $("#tab-content > div").hide().eq($('#ul li').index(this)).show();
})