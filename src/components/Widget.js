import React from "react";
import ReactDOM from "react-dom";
import atomize from "@quarkly/atomize";
import Script from "react-load-script";

function GoogleTrends({
	type,
	keyword,
	url
}) {
	const handleScriptLoad = _ => {
		window.trends.embed.renderExploreWidgetTo(document.getElementById("widget"), type, {
			comparisonItem: [{
				keyword,
				"geo": "RU",
				"time": "now 7-d"
			}],
			category: 0,
			property: ""
		}, {
			exploreQuery: `q=${encodeURI(keyword)}&geo=US&date=today 12-m`,
			guestPath: "https://trends.google.com:443/trends/embed/"
		});
	};

	const renderGoogleTrend = _ => {
		return <Script url={url} onLoad={handleScriptLoad} />;
	};

	return <div className="googleTrend">
		{renderGoogleTrend()}
	</div>;
}

export default atomize(GoogleTrends)({
	name: "Widget",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "Widget — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});