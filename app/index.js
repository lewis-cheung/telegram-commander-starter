import { TelegramCommander } from 'telegram-commander'

import config from './config.js'
import logger from './logger.js'

export default class TelegramCommanderApp extends TelegramCommander {

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

  async start() {
    await this.initCommands()
    logger.info('Telegram Commander started.')
  }
}
