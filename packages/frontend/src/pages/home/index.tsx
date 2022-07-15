import { FC } from 'react';
import { Button } from '@mui/material';
import { RootDiv } from '@shared/ui';
import RHF from './RHF';
import { downloadFile, openFileInBrowser } from './fileHelpers';

const HomePage: FC = () => {
	const { REACT_APP_TESTVAR } = process.env;
	return (
		<RootDiv>
			<div style={{ padding: '30px 20px' }}>
				<p>Hi from home</p>
				<p>env var - "{REACT_APP_TESTVAR}"</p>
				<RHF />
				<div style={{ margin: '10px 0px' }}>
					<Button variant="outlined" onClick={() => downloadFile()}>
						Download pdf
					</Button>
				</div>
				<Button variant="contained" onClick={() => openFileInBrowser()}>
					Open pdf
				</Button>
			</div>
		</RootDiv>
	);
};

export default HomePage;
