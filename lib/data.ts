export type ItemType =
  | "book"
  | "movie"
  | "show"
  | "album"
  | "podcast"
  | "fashion"
  | "place"
  | "destination"
  | "quote"
  | "interview";




  export interface ExternalLink {
  title: string;
  url: string;
}

export interface Item {
  id: string;
  type: ItemType;
  title: string;
  subtitle: string;
  blurb: string;
  vibes: string[];
  gradient: string;
  emoji: string;
  trending?: boolean;
  city?: string;
  image?: string;
links?: ExternalLink[];
}

export const TYPE_LABELS: Record<ItemType, string> = {
  book: "Book",
  movie: "Movie",
  show: "TV Show",
  album: "Album",
  podcast: "Podcast",
  fashion: "Fashion",
  place: "Place",
  destination: "Destination",
  quote: "Quote",
  interview: "Interview",
};

export const GRAPH_CATEGORIES: { type: ItemType; label: string }[] = [
  { type: "book", label: "Similar books" },
  { type: "movie", label: "Same atmosphere" },
  { type: "show", label: "Same themes" },
  { type: "album", label: "Listen while reading" },
  { type: "podcast", label: "Discussed on" },
  { type: "fashion", label: "The aesthetic, worn" },
  { type: "place", label: "Bookstores & coffee shops" },
  { type: "destination", label: "If the story were a place" },
  { type: "quote", label: "Lines worth keeping" },
  { type: "interview", label: "Related interviews" },
];

export const VIBES = [
  {
    slug: "dark-academia",
    name: "Dark Academia",
    emoji: "🕯️",
    gradient: "linear-gradient(155deg, #3A2A5C 0%, #15112A 100%)",
    text: "text-paper",
    description:
      "Candlelight, marble corridors and the particular romance of staying up too late with a hard book.",
  },
  {
    slug: "coastal-summer",
    name: "Coastal Summer",
    emoji: "🌊",
    gradient: "linear-gradient(155deg, #8FD3E8 0%, #4F6BFF 100%)",
    text: "text-paper",
    description:
      "Salt air, linen, and everything that feels like the last good week of August.",
  },
  {
    slug: "parisian",
    name: "Parisian",
    emoji: "🥐",
    gradient: "linear-gradient(155deg, #FFE1EE 0%, #FF4FA0 100%)",
    text: "text-ink",
    description: "Effortless, a little rude, extremely well-dressed.",
  },
  {
    slug: "old-money",
    name: "Old Money",
    emoji: "🎾",
    gradient: "linear-gradient(155deg, #ECE7FD 0%, #D8CFFB 100%)",
    text: "text-ink",
    description: "Quiet wealth, loud taste. No logos, just linen and lineage.",
  },
 

  {
    slug: "late-night",
    name: "Late Night",
    emoji: "🌙",
    gradient: "linear-gradient(155deg, #15112A 0%, #4F6BFF 100%)",
    text: "text-paper",
    description: "For the people who do their best thinking after midnight.",
  },
  {
    slug: "golden-hour",
    name: "Golden Hour",
    emoji: "🌅",
    gradient: "linear-gradient(155deg, #FFD98E 0%, #FF4FA0 100%)",
    text: "text-ink",
    description: "Everything looks like a memory for twenty minutes a day.",
  },
];

export const ITEMS: Item[] = [
  


  {
  id: "the-beautiful-fall",
  type: "book",
  title: "The Beautiful Fall",
  subtitle: "Alicia Drake",
  blurb: "The rivalry between Yves Saint Laurent and Karl Lagerfeld that changed fashion forever.",
  vibes: ["parisian", "old-money"],
  gradient: "linear-gradient(155deg,#FFE1EE 0%,#FF4FA0 100%)",
  emoji: "📖",
  image: "/covers/sai.jpg",
links: [
  {
    title: "Goodreads",
    url: "https://www.goodreads.com/en/book/show/49098.The_Beautiful_Fall",
  },
  {
    title: "Amazon",
    url: "https://www.amazon.com/Beautiful-Fall-Lagerfeld-Laurent-Glorious/dp/0316768014",
  },

]
  },
  
{
  id: "love-style-life",
  type: "book",
  title: "Love Style Life",
  subtitle: "Garance Doré",
  blurb: "Fashion, beauty and effortless French style.",
  vibes: ["parisian"],
  gradient: "linear-gradient(155deg,#FFE1EE 0%,#FF4FA0 100%)",
  emoji: "📖",
  image: "/covers/lo.jpg",
  links: [
    { title: "Goodreads", url: "https://www.goodreads.com/en/book/show/25241664-love-style-life" },
    { title: "Amazon", url: "https://www.amazon.com/Love-Style-Life-Garance-Dore-ebook/dp/B00TCI48E0" },
  ],
},

{
  id: "grace",
  type: "book",
  title: "Grace",
  subtitle: "Grace Coddington",
  blurb: "The memoir of Vogue's legendary creative director.",
  vibes: ["old-money"],
  gradient: "linear-gradient(155deg,#ECE7FD 0%,#D8CFFB 100%)",
  emoji: "📖",
  image: "/covers/grace.jpg",
  links: [
    { title: "Goodreads", url: "https://www.goodreads.com/en/book/show/13536591-grace" },
    { title: "Amazon", url: "https://www.amazon.com/Grace-Memoir-Coddington/dp/0812993357" },
  ],
},

{
  id: "the-woman-i-wanted-to-be",
  type: "book",
  title: "The Woman I Wanted to Be",
  subtitle: "Diane von Furstenberg",
  blurb: "An inspiring memoir from one of fashion's greatest designers.",
  vibes: ["old-money"],
  gradient: "linear-gradient(155deg,#ECE7FD 0%,#D8CFFB 100%)",
  emoji: "📖",
  image: "/covers/wo.jpg",
  links: [
    { title: "Goodreads",url:   "https://www.goodreads.com/book/show/18144107-the-woman-i-wanted-to-be" },
    { title: "Amazon", url: "https://www.amazon.com/Woman-I-Wanted-Be-ebook/dp/B00DPM7ZZ8" },
  ],
},



{
  id: "The-Summer-I-Turned-pretty",
  type: "book",
  title: "The Summer I Turned Pretty",
  subtitle: " Jenny Han",
  blurb: "A romantic summer on the Italian Riviera.",
  vibes: ["coastal-summer", "golden-hour"],
  gradient: "linear-gradient(155deg,#8FD3E8 0%,#FFD98E 100%)",
  emoji: "📖",
  image: "/covers/M.jpg",
  links: [
    { title: "Goodreads", url: "https://www.goodreads.com/en/book/show/5821978-the-summer-i-turned-pretty" },
    { title: "Amazon", url: "https://www.amazon.eg/Jenny-Han/dp/1416968296" },
  
  ],
},

{
  id: "the-summer-book",
  type: "book",
  title: "The Summer Book",
  subtitle: "Tove Jansson",
  blurb: "A quiet island summer between a grandmother and granddaughter.",
  vibes: ["coastal-summer"],
  gradient: "linear-gradient(155deg,#8FD3E8 0%,#FFD98E 100%)",
  emoji: "📖",
  image: "/covers/sum.jpg",
  links: [
    { title: "Goodreads", url: "https://www.goodreads.com/book/show/79550.The_Summer_Book" },
    { title: "Amazon", url: "https://www.amazon.com/dp/159017268X" },
  ],
},

{
  id: "happy-place",
  type: "book",
  title: "Happy Place",
  subtitle: "Emily Henry",
  blurb: "Friends, romance and one unforgettable summer vacation.",
  vibes: ["coastal-summer", "golden-hour"],
  gradient: "linear-gradient(155deg,#8FD3E8 0%,#FFD98E 100%)",
  emoji: "📖",
  image: "/covers/happyplace.jpg",
  links: [
    { title: "Goodreads", url: "https://www.goodreads.com/book/show/61718053-happy-place" },
    { title: "Amazon", url: "https://www.amazon.com/dp/0593441273" },
  ],
},



{
  id: "before-the-coffee-gets-cold",
  type: "book",
  title: "Before the Coffee Gets Cold",
  subtitle: "Toshikazu Kawaguchi",
  blurb: "A cozy café where customers can travel through time.",
  vibes: ["late-night"],
  gradient: "linear-gradient(155deg,#15112A 0%,#4F6BFF 100%)",
  emoji: "📖",
  image: "/covers/GETS.jpg",
  links: [
    { title: "Goodreads", url: "https://www.goodreads.com/book/show/44421460-before-the-coffee-gets-cold" },
    { title: "Amazon", url: "https://www.amazon.com/dp/1335430997" },
  ],
},

{
  id: "the-midnight-library",
  type: "book",
  title: "The Midnight Library",
  subtitle: "Matt Haig",
  blurb: "A magical library between life and death.",
  vibes: ["late-night"],
  gradient: "linear-gradient(155deg,#15112A 0%,#4F6BFF 100%)",
  emoji: "📖",
  image: "/covers/LI.jpg",
  links: [
    { title: "Goodreads", url: "https://www.goodreads.com/book/show/52578297-the-midnight-library" },
    { title: "Amazon", url: "https://www.amazon.com/dp/0525559477" },
  ],
},



{
  id: "a-little-life",
  type: "book",
  title: "A Little Life",
  subtitle: "Hanya Yanagihara",
  blurb: "A deeply emotional modern literary masterpiece.",
  vibes: ["old-money"],
  gradient: "linear-gradient(155deg,#ECE7FD 0%,#D8CFFB 100%)",
  emoji: "📖",
  image: "/covers/ALL.jpg",
  links: [
    { title: "Goodreads", url: "https://www.goodreads.com/book/show/22822858-a-little-life" },
    { title: "Amazon", url: "https://www.amazon.com/dp/0804172706" },
  ],
},

{
  id: "the-goldfinch",
  type: "book",
  title: "The Goldfinch",
  subtitle: "Donna Tartt",
  blurb: "Art, grief and a stolen masterpiece.",
  vibes: ["old-money"],
  gradient: "linear-gradient(155deg,#ECE7FD 0%,#D8CFFB 100%)",
  emoji: "📖",
  image: "/covers/GOLD.jpg",
  links: [
    { title: "Goodreads", url: "https://www.goodreads.com/book/show/17333223-the-goldfinch" },
    { title: "Amazon", url: "https://www.amazon.com/dp/0316055441" },
  ],
},

{
  id: "normal-people",
  type: "book",
  title: "Normal People",
  subtitle: "Sally Rooney",
  blurb: "A beautifully written story about love and growing up.",
  vibes: ["old-money"],
  gradient: "linear-gradient(155deg,#ECE7FD 0%,#D8CFFB 100%)",
  emoji: "📖",
  image: "/covers/no.jpg",
  links: [
    { title: "Goodreads", url: "https://www.goodreads.com/book/show/41057294-normal-people" },
    { title: "Amazon", url: "https://www.amazon.com/dp/1984822179" },
  ],
},

{
  id: "pachinko",
  type: "book",
  title: "Pachinko",
  subtitle: "Min Jin Lee",
  blurb: "A sweeping family saga across generations.",
  vibes: ["old-money"],
  gradient: "linear-gradient(155deg,#ECE7FD 0%,#D8CFFB 100%)",
  emoji: "📖",
  image: "/covers/pa.jpg",
  links: [
    { title: "Goodreads", url: "https://www.goodreads.com/book/show/34051011-pachinko" },
    { title: "Amazon", url: "https://www.amazon.com/dp/1455563935" },
  ],
},



{
  id: "dune",
  type: "book",
  title: "Dune",
  subtitle: "Frank Herbert",
  blurb: "The science-fiction masterpiece behind Denis Villeneuve's films.",
  vibes: ["dark-academia"],
  gradient: "linear-gradient(155deg,#3A2A5C 0%,#15112A 100%)",
  emoji: "📖",
  image: "/covers/du.jpg",
  links: [
    { title: "Goodreads", url: "https://www.goodreads.com/book/show/44767458-dune" },
    { title: "Amazon", url: "https://www.amazon.com/dp/0441172717" },
    { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dune_(novel)" },
  ],
},

{
  id: "little-women",
  type: "book",
  title: "Little Women",
  subtitle: "Louisa May Alcott",
  blurb: "The beloved classic adapted into many acclaimed films.",
  vibes: ["golden-hour"],
  gradient: "linear-gradient(155deg,#FFD98E 0%,#FF4FA0 100%)",
  emoji: "📖",
  image: "/covers/wom.jpg",
  links: [
    { title: "Goodreads", url: "https://www.goodreads.com/book/show/1934.Little_Women" },
    { title: "Amazon", url: "https://www.amazon.com/dp/0147514017" },
  ],
},

{
  id: "gone-girl",
  type: "book",
  title: "Gone Girl",
  subtitle: "Gillian Flynn",
  blurb: "A psychological thriller adapted into David Fincher's film.",
  vibes: ["late-night"],
  gradient: "linear-gradient(155deg,#15112A 0%,#4F6BFF 100%)",
  emoji: "📖",
  image: "/covers/gg.jpg",
  links: [
    { title: "Goodreads", url: "https://www.goodreads.com/book/show/19288043-gone-girl" },
    { title: "Amazon", url: "https://www.amazon.com/dp/0307588378" },
  ],
},



















































// BOOKS

{
  id: "the-secret-history",
  type: "book",
  title: "The Secret History",
  subtitle: "Donna Tartt",
  blurb:
    "Six classics students at an elite college become consumed by beauty, intellect, and a deadly secret.",
  vibes: ["dark-academia"],
  gradient: "linear-gradient(155deg,#3A2A5C 0%,#15112A 100%)",
  emoji: "📖",
  image: "/covers/j.jpg",
  links: [
    {
      title: "Goodreads",
      url: "https://www.goodreads.com/book/show/29044.The_Secret_History",
    },
    {
      title: "Amazon",
      url: "https://www.amazon.com/dp/1400031702",
    },
    {
      title: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/The_Secret_History",
    },
  ],
  trending: true,
},

{
  id: "if-we-were-villains",
  type: "book",
  title: "If We Were Villains",
  subtitle: "M. L. Rio",
  blurb:
    "A Shakespeare-obsessed group of actors becomes trapped in a real-life tragedy.",
  vibes: ["dark-academia"],
  gradient: "linear-gradient(155deg,#322A5C 0%,#1A1533 100%)",
  emoji: "📖",
  image: "/covers/if-we-were-villains.webp",
  links: [
    {
      title: "Goodreads",
      url: "https://www.goodreads.com/book/show/30319086-if-we-were-villains",
    },
    {
      title: "Amazon",
      url: "https://www.amazon.com/dp/1250095287",
    },
    {
      title: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/If_We_Were_Villains",
    },
  ],
},

{
  id: "malibu-rising",
  type: "book",
  title: "Malibu Rising",
  subtitle: "Taylor Jenkins Reid",
  blurb:
    "A glamorous family's annual summer party changes their lives forever.",
  vibes: ["coastal-summer", "golden-hour"],
  gradient: "linear-gradient(155deg,#8FD3E8 0%,#FFD98E 100%)",
  emoji: "📖",
  image: "/covers/mal.jpg",
  links: [
    {
      title: "Goodreads",
      url: "https://www.goodreads.com/book/show/55404546-malibu-rising",
    },
    {
      title: "Amazon",
      url: "https://www.amazon.com/dp/1524798655",
    },
    {
      title: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Malibu_Rising",
    },
  ],
},

{
  id: "the-little-paris-bookshop",
  type: "book",
  title: "The Little Paris Bookshop",
  subtitle: "Nina George",
  blurb:
    "A floating Parisian bookstore helps strangers heal through books.",
  vibes: ["parisian"],
  gradient: "linear-gradient(155deg,#FFE1EE 0%,#FF4FA0 100%)",
  emoji: "📖",
  image: "/covers/lp.jpg",
  links: [
    {
      title: "Goodreads",
      url: "https://www.goodreads.com/book/show/23278537-the-little-paris-bookshop",
    },
    {
      title: "Amazon",
      url: "https://www.amazon.com/dp/0553418793",
    },
    {
      title: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/The_Little_Paris_Bookshop",
    },
  ],
},

{
  id: "the-great-gatsby",
  type: "book",
  title: "The Great Gatsby",
  subtitle: "F. Scott Fitzgerald",
  blurb:
    "Luxury, longing and the illusion of the American Dream.",
  vibes: ["old-money"],
  gradient: "linear-gradient(155deg,#ECE7FD 0%,#D8CFFB 100%)",
  emoji: "📖",
  image: "/covers/tg.jpg",
  links: [
    {
      title: "Goodreads",
      url: "https://www.goodreads.com/book/show/4671.The_Great_Gatsby",
    },
    {
      title: "Amazon",
      url: "https://www.amazon.com/dp/0743273567",
    },
    {
      title: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/The_Great_Gatsby",
    },
  ],
},

{
  id: "norwegian-wood",
  type: "book",
  title: "Norwegian Wood",
  subtitle: "Haruki Murakami",
  blurb:
    "A nostalgic story of youth, love and quiet loneliness.",
  vibes: ["japanese-calm"],
  gradient: "linear-gradient(155deg,#F1EAD9 0%,#ECE7FD 100%)",
  emoji: "📖",
  image: "/covers/h.jpg",
  links: [
    {
      title: "Goodreads",
      url: "https://www.goodreads.com/book/show/11297.Norwegian_Wood",
    },
    {
      title: "Amazon",
      url: "https://www.amazon.com/dp/0375704027",
    },
    {
      title: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Norwegian_Wood_(novel)",
    },
  ],
},

{
  id: "after-dark",
  type: "book",
  title: "After Dark",
  subtitle: "Haruki Murakami",
  blurb:
    "One mysterious Tokyo night connects strangers in unexpected ways.",
  vibes: ["late-night"],
  gradient: "linear-gradient(155deg,#15112A 0%,#4F6BFF 100%)",
  emoji: "📖",
  image: "/covers/a.jpg",
  links: [
    {
      title: "Goodreads",
      url: "https://www.goodreads.com/book/show/17803.After_Dark",
    },
    {
      title: "Amazon",
      url: "https://www.amazon.com/dp/0307278738",
    },
    {
      title: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/After_Dark_(novel)",
    },
  ],
},




// MOVIES

{
  id: "dead-poets-society",
  type: "movie",
  title: "Dead Poets Society",
  subtitle: "1989",
  blurb: "An inspiring teacher encourages students to seize the day.",
  vibes: ["dark-academia"],
  gradient: "linear-gradient(155deg,#3A2A5C 0%,#15112A 100%)",
  emoji: "🎬",
  image: "/covers/ss.jpg",
  links: [
    { title: "IMDb", url: "https://www.imdb.com/title/tt0097165/" },
    { title: "Letterboxd", url: "https://letterboxd.com/film/dead-poets-society/" },
    { title: "JustWatch", url: "https://www.justwatch.com/us/movie/dead-poets-society" }
  ],
},

{
  id: "mamma-mia",
  type: "movie",
  title: "Mamma Mia!",
  subtitle: "2008",
  blurb: "A joyful musical on a beautiful Greek island filled with ABBA songs.",
  vibes: ["coastal-summer", "golden-hour"],
  gradient: "linear-gradient(155deg,#8FD3E8 0%,#FFD98E 100%)",
  emoji: "🎬",
  image: "/covers/mia.webp",
  links: [
    { title: "IMDb", url: "https://www.imdb.com/title/tt0795421/" },
    { title: "Letterboxd", url: "https://letterboxd.com/film/mamma-mia/" },
    { title: "JustWatch", url: "https://www.justwatch.com/us/movie/mamma-mia" }
  ],
},

{
  id: "amelie",
  type: "movie",
  title: "Amélie",
  subtitle: "2001",
  blurb: "A shy Parisian woman secretly improves the lives of everyone around her.",
  vibes: ["parisian"],
  gradient: "linear-gradient(155deg,#FFE1EE 0%,#FF4FA0 100%)",
  emoji: "🎬",
  image: "/covers/am.webp",
  links: [
    { title: "IMDb", url: "https://www.imdb.com/title/tt0211915/" },
    { title: "Letterboxd", url: "https://letterboxd.com/film/amelie/" },
    { title: "JustWatch", url: "https://www.justwatch.com/us/movie/amelie" }
  ],
},

{
  id: "the-talented-mr-ripley",
  type: "movie",
  title: "The Talented Mr. Ripley",
  subtitle: "1999",
  blurb: "Luxury, deception and obsession on the Italian coast.",
  vibes: ["old-money"],
  gradient: "linear-gradient(155deg,#ECE7FD 0%,#D8CFFB 100%)",
  emoji: "🎬",
  image: "/covers/tal.webp",
  links: [
    { title: "IMDb", url: "https://www.imdb.com/title/tt0134119/" },
    { title: "Letterboxd", url: "https://letterboxd.com/film/the-talented-mr-ripley/" },
    { title: "JustWatch", url: "https://www.justwatch.com/us/movie/the-talented-mr-ripley" }
  ],
},

{
  id: "lost-in-translation",
  type: "movie",
  title: "Lost in Translation",
  subtitle: "2003",
  blurb: "Two strangers form an unforgettable bond in Tokyo.",
  vibes: ["japanese-calm"],
  gradient: "linear-gradient(155deg,#F1EAD9 0%,#ECE7FD 100%)",
  emoji: "🎬",
  image: "/covers/trans.jpg",
  links: [
    { title: "IMDb", url: "https://www.imdb.com/title/tt0335266/" },
    { title: "Letterboxd", url: "https://letterboxd.com/film/lost-in-translation/" },
    { title: "JustWatch", url: "https://www.justwatch.com/us/movie/lost-in-translation" }
  ],
},

{
  id: "drive",
  type: "movie",
  title: "Drive",
  subtitle: "2011",
  blurb: "A quiet getaway driver cruises neon-lit Los Angeles nights.",
  vibes: ["late-night"],
  gradient: "linear-gradient(155deg,#15112A 0%,#4F6BFF 100%)",
  emoji: "🎬",
  image: "/covers/Drive.webp",
  links: [
    { title: "IMDb", url: "https://www.imdb.com/title/tt0780504/" },
    { title: "Letterboxd", url: "https://letterboxd.com/film/drive-2011/" },
    { title: "JustWatch", url: "https://www.justwatch.com/us/movie/drive" }
  ],
},


// SHOWS

{
  id: "wednesday",
  type: "show",
  title: "Wednesday",
  subtitle: "Netflix",
  blurb: "Wednesday Addams investigates murders at Nevermore Academy.",
  vibes: ["dark-academia"],
  gradient: "linear-gradient(155deg,#322A5C 0%,#1A1533 100%)",
  emoji: "📺",
  image: "/covers/w.webp",
  links: [
    { title: "Netflix", url: "https://www.netflix.com/title/81231974" },
    { title: "IMDb", url: "https://www.imdb.com/title/tt13443470/" },
    { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Wednesday_(TV_series)" }
  ],
},

{
  id: "outer-banks",
  type: "show",
  title: "Outer Banks",
  subtitle: "Netflix",
  blurb: "Treasure hunts, beaches and endless summer adventures.",
  vibes: ["coastal-summer", "golden-hour"],
  gradient: "linear-gradient(155deg,#8FD3E8 0%,#FFD98E 100%)",
  emoji: "📺",
  image: "/covers/o.webp",
  links: [
    { title: "Netflix", url: "https://www.netflix.com/title/80236318" },
    { title: "IMDb", url: "https://www.imdb.com/title/tt10293938/" },
    { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Outer_Banks_(TV_series)" }
  ],
},

{
  id: "emily-in-paris",
  type: "show",
  title: "Emily in Paris",
  subtitle: "Netflix",
  blurb: "Fashion, cafés and romance in the heart of Paris.",
  vibes: ["parisian"],
  gradient: "linear-gradient(155deg,#FFE1EE 0%,#FF4FA0 100%)",
  emoji: "📺",
  image: "/covers/e.webp",
  links: [
    { title: "Netflix", url: "https://www.netflix.com/title/81037371" },
    { title: "IMDb", url: "https://www.imdb.com/title/tt8962124/" },
    { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Emily_in_Paris" }
  ],
},

{
  id: "succession",
  type: "show",
  title: "Succession",
  subtitle: "HBO",
  blurb: "The Roy family battles for power, money and control.",
  vibes: ["old-money"],
  gradient: "linear-gradient(155deg,#ECE7FD 0%,#D8CFFB 100%)",
  emoji: "📺",
  image: "/covers/su.webp",
  links: [
    { title: "IMDb", url: "https://www.imdb.com/title/tt7660850/" },
    { title: "Max", url: "https://www.max.com/" },
    { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Succession_(TV_series)" }
  ],
},

{
  id: "midnight-diner",
  type: "show",
  title: "Midnight Diner",
  subtitle: "Netflix",
  blurb: "Quiet conversations and comforting meals after midnight in Tokyo.",
  vibes: ["japanese-calm"],
  gradient: "linear-gradient(155deg,#F1EAD9 0%,#ECE7FD 100%)",
  emoji: "📺",
  image: "/covers/mi.jpg",
  links: [
    { title: "Netflix", url: "https://www.netflix.com/title/80113037" },
    { title: "IMDb", url: "https://www.imdb.com/title/tt1882928/" },
    { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Midnight_Diner" }
  ],
},

{
  id: "the-bear",
  type: "show",
  title: "The Bear",
  subtitle: "FX",
  blurb: "A talented chef struggles with pressure, family and ambition.",
  vibes: ["late-night"],
  gradient: "linear-gradient(155deg,#15112A 0%,#4F6BFF 100%)",
  emoji: "📺",
  image: "/covers/tb.jpg",
  links: [
    { title: "IMDb", url: "https://www.imdb.com/title/tt14452776/" },
    { title: "Disney+", url: "https://www.disneyplus.com/" },
    { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/The_Bear_(TV_series)" }
  ],
},





  // ALBUMS


{

  id: "in-rainbows",

  type: "album",

  title: "In Rainbows",

  subtitle: "Radiohead",

  blurb: "A haunting alternative rock masterpiece full of emotion and atmosphere.",

  vibes: ["dark-academia"],

  gradient: "linear-gradient(155deg,#3A2A5C 0%,#15112A 100%)",

  emoji: "💿",

  image: "/covers/ri.webp",

  links: [

    { title: "Spotify", url: "https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK" },

    { title: "Apple Music", url: "https://music.apple.com/us/album/in-rainbows/1097863572" },

    { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/In_Rainbows" }

  ],

},   




{
  id: "radical-optimism",
  type: "album",
  title: "Radical Optimism",
  subtitle: "Dua Lipa",
  blurb: "A vibrant pop album blending dance beats, disco influences, and uplifting themes of resilience, confidence, and moving forward.",
  vibes: ["coastal-summer", "golden-hour"],
  gradient: "linear-gradient(155deg,#4CB8C4 0%,#3CD3AD 100%)",
  emoji: "💿",
  image: "/covers/op.webp",
  links: [
    {
      title: "Spotify",
      url: "https://open.spotify.com/album/1Mo92916G2mmG7ajpmSVrc"
    },
    {
      title: "Apple Music",
      url: "https://music.apple.com/us/album/radical-optimism/1734563163"
    },
    {
      title: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Radical_Optimism"
    }
  ],
},




{
  id: "norman-fucking-rockwell",
  type: "album",
  title: "Norman Fucking Rockwell!",
  subtitle: "Lana Del Rey",
  blurb: "Luxury, melancholy and California's faded glamour.",
  vibes: ["old-money"],
  gradient: "linear-gradient(155deg,#ECE7FD 0%,#D8CFFB 100%)",
  emoji: "💿",
  image: "/covers/n.webp",
  links: [
    { title: "Spotify", url: "https://open.spotify.com/album/5XpEKORZ4y6OrCZSKsi46A" },
    { title: "Apple Music", url: "https://music.apple.com/us/album/norman-fucking-rockwell/1474669063" },
    { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Norman_Fucking_Rockwell!" }
  ],
},

{
  id: "for-you",
  type: "album",
  title: "For You",
  subtitle: "Tatsuro Yamashita",
  blurb: "A legendary Japanese city pop album filled with warm melodies, nostalgic summer vibes, and impeccable production.",
  vibes: ["japanese-calm"],
  gradient: "linear-gradient(155deg,#8ED1D8 0%,#F6E5B8 100%)",
  emoji: "💿",
  image: "/covers/for.png",
  links: [
    { title: "Spotify", url: "https://open.spotify.com/artist/2ZvrvbQNrHKwjT7qfGFFUW" },
    { title: "Apple Music", url: "https://music.apple.com/us/artist/tatsuro-yamashita/74481273" },
    { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/For_You_(Tatsuro_Yamashita_album)" }
  ],
},


{
  id: "melodrama",
  type: "album",
  title: "Melodrama",
  subtitle: "Lorde",
  blurb: "Late-night emotions, neon lights, and growing pains.",
  vibes: ["late-night"],
  gradient: "linear-gradient(155deg,#15112A 0%,#4F6BFF 100%)",
  emoji: "💿",
  image: "/covers/mm.webp",
  links: [
    { title: "Spotify", url: "https://open.spotify.com/album/2B87zXm9bOWvAJdkJBTpzF" },
    { title: "Apple Music", url: "https://music.apple.com/us/album/melodrama/1440818584" },
    { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Melodrama_(Lorde_album)" }
  ],
},

{
  id: "moon-safari",
  type: "album",
  title: "Moon Safari",
  subtitle: "Air",
  blurb: "Dreamy French electronic music with effortless Parisian charm.",
  vibes: ["parisian"],
  gradient: "linear-gradient(155deg,#FFE1EE 0%,#FF4FA0 100%)",
  emoji: "💿",
  image: "/covers/air.webp",
  links: [
    { title: "Spotify", url: "https://open.spotify.com/album/5dmYtZVJ1bG9RyrZBRrkOA" },
    { title: "Apple Music", url: "https://music.apple.com/us/album/moon-safari/697241" },
    { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Moon_Safari" }
  ],
},

{
  id: "kind-of-blue",
  type: "album",
  title: "Kind of Blue",
  subtitle: "Miles Davis",
  blurb: "Elegant jazz that feels timeless and luxurious.",
  vibes: ["old-money"],
  gradient: "linear-gradient(155deg,#ECE7FD 0%,#D8CFFB 100%)",
  emoji: "💿",
  image: "/covers/bbb.webp",
  links: [
    { title: "Spotify", url: "https://open.spotify.com/album/1weenld61qoidwYuZ1GESA" },
    { title: "Apple Music", url: "https://music.apple.com/us/album/kind-of-blue/268504731" },
    { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kind_of_Blue" }
  ],
},







  
 
  
// PLACES

{
  id: "place-daunt-books",
  type: "place",
  title: "Daunt Books",
  subtitle: "Bookstore · London",
  blurb:
    "One of London's most beautiful Edwardian bookstores, filled with oak galleries and the perfect dark academia atmosphere.",
  vibes: ["dark-academia"],
  gradient: "linear-gradient(155deg, #3A2A5C 0%, #15112A 100%)",
  emoji: "📚",
  city: "london",

  image: "/covers/book.jpg",

  links: [
    {
      title: "Official Website",
      url: "https://dauntbooks.co.uk/"
    },
    {
      title: "Google Maps",
      url: "https://maps.google.com/?q=Daunt+Books+Marylebone"
    }
  ]
},

{
  id: "place-the-attendant",
  type: "place",
  title: "The Attendant",
  subtitle: "Coffee Shop · London",
  blurb:
    "A hidden café inside a restored Victorian restroom, perfect for studying with a coffee.",
  vibes: ["dark-academia"],
  gradient: "linear-gradient(155deg, #3A2A5C 0%, #15112A 100%)",
  emoji: "☕",
  city: "london",

  image: "/covers/co.webp",

  links: [
    {
      title: "Official Website",
      url: "https://the-attendant.com/"
    },
    {
      title: "Google Maps",
      url: "https://maps.google.com/?q=The+Attendant+London"
    }
  ]
},

{
  id: "place-shakespeare-company",
  type: "place",
  title: "Shakespeare and Company",
  subtitle: "Bookstore · Paris",
  blurb:
    "The world's most iconic independent bookstore overlooking Notre-Dame.",
  vibes: ["parisian"],
  gradient: "linear-gradient(155deg, #FFE1EE 0%, #FF4FA0 100%)",
  emoji: "📚",
  city: "paris",

  image: "/covers/lin.jpg",

  links: [
    {
      title: "Official Website",
      url: "https://shakespeareandcompany.com/"
    },
    {
      title: "Google Maps",
      url: "https://maps.google.com/?q=Shakespeare+and+Company+Paris"
    }
  ]
},

{
  id: "place-cafe-de-flore",
  type: "place",
  title: "Café de Flore",
  subtitle: "Coffee Shop · Paris",
  blurb:
    "The legendary café where artists and writers spent their afternoons.",
  vibes: ["parisian"],
  gradient: "linear-gradient(155deg, #FFE1EE 0%, #FF4FA0 100%)",
  emoji: "☕",
  city: "paris",

  image: "/covers/shh.jpg",

  links: [
    {
      title: "Official Website",
      url: "https://cafedeflore.fr/"
    },
    {
      title: "Google Maps",
      url: "https://maps.google.com/?q=Café+de+Flore+Paris"
    }
  ]
},




{
  id: "place-the-last-bookstore",
  type: "place",
  title: "The Last Bookstore",
  subtitle: "Bookstore · Los Angeles",
  blurb:
    "A famous bookstore full of tunnels made from books and dreamy corners.",
  vibes: ["coastal-summer", "golden-hour"],
  gradient: "linear-gradient(155deg, #8FD3E8 0%, #FFD98E 100%)",
  emoji: "📚",
  city: "los-angeles",

  image: "/covers/km.webp",

  links: [
    {
      title: "Official Website",
      url: "https://www.lastbookstorela.com/"
    },
    {
      title: "Google Maps",
      url: "https://maps.google.com/?q=The+Last+Bookstore+Los+Angeles"
    }
  ]
},

{
  id: "place-intelligentsia",
  type: "place",
  title: "Intelligentsia Coffee",
  subtitle: "Coffee Shop · Venice Beach",
  blurb:
    "A bright California coffee shop with a relaxed coastal atmosphere.",
  vibes: ["coastal-summer", "golden-hour"],
  gradient: "linear-gradient(155deg, #8FD3E8 0%, #FFD98E 100%)",
  emoji: "☕",
  city: "los-angeles",

  image: "/covers/rach.webp",

  links: [
    {
      title: "Official Website",
      url: "https://www.intelligentsia.com/"
    },
    {
      title: "Google Maps",
      url: "https://maps.google.com/?q=Intelligentsia+Venice+Beach"
    }
  ]
},

{
  id: "place-rizzoli",
  type: "place",
  title: "Rizzoli Bookstore",
  subtitle: "Bookstore · New York",
  blurb:
    "Elegant interiors and shelves filled with art, fashion, and architecture books.",
  vibes: ["old-money"],
  gradient: "linear-gradient(155deg, #ECE7FD 0%, #D8CFFB 100%)",
  emoji: "📚",
  city: "new-york",

  image: "/covers/ree.webp",

  links: [
    {
      title: "Official Website",
      url: "https://www.rizzolibookstore.com/"
    },
    {
      title: "Google Maps",
      url: "https://maps.google.com/?q=Rizzoli+Bookstore+New+York"
    }
  ]
},

{
  id: "place-sant-ambroeus",
  type: "place",
  title: "Sant Ambroeus",
  subtitle: "Coffee Shop · New York",
  blurb:
    "Luxury Italian café known for timeless interiors and Upper East Side elegance.",
  vibes: ["old-money"],
  gradient: "linear-gradient(155deg, #ECE7FD 0%, #D8CFFB 100%)",
  emoji: "☕",
  city: "new-york",

  image: "/covers/90.webp",

  links: [
    {
      title: "Official Website",
      url: "https://www.santambroeus.com/"
    },
    {
      title: "Google Maps",
      url: "https://maps.google.com/?q=Sant+Ambroeus+New+York"
    }
  ]
},




]
const VERB_BY_TYPE: Record<ItemType, { verb: string; emoji: string }> = {
  book: { verb: "Read", emoji: "📖" },
  movie: { verb: "Watch", emoji: "🎬" },
  show: { verb: "Watch", emoji: "🎬" },
  album: { verb: "Listen", emoji: "🎧" },
  podcast: { verb: "Listen", emoji: "🎧" },
  fashion: { verb: "Wear", emoji: "👗" },
  place: { verb: "Visit", emoji: "📍" },
  destination: { verb: "Visit", emoji: "📍" },
  quote: { verb: "Explore", emoji: "💬" },
  interview: { verb: "Explore", emoji: "🎤" },
};

const VERB_ORDER = ["Read", "Watch", "Listen", "Wear", "Visit", "Explore"];

export function groupGraphByVerb(
  graph: { type: ItemType; label: string; item: Item }[]
) {
  const buckets = new Map<
    string,
    { verb: string; emoji: string; entries: { label: string; item: Item }[] }
  >();

  graph.forEach(({ type, label, item }) => {
    const { verb, emoji } = VERB_BY_TYPE[type];
    if (!buckets.has(verb)) buckets.set(verb, { verb, emoji, entries: [] });
    buckets.get(verb)!.entries.push({ label, item });
  });

  return VERB_ORDER.map((v) => buckets.get(v)).filter(Boolean) as {
    verb: string;
    emoji: string;
    entries: { label: string; item: Item }[];
  }[];
}
export function getItem(id: string) {
  return ITEMS.find((i) => i.id === id);
}

export function getVibe(slug: string) {
  return VIBES.find((v) => v.slug === slug);
}

export function itemsByVibe(slug: string) {
  return ITEMS.filter((i) => i.vibes.includes(slug));
}

export function trendingItems(limit = 8) {
  return ITEMS.filter((i) => i.trending).slice(0, limit);
}

/**
 * The Culture Graph: given a source item, find one connected recommendation
 * per category, matched by shared vibe tags. This is what powers "everything
 * on the site is connected" — every page can branch into ten more.
 */
export function cultureGraph(source: Item) {
  return GRAPH_CATEGORIES.map(({ type, label }) => {
    const candidates = ITEMS.filter(
      (i) =>
        i.id !== source.id &&
        i.type === type &&
        i.vibes.some((v) => source.vibes.includes(v))
    );
    return { type, label, item: candidates[0] };
  }).filter((c) => c.item);
}



























export const COLLECTIONS = [
  {
    slug: "books-that-changed-fashion",
    title: "4 Books That Changed Fashion",
    description:
      "The novels stylists keep on set, whether or not they admit it.",
    gradient: "linear-gradient(155deg, #FF4FA0 0%, #4F6BFF 100%)",
    itemIds: [
      "the-beautiful-fall",
      "love-style-life",
      "grace",
      "the-woman-i-wanted-to-be",
    ],
  },











  {
    slug: "books-that-feel-like-summer",
    title: "Books That Feel Like Summer",
    description: "For the last stretch of a paperback and a warm evening.",
    gradient: "linear-gradient(155deg, #8FD3E8 0%, #FFD98E 100%)",
    itemIds: [
      "malibu-rising",
      "The-Summer-I-Turned-pretty",
      "the-summer-book",
      "happy-place",
  
    ],
  },

  {
    slug: "perfect-rainy-day",
    title: "The Perfect Rainy Day Collection",
    description: "Everything you need to make bad weather feel intentional.",
    gradient: "linear-gradient(155deg, #3A2A5C 0%, #15112A 100%)",
    itemIds: [
      "the-secret-history",
      "if-we-were-villains",
      "before-the-coffee-gets-cold",
      "the-midnight-library",
    ],
  },

  {
    slug: "editors-secret-favorites",
    title: "Editor's Secret Favorites",
    description: "The recommendations we bring up at every dinner party.",
    gradient: "linear-gradient(155deg, #ECE7FD 0%, #D8CFFB 100%)",
    itemIds: [
      "a-little-life",
      "the-goldfinch",
      "normal-people",
      "pachinko",
    ],
  },

  {
    slug: "books-that-inspired-movies",
    title: "Books That Inspired Famous Movies",
    description: "Read it first. You know you want to.",
    gradient: "linear-gradient(155deg, #E4FF3D 0%, #FF4FA0 100%)",
    itemIds: [
      "dune",
      "little-women",
      "gone-girl",
      "the-great-gatsby",
    ],
  },
];




export const CITIES = [
  { slug: "london", name: "London", x: 47, y: 24 },
  { slug: "paris", name: "Paris", x: 49, y: 27 },

  { slug: "new-york", name: "New York", x: 25, y: 32 },
 

];

export function itemsByCity(slug: string) {
  return ITEMS.filter((i) => i.city === slug);
}

export function groupByType(items: Item[]) {
  const order: ItemType[] = [
    "book",
    "movie",
    "show",
    "album",
    "place",
  
  ];











































































































  
  return order
    .map((type) => ({ type, items: items.filter((i) => i.type === type) }))
    .filter((g) => g.items.length > 0);
}







