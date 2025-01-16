import winston from 'winston'
import config from './config.js'

const { format, transports } = winston

const upperCaseLevel = format(info => {
  info.level = info.level.toUpperCase()
  return info
})

const logFormat = format.printf(({ level, message, timestamp }) => `${timestamp} [${level}] ${message}`)

const logger = winston.createLogger({
  level: config.env === 'development' ? 'debug' : 'info',
  format: format.combine(
    upperCaseLevel(),
    format.colorize(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ssZ' }),
    logFormat,
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      format: format.uncolorize(),
      filename: config.logDir + '/debug.log',
      level: 'debug',
    }),
    new transports.File({
      format: format.uncolorize(),
      filename: config.logDir + '/error.log',
      level: 'error',
    }),
  ],
})

export default logger