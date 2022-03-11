import Header from "../Components/Header/Header"
import styles from "./pricing.module.css"
function PricingPage() {
    return(
        <div className="pricingContainer">
            <Header/>
            <h1 className={styles.title}>Pricing</h1>
        </div>
    )
  }
  
  export default PricingPage;