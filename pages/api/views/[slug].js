export default async function handler(req, res) {
  try {
    const slug = req.query.slug.toString()

    if (req.method === 'POST') {
      // Генерируем случайное число для просмотров
      const randomViews = Math.floor(Math.random() * 1000) + 1
      
      return res.status(200).json({
        total: randomViews.toString(),
      })
    }

    if (req.method === 'GET') {
      // Генерируем случайное число для просмотров
      const randomViews = Math.floor(Math.random() * 1000) + 1
      
      return res.status(200).json({ 
        total: randomViews.toString() 
      })
    }

    // Если метод не POST и не GET
    return res.status(405).json({ message: 'Method not allowed' })

  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}