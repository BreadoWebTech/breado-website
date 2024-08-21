'use client'

import React from 'react'
import { useState } from 'react'
import { Button} from '@/components/ui/button'
import { CalendarIcon } from "@radix-ui/react-icons"
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="container mx-auto p-4 space-y-8 max-w-6xl">
          {/* Toggle Dark Mode */}
          <Button onClick={() => setDarkMode(!darkMode)} className="mb-4 bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-900 rounded-lg">
            Toggle Dark Mode
          </Button>
          {/* Hero Section with Gradient Background */}
          <div className={`p-10 rounded-lg ${darkMode ? 'bg-gradient-to-r from-blue-800 to-teal-900' : 'bg-gradient-to-r from-blue-500 to-purple-600'} text-white`}>
            <h1 className="text-5xl font-bold">Welcome to My About Me Page</h1>
            <p className="text-xl mt-4">Discover more about my work and interests.</p>
          </div>
          {/* About Me Section */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg shadow-lg rounded-lg">
            <CardHeader>
              <h1 className="text-4xl font-bold mb-2">Breado - About Me</h1>
            </CardHeader>
            <CardContent className='p-6'>
            <p className="text-xl leading-relaxed">
            Hi, I'm Breado. Im normally not into writing essay-like introductions, so I'll keep it short. <br />Im a young developer - 15 years old - and I've been coding since I'm around 11 years old. I started coding on a tablet, and since a few years I finally have a desktop to work with. <br /> <br />
            </p>
            <p className="text-xl leading-relaxed">
              The languages I know are Python , JS, batch, bash, HTML and CSS ( yeah, I know, those arent languages...). Im also fairly decent at C / Cpp, and have some experience with x86 64bit Assembly. <br /> <br />
            </p>
            <p className="text-xl leading-relaxed">
              I'm currently learning how to developer Kernel Mode Drivers for NT using the KMDF. <br />
              I do have other hobbies than coding, I enjoy doing calisthenics and love playing Minecraft and Overwatch 2 <br />( Can one even enjoy playing Overwatch ? )
            </p>

            </CardContent>
          </Card>
          <div className="border-t border-gray-300 dark:border-gray-600 my-8"></div>
          {/* Projects Section */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
              <h2 className="text-3xl font-bold mb-2">Projects</h2>
            </CardHeader>
            <CardContent>
            <CardContent className="p-6 space-y-4">
              <p className="text-xl mb-4">
                Here’s a list of my projects that I like to show. Hover over them to get links and descriptions. <br />
                If there’s no link, I haven’t published it on GitHub yet. <br /><br />
              </p>
              
              {/* Example Project 1 */}
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">This Website</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">This website</h4>
            <p className="text-sm">
              Built for people to get to know me. <br /> <br />
              <Link href="https://github.com/BreadoWebTech/breado-website">
                Click here for Repo link
              </Link>
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Made in August 2024
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
              </div>
                            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Neuroengine.ai</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Neuroengine.ai</h4>
            <p className="text-sm">
              Enhandced the looks and strucutre for the owner of the site. <br /> <br />Check it out, it offers free to use, uncensored AI models! and an API! <br /> <br />
              <Link href="https://neuroengine.ai">
                Click here for Website link
              </Link>
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Made around August 2023
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
              </div>

              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Official Aliucord Website</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">The offical website for Aliucord.</h4>
            <p className="text-sm">
            Owned By Aliucord now. <br /> <br />
              <Link href="https://github.com/BreadoWebTech/breado-website">
                Click here for Website link
              </Link>
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Made around June 2023
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Mercenarylabs Articles</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Articles to be found on Mercenarylabs</h4>
            <p className="text-sm">
            I used to be a really active member of Mercenarylabs. Wrote articles and stuff. <br /><br />The Site went down, its saved on Wayback though<br /> <br />
              <Link href="https://web.archive.org/web/20240000000000*/mercenarylabs.net">
                Click here for Wayback link to mercenarylabs.net
              </Link>
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Last updated in October 2024
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
              </div>
            </CardContent>
            </CardContent>
          </Card>
          <div className="border-t border-gray-300 dark:border-gray-600 my-8"></div>
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
              <a href="https://discord.com/users/therammatramain" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://img.icons8.com/?size=100&id=25627&format=png&color=000000" 
                  alt="Discord" 
                  className="w-8 h-8"
                />
              </a>
              {/* GitHub Icon */}
              <a href="https://github.com/BreadoWebTech" target="_blank" rel="noopener noreferrer">
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