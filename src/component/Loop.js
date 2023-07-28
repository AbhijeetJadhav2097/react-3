const Loop = () => {
    let hobbieList = ["Singing", "Dancing", "Swimming", "Reading Books", "Travelling", "Tracking"];
    return (
        <div style = {{textAlign: 'left'}}>
        <h1>My Hobbbies Are</h1>
        <ul>
            {hobbieList.map((hobby,index) => (
                <li key = {index}>{hobby}</li>
            ))}
            {/* <li>Singing</li>
            <li>Dancing</li>
            <li>Swimming</li>
            <li>Reading Books</li>
            <li>Travelling</li>
            <li>Tracking</li> */}
        </ul>
        </div>
    )
}

export default Loop