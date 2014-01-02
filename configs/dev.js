var path = require('path');
__libdir = path.resolve(__dirname, '../lib');
var config = require(__libdir + '/config');

// app info
config.app.masterTitle = 'bedrock1d';
config.app.workerTitle = 'bedrock1d-worker';
config.app.restartWorkers = false;
// system group and user IDs (can be groupname/username instead of numbers)
config.app.user.groupId = process.getgid();
config.app.user.userId = process.getuid();

// config environment
config.environment = 'development';
//config.environment = 'testing';
//config.environment = 'sandbox';
//config.environment = 'production';

// logging
config.loggers.app.filename = '/tmp/bedrock-dev-app.log';
config.loggers.access.filename = '/tmp/bedrock-dev-access.log';
config.loggers.error.filename = '/tmp/bedrock-dev-error.log';
config.loggers.email.silent = true;

// server info
// 0 means use # of cpus
config.server.workers = 1;
config.server.port = 20443;
config.server.httpPort = 20080;
config.server.bindAddr = ['bedrock.dev'];
config.server.domain = 'bedrock.dev';
config.server.host = 'bedrock.dev:20443';
config.server.key = __dirname + '/../pki/test-bedrock.key';
config.server.cert = __dirname + '/../pki/test-bedrock.crt';

// session info
config.server.session.secret = '0123456789abcdef';
config.server.session.key = 'bedrock.sid';
config.server.session.prefix = 'bedrock.';

// server static resource config
//config.server.static = [__dirname + '/../site/static'];
config.server.staticOptions = {
  maxAge: config.server.cache.maxAge
};

// database config
config.database.name = 'bedrock_dev';
config.database.host = 'localhost';
config.database.port = 27017;
config.database.local.collection = 'bedrock_dev';

// root user config
config.root.baseUri = 'https://' + config.server.host;
config.root.id = config.root.baseUri + '/i/root';
config.root.name = 'Bedrock Dev Root User';

// mail config
config.mail.connection = {
  host: 'localhost',
  ssl: false
};
config.mail.send = false;
config.mail.vars = {
  productionMode: config.website.views.vars.productionMode,
  baseUri: config.root.baseUri,
  serviceHost: config.server.host,
  serviceDomain: config.server.domain,
  supportDomain: config.server.domain,
  subjectPrefix: '[DEV] ',
  profileSubjectPrefix: '[DEV] ',
  serviceName: 'Bedrock Development',
  machine: require('os').hostname()
};

require('./roles');
require('./common-data');
require('./dev-data');
