import { Card } from "react-bootstrap"


const Player = ({ name='Mane', team='Al-nasr', nationality='Senegal', jerseyNumber='10', age='31', image='' }) => {
    // style={{ width: '48rem' }}
    return (
        <Card className="player">
            <Card.Img src={image} />
            <Card.Title>{name.toUpperCase()}</Card.Title>
            <Card.Text>{team}</Card.Text>
            <Card.Title className="number">{jerseyNumber}</Card.Title>
            <Card.Text>{nationality}</Card.Text>
            <Card.Text>{age} ans</Card.Text>
        </Card>

    )
}


export default Player