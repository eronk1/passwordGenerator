import './Top.css'
export default function Top(){
    return(
        <div id='top'>
            <h1 id='title' tabIndex={1}>
                Generate a
                <span id='subTitle'> random password</span>
            </h1>
            <p tabIndex={2} id='comment'>Never use an insecure password again</p>
        </div>
    )
}