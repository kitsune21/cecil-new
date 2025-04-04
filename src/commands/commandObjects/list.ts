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
        'Interstellar - I love Christopher Nolan movies, and Sci-Fi movies, so this is a perfect combination. It took me watching it several times to fully appreciate it. But the closer to fatherhood that I come, the more I understand it.',
        true,
      ),
      addAPromptObj(
        currentId + 2,
        "Puss In Boots: The Last Wish - It's been out only about 4 months now, but I've seen it probably 7 times. I really enjoy animated movies. And this movie is a lot of fun. I can't remember the last time I saw a movie that made so many villains work at the same time.",
        true,
      ),
      addAPromptObj(
        currentId + 3,
        'Man From U.N.C.L.E. - This movie kinda flew under the radar for some reason, but it is fantastic. It contains one of my all time favorite action set pieces where Solo just kinda watches Illya be chased around until he decides to do something about it. Truly a fun movie.',
        true,
      ),
      addAPromptObj(
        currentId + 4,
        "The Lord of the Rings: The Fellowship of the Ring - I think the first one is my favorite. It nails down the tone and stakes of the trilogy very well. This movie really had to do well for the whole trilogy to work. If it had failed and The Two Towers and The Return of The King had been what they are, I don't think the trilogy would have been as loved.",
        true,
      ),
      addAPromptObj(
        currentId + 5,
        "Star Wars The Last Jedi - It isn't my favorite out of all of the Star Wars, but I think it is super underrated. Some of the most beautiful shots in all of Star Wars. I understand why some people didn't like it, I just respectfully disagree.",
        true,
      ),
      addAPromptObj(
        currentId + 6,
        'The Princess Bride - This is my pick for "If I was stuck on a deserted island and only could bring one movie." I don\'t think I can get tired of watching it. Barely a day goes by where I don\'t quote some line from this masterpiece.',
        true,
      ),
      addAPromptObj(
        currentId + 7,
        "No Time To Die - I love all of the Daniel Craig Bond movies (and all the other Bond movies that I've seen so far). But this one has some super fun camera work that I love watching. And I think this was a good way to end the Craig Era of Bond. It fits with his character.",
        true,
      ),
      addAPromptObj(
        currentId + 8,
        'The Hunt for the Wilderpeople - Someone that I used to work with recommended this movie to me. I ended up buying it that day. But it took me a couple of weeks to actually watch it. I ended up watching it while working on a Saturday. I loved it. Came home, and decided to watch it again. This movie is my litmus test for if I will enjoy hanging out with someone.',
        true,
      ),
      addAPromptObj(
        currentId + 9,
        'Gladiator, Hot Fuzz, The Prince of Egypt, The Big Short, Pacific Rim, The Lego Movie, Sherlock Holmes, Secondhand Lions, Knives Out, Jojo Rabbit, 3 Idiots, I could talk about so many different movies and why they deserve to be on this list. Ultimately, this is just a list of movies that I think shows who I am.',
        true,
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
        "Super Smash Bros. Melee - I've put so many hours into this game. Including hosting and participating in tournaments all over the US.",
        true,
      ),
      addAPromptObj(
        currentId + 2,
        'Pokemon Emerald - Probably my favorite out of all the Pokemon games. I love the Hoenn Pokemon. #TreeckoIsTheBestStarter',
        true,
      ),
      addAPromptObj(
        currentId + 3,
        "Minecraft - I've never been one of those crazy people building all the machines, but I enjoy playing every once in a while.",
        true,
      ),
      addAPromptObj(
        currentId + 4,
        'Stardew Valley - A girl I dated got me into this game. I really enjoy simple relaxing games like this.',
        true,
      ),
      addAPromptObj(
        currentId + 5,
        'Age of Empires (All of them) - I can directly attribute my love of history to this franchise. RTS games are just really fun in general. (I even love the DS one)',
        true,
      ),
      addAPromptObj(
        currentId + 6,
        'Starcraft 2 - My first love when it comes to competitive games. I put a lot of hours into this one and got as high as Diamond league. Have never played the campaign though lol',
        true,
      ),
      addAPromptObj(
        currentId + 7,
        "Microsoft Flight Simulator - The newest one is a lot of fun. I've always loved airplanes, so this is the closest thing I can do to getting a pilot's license for now.",
        true,
      ),
      addAPromptObj(
        currentId + 8,
        "Final Fantasy IV - I don't think I'm allowed not to include this on my list of games since my name is Cecil. But aside from that, I really enjoy the game. Lots of fun characters.",
        true,
      ),
      addAPromptObj(
        currentId + 9,
        'Someday I will make a game that goes here.',
        true,
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
      addAPromptObj(
        currentId + 1,
        'Twitter: @KiTsuNe76',
        true,
        'https://twitter.com/KiTsuNe_76',
      ),
      addAPromptObj(
        currentId + 4,
        'LinkedIn: cecilthomas23',
        true,
        'https://www.linkedin.com/in/cecilthomas23/',
      ),
      addAPromptObj(
        currentId + 2,
        'Instagram: journeys.cafe',
        true,
        'https://www.instagram.com/journeys.cafe/',
      ),
      addAPromptObj(currentId + 3, 'Email: me@cecil-thomas.com', true),
      addAPromptObj(
        currentId + 4,
        'GitHub: kitsune21',
        true,
        'https://github.com/kitsune21',
      ),
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
        true,
      ),
      addAPromptObj(
        currentId + 2,
        'Endurance - Alfred Lansing: An amazing story about dealing with failure after failure, and somehow surviving it all.',
        true,
      ),
      addAPromptObj(
        currentId + 3,
        'The Lord of the Rings - JRR Tolkien: Man this book is dense. But it is so worth the read.',
        true,
      ),
      addAPromptObj(
        currentId + 4,
        'The Art of Learning - Josh Waitzkin: This is a very interesting read. Josh is a chess prodigy (the kid from "Searching for Bobby Fischer"), and a world champion martial artist.',
        true,
      ),
      addAPromptObj(
        currentId + 5,
        "Personal Memoirs of Ulysses S. Grant: This mostly deals with his military career. He talks about the Civil War and shares a lot of stories that you wouldn't learn in history class.",
        true,
      ),
    ]
  },
  regex: /a/,
  awaitCommand: () => null,
  hide: false,
}

export const techStackCommand: BaseCommand = {
  command: 'tech',
  description: "Lists the technology that I've used and enjoy using.",
  type: 'multi',
  process: (currentId: number) => {
    return [
      addAPromptObj(currentId, '______Tech That I Like______'),
      addAPromptObj(
        currentId + 1,
        'JavaScript - This is the language that I first started truly learning. I really enjoy learning the different frameworks that people come up with. React, Remix, Node, etc.',
        true,
      ),
      addAPromptObj(
        currentId + 2,
        "TypeScript - I procrastinated learning typescript for way too long. But since I've started, I really have seen the light on this one.",
        true,
      ),
      addAPromptObj(
        currentId + 3,
        "Supabase - Easy and cheap way to host db's, authentication, and file storage. There are some things that I still don't love, but the convenience is unmatched in my opinion.",
        true,
      ),
      addAPromptObj(
        currentId + 4,
        "Postgres - Who doesn't like open source things that are free? And having started as a developer at a company that used postgres, I just got used to this flavor of sql.",
        true,
      ),
      addAPromptObj(
        currentId + 5,
        "AWS - The scalability and stability is great. I wish it was a bit more friendly towards hobby-level projects, but for real projects, I don't think it can be beat.",
        true,
      ),
    ]
  },
  regex: /a/,
  awaitCommand: () => null,
  hide: false,
}

export const foodCommand: BaseCommand = {
  command: 'food',
  description: 'Lists all of my favorite foods.',
  type: 'multi',
  process: (currentId: number) => {
    return [
      addAPromptObj(currentId, '______Food That I Like______'),
      addAPromptObj(
        currentId + 1,
        "Tonkotsu Ramen - I am a huge ramen snob. I was super lucky and got to spend two years in Japan eating some of the best ramen around, so far I haven't found a place quite on the same level in the US.",
        true,
      ),
      addAPromptObj(
        currentId + 2,
        "Pizza - New York style, Chicago style, Pizza Hut, Little Caesar's, I like most pizzas. And it's one of the few things that I'm pretty good at making myself. I just enjoy a good 'za!",
        true,
      ),
      addAPromptObj(
        currentId + 3,
        "Cheesecake - I looooooove no-bake cheesecakes. My mom makes the best cheese cakes. It's what I get every year on my birthday. New York style ins't bad too.",
        true,
      ),
      addAPromptObj(
        currentId + 4,
        "Tacos - My family makes some killer tacos. We've grown our own corn, harvested it, ground it down, and made fresh tacos with it. Of all colors. Yellow, white, blue, red, orange, pink. Just about done it all.",
        true,
      ),
      addAPromptObj(
        currentId + 5,
        'Butter Chicken Curry - Funnily enough I first tried Indian food while living in Japan. One place in Japan I was going there so frequently they started to give me free naan and lassi.',
        true,
      ),
      addAPromptObj(
        currentId + 6,
        "Chicken Wings - I love buffalo sauce and a good chicken wing. I prefer flats, but they are all good. I don't discriminate against boneless wings. Sometimes I just don't feel like getting my fingers dirty!",
        true,
      ),
      addAPromptObj(
        currentId + 7,
        'Japanese Curry w/ Tonkatsu - Curry is such a great comfort food. Especially with the tonkatsu. Nice and warm, a little spicy, and very filling. I would love to open a curry restaurant.',
        true,
      ),
    ]
  },
  regex: /a/,
  awaitCommand: () => null,
  hide: false,
}

export const hobbyCommand: BaseCommand = {
  command: 'hobbies',
  description: 'List of my current hobbies.',
  type: 'multi',
  process: (currentId: number) => {
    return [
      addAPromptObj(currentId, '______Hobbies That I Enjoy______'),
      addAPromptObj(
        currentId + 1,
        "Watching Movies - I watch a lot of movies. It's one of the things that my wife and I do together a lot. Ever year we have a two day Start Wars movie marathon where we watch all the movies (1-9, Solo, Rogue 1) back to back to back.",
        true,
      ),
      addAPromptObj(
        currentId + 2,
        "Playing D&D - I'm pretty new to the whole D&D thing, but I enjoy the world creation aspect. I'm a player in one campaign, and a DM in another currently.",
        true,
      ),
      addAPromptObj(
        currentId + 3,
        'Programming - A big chunk of my time right now goes to programming. Either working on this website, working on my big project (Journeys.Cafe), or playing around with little things. I really enjoy building things.',
        true,
      ),
      addAPromptObj(
        currentId + 4,
        "Studying Spanish - I've always wanted to be able to speak multiple languages, and knowing so many people that already speak it, it seemed like the logical choice for a third language (I also speak Japanese).",
        true,
      ),
      addAPromptObj(
        currentId + 5,
        "Traveling - I love being able to get out and see new places. I've been incredibly lucky to travel so much already, but a big reason I built Journeys.Cafe is to be able to plan better trips, and help people do the same.",
        true,
      ),
      addAPromptObj(
        currentId + 6,
        "Reading - I read a lot of really boring books lol. I read a lot of history books, biographies, economics, and a lot of other non-fiction. As a kid I read a lot more fiction, but now I'm enjoying all the boring stuff!",
        true,
      ),
    ]
  },
  regex: /a/,
  awaitCommand: () => null,
  hide: false,
}
