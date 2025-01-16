import { TelegramCommander } from 'telegram-commander'

export default class TelegramCommanderApp extends TelegramCommander {

  constructor(token) {
    super(token)
    this.initCommands().then(() => {
      console.log('Commands initialized') // TODO: use logger instead
    })
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
}
