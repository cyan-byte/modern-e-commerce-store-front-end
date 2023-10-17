// import logo from "./logo.svg";
import Footer from "./Footer";
import GiantLogo from "./GiantLogo";
import NavBar2 from "./NavBar2";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      {/* Navbar */}
      <NavBar2 />
      {/* Header */}
      <header>
        <GiantLogo />
      </header>
      {/* Product Home Row */}
      <div className="home-product-row">
        {/* Product 1 */}
        <div className="product-home">
          <div className="product-home-image-and-price">
            <img
              src="oshin-khandelwal-fq839fSNEuo-unsplash.png"
              alt="Product 1"
              className="product-home-image"
            />
            <p className="product-home-price">$160</p>
          </div>
          <h3 className="product-home-title">mammoth bundle</h3>
        </div>

        {/* Product 2 */}
        <div className="product-home">
          <div className="product-home-image-and-price">
            <Link to="/product-listing">
              <img
                src="pexels-vlada-karpovich-7902913.png"
                alt="Product 2"
                className="product-home-image product-home-image2"
              />
            </Link>
            <p className="product-home-price">$72</p>
          </div>
          <h3 className="product-home-title">mammoth vase</h3>
        </div>

        {/* Product 3 */}
        <div className="product-home">
          <div className="product-home-image-and-price">
            <img
              src="jaikishan-patel-yS960iAbSqo-unsplash.png"
              alt="Product 3"
              className="product-home-image product-home-image3"
            />
            <p className="product-home-price">$56</p>
          </div>

          <h3 className="product-home-title">mint jug vase</h3>
        </div>
      </div>
      <div className="clayday-section">
        <div className="clayday-left">
          <div className="clayday-top">
            <h1>clayday collection</h1>
            <p>
              Earthy, “unfinished” vibes from sculptures to vases in raw earthy
              hues. <span>See the full collection.</span>
            </p>
          </div>
          <div className="clayday-bottom">
            <p>
              starting at{" "}
              <span className="starting-at-price font-face-te">$48</span>
            </p>
          </div>
        </div>
        <img
          src="pexels-vlada-karpovich-7902913.jpg"
          alt="Product 3"
          className="clayday-right"
          style={{ height: "88vh" }}
        />
      </div>
      <div className="rali-vase-section">
        <div className="rali-left">
          <img
            src="pexels-roman-odintsov-8063809.jpg"
            alt="Rali Vase Collection"
            className="rali-vase-collection"
            style={{ width: "396px", height: "88vh" }}
          />
        </div>
        <div className="rali-right">
          <p className="rali-top">
            Our <span>Rali vase collection</span> comes in differing heights and widths for
            your choosing. Style tip: Add one empty vase to the top of a
            wardrobe on the left side of your room and one of our sculptures to
            the top of a matching wardrobe on the right side of your room.
          </p>
          <p className="rali-bottom">
            starting at
            <span className="starting-at-price font-face-te">$56</span>
          </p>
        </div>
      </div>
      <div className="blue-see-products-section">
        <p>You've found us, so why not look around?</p>
        <Link to="/products">
          <div className="blue-section-button">see our products</div>
        </Link>
      </div>
      <div className="craftlife-row">
        <div className="craftlife">
          <p>craftlife</p>
        </div>
        <img
          src="pexels-rfstudio-3817497.jpg"
          alt="image of an artisan"
          className="artisan-home-image1"
          style={{ width: "396px", height: "88vh" }}
        />
        <img
          src="pexels-rfstudio-3819792.jpg"
          alt="image of an artisan"
          className="artisan-home-image2"
          style={{ width: "396px", height: "88vh" }}
        />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
