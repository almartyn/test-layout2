
import "./Button.scss";

const Button = (props) => {

   const handleClickScroll = () => {
      const element = document.getElementById('scrollTo');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
   return(
      <button className="button" type={props.type} onClick={handleClickScroll}>{props.children}</button>
     
   );
}
export default Button;