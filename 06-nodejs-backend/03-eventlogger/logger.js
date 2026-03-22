const os = require('os');
const fs = require('fs');

const eventEmitter = require('events');

class Logger extends eventEmitter{
    log(message){
        this.emit('message', {message})
    }
}

const logger = new Logger();
const logFilePath = 'logs.txt'

const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} : ${event.message} \n`;
    fs.appendFileSync(logFilePath, logMessage, 'utf-8')
}

logger.on('message', logToFile)

setInterval(() => {
    const memoryUsage = (os.freemem() / os.totalmem()) * 100;
    logger.log(`Memory Usage: ${memoryUsage.toFixed(2)}%`);
}, 3000);

logger.log('Application started');
logger.log('Monitoring system resources...');