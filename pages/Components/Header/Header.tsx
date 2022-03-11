
import styles from "./Header.module.css"
import Logo_app from "../../../public/assets/images/selferLogo.svg"
import Image from "next/image";
import Link from "next/link"

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <Image alt="Logo selfer" src={Logo_app}></Image>
            </Link>
            <div className={styles.navContainer}>
                <ul>
                    <li>
                        <Link href="/pricing">
                            <a className="">Pricing</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/doc">
                            <a className="">Doc</a>
                        </Link>
                    </li>
                        <Link href="https://api.selfer.fr/oauth">
                            <a className={styles.loginLink}><span className={styles.accentColor}>Start with Notion</span></a>
                        </Link>
                </ul>
                {/* <Link href="/doc">A</Link> */}
            </div>
        </header>
    );
};
  
  export default Header;