export const config = {
	development: {
		username: process.env.POSTGRES_USER || 'postgres',
		password: process.env.POSTGRES_PASSWORD || 'root',
		database: process.env.POSTGRES_DATABASE || 'root',
		host: process.env.POSTGRES_HOST || 'postgres',
		port: process.env.POSTGRES_PORT || '5432',
		dialect: 'postgres',
	},
	test: {
		username: 'root',
		password: null,
		database: 'database_test',
		host: '127.0.0.1',
		dialect: 'postgres',
	},
	production: {
		username: 'root',
		password: null,
		database: 'database_production',
		host: '127.0.0.1',
		dialect: 'postgres',
	},
};
