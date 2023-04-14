import {useEffect,useState} from 'react'

function Content () {
    const [width,setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const resizeHandle = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize',resizeHandle)
        console.log(window.addEventListener)
        return () => {
            window.removeEventListener('resize',resizeHandle)
        }
    },[])
    // console.log(width)
    return (
        <div>
           <h1>{width}</h1> 
        </div>
    )
}
export default Content