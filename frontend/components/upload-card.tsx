'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { uploadFile } from '../lib/api'
import { Upload } from 'lucide-react'

export default function UploadCard() {
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
      setMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      setMessage('Please select a PDF file')
      return
    }
    try {
      const response = await uploadFile(file)
      setMessage(response.message)
      setFile(null)
    } catch (error) {
      setMessage('Error uploading file')
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
        <Upload className="mr-2" /> Upload Paper
      </h2>
      <Input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="mb-6"
      />
      <Button onClick={handleSubmit} className="w-full bg-primary hover:bg-secondary">
        Upload PDF
      </Button>
      {message && <p className="mt-4 text-center text-gray-600">{message}</p>}
    </div>
  )
}