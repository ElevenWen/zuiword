//第一个需要请求json数据的导航栏
var homeNav = document.getElementsByClassName("home_nav");
var homeNavUl = document.getElementsByClassName("home_nav_ul");
var homeNavLi = document.getElementsByClassName("home_nav_ul_li");
var btnArrow = document.getElementsByClassName("btn_arrow");
	ajax.get("menu.json",function(name){
		var obj = JSON.parse(name);
		for(var i = 0; i < homeNavLi.length; i++){
			homeNavLi[i].innerHTML = obj[i].name;
		}

    })
// $(function () {
//     $.ajax({
//         "url": "menu.json",
//         success: function (data,status, jqxhr) {
//             // console.log(data);
//             wrap(data);
//             // console.log(data);
//         }
//     })
//     function wrap(data) {
//         for(var t = 0 ; t < data.length ; t++){
//         //    获取名字
//             var $name = data[t].name;
//             // console.log($name);
//             var $wrap_a = $("<a>").attr("href",data[t].url).html(data[t].name);
//             $(".home_nav_ul_li").eq(t).append($wrap_a);
//             console.log($(".home_nav_ul_li"));
//         }
//     }
// })
//轮播图
// var navImgLiA = document.getElementsByClassName("nav_img_li_a");
// 	ajax.get("banner.json",function(result){
// 		var obj = JSON.parse(result);
// 		for(var i = 0; i < navImgLiA.length; i++){
// 			navImgLiA[i].setAttribute("href",obj[i].href)
// 		}
// 	})
// //轮播图的箭头点击
// // btnArrow.onclick = function (event) {
// // 	var className = event.target.className;
// // 	switch(className){
// // 		case "btn_arrow_pre":
// //
// // 	}
// // }
// //轮播图的轮播效果
// var navImgLi = document.getElementsByClassName("nav_img_li");
// var navImg = document.getElementsByClassName("nav_img");
// // var left = navImgLi[0].offsetLeft;
// var left = 0;
// var number;
// var direction = true;
// function banner() {
//     if(number = 1){
//         left =
//     }
//     setInterval(function(){
// 	left = left - 2;
// 	navImg.style.left = left + "px";
// 	if(left <= -1349){
//          left = 0;
//      }
// },5000)
// }
//
// //轮播图里导航目录的 标题 导入json数据
// var categoryTitle = document.getElementsByClassName("category_title");
// var categorySubtitle = document.getElementsByClassName("category_subtitle");
// var categoryHidden = document.getElementsByClassName("category_hidden");
// ajax.get("menu1.json",function (result) {
//     //轮播图里导航目录的   h2  导入json数据
//    function nav_datas() {
//        var obj = JSON.parse(result);    //obj  是数组
//        // for (let i = 0; i < categoryTitle.length; i++) {
//        //     categoryTitle[i].innerHTML = obj[i].title;
//        // }
//        obj.forEach(function (obj,index) {
//            categoryTitle[index].innerHTML = obj.title;
//        })
//        //轮播图里导航目录的   p  导入json数据
//
//        for (var j = 0; j < categorySubtitle.length; j++) {
//            var mainCity = obj[j].mainCity;
//            for (var k = 0; k < mainCity.length; k++){
//                var categorySubtitleA = document.createElement("a");
//                categorySubtitleA.setAttribute("href", " ");
//                // categorySubtitleA.innerHTML = mainCity[k];
//                categorySubtitleA.append( mainCity[k]);
//                categorySubtitle[j].append(categorySubtitleA);
//            }
//    }
//    //     obj.forEach(function (obj,index) {
//    //         var mainCity = obj.mainCity;
//    //         // console.log(mainCity);
//    //         var categorySubtitleA = document.createElement("a");
//    //             categorySubtitleA.setAttribute("href", " ");
//    //             categorySubtitleA.appendChild( mainCity);
//    //             categorySubtitle.appendChild(categorySubtitleA);
//    //     })
//        //    轮播图里导入隐藏块的数据
//     var moreCity = obj[i].moreCity;
//     console.log(moreCity);
//
//        }
//     nav_datas();
// })

//用jQuery导入轮播图里的隐藏部分数据




//机酒自由行 用jQuery 导入导航栏数据
$(function () {
    $.ajax({
        "url": "freeWalk.json",
        success: function (data,status, jqxhr) {
            // console.log(data);
            foo(data);
        }
	})
    // var dataObject = JSON.parse(data);
    function foo(data) {
        for(var i = 0;i < data.length; i++){
            //	获取title
            var title = data[i].title;
            // console.log(title);
            var $freewalk_li = $("<li>").attr("class","freewalk_li");
            var $freewalk_li_a = $("<a>").attr("class","freewalk_li_a").attr("href","###");
            if(i == 0){
                $freewalk_li_a.addClass("freewalk_a_hover");
            }
            $freewalk_li_a.html(title);
            $freewalk_li.append($freewalk_li_a);
            $(".freewalk_ul").append($freewalk_li);
            // console.log( $(".freewalk_ul"));

			//获取content数据
			var $ul = $(".freewalk_list").eq(i);
            var datas = data[i].data;
            // console.log(datas);
			for(var j = 0 ; j < datas.length; j++){
				var data1 = datas[j];
				// console.log(data1)
				if(j != 0){
					var $li_one = $("<li>").attr("class","freewalk_list_li");
					var $img = $("<img>").attr("src",data1.imgUrl);
					// console.log($img);
					var $a_one = $("<a>").attr("class","freewalk_list_wrap");
					var $infos = $("<div>").attr("class","infos");
					var $type = $("<p>").attr("class","type").html("机票");
                    var $em = $("<em>").html(data1.price);
					var $price = $("<p>").attr("class","price").html("元起");
					var $titles = $("<div>").attr("class","freewalk_list_titles");
					var $title = $("<h3>").attr("class","title").html(data1.title);
					var $hidden_one = $("<div>").attr("class","freeWalk_list_hidden");
					$price.prepend($em);
					$titles.append($title);
					$infos.append($type).append($price);
					$a_one.append($img).append($infos).append($titles).append($hidden_one);
					$li_one.append($a_one);
					$ul.append($li_one);
					$(".freewalk_content").prepend($ul);
					// console.log($(".freewalk_content"));
				}else{
                    var $li_one = $("<li>").attr("class","freewalk_list_li_one");
                    var $img = $("<img>").attr("src",data1.imgUrl);
                    var $a_one = $("<a>").attr("class","freewalk_list_wrap");
                    var $infos = $("<div>").attr("class","infos");
                    var $type = $("<p>").attr("class","type").html("机票");
                    var $em = $("<em>").html(data1.price);
                    var $price = $("<p>").attr("class","price").html("元起");
                    var $titles = $("<div>").attr("class","freewalk_list_titles");
                    var $title = $("<h3>").attr("class","title").html(data1.title);
                    var $hidden_one = $("<div>").attr("class","freeWalk_list_hidden");
                    var $time = $("<p>").attr("class","time").html(data1.time);
                    $price.prepend($em);
                    $titles.append($title).append($time);
                    $infos.append($type).append($price);
                    $a_one.append($img).append($infos).append($titles).append($hidden_one);
                    $li_one.append($a_one);
                    $ul.append($li_one);
                    $(".freewalk_content").prepend($ul);
				}
			}
        }

        for(var i = 0; i < $(".freewalk_list").length; i++){

            (function (i) {
                $(".freewalk_list")[0].style.display = "block";
                $(".freewalk_li_a")[i].onmouseover = function () {
                    $(".freewalk_list").hide();
                    $(".freewalk_list")[i].style.display = "block";

                    $(this).css({
                        color : "#00b081",
                        borderBottom : "3px solid #16c1a0"
                    });
                }
                $(".freewalk_li_a")[i].onmouseleave = function () {
                    $(this).css({
                        color : "#323232",
                        borderBottom : "none"
                    });
                }
            })(i)
        }
    }
})


