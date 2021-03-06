export default {
	"pages": {
		"root": {
			"id": "root",
			"pageUrl": "root",
			"name": "root",
			"children": [
				"6079ce657c7120001f1ee253",
				"6079ce657c7120001f1ee255",
				"6079fe9d6de461001eb8783f",
				"607a027c23a143001e08f123",
				"607b1cf923a143001e08f3a5"
			]
		},
		"6079ce657c7120001f1ee253": {
			"id": "6079ce657c7120001f1ee253",
			"name": "404",
			"pageUrl": "404"
		},
		"6079ce657c7120001f1ee255": {
			"id": "6079ce657c7120001f1ee255",
			"name": "Главная",
			"pageUrl": "index"
		},
		"6079fe9d6de461001eb8783f": {
			"id": "6079fe9d6de461001eb8783f",
			"pageUrl": "chart-page",
			"name": "Мониторинг",
			"customCode": {
				"607b353e7343674b423a53f8": {
					"name": "script",
					"place": "endOfHead",
					"tag": "script",
					"data": {
						"src": "https://cdn.plot.ly/plotly-latest.min.js"
					}
				},
				"607b35570effe8d58a158763": {
					"name": "script1",
					"place": "endOfHead",
					"tag": "script",
					"data": {
						"content": "window.PlotlyConfig = {MathJaxConfig: 'local'};"
					}
				},
				"607b41e62f3bdd9406dcb8d3": {
					"name": "style",
					"place": "endOfHead",
					"tag": "style",
					"data": {
						"content": ".chart-style {\nheight: 100vh;\n}"
					}
				}
			}
		},
		"607a027c23a143001e08f123": {
			"id": "607a027c23a143001e08f123",
			"pageUrl": "comand",
			"name": "Разработка"
		},
		"607b1cf923a143001e08f3a5": {
			"id": "607b1cf923a143001e08f3a5",
			"pageUrl": "form",
			"name": "Форма сбора данных"
		}
	},
	"mode": "production",
	"projectType": "gatsby",
	"site": {
		"styles": {
			"font": "--minobrbold",
			"background": "#ffffff",
			"border-color": "#E7EAF2",
			"border-radius": "2px",
			"letter-spacing": ""
		},
		"seo": {
			"favicon_32px": "https://uploads.quarkly.io/6079ce657c7120001f1ee250/images/Frame%201.png?v=2021-04-16T18:11:57.582Z",
			"favicon_apple_152px": "https://uploads.quarkly.io/6079ce657c7120001f1ee250/images/Frame%202.png?v=2021-04-16T18:12:25.178Z",
			"favicon_win10_270px": "https://uploads.quarkly.io/6079ce657c7120001f1ee250/images/Frame%203.png?v=2021-04-16T18:12:25.173Z",
			"background_win10": "#f7f9fe",
			"title": ""
		}
	}
}