/* history_parallax : 교과서 1523 */
function historyCount(){ // 카운팅 상단 고정
	if ($("div.history_count").length > 0){
		if ($(window).scrollTop() > 390){
			$("div.history_count").removeClass("fix");
			$("div.history_count").addClass("fix");
			return false;
		} else {
			$("div.history_count").removeClass("fix");
			return false;
		};
	}
};
historyCount();

function bgParallax(){ // bg 오브젝트 입체감
	var scrollNum = $(window).scrollTop();
	var bgMoveNum = scrollNum * 1.5;
	$("div.history_parallax div.bg_parallax_obj").stop().animate({
		"margin-top" : -bgMoveNum
	}, 300);
};
bgParallax();

// 카운팅 플러그인 셋팅(countUp-jquery.js)
sum_count_1 = 0;
sum_count_2 = 0;
sum_count_3 = 0;
function countingNum_1(){
	pastCounting_1 = sum_count_1;
	sum_count_1 = 0;
	$("div.history_parallax ol.timeline li.upper").each(function() {
		passNum = $(this).find("span.pass_num.count_1").text().trim();
		if (passNum){
			sum_count_1 += parseInt(passNum, 10);
		}
	});
	return sum_count_1;
}
countingNum_1();
function countingNum_2(){
	pastCounting_2 = sum_count_2;
	sum_count_2 = 0;
	$("div.history_parallax ol.timeline li.upper").each(function() {
		passNum = $(this).find("span.pass_num.count_2").text().trim();
		if (passNum){
			sum_count_2 += parseInt(passNum, 10);
		}
	});
	return sum_count_2;
}
countingNum_2();
function countingNum_3(){
	pastCounting_3 = sum_count_3;
	sum_count_3 = 0;
	$("div.history_parallax ol.timeline li.upper").each(function() {
		passNum = $(this).find("span.pass_num.count_3").text().trim();
		if (passNum){
			sum_count_3 += parseInt(passNum, 10);
		}
	});
	return sum_count_3;
}
countingNum_3();


var options_1 = {
	useEasing : true,
	useGrouping : true,
	separator : '',
	decimal : '.',
	prefix : '',
	suffix : ''
};
var options_2 = {
	useEasing : true,
	useGrouping : true,
	separator : '',
	decimal : '.',
	prefix : '',
	suffix : ''
};
var options_3 = {
	useEasing : true,
	useGrouping : true,
	separator : '',
	decimal : '.',
	prefix : '',
	suffix : ''
};

var history_count_1 = new CountUp("history_count_1", pastCounting_1, sum_count_1-100, 0, 1, options_1);
	history_count_1.start(function(){
		history_count_1.update(sum_count_1);
	});
var history_count_2 = new CountUp("history_count_2", pastCounting_2, sum_count_2-100, 0, 1, options_2);
	history_count_2.start(function(){
		history_count_2.update(sum_count_2);
	});
var history_count_3 = new CountUp("history_count_3", pastCounting_3, sum_count_3-100, 0, 1, options_3);
	history_count_3.start(function(){
		history_count_3.update(sum_count_3);
	});

// 루프 용 세팅
var options_1_loop = {
	useEasing : false,
	useGrouping : true,
	separator : '',
	decimal : '.',
	prefix : '',
	suffix : ''
};
var options_2_loop = {
	useEasing : false,
	useGrouping : true,
	separator : '',
	decimal : '.',
	prefix : '',
	suffix : ''
};
var options_3_loop = {
	useEasing : false,
	useGrouping : true,
	separator : '',
	decimal : '.',
	prefix : '',
	suffix : ''
};
history_count_1_loop = new CountUp("history_count_1", pastCounting_1, 0, 0, 0.5, options_1_loop);
	history_count_1_loop.start(function(){
		//history_count_1_loop.update(0);
	});
history_count_2_loop = new CountUp("history_count_2", pastCounting_2, 0, 0, 0.5, options_2_loop);
	history_count_2_loop.start(function(){
		//history_count_2_loop.update(0);
	});
history_count_3_loop = new CountUp("history_count_3", pastCounting_3, 0, 0, 0.5, options_3_loop);
	history_count_3_loop.start(function(){
		//history_count_3_loop.update(0);
	});

var intervalHandle = null;
function startInterval(){
	if (intervalHandle == null){
		intervalHandle = setInterval(function() {
			history_count_1_loop.update(9);
			history_count_1_loop.reset();
			history_count_1_loop.start();
			history_count_2_loop.update(9);
			history_count_2_loop.reset();
			history_count_2_loop.start();
			history_count_3_loop.update(9);
			history_count_3_loop.reset();
			history_count_3_loop.start();
		}, 500);
	} else {
		console.log("루프 실행 중");
	}
}
function stopInterval(){
	clearInterval(intervalHandle);
	history_count_1_loop.reset();
	history_count_2_loop.reset();
	history_count_3_loop.reset();
	intervalHandle = null;
}


function parallaxOn(){ // 현재 컨텐츠 활성화
	var scrollContent = $("div.history_parallax ol.timeline li");
	if ($(window).scrollTop() > 390){
		stopInterval();
		var bdlIdxSet = scrollContent.length;
		scrollContent.each(function(i) {
			var el_offset = scrollContent.eq(i).offset().top;
			var el_offset_margin = el_offset-400;
			if ($(window).scrollTop() > el_offset_margin){
				scrollContent.removeClass("on");
				scrollContent.removeClass("upper");
				scrollContent.eq(i).addClass("on");
				scrollContent.eq(i).addClass("upper");
				$("div.history_parallax ol.timeline li.on").prevAll("div.history_parallax ol.timeline li").addClass("upper");
				countingNum_1();
				history_count_1.update(sum_count_1);
				countingNum_2();
				history_count_2.update(sum_count_2);
				countingNum_3();
				history_count_3.update(sum_count_3);
				// 스크롤의 끝일 때
				if ($(window).scrollTop() == $(document).height() - $(window).height()) {
					scrollContent.removeClass("on");
					scrollContent.removeClass("upper");
					scrollContent.eq(bdlIdxSet-1).addClass("on");
					scrollContent.eq(bdlIdxSet-1).addClass("upper");
					$("div.history_parallax ol.timeline li.on").prevAll("div.history_parallax ol.timeline li").addClass("upper");
					countingNum_1();
					history_count_1.update(sum_count_1);
					countingNum_2();
					history_count_2.update(sum_count_2);
					countingNum_3();
					history_count_3.update(sum_count_3);
					return false;
				};
			};
		});
		return false;
	} else {
		scrollContent.removeClass("on");
		scrollContent.removeClass("upper");
		scrollContent.eq(0).addClass("on");
		scrollContent.eq(0).addClass("upper");
		$("div.history_parallax ol.timeline li.on").prevAll("div.history_parallax ol.timeline li").addClass("upper");
		countingNum_1();
		//history_count_1.update(sum_count_1);
		countingNum_2();
		//history_count_2.update(sum_count_2);
		countingNum_3();
		//history_count_3.update(sum_count_3);
		
		startInterval();

		return false;
	};
}
parallaxOn();

$(window).scroll(function() { // 스크롤 시 적용
	historyCount();
	bgParallax();

	clearTimeout($.data(this, 'scrollTimer'));
	$.data(this, 'scrollTimer', setTimeout(function(){
		parallaxOn();
		return false;
	}, 50));
});

$(window).resize(function() { // 창크기 변경 시 적용
	historyCount();
	bgParallax();
	parallaxOn();

});