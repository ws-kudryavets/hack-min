import React, { useState } from 'react';
import { Box, Input, Text, Button } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import atomize from "@quarkly/atomize";
const Span = atomize.span();
const overrides = {
	'LoginForm': {
		kind: 'Box'
	},
	'LoginTitle': {
		kind: 'Text'
	},
	'LoginInput': {
		kind: 'Box'
	},
	'LoginEmail': {
		kind: 'Input'
	},
	'LoginTitleEmail': {
		kind: 'Text'
	},
	'LoginTitlePassword': {
		kind: 'Text'
	},
	'LoginPassword': {
		kind: 'Input'
	},
	'LoginButton': {
		kind: 'Button'
	}
};
const defaults = {
	email: 'md5@mail.com',
	password: 'ghjcnjqrk.x'
};

const LoginForm = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const handleEmail = e => setEmail(e.target.value);

	const handlePassword = e => setPassword(e.target.value);

	const handleLogin = () => defaults.email === email && defaults.password === password && window.location.replace('/chart-page') || setError(true);

	return <Box {...rest} {...override('LoginForm')}>
		    
		<Text {...override('LoginTitle')}>
			      
			{override('LoginTitle').children || 'Login'}
			    
		</Text>
		    
		<Box {...override('LoginInput')}>
			      
			<Span {...override('LoginTitleEmail')}>
				{override('LoginTitleEmail').children || 'Email'}
			</Span>
			      
			<Input onChange={handleEmail} value={email} {...override('LoginEmail')} />
			      
			<Span {...override('LoginTitlePassword')}>
				{override('LoginTitlePassword').children || 'Password'}
			</Span>
			      
			<Input onChange={handlePassword} value={password} {...override('LoginPassword')} />
			    
		</Box>
		    
		<Box {...override('LoginError')}>
			{error && (override('LoginPassword').children || 'Error email or password')}
		</Box>
		    
		<Button onClick={handleLogin} {...override('LoginButton')}>
			      
			{override('LoginButton').children || 'Login Button'}
			    
		</Button>
		  
	</Box>;
};

export default Object.assign(LoginForm, {
	overrides
});