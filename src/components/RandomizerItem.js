import { Icon } from "Icons"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { setCurrent } from "stores/PlayerStore"

const dispatch = useDispatch()

const { setCurrent } = useSelector(state => state.player)

const updateCurrent = () => {
    dispatch(setCurrent(item))
}

function RandomizerItem({ item }) {
    return (
        <NavLink key={item.id} to="/" className={"bg-footer p-4 rounded hover:bg-activeColor group-[]: text-center"}>
            <div className="pt-[100%] relative">
                <img src={item.image} className="absolute inset-0 object-cover w-full h-full" />
                <button onClick={upda} className="w-10 h-10 rounded-full bg-primary absolute group-hover:block group-focus:flex bottom-2 right items-center justify-center">
                    <Icon name={current?.id == item.id ? 'pause' : 'play'} size={16} />
                </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
                {item.title}
            </h6>
          </NavLink>
    )
}