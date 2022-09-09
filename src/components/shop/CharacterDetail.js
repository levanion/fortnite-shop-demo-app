import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import epicLogo from "../../img/epicLogo.png";
import onProduct from "../../img/onProduct.png";
import onProduct2 from "../../img/onProduct2.png";
import reaction1 from "../../img/Reaction1.png";
import reaction2 from "../../img/Reaction2.png";
import reaction3 from "../../img/Reaction3.png";
import reaction4 from "../../img/Reaction4.png";
import likeLogo from "../../img/likeLogo.png";
import commentLogo from "../../img/commentLogo.png";
import shareLogo from "../../img/sharelogo.png";
import bookmarkLogo from "../../img/bookmarkLogo.png";

import classes from "./CharacterDetail.module.css";

// import { DUMMY_PRODUCTS } from "../components/shop/Products";

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

function DisplayCharacter() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const result = data.characters.results.find(
    (character) => character.id === id
  );

  return (
    <div className={classes.characterDetail}>
      <div className={classes.image}>
        <img src={result.image} alt="new" />
        <div className={classes.imageInfo}>
          <div className={classes.line1}>
            <div>
              <div className={classes.bigLogo}>
                <img src={epicLogo} alt="epicLogo" />
              </div>
              <p>@some user</p>
            </div>
            <div>
              <p>Nested NFT</p>
              <div className={classes.miniLogos}>
                <img src={onProduct2} alt="epicLogo" />
                <img src={onProduct} alt="epicLogo" />
                <img src={onProduct2} alt="epicLogo" />
              </div>
            </div>
          </div>
          <div className={classes.line2}>
            <div className={classes.section1}>
              <div>
                <p>Reply</p>
              </div>
              <div className={classes.emoji}>
                <img src={reaction1} alt="epicLogo" />
                <img src={reaction2} alt="epicLogo" />
                <img src={reaction3} alt="epicLogo" />
                <img src={reaction4} alt="epicLogo" />
              </div>
            </div>
            <div className={classes.section2}>
              <div className={classes.social}>
                <div>
                  <img src={likeLogo} alt="likeLogo" /> {" 20k"}
                </div>
                <div>
                  <img src={commentLogo} alt="commentLogo" />
                  {" 10k"}
                </div>
                <div>
                  <img src={shareLogo} alt="shareLogo" />
                </div>
                <div>
                  {" "}
                  <img src={bookmarkLogo} alt="bookmarkLogo" />
                </div>
              </div>{" "}
              <div>
                <button>Buy 2.2 ETH</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.info}>
        <h1>{result.name}</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <h3>Properties</h3>
        <div className={classes.list}>
          <ul>
            <li>
              <div>Location</div>
              <div> {result.location.name}</div>
            </li>
            <li>
              <div>Gender</div>
              <div>{result.gender}</div>
            </li>
            <li>
              <div> Status</div>
              <div>{result.status}</div>
            </li>
          </ul>
          <ul>
            <li>
              <div>Location</div>
              <div> {result.location.name}</div>
            </li>
            <li>
              <div>Gender</div>
              <div>{result.gender}</div>
            </li>
            <li>
              <div> Status</div>
              <div>{result.status}</div>
            </li>
          </ul>
          <ul>
            <li>
              <div>Location</div>
              <div> {result.location.name}</div>
            </li>
            <li>
              <div>Gender</div>
              <div>{result.gender}</div>
            </li>
            <li>
              <div> Status</div>
              <div>{result.status}</div>
            </li>
          </ul>
          <ul>
            <li>
              <div>Location</div>
              <div> {result.location.name}</div>
            </li>
            <li>
              <div>Gender</div>
              <div>{result.gender}</div>
            </li>
            <li>
              <div> Status</div>
              <div>{result.status}</div>
            </li>
          </ul>
          <ul>
            <li>
              <div>Location</div>
              <div> {result.location.name}</div>
            </li>
            <li>
              <div>Gender</div>
              <div>{result.gender}</div>
            </li>
            <li>
              <div> Status</div>
              <div>{result.status}</div>
            </li>
          </ul>
          <ul>
            <li>
              <div>Location</div>
              <div> {result.location.name}</div>
            </li>
            <li>
              <div>Gender</div>
              <div>{result.gender}</div>
            </li>
            <li>
              <div> Status</div>
              <div>{result.status}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const CharacterDetail = () => {
  return <DisplayCharacter />;
};

export default CharacterDetail;
