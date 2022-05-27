import { FC } from 'react';
import { RootDiv } from '@shared/ui';
import RHF from './RHF';

const HomePage: FC = () => {
	return (
		<RootDiv>
			<div style={{ padding: '30px 20px' }}>
				<p>Hi from home</p>
				<RHF />
			</div>
		</RootDiv>
	);
};

export default HomePage;
