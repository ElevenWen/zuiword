/**
 * Created by Administrator on 2017/3/17.
 */
$(function(){

    //获取json数据
    $.get("banner.json",function(result){
        var timeId;
        var $width = 1349;
        var $number;//记录当前点击li的id
        var direction  = true;//设置轮播方向
        var $banner_box = $("#zw_home_banner_box");
        var left = $banner_box[0].offsetLeft;
        var imgObject = result;
        for(var i = 0,len = imgObject.length; i < len; i++){
            //获取图片
            $a = $("<a>").attr("href",imgObject[i].href);
            $img = $("<img>").attr("src",imgObject[i].imgUrl);
            $li = $("<li>").attr("class","zw_home_banner_li").attr("id",i);
            $(".zw_home_banner_ul").append($li);
            //设置包裹图片div的宽度
            $banner_box.width(len*$width);
            $a.append($img);
            $banner_box.append($a);
        }
        //自动轮播
        // function banner(){
        //     if($number == 3){
        //         $banner_box.css("left",0);
        //     }
        //     var $left = $banner_box.position().left;
        //     if(direction){
        //         if($left <=(-(len-1)*$width)){
        //             direction = false;
        //             timeId = setTimeout(banner,3000);
        //             $($number).attr("background-color","red");
        //         }else{
        //             $banner_box
        //                 .animate({
        //                     left: $left-$width
        //                 },3000,function(){
        //                     timeId = setTimeout(banner,3000);
        //                 });
        //         }
        //     }else{
        //         if($left >=0){
        //             direction = true;
        //             timeId = setTimeout(banner,3000);
        //         }else{
        //             $banner_box
        //                 .animate({
        //                     left: $left+$width
        //                 },3000,function(){
        //                     timeId = setTimeout(banner,3000);
        //                 });
        //         }
        //     }
        // };


        timeId = setTimeout(banner,3000);
        //点击轮播
        $(".zw_home_banner_li").click(function(){
            clearTimeout(timeId);
            var $number = $(this).attr("id");
            $banner_box.css("left",-$number*$width);
            if($number == 3 ){
                $banner_box.css("left",0);
            }
            direction = true;
            timeId = setTimeout(banner,3000);
            console.log($banner_box.position().left);
        });

        /*	$("#banner_arrow_left").click = function(){
         $banner_box.css("left",-$number*$width);
         }
         $("#banner_arrow_right").click = function(){
         $banner_box.css("left",+$number*$width);
         }*/
    });
});

//热门导航
$(function(){
    $.get("menu1.json",function(result){
        var newArray = [];
        var dataObject = result;
        for(var i = 0,len = dataObject.length; i < len;i++){
            //给每个zw-home-category-item添加一个标识
            $(".zw-home-category-item").eq(i).attr("id",i);
            //获取标题
            $(".category_list_title").eq(i).html(dataObject[i].title);

            //获取mainCity
            var mainCity = dataObject[i].mainCity;
            for(var j = 0 ,len1 = mainCity.length ; j< len1 ; j++){
                var $a = $("<a>").html(mainCity[j]);
                $(".zw-home-category-subtitle").eq(i).append($a);
            }

            //获取所有moreCity
            // var moreCity = dataObject[i].moreCity;
            // //判断moreCity中对象的个数，针对不同的个数执行以下不同的方法
            // if(moreCity.length == 3 ||moreCity.length == 2){
            //     $(".zw-home-category_content").eq(i).css("width","700px");
            //     $column1 = $("<div>").attr("class","category_content_column");
            //     $column2 = $("<div>").attr("class","category_content_column");
            //     $(".zw-home-category_content").eq(i).append($column1).append($column2);
            //
            //     for(var k= 0; k < moreCity.length;k++){
            //         var $items = moreCity[k].items;
            //         $place = $("<div>").attr("class","category_content_place");
            //         $title = $("<h2>").attr("class","category_content_title").html(moreCity[k].cityName);
            //         $ul= $("<ul>").attr("class","category_place_list");
            //
            //         //获取所有的items
            //         for(var t = 0 ; t < $items.length; t++){
            //             $li= $("<li>").attr("class","category_place_li");
            //             $a= $("<a>").attr("class","category_place_a");
            //             if(i==2||i==3){
            //                 $img = $("<img>").attr("class","category_place_img2");
            //             }else{
            //                 $img = $("<img>").attr("class","category_place_img");
            //             }
            //             $img.attr("src",dataObject[i].moreCityImg);
            //             $li.append($a.html($items[t]));
            //             $ul.append($li);
            //         }
            //         $place.append($title).append($ul);
            //         if(moreCity.length == 3){
            //             if(k<2){
            //                 $column1.append($place);
            //             }else{
            //                 $column2.append($place).append($img);
            //             }
            //         }else{
            //             if(k<1){
            //                 $column1.append($place);
            //             }else{
            //                 $column2.append($place).append($img);
            //             }
            //         }
            //
            //     }
            // }
            //
            // //当对象个数为1时
            // if(moreCity.length == 1){
            //     $(".zw-home-category_content").eq(i).css("width","400px");
            //     $column1 = $("<div>").attr("class","category_content_column");
            //     $column1.addClass("add_content_column");
            //     $(".zw-home-category_content").eq(i).append($column1);
            //     for(var k= 0; k < moreCity.length;k++){
            //         var $items = moreCity[k].items;
            //         $place = $("<div>").attr("class","category_content_place");
            //         $title = $("<h2>").attr("class","category_content_title").html(moreCity[k].cityName);
            //         $ul= $("<ul>").attr("class","category_place_list");
            //         $ul.addClass("add_place_list");
            //         //获取所有的items
            //         for(var t = 0 ; t < $items.length; t++){
            //             $li= $("<li>").attr("class","category_place_li");
            //             $a= $("<a>").attr("class","category_place_a");
            //             $img = $("<img>").attr("class","category_place_img3").attr("src",$items[t]);
            //             $li.html($a.html($img));
            //             $ul.append($li);
            //         }
            //         $place.append($title).append($ul);
            //         $column1.append($place);
            //     }
            // }
        }

    });
});