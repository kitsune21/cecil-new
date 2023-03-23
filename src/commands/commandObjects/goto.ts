import { addAPromptObj } from '../commandList'

export const gotoJourneysCommand = {
  command: 'goto journeys',
  description: 'Will open a new tab to Journeys.Cafe',
  type: 'simple',
  process: (currentId: number) => {
    window.open('https://journeys.cafe/')
    return addAPromptObj(currentId, 'Opening Journeys.Cafe...')
  },
  hide: true,
  regex: /a/,
  awaitCommand: () => null,
}

export const gotoFrozenspadeCommand = {
  command: 'goto frozenspade',
  description: 'Will open a new tab to FrozenSpade.TV.',
  type: 'simple',
  process: (currentId: number) => {
    window.open('https://frozenspade.tv/')
    return addAPromptObj(currentId, 'Opening FrozenSpade.TV...')
  },
  hide: true,
  regex: /a/,
  awaitCommand: () => null,
}

export const gotoToolringCommand = {
  command: 'goto toolring',
  description: 'Will open a new tab to Toolring.Cecil-Thomas.com',
  type: 'simple',
  process: (currentId: number) => {
    window.open('https://toolring.cecil-thomas.com')
    return addAPromptObj(currentId, 'Opening Toolring.Cecil-Thomas.com...')
  },
  hide: true,
  regex: /a/,
  awaitCommand: () => null,
}

export const gotoBasicCommand = {
  command: 'goto (journeys|frozenspade|toolring)',
  description:
    'Will open a new tab at the specified site. ie. goto journeys will send you to Journeys.Cafe',
  type: 'simple',
  regex: /a/,
  awaitCommand: () => null,
  hide: false,
  process: (currentId: number) =>
    addAPromptObj(currentId, 'Please check your selection.'),
}
