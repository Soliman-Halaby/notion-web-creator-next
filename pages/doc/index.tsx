import Header from "../Components/Header/Header"
import styles from "./doc.module.css"
function DocPage() {
    return(
        <div className="docContainer">
            <Header/>
            <h1 className={styles.title}>Documentation</h1>
        </div>
    )
  }
  
  export default DocPage;