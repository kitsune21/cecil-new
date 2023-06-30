import { addAPromptObj, addAPromptObjCustomSource } from '../commandList'
import { BaseCommand, Prompt } from '../../Types'

interface ResumeCommand extends BaseCommand {
  process: (promptId: number) => Prompt[]
}

export function downloadResume() {
  fetch('Cecil-Thomas-Resume.pdf').then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob)
      const alink = document.createElement('a')
      alink.href = fileURL
      alink.download = 'Cecil-Thomas-Resume.pdf'
      alink.click()
    })
  })
}

export const resumeCommand: ResumeCommand = {
  command: 'resume',
  process: (currentId: number) => {
    return [
      addAPromptObj(currentId, '______Work Summary______'),
      addAPromptObj(
        currentId + 1,
        'Entrata - Software Engineer I (2022-Current): Led the prototyping and development of the first new features using React/Typescript to speed up the user experience. Worked on projects that refactored and removed no longer used code, and added in unit test coverage using the PHPUnit framework.',
        true,
      ),
      addAPromptObj(
        currentId + 2,
        'Entrata - Software Development Manager (2020-2022): Worked with more than 38 developers, QA members, and product managers across two teams to develop, test, and release projects and new feature offerings for clients. Worked with my teams to reduce the open bug backlog from over 100 to less than 20. Helped teams in the development of new products that leveraged machine learning.',
        true,
      ),
      addAPromptObj(
        currentId + 3,
        'Entrata - Customer Resolution Specialist (2018-2020): Provide support for clients over phone, email, and chat. Work with managers to provide training for the support department to help agents be the most efficient that they can.',
        true,
      ),
      addAPromptObj(currentId + 4, '______Project Summary______', true),
      addAPromptObj(
        currentId + 5,
        "Journeys.Cafe - My current project that I'm most proud of. This is a social media platform built around giving users the best tools to plan a vacation, and being able to share those plans with anyone they want. Built using react, node, and postgres. This is hosted on Netlify.",
        true,
        'https://journeys.cafe/',
      ),
      addAPromptObj(
        currentId + 6,
        'Frozenspade.TV - Website built for the world record holding speedrunner and Twitch streamer "Frozenspade". Built utilizing react. Integrates with the SpeedRun.Com api to pull the latest speed runs and records.',
        true,
        'https://frozenspade.tv',
      ),
      addAPromptObj(
        currentId + 7,
        'Benazio Royale - Game submission for the 2022 GMTK Game Jam. I was the main programmer. I also coordinated efforts between our QA, music composer, and art team to make sure it was deliverable in just 48 hours of work.',
        true,
        'https://kitsune-23.itch.io/benazio-royale',
      ),
      addAPromptObj(
        currentId + 8,
        'Samba Island - Small game built for fun using Unity. I made it to help bring some awareness to the #TeamSeas fundraiser, which was a charity event to raise money to help clean our oceans.',
        true,
        'https://kitsune-23.itch.io/samba-island',
      ),
      addAPromptObj(currentId + 9, '______Skills Summary______', true),
      addAPromptObj(
        currentId + 10,
        "Javascipt/TypeScript - I love working with Javascript! Front-end, backend, doesn't matter. I love the large community. I love all the things you can build with it.",
        true,
      ),
      addAPromptObj(
        currentId + 12,
        'C# - I love working in C# to build games using the Unity engine. It makes such a difference having so many resources to pull from.',
        true,
      ),
      addAPromptObj(
        currentId + 13,
        'AWS - From using it in my job, to personal projects I am comfortable utilizing AWS for different solutions.',
        true,
      ),
      addAPromptObj(
        currentId + 14,
        'Japanese - I\'m highly proficient in Japanese (Spoken, Written). For those who know, I have reached the level of being asked "How long have you lived in Japan?", instead of "Oh your Japanese is good!".',
        true,
      ),
    ]
  },
  description:
    'Brief simple resume. Each section is not exhaustive. Just a basic idea.',
  type: 'multi',
  hide: null,
  regex: null,
  awaitCommand: null,
}

export const downloadResumeCommand: BaseCommand = {
  command: 'download resume',
  description: 'Downloads the resume.',
  type: 'simple',
  process: (currentId: number) => {
    downloadResume()
    return addAPromptObj(currentId, 'Downloading...')
  },
  regex: /a/,
  awaitCommand: () => null,
  hide: false,
}

export const resumeWorkCommand: ResumeCommand = {
  command: 'resume work',
  process: (currentId: number) => {
    return [
      addAPromptObj(currentId, '______Work Summary______'),
      addAPromptObj(
        currentId + 1,
        'Entrata - Software Engineer I (2022-Current): Led the prototyping and development of the first new features using React/Typescript to speed up the user experience. Worked on projects that refactored and removed no longer used code, and added in unit test coverage using the PHPUnit framework.',
        true,
      ),
      addAPromptObj(
        currentId + 2,
        'Entrata - Software Development Manager (2020-2022): Worked with more than 38 developers, QA members, and product managers across two teams to develop, test, and release projects and new feature offerings for clients. Worked with my teams to reduce the open bug backlog from over 100 to less than 20. Helped teams in the development of new products that leveraged machine learning.',
        true,
      ),
      addAPromptObj(
        currentId + 3,
        'Safety Pin - Lead Engineer (2020-2022): Worked with my friend to bootstrap an app for schools/teachers that would allow for faculty to quickly report up when emergencies were happening. Was the sole engineer, built out the app using React, Node, Postgres, and hosting the whole thing on AWS.',
        true,
      ),
      addAPromptObj(
        currentId + 4,
        'Entrata - Customer Resolution Specialist (2018-2020): Provide support for clients over phone, email, and chat. Work with managers to provide training for the support department to help agents be the most efficient that they can.',
        true,
      ),
      addAPromptObj(
        currentId + 5,
        "Other random jobs that I've had include: University IT Surplus, University IT Helpdesk, Bank Teller, Japanese Tour Guide, Call Center Quality Assurance Agent. And some more. Ask me sometime about how an old boss tried to recruit me to commit tax fraud ;)",
        true,
      ),
    ]
  },
  description: "Brief overview of all the jobs that I've done.",
  type: 'multi',
  hide: null,
  regex: null,
  awaitCommand: null,
}

export const resumeProjectCommand: ResumeCommand = {
  command: 'resume projects',
  process: (currentId: number) => {
    return [
      addAPromptObj(currentId + 1, '______Project Summary______'),
      addAPromptObj(
        currentId + 2,
        "Journeys.Cafe - My current project that I'm most proud of. This is a social media platform built around giving users the best tools to plan a vacation, and being able to share those plans with anyone they want. Built using react, node, and postgres. This is hosted on Netlify.",
        true,
        'https://journeys.cafe/',
      ),
      addAPromptObj(
        currentId + 3,
        'The GitHub Repo is currently private. Happy to walk you through any part of it.',
        true,
      ),
      addAPromptObjCustomSource(
        currentId + 4,
        'View Screenshots',
        'screenshots',
        'journeys',
      ),
      addAPromptObj(
        currentId + 5,
        'Frozenspade.TV - Website built for the world record holding speedrunner and Twitch streamer "Frozenspade". Built utilizing react. Integrates with the SpeedRun.Com api to pull the latest speed runs and records.',
        true,
        'https://frozenspade.tv',
      ),
      addAPromptObj(
        currentId + 6,
        'GitHub Repo for Frozenspade.TV',
        true,
        'https://github.com/kitsune21/frozenspade',
      ),
      addAPromptObj(
        currentId + 7,
        'Toolring.Cecil-Thomas.com - Fun little site for people playing Animal Crossing New Horizons. Gives a filterable table of the fish, bugs, and other collectables that you can find in the game. Built to be mobile friendly.',
        true,
        'https://toolring.cecil-thomas.com',
      ),
      addAPromptObj(
        currentId + 8,
        'Benazio Royale - Game submission for the 2022 GMTK Game Jam. I was the main programmer. I also coordinated efforts between our QA, music composer, and art team to make sure it was deliverable in just 48 hours of work.',
        true,
        'https://kitsune-23.itch.io/benazio-royale',
      ),
      addAPromptObj(
        currentId + 9,
        'GitHub Repo for Benazio Royale',
        true,
        'https://github.com/kitsunestudio/gmtk2022',
      ),
      addAPromptObj(
        currentId + 10,
        'Samba Island - Small game built for fun using Unity. I made it to help bring some awareness to the #TeamSeas fundraiser, which was a charity event to raise money to help clean our oceans.',
        true,
        'https://kitsune-23.itch.io/samba-island',
      ),
      addAPromptObj(
        currentId + 11,
        'GitHub Repo for Samba Island',
        true,
        'https://github.com/kitsune21/teamseas-game',
      ),
    ]
  },
  description: "Brief overview of all the projects that I've worked on.",
  type: 'multi',
  hide: null,
  regex: null,
  awaitCommand: null,
}

export const resumeSkillsCommand: ResumeCommand = {
  command: 'resume skills',
  process: (currentId: number) => {
    return [
      addAPromptObj(currentId + 1, '______Tech Skills Summary______', true),
      addAPromptObj(
        currentId + 2,
        "Javascipt - I love working with Javascript! Front-end, backend, doesn't matter. I love the large community.",
      ),
      addAPromptObj(
        currentId + 3,
        'C# - I love working in C# to build games using the Unity engine. It makes such a difference having so many resources to pull from.',
        true,
      ),
      addAPromptObj(
        currentId + 4,
        'AWS - From using it in my job, to personal projects I am comfortable utilizing AWS for different solutions.',
        true,
      ),
      addAPromptObj(
        currentId + 5,
        'Postgres - This has been my go to SQL db solution. I like the open source nature of it, and the large community that has been built around it.',
        true,
      ),
      addAPromptObj(
        currentId + 6,
        "Typescript - I put off learning Typescript for a while. But since I've started, I've really enjoyed using it! I feel like it makes me much faster, and less error prone. In fact, this website was built originally in JavaScript, and then was converted into TypeScript.",
        true,
      ),
      addAPromptObj(currentId + 7, '______Other Skills Summary______', true),
      addAPromptObj(
        currentId + 8,
        'Japanese - I\'m highly proficient in Japanese (Spoken, Written). For those who know, I have reached the level of being asked "How long have you lived in Japan?", instead of "Oh your Japanese is good!".',
        true,
      ),
      addAPromptObj(
        currentId + 9,
        "Spanish - Still mostly a beginner in this area. I started really studying Spanish at the very end of 2022. And I'm starting to get to the point where I can have basic conversations with my wife (who is fluent).",
        true,
      ),
      addAPromptObj(
        currentId + 10,
        "Bass Guitar - I started playing the bass in 2006-ish. And have loved playing it. Not currently in a band, so I don't get much opportunity to play right now.",
        true,
      ),
    ]
  },
  description: 'Brief overview of some skills that I have.',
  type: 'multi',
  hide: null,
  regex: null,
  awaitCommand: null,
}
