import { TelegramCommander } from 'telegram-commander'

import config from './config.js'
import logger from './logger.js'

export default class TelegramCommanderApp extends TelegramCommander {

  constructor() {
    super(config.telegram.token)
  }

  async initCommands() {
    await this.addCommand({
      name: 'sample',
      description: 'Sample command',
      handler: async (ctx) => {
        await ctx.reply('sample reply')
      }
    })

    await this.syncCommands()
  }

  async start() {
    await this.initCommands()
    logger.info('Telegram Commander started.')
  }
}
