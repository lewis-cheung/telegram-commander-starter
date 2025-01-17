import { TelegramCommander, escapeMarkdownV2 as e } from 'telegram-commander'
import mongoose from 'mongoose'

import config from './config.js'
import logger from './logger.js'

export default class TelegramCommanderApp extends TelegramCommander {

  /** @type {number[]} */           notiChatIds = config.telegram.notiChatIds

  constructor() {
    super(config.telegram.token, {
      logger,
      whitelistedChatIds: config.telegram.whitelistedChatIds,
    })
  }

  async initCommands() {
    await this.addCommand({
      name: 'sample',
      description: 'Sample command',
      handler: async (ctx) => {
        await ctx.reply(`chatId: ${ctx.chatId}`)
      }
    })

    await this.syncCommands()
  }

  async initMongo() {
    try {
      const fullUri = `${config.mongo.uri}/${config.mongo.dbName}`
      await mongoose.connect(fullUri)
      logger.info(`Connected to database at ${fullUri}.`)
    } catch (error) {
      logger.error('Failed to connect to database.', error)
      process.exit(1)
    }
  }

  async start() {
    await this.initMongo()
    await this.initCommands()
    await this.notify(e(`${config.appName} started.`))
  }

  /**
   * Send message to notification chat ids
   * @param {string|string[]} content
   */
  async notify(content) {
    await this.sendMessage(this.notiChatIds, content)
  }
}
