import { useRouter } from 'next/router';
import { json } from 'node:stream/consumers';

export default function Product(){
    const { query } = useRouter()
    
    return (
        <h1>Product: {JSON.stringify(query)}</h1>
    )
}