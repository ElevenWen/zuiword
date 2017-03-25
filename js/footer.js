/**
 * Created by Administrator on 2017/3/15.
 */
$(function (){
   // var  $footer_dd_a = $(".footer_dd_a");
    var $box = $(".box")
    $(".footer_dd_a").hover(function () {
        $box.css("display","block");
    },function () {

    })
})

// $(".zw_home_banner_li").click(function(){
//     clearTimeout(timeId);
//     var $number = $(this).attr("id");
//     $banner_box.css("left",-$number*$width);
//     if($number == 3 ){
//         $banner_box.css("left",0);
//     }
//     direction = true;
//     timeId = setTimeout(banner,3000);
//     console.log($banner_box.position().left);
// });