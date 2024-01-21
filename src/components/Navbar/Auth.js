import { Menu } from "@headlessui/react"
import { Icon } from "Icons"

function Auth() {

    const user = {
        name: 'egesua'
    }

    return (
        <Menu as="nav" className={"relative"}>
        {({open}) => (
            <>
            <Menu.Button className={ `flex items-center h-8 rounded-3xl pr-2 ${open ? 'bg-activeColor' : 'bg-black'} hover:bg-activeColor ` }>
            <span className="text-sm font-semibold mr-2 ml-2">{user.name}</span>
            <span className={open == true && 'rotate-180'}>
            <Icon size={16} name="downDir" />
            </span>
            
        </Menu.Button>
        <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-activeColor rounded translate-y-2"}>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`h-7 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                href="#"
              >
                Profile
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`h-7 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                href="#"
              >
                Log out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
            </>
        )}
      </Menu>
    )
}
export default Auth