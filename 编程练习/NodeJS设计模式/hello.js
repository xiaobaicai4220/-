const Logger = require('./test.js');
const dbLogger = new Logger('DB');
dbLogger.log('This is an informational message');
dbLogger.hello();