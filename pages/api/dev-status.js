import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  try {
    const envSettingsPath = path.join(process.cwd(), 'env.settings')
    const content = fs.readFileSync(envSettingsPath, 'utf8')
    const lines = content.split('\n').filter(line => line.trim() !== '')
    const settings = {}
    lines.forEach(line => {
      const [key, value] = line.split('=')
      if (key && value) {
        settings[key] = value === 'true' ? true : value === 'false' ? false : value
      }
    })
    res.status(200).json(settings)
  } catch (error) {
    res.status(200).json({ dev: false })
  }
}
