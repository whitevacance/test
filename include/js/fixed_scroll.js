/* fixed_top : 상단 고정 */
function fixed_top(){
	if ($("div.fixed_top").length > 0){
		if ($(window).scrollTop() > 348){
			$("div.fixed_top").removeClass("fix");
			$("div.fixed_top").addClass("fix");
			$("div.fixed_top div.btn_subject_name").hide();
			$("div.fixed_top div.btn_subject_name").show();
			return false;
		} else {
			$("div.fixed_top").removeClass("fix");
			return false;
		};
	}
};
fixed_top();
$(window).scroll(function() { // 스크롤 시 적용
	fixed_top();
});
$(window).resize(function() { // 창크기 변경 시 적용
	fixed_top();
});