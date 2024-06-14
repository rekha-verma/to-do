type Message = {
    message: string
}

const EmptyMessage = ({ message }: Message) => {
    return (
        <div>{message}</div>
    )
}

export default EmptyMessage