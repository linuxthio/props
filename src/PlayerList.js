import players from "./players"
import Player from "./Player"

const PlayerList = () => {

    return (
        <div className="main">
            {players.map((pl) => <Player name={pl.name} team={pl.team} nationality={pl.nationality} image={pl.image} jerseyNumber={pl.jerseyNumber} age={pl.age} />)}
        </div>
    )
}


export default PlayerList