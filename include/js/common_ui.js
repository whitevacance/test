/* placeholder IE9 대응 */
$('input, textarea').placeholder();


/* 메인 */
// main_visual_link - bg라인
var main_visual_link = $("div.main_visual ul.main_visual_link");
var bg_visual_link = $("div.bg_active");
var mainVLink = {
	mouseEnter : function(){
		main_visual_link.children("li:nth-child(1)").on("mouseenter", function(){
			bg_visual_link.stop().animate({"margin-left" : "-200px", left : "50%"}, 200);
		});
		main_visual_link.children("li:nth-child(2)").on("mouseenter", function(){
			bg_visual_link.stop().animate({"margin-left" : "150px", left : "50%"}, 200);
		});
		main_visual_link.children("li:nth-child(3)").on("mouseenter", function(){
			bg_visual_link.stop().animate({"margin-left" : "500px", left : "50%"}, 200);
		});
	},
	mouseLeave : function(){
		main_visual_link.on("mouseleave", function(){
			bg_visual_link.stop().animate({
				left : "100%",
				"margin-left" : "0px"
			}, {
				duration: 200,
				complete: function(){
					bg_visual_link.css("left","0");
				}
			});
		});
	}
}
mainVLink.mouseEnter();
mainVLink.mouseLeave();


/* 다른 교과서 보기 */
var viewAnother = {
	toggle : function(){
		$("div.textbook_info_area div.aside div.view_another a.btn_view").on("click", function(){
			$(this).parent("div.view_another").toggleClass("on");
			return false;
		});
	}
}
viewAnother.toggle();


/* 탭 - 교과서 전시관 뷰 */
var tabmenu = {
	active : function(){
		var tabMenu = $("ul.tabmenu");
		var tabLi = tabMenu.children("li");
		var tabLiNum = tabLi.length;
		var tabWrapWidth = tabMenu.width();
		var tabBtnWidth = tabWrapWidth/tabLiNum;
		var leftNum = 0;
		tabLi.removeClass("on");
		tabLi.children("a.btn_tab").width(tabBtnWidth)
		tabLi.each(function(i) {
			var btnWidth = tabLi.eq(i).children("a.btn_tab").width();
			leftNum = leftNum += btnWidth;
			tabLi.eq(i).next("li").children("a.btn_tab").css("left", leftNum+"px");
			tabLi.eq(i).children("a").on("click focusin", function() {
				tabLi.removeClass("on");
				tabLi.eq(i).addClass("on");
				return false;
			});
		});
		tabMenu.children("li").eq(0).addClass("on");
	}
}
tabmenu.active();


/* 탭 - 단원별 자료보기 */
var danwonDataTab = {
	active : function(){
		var tabMenu = $("ul.danwon_data_tab");
		var tabLi = tabMenu.children("li");
		tabLi.removeClass("on");
		tabLi.each(function(i) {
			tabLi.eq(i).children("a").on("click focusin", function() {
				tabLi.removeClass("on");
				tabLi.eq(i).addClass("on");
				return false;
			});
		});
		tabMenu.children("li").eq(0).addClass("on");
	}
}
danwonDataTab.active();


/* 탭 - 웹툰 개정교육과정 */
var webtoonTabmenu = {
	active : function(){
		var tabMenu = $("ul.tab_revision");
		var tabLi = tabMenu.children("li");
		var tabContent = $("ul.tab_revision_content");
		var tabContentLi = tabContent.children("li");
		tabLi.each(function(i) {
			tabLi.eq(i).children("a").on("click", function() {
				tabLi.removeClass("on");
				tabLi.eq(i).addClass("on");
				tabContentLi.removeClass("on");
				tabContentLi.eq(i).addClass("on");
				return false;
			});
		});
		tabLi.eq(0).addClass("on");
		tabContentLi.eq(0).addClass("on");
	}
}
webtoonTabmenu.active();


/* 슬라이더 - 교과서 전시관 뷰 */
var textbookSlider = {
	slick : function(){
		if ($("ul.textbook_slider").length > 0){
			$("ul.textbook_slider").on("init", function(){ // 슬라이더 로딩 후 콜백
				$("ul.textbook_slider .slick-slide").show();
				$("ul.textbook_slider .slick-slide").addClass("opacity_0");
				$("ul.textbook_slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
					$("ul.textbook_slider .slick-slide").removeClass("opacity_0");
				});
				$("ul.textbook_slider").on('afterChange', function(event, slick, currentSlide){
					$("ul.textbook_slider .slick-slide").addClass("opacity_0");
				});
			})
			.slick({
				slide: 'ul.textbook_slider > li',
				prevArrow: $("div.textbook_slider_wrap a.arr_prev"),
				nextArrow: $("div.textbook_slider_wrap a.arr_next"),
				draggable: false,
				dots: false,
				infinite: false,
				speed: 500,
				slidesToShow: 5,
				slidesToScroll: 5
			});
		}
	}
}
textbookSlider.slick();


/* qna 토글 */
var qna = {
	toggle : function(){
		$("div.qna_area h4.q_title a").on("click", function(){
			$(this).parent("h4.q_title").siblings("h4.q_title").removeClass("on");
			$(this).parent("h4.q_title").toggleClass("on");
			$(this).children("span.ico_arr_toggle").toggleClass("green").toggleClass("up");
			$(this).parent("h4.q_title").siblings("h4.q_title").find("span.ico_arr_toggle").removeClass("green").removeClass("up");
			$("div.qna_area div.a_content").stop().slideUp(300);
			$("h4.q_title.on").next("div.a_content").stop().slideDown(300);
			return false;
		});
	}
}
qna.toggle();


/* 셀렉트박스 */
var select_root = $("div.selectbox");
var selected_value = $("a.selected_box");
var select_radio = $("div.selectbox ul.option_list li input.option");
var select_label = $("div.selectbox ul.option_list li label");
var selectbox = {
	defaultSet : function(){
		selected_value.find("span.ico_arr_toggle").removeClass("up");
		selected_value.each(function(){
			$(this).find("span.txt").text("")
			var default_value = $(this).next(".option_list").find("input[checked]").next("label").text();
			$(this).find("span.txt").append(default_value);
		});
	},
	toggle : function(){
		selected_value.on("click", function(){
			$(this).parent("div.selectbox").toggleClass("on");
			if ($(this).parent("div.selectbox").hasClass("on") == true){
				$(this).find("span.ico_arr_toggle").addClass("up");
			} else {
				$(this).find("span.ico_arr_toggle").removeClass("up");
			}
			return false;
		});
	},
	close : function(){
		if (select_root.length > 0){
			$("body").on("click", function(){
				select_root.removeClass("on");
				if ($(this).parent("div.selectbox").hasClass("on") == true){
					$(this).find("span.ico_arr_toggle").addClass("up");
				} else {
					$(this).find("span.ico_arr_toggle").removeClass("up");
				}
			});
		}
	},
	setRadio : function(){
		select_radio.on("change", function(){
			var newValue = $(this).next("label").text();
			$(this).closest("ul").prev("a.selected_box").find("span.txt").text("").append(newValue);
		});
	}
}
selectbox.defaultSet();
selectbox.toggle();
selectbox.close();
selectbox.setRadio();


/* modal_layer : 모달 팝업 */
function showModal(modalID){
	var modalID = "#" + modalID;
	$(modalID).removeClass("active");
	$(modalID).addClass("active");
}
$(document).on("click", ".modal_layer .modal_content .btn_x2", function(){
	$(this).parent().parent().parent().parent(".modal_layer").removeClass("active");
	return false;
});
$(document).on("click", "#modal_process .btn_x", function(){
	$(this).parent().parent().parent(".modal_layer").removeClass("active");
	return false;
});


/* 교과서 개발과정 */
var processSlide = {
	slick : function(){
		if ($(".process_slide").length > 0){
			$(".process_slide").on("init", function(){ // 슬라이더 로딩 후 콜백
				console.log("aaa");
				$(".process_slide .slick-slide").show();
				/*
				$(".process_slide .slick-slide").addClass("opacity_0");
				$(".process_slide").on('beforeChange', function(event, slick, currentSlide, nextSlide){
					$(".process_slide .slick-slide").removeClass("opacity_0");
				});
				$(".process_slide").on('afterChange', function(event, slick, currentSlide){
					$(".process_slide .slick-slide").addClass("opacity_0");
				});
				*/
			})
			.slick({
				slide: '.process_slide .slide',
				prevArrow: $(".process_slide_wrap a.arr_prev"),
				nextArrow: $(".process_slide_wrap a.arr_next"),
				draggable: false,
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1
			});
		}
	}
}
processSlide.slick();