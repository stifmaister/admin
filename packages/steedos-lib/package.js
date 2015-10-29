Package.describe({
	name: 'steedos:lib',
	version: '0.0.1',
	summary: 'Steedos libraries',
	git: ''
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use('reactive-var');
	api.use('reactive-dict');
	api.use('coffeescript');
	api.use('random');
	api.use('check');
	api.use('ddp-rate-limiter');
	api.use('underscore');
	api.use('underscorestring:underscore.string');
	api.use('monbro:mongodb-mapreduce-aggregation@1.0.1');

	// COMMON
	api.addFiles('lib/core.coffee');

	// MODELS SERVER
	api.addFiles('server/models/_Base.coffee', 'server');
	api.addFiles('server/models/Users.coffee', 'server');


	// EXPORT
	api.export('Steedos');
});

Package.onTest(function(api) {

});
