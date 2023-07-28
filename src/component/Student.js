const Student = ({firstName , lastName, batchNumber, likesIceCreams}) => {
    return (
        <h1>
            My name is {firstName} {lastName}. I am from {batchNumber}.
            {likesIceCreams && 'I like Ice Cream'}
        </h1>
    )
}

export default Student