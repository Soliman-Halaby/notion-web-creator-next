import styles from "../../../styles/Home.module.css"
import Image from "next/image"
type rowImgTextProps = {
    src: StaticImageData
    alt: string
    content: string
}
const RowImgText = (props: rowImgTextProps) => {
    return (
        <div className={styles.rowImgTextContainer}>
            <Image alt={props.alt} src={props.src}></Image>
            <p>{props.content}</p>
        </div>
    );
};

export default RowImgText;