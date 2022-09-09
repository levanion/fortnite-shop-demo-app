import { useQuery, gql } from "@apollo/client";

import ProductItem from "./ProductItem";

import classes from "./Products.module.css";

const GET_CHARACTERS = gql`
  query Myquery {
    characters {
      results {
        id
        name
        created
        image
        type
        gender
        status
        location {
          id
          name
          created
        }
      }
    }
  }
`;

function DisplayCharacters() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ul className={classes.products}>
        {data.characters.results.map((character) => (
          <ProductItem
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            gender={character.gender}
          />
        ))}
      </ul>
    </div>
  );
}

export const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Black Knight",
    description: "This is a first product - amazing",
    image:
      "http://cdn.shopify.com/s/files/1/0637/8605/7940/products/Black-Knight_1200x1200.jpg?v=1649247050",
    item: "Silver Shoes",
    category: "Shoes",
    rarity: "10%",
  },
  {
    id: "p2",
    price: 5,
    title: "Black Knight",
    description: "This is a second product - amazing",
    image:
      "http://cdn.shopify.com/s/files/1/0637/8605/7940/products/Black-Knight_1200x1200.jpg?v=1649247050",
    item: "Silver Shoes",
    category: "Shoes",
    rarity: "10%",
  },
  {
    id: "p3",
    price: 4,
    title: "Black Knight",
    description: "This is a third product - amazing",
    image:
      "http://cdn.shopify.com/s/files/1/0637/8605/7940/products/Black-Knight_1200x1200.jpg?v=1649247050",
    item: "Silver Shoes",
    category: "Shoes",
    rarity: "10%",
  },
  {
    id: "p4",
    price: 4,
    title: "Black Knight",
    description: "This is a third product - amazing",
    image:
      "http://cdn.shopify.com/s/files/1/0637/8605/7940/products/Black-Knight_1200x1200.jpg?v=1649247050",
    item: "Silver Shoes",
    category: "Shoes",
    rarity: "10%",
  },
  {
    id: "p5",
    price: 4,
    title: "Black Knight",
    description: "This is a third product - amazing",
    image:
      "http://cdn.shopify.com/s/files/1/0637/8605/7940/products/Black-Knight_1200x1200.jpg?v=1649247050",
    item: "Silver Shoes",
    category: "Shoes",
    rarity: "10%",
  },
  {
    id: "p6",
    price: 4,
    title: "Black Knight",
    description: "This is a third product - amazing",
    image:
      "http://cdn.shopify.com/s/files/1/0637/8605/7940/products/Black-Knight_1200x1200.jpg?v=1649247050",
    item: "Silver Shoes",
    category: "Shoes",
    rarity: "10%",
  },
];

const Products = () => {
  return <DisplayCharacters />;
};

export default Products;
