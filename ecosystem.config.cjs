module.exports = {
  apps : [
    {
      name: 'telegram-commander-starter',
      script: 'npm run start',
      max_memory_restart: '512M',
    },
    {
      name: 'telegram-commander-starter-dev',
      script: 'npm run start',
      max_memory_restart: '512M',
      watch: ['app/**/*.js', 'config.yaml'],
    }
  ],
}