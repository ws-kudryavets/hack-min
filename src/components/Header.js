import React from "react";
import { useOverrides, Override, Menu, Section } from "@quarkly/components";
import { Image, Box, Hr } from "@quarkly/widgets";
const defaultProps = {};
const overrides = {
	"section": {
		"kind": "Section",
		"props": {
			"padding": "10px 0 10px 0"
		}
	},
	"sectionOverride": {
		"kind": "Override",
		"props": {
			"slot": "SectionContent",
			"min-height": "none",
			"min-width": "none"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"justify-content": "space-between",
			"align-items": "center",
			"flex-direction": "row",
			"md-flex-direction": "column"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "350px",
			"src": "https://uploads.quarkly.io/6079ce657c7120001f1ee250/images/logo.svg?v=2021-04-16T18:58:04.338Z",
			"min-width": "none",
			"min-height": "none"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"justify-content": "center",
			"font": "--base",
			"font-weight": "700",
			"md-flex-direction": "column",
			"md-align-items": "center"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"text-decoration": "none",
			"color": "--dark",
			"padding": "6px 12px"
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"color": "--primary"
		}
	},
	"menuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"padding": "6px"
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {
			"margin": "0 0px 0 0px",
			"padding": "0px 0px 0 0px"
		}
	}
};

const Header = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Section {...override("section")}>
			<Override {...override("sectionOverride")} />
			<Box {...override("box")}>
				<Image {...override("image")} />
				<Menu {...override("menu")}>
					<Override {...override("menuOverride")} />
					<Override {...override("menuOverride1")} />
					<Override {...override("menuOverride2")} />
				</Menu>
			</Box>
		</Section>
		<Hr {...override("hr")} />
		{children}
	</Box>;
};

Object.assign(Header, { ...Box,
	defaultProps,
	overrides
});
export default Header;