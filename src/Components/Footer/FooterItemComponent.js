import "./FooterItemComponent.scss";

const FooterItemComponent = () => {
   return(
       <div className="footer-container-items">
         <div className="item">
           <h3 className="item1">1</h3>
           <div className="circle"></div>
           <div className="dashed left"></div>
           <p>One facilisi. Integer posuere nibh vel sagittis lacinia</p>
         </div>
         <div className="item">
           <h3 className="item2">2</h3>
           <div className="circle"></div>
           <p>Two facilisi. Integer posuere nibh vel sagittis lacinia</p>
         </div>
         <div className="item">
           <h3 className="item3">3</h3>
           <div className="circle"></div>
           <div className="dashed right"></div>
           <p>Three facilisi. Integer posuere nibh vel sagittis lacinia</p>
         </div>
     </div>
   )
};

export default FooterItemComponent;