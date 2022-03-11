import styles from "../../../styles/Home.module.css";
import Image from "next/image"


type imageCaptionProps = {
    src: StaticImageData,
    alt: string,
    content: string
}
const ImageCaption = (props: imageCaptionProps) => {
    return (
        <div className={styles.imageCaptionContainer}>
            <Image src={props.src} alt={props.alt}></Image>
            <h3>{props.content}</h3>
        </div>
    );
};

export default ImageCaption;