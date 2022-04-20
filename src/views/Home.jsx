import { useSelector } from "react-redux/es/exports";
export default function Home(){
    const storedData = useSelector((state) => console.log('from home',state));
    return(
        <div>
            <h1>home</h1>
        </div>
    );
}