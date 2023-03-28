import { addAPromptObj } from '../commandList'
import { BaseCommand, Prompt } from '../../Types'

interface ResumeCommand extends BaseCommand {
  process: (promptId: number) => Prompt[]
}

function downloadResume() {
  fetch('Resume.pdf').then((response) => {
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
        'Entrata - Software Engineer I (2022-Current): but doesnt do anything yet.',
        true,
      ),
      addAPromptObj(
        currentId + 2,
        'Entrata - Software Development Manager (2020-2022): but doesnt do anything yet.',
        true,
      ),
      addAPromptObj(
        currentId + 3,
        'Entrata - Customer Resolution Specialist (2018-2020): but doesnt do anything yet.',
        true,
      ),
      addAPromptObj(currentId + 4, '______Project Summary______', true),
      addAPromptObj(
        currentId + 5,
        'Journeys.Cafe - Website built using React, NodeJs (on lambda functions), and a postgres db.',
        true,
      ),
      addAPromptObj(
        currentId + 6,
        'Frozenspade.TV - Website built using React. Hosted on Netlify, utilizes CI/CD.',
        true,
      ),
      addAPromptObj(
        currentId + 7,
        'Toolring.Cecil-Thomas.com - Fun little site for people playing Animal Crossing New Horizons. Gives a filterable table of things you can catch in the game.',
        true,
      ),
      addAPromptObj(
        currentId + 8,
        'Benazio Royale - Game submission for the 2022 GMTK Game Jam. Built using Unity (C#)',
        true,
      ),
      addAPromptObj(
        currentId + 9,
        'Samba Island - Small game built for fun using Unity (C#).',
        true,
      ),
      addAPromptObj(currentId + 10, '______Skills Summary______', true),
      addAPromptObj(
        currentId + 11,
        "Javascipt - I love working with Javascript! Front-end, backend, doesn't matter.",
        true,
      ),
      addAPromptObj(
        currentId + 12,
        'C# - I love working in C# to build games using the Unity engine.',
        true,
      ),
      addAPromptObj(
        currentId + 13,
        'AWS - From using it in my job, to personal projects I am comfortable utilizing AWS for different solutions.',
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
