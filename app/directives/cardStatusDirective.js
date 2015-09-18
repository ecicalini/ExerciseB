app.directive('cardStatus', function(){
	return {
		restrict: 'E',
		template: "<div class=\"card\">"
			+ "<div ng-style=\"{ background: color(card) }\" class=\"card-average\">{{card.trend.average * 100 | number:0}}<span class=\"average-percent\">%</span></div>"
			+ "<div class=\"card-details\">"
			+ "	<div class=\"detail-row bold-text card-type\"><span class=\"detail-cell\">{{card.type}}</span></div>"
			+ "	<div class=\"detail-row\"><span class=\"detail-cell cell-label\">Total: </span><span class=\"detail-cell bold-text cell-span\"> {{card.trend.total}}</span><span class=\"detail-cell cell-um\">tr.</span></div>"
			+ "	<div class=\"detail-row\"><span class=\"detail-cell cell-label\">Week: </span><span class=\"detail-cell bold-text cell-span\">{{card.trend.week}}</span><span class=\"detail-cell cell-um\">tr.</span></div>"
			+ "	<div class=\"detail-row\">"
			+ "		<span class=\"detail-cell cell-label\">"
			+ "			<span class=\"icon-span\">"
			+ "				<i ng-class=\"{\'icon-caret-up card-last-week-up\' : card.trend.l_w_t == \'+\',"
			+ "							  \'icon-caret-down card-last-week-down\' : card.trend.l_w_t == \'-\'"
			+ "							 }\"></i>"
			+ "			</span>"
			+ "			<span  ng-class=\"{\'bold-text card-last-week-up\' : card.trend.l_w_t === \'+\',"
			+ "							  \'bold-text card-last-week-down\' : card.trend.l_w_t === \'-\',"
			+ "							  \'bold-text \' : card.trend.l_w_t === \'=\'"
			+ "							 }\">{{card.trend.l_week * 100 | number:0}}%</span>"
			+ "		</span>"
			+ "		<span class=\"detail-cell cell-span\"> on last week</span>"
			+ "</div>"
			+"</div>",
		scope: false,
		controller: 'cardStatusCtrl'
	};
});