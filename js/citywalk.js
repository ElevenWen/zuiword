/**
 * Created by Administrator on 2017/3/16.
 */
$(function () {
    $.ajax({
        "url":"cityWalkList.json",
        success:function (data,status,jqxhr) {
            cityWalk(data);
            // console.log(data);
        }
    })
    function cityWalk(data) {
        for(let i = 0;i < data.length; i++){
        //    获取title

            var $img = $("<img>").attr("src",data[i].imgurl);
            // $(".module_bigCard_wrap").eq(i).append($img);
            var $div_rigth = $("<div>").attr("class","div_right_wrap");
            var $titles = data[i].title;
            var $address = $("<span>").attr("class","div_right_span").html(data[i].address);
            var $bigcard_info = $("<p>").attr("class","div_right_bigcard_info");
            var $bigcard_info_span1 = $("<span>").attr("class","bigcard_info_span1").html(data[i].browseCount);
            $bigcard_info_span1.append("次浏览");
            var $bigcard_info_span2 = $("<span>").attr("class","bigcard_info_span2").html(data[i].soldCount);
            $bigcard_info_span2.append("件已售");
            var $h2 = $("<h2>").attr("class","bigcard_h2");
            var $a = $("<a>").attr("href"," ");
            var $ul = $("<ul>").attr("class","infolist");
            var $introduce = data[i].introduce;
            // console.log($introduce);
            var $li1 =  $("<li>").html($introduce[0]);
            var $li2 = $("<li>").html($introduce[1]);
            var $li3 = $("<li>").html($introduce[2]);
            var $bigcard_price = $("<div>").attr("class","bigcard_price")   ;
            var $bigcard_old_price = $("<span>").attr("class","bigcard_old_price").html(data[i].oldPrice);
            var $bigcard_new_price = $("<em>").append(data[i].newPrice);
            var $bigcard_red_buy = $("<div>").attr("class","bigcard_red_buy");
            var $bigcard_red_buy_a = $("<a>").attr("href"," ").html("立即预定");


            $div_rigth.append($address);
            $bigcard_info.append($bigcard_info_span1).append($bigcard_info_span2);
            $div_rigth.append($bigcard_info);
            $a.append($titles);
            $h2.append($a);
            $ul.append($li1).append($li2).append($li3);
            $bigcard_price.prepend($bigcard_old_price).append($bigcard_new_price);
            $bigcard_price.append("元起");
            $bigcard_red_buy.append($bigcard_red_buy_a);
            $div_rigth.append($h2).append($ul).append($bigcard_price).append($bigcard_red_buy);
            $(".moudle_bigcard_item").eq(i).append($img).append($div_rigth);
            // console.log($address);
        }
    }
    //分页

    // $(function () {
        $(".citywalk_productlist").eq(1).css("display","none");
        $(".ui_page_a2").click(function () {
            $(".citywalk_productlist").eq(0).css("display","none");
            $(".citywalk_productlist").eq(1).css("display","block");
        });
        $(".ui_page_a3").click(function () {
            $(".citywalk_productlist").eq(0).css("display","none");
            $(".citywalk_productlist").eq(1).css("display","block");
        });
        $(".ui_page_a1").click(function () {
            $(".citywalk_productlist").eq(0).css("display","block");
            $(".citywalk_productlist").eq(1).css("display","none");
        });
    // })
})


