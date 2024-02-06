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
    <div className="space-y-6">
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
    <div className="p-12 border-radius rounded-lg border-1 border-blue-950">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lobortis arcu, non lobortis ligula. Pellentesque enim nunc, dignissim a quam eu, lobortis scelerisque eros. Vivamus aliquet sit amet libero et faucibus. Duis vel ornare sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu aliquet enim. Mauris quam orci, eleifend sit amet sollicitudin eget, laoreet id urna. Nam eget mauris eget massa scelerisque consectetur. In pellentesque blandit placerat. Aliquam at varius ante. Duis nisl tellus, ornare non maximus et, placerat at lorem. Duis eget sem vitae mi tempus lacinia. Curabitur mattis turpis vitae sapien congue faucibus. Cras ultricies nibh ac dictum porttitor.

Aliquam non quam orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vel dui consectetur, ornare nisl sagittis, scelerisque lectus. Cras ac tempor ex. Mauris facilisis vehicula sapien, id dictum nulla. Nunc vel sodales velit. Proin vel ex sit amet turpis feugiat ornare ut sed diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus at porttitor enim, et consequat justo.

Nulla 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lobortis arcu, non lobortis ligula. Pellentesque enim nunc, dignissim a quam eu, lobortis scelerisque eros. Vivamus aliquet sit amet libero et faucibus. Duis vel ornare sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu aliquet enim. Mauris quam orci, eleifend sit amet sollicitudin eget, laoreet id urna. Nam eget mauris eget massa scelerisque consectetur. In pellentesque blandit placerat. Aliquam at varius ante. Duis nisl tellus, ornare non maximus et, placerat at lorem. Duis eget sem vitae mi tempus lacinia. Curabitur mattis turpis vitae sapien congue faucibus. Cras ultricies nibh ac dictum porttitor.

Aliquam non quam orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vel dui consectetur, ornare nisl sagittis, scelerisque lectus. Cras ac tempor ex. Mauris facilisis vehicula sapien, id dictum nulla. Nunc vel sodales velit. Proin vel ex sit amet turpis feugiat ornare ut sed diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus at porttitor enim, et consequat justo.

Nulla vel gravida ligula. Praesent lacinia, magna id sagittis tempor, ipsum velit sollicitudin est, sed tristique urna nibh ac lacus. Quisque ultricies volutpat justo nec pretium. Sed vel lectus et tortor finibus luctus id sed mauris. Morbi vitae consequat nunc. Integer ac laoreet mi, eget cursus nibh. Sed vitae velit blandit, viverra neque vitae, lobortis mi. Phasellus finibus interdum tincidunt. Sed interdum risus vitae lacinia auctor. Sed tincidunt finibus turpis, eu vehicula orci vehicula quis. Donec hendrerit sem vel elit tincidunt fringilla. Sed fermentum aliquam luctus. Phasellus eu quam sed sapien molestie efficitur.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vitae laoreet metus. Quisque libero massa, fermentum tempus fringilla vitae, lacinia ut quam. Etiam congue fermentum luctus. Aliquam gravida condimentum sollicitudin. Integer sodales sed risus et pulvinar. Ut eleifend elementum iaculis. Mauris urna est, facilisis in lacus consectetur, euismod porttitor libero. Cras ullamcorper a justo at ornare. In tincidunt accumsan neque, eget laoreet ante pretium eu.

Suspendisse tempor justo sit amet eros cursus, in tristique nunc posuere. Pellentesque ligula ex, hendrerit et odio eget, consectetur pharetra sapien. Aenean vulputate auctor leo, eget dapibus ipsum rutrum sit amet. Nunc molestie nisl nisl, sit amet lacinia augue scelerisque in. Suspendisse tincidunt aliquam metus. Sed nibh odio, ultricies vel nisi id, molestie suscipit mi. Vivamus sed tincidunt nisi. Pellentesque efficitur lacinia porttitor. Phasellus suscipit mi id euismod sagittis. Vestibulum dolor ex, malesuada aliquet lectus id, commodo finibus odio. Proin sollicitudin enim vel nibh consequat blandit. Nulla orci purus, ullamcorper vel molestie et, elementum vitae turpis. Duis eros felis, viverra sed lorem sed, blandit volutpat nunc.  Suspendisse potenti. Vivamus eget vulputate felis, eu cursus ipsum. vel gravida ligula. Praesent lacinia, magna id sagittis tempor, ipsum velit sollicitudin est, sed tristique urna nibh ac lacus. Quisque ultricies volutpat justo nec pretium. Sed vel lectus et tortor finibus luctus id sed mauris. Morbi vitae consequat nunc. Integer ac laoreet mi, eget cursus nibh. Sed vitae velit blandit, viverra neque vitae, lobortis mi. Phasellus finibus interdum tincidunt. Sed interdum risus vitae lacinia auctor. Sed tincidunt finibus turpis, eu vehicula orci vehicula quis. Donec hendrerit sem vel elit tincidunt fringilla. Sed fermentum aliquam luctus. Phasellus eu quam sed sapien molestie efficitur.

</p>
    </div>
    </div>
  );
}

export default Home;