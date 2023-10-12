import React from "react";
import Footer from "./Footer";
import ArtisanNav from "./ArtisanNav";

export default function ArtisanBios() {
  return (
    <div>
      <ArtisanNav />
      <div className="artisan-container">
        <div className="artisan-header">
          <img src="artisan-bios-text.png" />
        </div>
        <div className="artisan-block font-face-pdr">
          <h2 className="artisan-left">Meet Dahlia Blue</h2>
          <img src="pexels-rfstudio-3817495.jpg" className="artisan-image" />
        </div>
        <div className="artisan-para-quote">
          <div className="artisan-para1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            corporis, quo neque ipsa recusandae culpa! Dolore ab vero provident
            odio quisquam consequuntur doloribus tempora minus praesentium
            iusto, obcaecati sint beatae accusamus fuga consequatur ea est.
            Perspiciatis molestiae officia, vitae error amet illo iste repellat
            ipsa, iusto et nisi. Veritatis, aperiam!
          </div>

          <div className="artisan-quote1">
          <p>
            "My entire <span className="heart">heart</span> goes into my pottery work."
          </p>
          </div>
        </div>
      </div>

      <div className="artisan-block font-face-pdr">
        <h2 className="artisan-left">Kaji Dolovi</h2>
        <img src="pexels-rfstudio-3819794.jpg" className="artisan-image" />
      </div>
      <div className="artisan-para-quote">
        <div className="artisan-para2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          corporis, quo neque ipsa recusandae culpa! Dolore ab vero provident
          odio quisquam consequuntur doloribus tempora minus praesentium iusto,
          obcaecati sint beatae accusamus fuga consequatur ea est. Perspiciatis
          molestiae officia, vitae error amet illo iste repellat ipsa, iusto et
          nisi. Veritatis, aperiam!
        </div>
        <div className="artisan-quote2">
          <p>"I asked myself, 'What can be created today?'."</p>
        </div>
      </div>

      <div className="artisan-block font-face-pdr">
        <h2 className="artisan-left">Meet Natasha D.</h2>
        <img
          src="pexels-antoni-shkraba-4706134.jpg"
          className="artisan-image"
        />
      </div>
      <div className="artisan-para-quote">
        <div className="artisan-para3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          corporis, quo neque ipsa recusandae culpa! Dolore ab vero provident
          odio quisquam consequuntur doloribus tempora minus praesentium iusto,
          obcaecati sint beatae accusamus fuga consequatur ea est. Perspiciatis
          molestiae officia, vitae error amet illo iste repellat ipsa, iusto et
          nisi. Veritatis, aperiam!
        </div>

        <div className="artisan-quote3">
          <p>"It's all about the movement and the peace."</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
