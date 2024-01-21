import Section from "components/Section"

function Home() {

    const items = [
      {
        id: 1,
        title: "Genre",
        description: "LoremIpsum",
        image: "...",
      },
      {
        id: 2,
        title: "Year",
        description: "LoremIpsum",
        image: "...",
      },
      {
        id: 3,
        title: "Artist",
        description: "LoremIpsum",
        image: "...",
      },
      {
        id: 4,
        title: "I feel lucky!",
        description: "LoremIpsum",
        image: "...",
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