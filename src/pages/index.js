import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { Link } from 'gatsby'


export default function Home() {
  return (
    <Layout>
      {/* <section>
        <h2>A</h2>
        <h3>B</h3>
        <p>yadayadayada</p>
      </section> */}
      <div className={styles.mainContent}>
        
        <div className={styles.leftContent}>
          <p>yalkasjlf aasldfkja sfasf</p>
            <button class="btn btn-white btn-left"><Link to="/landscapes">Landscape</Link></button>
        </div>

        
        <div className={styles.rightContent}>
        <p>yalkasjlf aasldfkja sfasf</p>
            <button class="btn btn-white btn-right"><Link to="/wildlife">Wildlife</Link> </button>
        </div>
    
    </div>
    </Layout>
  )
}
