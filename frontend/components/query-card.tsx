'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { queryPapers } from '../lib/api'

export default function QueryCard() {
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query) {
      setResponse('Please enter a query')
      return
    }
    try {
      const result = await queryPapers(query)
      setResponse(result.response)
    } catch (error) {
      setResponse('Error processing query')
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-primary">Query Papers</h2>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask about the papers..."
        className="mb-6"
      />
      <Button onClick={handleSubmit} className="w-full bg-primary hover:bg-secondary">
        Submit Query
      </Button>
      {response && (
        <p className="mt-4 text-gray-600 whitespace-pre-wrap">{response}</p>
      )}
    </div>
  )
}