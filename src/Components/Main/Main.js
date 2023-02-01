import "./Main.scss";
import imgDesktop from "./img/computer.jpg";
import imgTablet from "./img/computer-img-tablet.jpg";
import Button from "../UI/Button.js";
import imgMobile from "./img/computer-img-mobile.jpg";

const Main = () => {
  return (
    <div className="main-wraper">
      <div className="main-wraper-container">
        <div className="container-img">
          <img className="img-desktop" src={imgDesktop} alt="computer" />
          <img className="img-tablet" src={imgTablet} alt="computer" />
          <img className="img-mobile" src={imgMobile} alt="computer" />
        </div>
        <div className="container-title">
          <h2>Vestibulum lectus sit amet eros auctor accumsan non non eros</h2>
        </div>
        <div className=" container-text">
          <p>
            Fusce eu tellus molestie, porta nisi in, euismod quam. Mauris lacus
            orci, congue at justo ac, posuere sagittis sapien. Fusce ultrices
            vel odio ut pulvinar. Ut sed sagittis urna. Nulla auctor scelerisque
            placerat. Donec orci nibh, iaculis vel sem non, eleifend malesuada
            risus. Duis scelerisque libero sed mauris pharetra placerat. Ut id
            rutrum nunc, nec vulputate nibh. Morbi ultrices in nisi eget rutrum.
            Praesent condimentum nisi fermentum, sodales enim vitae,
            sollicitudin nisl. Pellentesque elementum pellentesque vestibulum.
            Ut vitae nunc ut enim consectetur congue a eget quam.
          </p>
        </div>
        <div className="button-wraper">
          <Button>Sed nec venenatis odio, ut suscipit nisl</Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
