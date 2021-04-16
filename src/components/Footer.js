import React from "react";
import { useOverrides, Section } from "@quarkly/components";
import { Image, Box, Text, Link, Strong } from "@quarkly/widgets";
const defaultProps = {};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"width": "1280px",
			"height": "300px"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "1280px",
			"src": "https://uploads.quarkly.io/6079ce657c7120001f1ee250/images/%D1%84%D1%83%D1%82%D0%B5%D1%80.png?v=2021-04-16T21:25:57.499Z"
		}
	},
	"section": {
		"kind": "Section",
		"props": {
			"background-color": "--dark",
			"text-align": "center",
			"padding": "32px 0",
			"background": "#323538",
			"color": "#323538"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--h3Normal",
			"color": "#ffffff",
			"children": <>
				Прототип разработан{" "}
				<Strong>
					<Link
						href="#"
						color="--light"
						link-color="--lightD2"
						hover-color="--minobrBlue"
						active-color="--minobrBlue"
					>
						командой «Мамихлапинатана»
					</Link>
				</Strong>
				{" "}специально для конкурса «Цифровой прорыв». 2021
			</>
		}
	}
};

const Footer = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")}>
			<Image {...override("image")} />
		</Box>
		<Section {...override("section")}>
			<Text {...override("text")} />
		</Section>
		{children}
	</Box>;
};

Object.assign(Footer, { ...Box,
	defaultProps,
	overrides
});
export default Footer;