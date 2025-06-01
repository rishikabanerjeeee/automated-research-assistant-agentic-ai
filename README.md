Automated Research Assistant
A tool to summarize academic papers and answer queries using Retrieval-Augmented Generation (RAG).
Tech Stack

Backend: FastAPI, LangChain, PyPDF2, Elasticsearch (Elastic Cloud)
Frontend: Next.js, Tailwind CSS, shadcn/ui
LLM: Hugging Face Inference API
Hosting: Render (backend), Vercel (frontend), GitHub (source)

Setup (Windows)

Install Tools:

Python 3.10+: python.org, check "Add Python to PATH".
Node.js 18+: nodejs.org.
GitHub Desktop: desktop.github.com.
VS Code: code.visualstudio.com.
Elastic Cloud: elastic.co.
Hugging Face API: huggingface.co.


GitHub Setup:

Create repo in GitHub Desktop: automated-research-assistant.
Open in VS Code: File > Open Folder.


Backend:

Create backend/ folder, add files.
Install dependencies:cd backend
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt


Update .env with ELASTICSEARCH_URL, ELASTICSEARCH_API_KEY, HF_API_KEY.
Run: uvicorn main:app --reload


Frontend:

Create frontend/ folder, add files.
Install dependencies: cd frontend && npm install
Install shadcn/ui: npx shadcn-ui@latest init
Add components: npx shadcn-ui@latest add button input
Download assets for public/ from favicon.io and unsplash.com.
Run: npm run dev


Deployment:

Commit and push via GitHub Desktop.
Frontend: Connect to vercel.com, set NEXT_PUBLIC_API_URL.
Backend: Connect to render.com, set environment variables, use start command uvicorn main:app --host 0.0.0.0 --port $PORT.



Usage

Upload PDFs via the frontend upload card.
Query papers for summaries or information.
Access at http://localhost:3000 (local) or your Vercel URL.

Demo
Hosted at [Vercel URL] (replace with your deployed URL).
