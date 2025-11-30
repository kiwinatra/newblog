// image-loader.js
export default function customImageLoader({ src, width, quality }) {
  // Просто возвращаем исходный src без изменений
  // Это обходит проверку Next.js но сохраняет совместимость с next/image
  return src
}