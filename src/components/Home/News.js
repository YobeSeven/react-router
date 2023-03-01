export default function News({setUsers , users}) {
    return (
        <>
            <div>
                {
                    (users.map((element) => (
                        <>
                            <h1>{element.name}</h1>
                            <h1>{element.email}</h1>
                            <h1>{element.password}</h1>
                        </>
                    )
                    ))
                }
            </div>
        </>
    )
}