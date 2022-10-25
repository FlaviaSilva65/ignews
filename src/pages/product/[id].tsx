import { useRouter } from 'next/router';
import { json } from 'node:stream/consumers';
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product';

export default function Product(){
    const { query } = useRouter()
    
    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit error eaque est. Ratione assumenda commodi tempore repudiandae harum alias, optio fugit, eligendi consectetur blanditiis, quam earum omnis impedit error aperiam.</p>
            </ProductDetails>
        </ProductContainer>
    )
}