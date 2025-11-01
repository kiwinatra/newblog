// pages/todos.js
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { todosData } from '@/data/todos'

export default function Todos() {
  const todos = todosData

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'red'
      case 'medium': return 'yellow' 
      case 'low': return 'green'
      default: return 'gray'
    }
  }

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'work': return '💼'
      case 'personal': return '🏠'
      case 'learning': return '📚'
      case 'entertainment': return '🎮'
      default: return '📝'
    }
  }

  const getPriorityText = (priority) => {
    switch(priority) {
      case 'high': return 'Высокий'
      case 'medium': return 'Средний' 
      case 'low': return 'Низкий'
      default: return 'Не указан'
    }
  }

  return (
    <>
      <PageSEO
        title={`Todos - ${siteMetadata.author}`}
        description="My current tasks and priorities"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Current Tasks
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            What I'm working on right now
          </p>
        </div>

        {/* Todos List */}
        <div className="space-y-4">
          {todos.map(todo => (
            <div
              key={todo.id}
              className={`flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border transition-all ${
                todo.completed
                  ? 'border-green-200 dark:border-green-800 opacity-60'
                  : 'border-gray-200 dark:border-gray-700 hover:shadow-lg'
              }`}
            >
              <div className={`flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-${getPriorityColor(todo.priority)}-500`}></div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xl font-medium ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}`}>
                    {todo.text}
                  </span>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-2">
                    {getCategoryIcon(todo.category)}
                    <span className="capitalize">{todo.category}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full bg-${getPriorityColor(todo.priority)}-500`}></span>
                    {getPriorityText(todo.priority)}
                  </span>
                  <span>Added: {todo.createdAt}</span>
                </div>
              </div>

              {todo.completed && (
                <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                  Done
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {todos.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Tasks</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {todos.filter(t => t.completed).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {todos.filter(t => !t.completed).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Pending</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">
                {todos.filter(t => t.priority === 'high').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">High Priority</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}