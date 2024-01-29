import Section from "components/Section"

function Home() {

    const items = [
      {
        id: 1,
        title: "Genre",
        description: "LoremIpsum",
        artist: 'Ahmet',
        image: "...",
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
      },
      {
        id: 2,
        title: "Year",
        description: "LoremIpsum",
        artist: 'Ahmet',
        image: "...",
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
      },
      {
        id: 3,
        title: "Artist",
        description: "LoremIpsum",
        artist: 'Ahmet',
        image: "...",
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
      },
      {
        id: 4,
        title: "I feel lucky!",
        description: "LoremIpsum",
        artist: 'Ahmet',
        image: "...",
        src: "file:///C:/Users/egesua/Desktop/Pink%20Floyd%20%20Wish%20You%20Were%20Here.mp3"
      }
    ];

    return (
        <div>
            <Section
             title="Recently Played"
             items={items} />
        </div>
    )
}

export default Home