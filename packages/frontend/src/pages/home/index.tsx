import { FC } from 'react';
// import { RootDiv } from '@shared/ui';
import RHF from './RHF';

const HomePage: FC = () => {
	const { REACT_APP_TESTVAR } = process.env;
	return (
		// <RootDiv>
		<div style={{ padding: '30px 20px' }}>
			<p>Hi from home</p>
			<p>env var - "{REACT_APP_TESTVAR}"</p>
			<RHF />
		</div>
		// </RootDiv>
	);
};

export default HomePage;
