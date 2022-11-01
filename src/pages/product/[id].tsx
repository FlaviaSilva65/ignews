import { GetServerSideProps, GetStaticProps } from 'next';
// import { useRouter } from "next/router";
import Stripe from "stripe";
import { stripe } from '../../lib/stripe';
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product';

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
  };
}

export default function Product({product }: ProductProps) {
//   const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          ipsa iure iusto omnis provident mollitia, corrupti recusandae quidem
          pariatur asperiores amet impedit corporis voluptate repellendus
          officia cupiditate reprehenderit suscipit et.
        </p>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getServerSideProps: GetServerSideProps<
  any, { id: string  }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
      },
    },
    // revalidate: 60 * 60 * 1, // 1 hour
  };
};
