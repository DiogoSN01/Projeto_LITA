import "./Calendly.css";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
    return (
      <section className="calendly">
        <div className="ccontainer">
          <div className="calendly-container">
            <InlineWidget  className="calendly-widget"
            url="https://calendly.com/projetolita/reuniao" 
          />
          </div>
       </div>   
      </section>
      );
    
};

export default Calendly;