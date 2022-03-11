import styles from "../../../styles/Home.module.css";
import Image from "next/image"

type roundedImageProps = {
    src: StaticImageData
    alt: string
    content: string
    name: string
}
const RoundedImageBlock = (props: roundedImageProps) => {
    return (
        <div className={styles.RoundedImageBlockContainer}>
            <Image className={styles.roundedBlocksrc} src={props.src} alt={props.alt}></Image>
            {/* <img className={styles.roundedBlockImg} src={props.img} alt={props.alt}></img> */}
            <div>
                <p>{props.content}</p>
                <span>{props.name}</span>
            </div>
        </div>
    );
};

export default RoundedImageBlock;