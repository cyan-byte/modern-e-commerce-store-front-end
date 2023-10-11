import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function ArtisanBios() {
  return (
    <div>
      <NavBar />
      <div className="artisan-container">
        <div className="artisan-header">
          <img src="artisan-bios-text.png" />
        </div>
        <div className="artisan-block">
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
        </div>
        <p>"My entire heart goes into my pottery work."</p>
      </div>

      <div className="artisan-block">
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
        <p>"I asked myself, 'What can be created today?'."</p>
      </div>

      <div className="artisan-block">
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
      </div>
      <p>"It's all about the movement and the peace."</p>

      <Footer />
    </div>
  );
}
