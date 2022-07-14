import { NestFactory } from '@nestjs/core';
import {
	FastifyAdapter,
	NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter({
			logger: {
				level: 'info',
				prettyPrint: true,
			},
			ignoreTrailingSlash: true,
			caseSensitive: false,
		}),
		{
			logger: ['error', 'warn'],
			cors: true,
		}
	);
	await app.listen(4000);
}

bootstrap();
