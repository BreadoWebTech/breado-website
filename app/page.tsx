'use client'

import { useState } from 'react'
import { Button, Card, CardHeader, CardContent, CardFooter } from '@shadcn/ui'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="container mx-auto p-4 space-y-8">
          {/* Toggle Dark Mode */}
          <Button onClick={() => setDarkMode(!darkMode)} className="mb-4">
            Toggle Dark Mode
          </Button>

          {/* About Me Section */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <h1 className="text-4xl font-bold mb-2">Breado - About Me</h1>
            </CardHeader>
            <CardContent>
              <p className="text-xl">
                Names Breado, I'm 15, I love coding and gaming in my free time. I love to teach and help people regarding tech issues.
                I know Python very well, along with HTML, JS, CSS, Batch, Bash, a little Assembly, C, and C++. Currently getting into developing kernels using the KMDF.
              </p>
            </CardContent>
          </Card>

          {/* Projects Section */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <h2 className="text-3xl font-bold mb-2">Projects</h2>
            </CardHeader>
            <CardContent>
              <p className="text-xl">
                Placeholder for project details. List some projects here, describe what they are, and maybe provide links to GitHub repos or demos.
              </p>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <h2 className="text-3xl font-bold mb-2">Contact</h2>
            </CardHeader>
            <CardContent>
              <p className="text-xl">
                You can reach me over discord, click on the discord icon below.
              </p>
            </CardContent>
            <CardFooter className="flex space-x-4">
              {/* Discord Icon */}
              <a href="https://discord.com/users/your-discord-id" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discord/discord-original.svg" 
                  alt="Discord" 
                  className="w-8 h-8"
                />
              </a>
              {/* GitHub Icon */}
              <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                  alt="GitHub" 
                  className="w-8 h-8"
                />
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}