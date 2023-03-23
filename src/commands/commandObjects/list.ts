import { addAPromptObj } from '../commandList'
import { ComplexCommand, BaseCommand } from '../../Types'

export const listCommand: ComplexCommand = {
  command: 'list',
  description: 'List all the commands and their descriptions.',
  process: (upperProcess: () => void) => {
    upperProcess()
  },
  type: 'complex',
  regex: null,
  hide: null,
  awaitCommand: null,
}

export const moviesCommand: BaseCommand = {
  command: 'movies',
  description:
    'A list of some of my favorite movies. Not in order. How can anyone actually rank them?',
  type: 'multi',
  process: (currentId: number) => {
    return [
      addAPromptObj(currentId, '______Some Movies That I Like______'),
      addAPromptObj(
        currentId + 1,
        'Interstellar - I love Christopher Nolan movies, and Sci-Fi movies, so this is a perfect combination.',
      ),
      addAPromptObj(
        currentId + 2,
        "Puss In Boots: The Last Wish - It's been out only about 4 months now, but I've seen it probably 7 times.",
      ),
      addAPromptObj(
        currentId + 3,
        'Man From U.N.C.L.E. - This movie kinda flew under the radar for some reason, but it is fantastic.',
      ),
      addAPromptObj(
        currentId + 4,
        'The Lord of the Rings The Fellowship of the Ring - I think the first one is my favorite. It nails down the tone and stakes of the trilogy very well.',
      ),
      addAPromptObj(
        currentId + 5,
        "Star Wars The Last Jedi - It isn't my favorite out of all of the Star Wars, but I think it is super underrated. Some of the most beautiful shots in all of Star Wars.",
      ),
      addAPromptObj(
        currentId + 6,
        'The Princess Bride - This is my pick for "If I was stuck on a deserted island and only could bring one movie." I don\'t think I can get tired of watching it.',
      ),
      addAPromptObj(
        currentId + 7,
        "No Time To Die - I love all of the Daniel Craig Bond movies (and all the other Bond movies that I've seen so far). But this one has some super fun camera work that I love watching.",
      ),
      addAPromptObj(
        currentId + 8,
        'Gladiator, Hot Fuzz, The Prince of Egypt, The Big Short, Pacific Rim, The Lego Movie, Sherlock Holmes, Secondhand Lions, Knives Out, Jojo Rabbit, 3 Idiots, etc.',
      ),
    ]
  },
  regex: /a/,
  awaitCommand: () => null,
  hide: false,
}

export const gamesCommand: BaseCommand = {
  command: 'games',
  description: 'A list of some of my favorite games.',
  type: 'multi',
  process: (currentId: number) => {
    return [
      addAPromptObj(currentId, '______Some Games That I Like______'),
      addAPromptObj(
        currentId + 1,
        "Super Smash Bros. Melee - I've put so many hours into this game. Including hosting and participating in tournemants all over the US.",
      ),
      addAPromptObj(
        currentId + 2,
        'Pokemon Emerald - Probably my favorite out of all the Pokemon games. I love the Hoenn Pokemon. #TreeckoIsTheBestStarter',
      ),
      addAPromptObj(
        currentId + 3,
        "Minecraft - I've never been one of those crazy people building all the machines, but I enjoy plaing every once in awhile.",
      ),
      addAPromptObj(
        currentId + 4,
        'Stardew Valley - A girl I dated got me into this game. I really enjoy simple relaxing games like this.',
      ),
      addAPromptObj(
        currentId + 5,
        'Age of Empires (All of them) - I can directly attribut my love of history to this francise. RTS games are just really fun in general. (I even love the DS one)',
      ),
      addAPromptObj(
        currentId + 6,
        'Starcraft 2 - My first love when it comes to competitive games. I put a lot of hours into this one and got as high as Diamond league. Have never played the campaign though lol',
      ),
      addAPromptObj(
        currentId + 7,
        "Microsoft Flight Simulator - The newest one is a lot of fun. I've always loved airplanes, so this is the closet thing I can do to getting a pilots license for now.",
      ),
      addAPromptObj(
        currentId + 8,
        "Final Fantasy IV - I don't think I'm allowed not to include this on my list of games since my name is Cecil. But aside from that, I really enjoy the game. Lots of fun characters.",
      ),
      addAPromptObj(
        currentId + 9,
        'Some day I will make a game that goes here.',
      ),
    ]
  },
  regex: /a/,
  awaitCommand: () => null,
  hide: false,
}

export const socialsCommand: BaseCommand = {
  command: 'social',
  description: 'Shows you where to find me on Social Media.',
  type: 'multi',
  process: (currentId: number) => {
    return [
      addAPromptObj(currentId, '______Social Media______'),
      addAPromptObj(currentId + 1, 'Twitter: @KiTsuNe76'),
      addAPromptObj(currentId + 4, 'LinkedIn: cecilthomas23'),
      addAPromptObj(currentId + 2, 'Instagram: journeys.cafe'),
      addAPromptObj(currentId + 3, 'Email: me@cecil-thomas.com'),
      addAPromptObj(currentId + 4, 'GitHub: kitsune21'),
    ]
  },
  regex: /a/,
  awaitCommand: () => null,
  hide: false,
}

export const booksCommand: BaseCommand = {
  command: 'books',
  description: 'Shows some books that I like.',
  type: 'multi',
  process: (currentId: number) => {
    return [
      addAPromptObj(currentId, '______Books______'),
      addAPromptObj(
        currentId + 1,
        "Ender's Game - Orson Scott Card: I love sci-fi, and this is an interesting future.",
      ),
      addAPromptObj(
        currentId + 2,
        'Endurance - Alfred Lansing: An amazing story about dealing with failure after failure, and somehow surviving it all.',
      ),
      addAPromptObj(
        currentId + 3,
        'The Lord of the Rings - JRR Tolkien: Man this book is dense. But it is so worth the read.',
      ),
      addAPromptObj(
        currentId + 4,
        'The Art of Learning - Josh Waitzkin: This is a very interesting read. Josh is a chess prodigy (the kid from "Searching for Bobby Fisher"), and a world champion martial artist.',
      ),
      addAPromptObj(
        currentId + 5,
        "Personal Memoirs of Ulysses S. Grant: This mostly deals with his military career. He talks about the Civil War and shares a lot of stories that you wouldn't learn in history class.",
      ),
    ]
  },
  regex: /a/,
  awaitCommand: () => null,
  hide: false,
}
