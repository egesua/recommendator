import Section from "components/Section";
import { Dropdown, Button } from "react-bootstrap";

function Home() {
  const dropdownItems = [
    {
      id: 1,
      title: "Genre",
    },
    {
      id: 2,
      title: "Year",
    },
    {
      id: 3,
      title: "Artist",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <Section title="Let's get started!">
        <div className="flex space-x-4 items-center">
        {dropdownItems.map((item) => (
          <Dropdown key={item.id}>
            <Dropdown.Toggle variant="success" id={`dropdown-${item.id}`}>
            {item.title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item key={item.id} href="#">
                {item.title} Action
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        ))}
        <Button variant="primary">I feel lucky!</Button>
        </div>
      </Section>
    </div>
  );
}

export default Home;