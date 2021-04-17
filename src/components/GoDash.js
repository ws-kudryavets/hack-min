import React from 'react';
import { useOverrides } from '@quarkly/components';
import { Button } from '@quarkly/widgets';
import atomize from "@quarkly/atomize";
const overrides = {
	'GoDash': {
		kind: 'Button'
	}
};

const GoDash = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);

	const handleClick = () => window.location.replace('http://mon.hack48.ru:3030/rostovondon');

	return <Button onClick={handleClick} {...rest} {...override('GoDash')}>
		{override('GoDash').children || 'Перейти к просмотру Ростовской области'}
	</Button>;
};

export default Object.assign(GoDash, {
	overrides
});