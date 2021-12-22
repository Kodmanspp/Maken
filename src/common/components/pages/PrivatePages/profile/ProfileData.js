export default function ProfileData({ props }) {
    return (
        <>
                <img src={props.image} alt="Avatar" width="20px"/>
    
                <p>{props.login}</p>
                <p>{props.telegram}</p>
        </>
    )
}