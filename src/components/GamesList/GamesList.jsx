import "./gameslist.scss"

export default function GamesList({id, title, active, setSelected }) {
    return (
        <li
            className={active ? "GamesList active" : "GamesList"} 
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    )
}