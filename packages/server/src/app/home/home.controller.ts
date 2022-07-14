import { Controller, Get, StreamableFile } from '@nestjs/common';
import { join } from 'path';
import { createReadStream } from 'fs';
import { HomeService } from './home.service';

interface FileResponse {
	fileName: string;
	file: StreamableFile;
}

@Controller()
export class HomeController {
	constructor(private readonly homeService: HomeService) {}

	@Get()
	getHello(): string {
		return this.homeService.getHello();
	}

	@Get('file')
	sendSomeFile(): FileResponse {
		/* Process.cwd() gets path of current working directory */
		const file = createReadStream(
			join(process.cwd(), 'src/assets/Project proposal.pdf')
		);
		return {
			fileName: 'Project proposal.pdf',
			file: new StreamableFile(file),
		};
	}
}
