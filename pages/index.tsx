import styles from "/styles/Home.module.css"
import Image from "next/image";
import Header from "./Components/Header/Header"
import NotionLogo from "../public/assets/images/Notion_app_logo.png"

import Link from "next/link";
import RoundedImageBlock from "./Block/RoundedImageBlock/RoundedImageBlock"
import RowImgText from "./Block/RowImgText/RowImgText"
import ImageCaption from "./Block/ImageCaption/ImageCaption"

import templateImg1 from "../public/assets/images/imageTemplate1.svg"
import templateImg2 from "../public/assets/images/imageTemplate2.svg"
import templateImg3 from "../public/assets/images/imageTemplate3.svg"


import featureImg1 from "../public/assets/images/featureImg1.svg"
import featureImg2 from "../public/assets/images/featureImg2.svg"
import featureImg3 from "../public/assets/images/featureImg3.svg"
import featureImg4 from "../public/assets/images/featureImg4.svg"
import featureImg5 from "../public/assets/images/featureImg5.svg"
import featureImg6 from "../public/assets/images/featureImg6.svg"


import imageCaption1 from "../public/assets/images/imageCaptionImg.png"
import imageCaption2 from "../public/assets/images/imageCaptionImg2.png"
import imageCaption3 from "../public/assets/images/imageCaptionImg3.png"

import imageTesti1 from "../public/assets/images/testiImg.png"
import imageTesti2 from "../public/assets/images/testiImg2.png"
import imageTesti3 from "../public/assets/images/testiImg3.png"
function HomePage() {
  return (
  <div className={styles.bodyContainer}>
    <Header/>
    <section>
      <div className={styles.megaContainer}>
        <div className={styles.heroSectionObject}></div>
        <div className={styles.heroSectionContainer}>
          <div className={styles.heroSectionLeft}>
            <h1 className={styles.heroSectionTitle}>Create your website with the Selfer App</h1>
            <h3 className={styles.heroSectionDescription}>A quick stop between Notion and the web, to make your pages
              <span className={styles.accentColor}> stand out</span>.</h3>
            <Link href="https://api.selfer.fr/oauth">
            <a className={styles.heroSectionLogin}>
              <div className={styles.notionLogoContainer}>   
                <Image src={NotionLogo} alt="logo Notion"></Image>
              </div>
              <span className={styles.accentColor}>Sign in with</span>Notion
              </a>
            </Link>
          </div>
          <div className={styles.heroSectionRight}>
            <Image src={templateImg1} alt="img caption"></Image>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.coloredSection}>
      <div className={styles.megaContainer}>
        <h2 className={styles.templateSectionTitle}>From a Notion page to your own website in a<span className={styles.accentColor}>few steps</span> !</h2>
        <div className={styles.templateSectionContainer}>
          <div className={styles.templateRow}>
            <ImageCaption
              src={templateImg1}
              alt="Image Caption 1"
              content="Edit content on Notion"
            />
            <ImageCaption
              src={templateImg2}
              alt="Image Caption 2"
              content="Customize on Selfer"
            />
            <ImageCaption
              src={templateImg3}
              alt="Image Caption 3"
              content="Upload your website"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className={styles.megaContainer}>
        <h2 className={styles.toolsSectionTitle}>Use our tools & features to customize your <span className={styles.accentColor}>Notion Page</span></h2>
        <div className={styles.toolsSectionRow}>
          <RowImgText
            alt="Tools Images"
            src={featureImg1}
            content="Choose your colors"
          />
          <RowImgText
            alt="Tools Images"
            src={featureImg2}
            content="Pick your own fonts"
          />
          <RowImgText
            alt="Tools Images"
            src={featureImg3}
            content="A 100% Responsie Website"
          />
        </div>
        <div className={styles.toolsSectionRow}>
          <RowImgText
            alt="Tools Images"
            src={featureImg4}
            content="Change & custom your domain name"
          />
          <RowImgText
            alt="Tools Images"
            src={featureImg5}
            content="Optimize your experience with SEO"
          />
          <RowImgText
            alt="Tools Images"
            src={featureImg6}
            content="Many more features are waiting for you !"
          />
        </div>
      </div>
    </section>
    <section className={styles.coloredSection}>
      <div className={styles.megaContainer}>
        <h2 className={styles.stepSectionTitle}>From scratch to the end, always here to <span className={styles.accentColor}>help you</span></h2>
        <div className={styles.stepSection}>
          <ImageCaption
            src={imageCaption1}
            alt="Image Caption 1"
            content="Create your page on Notion"
          />
          <ImageCaption
            src={imageCaption2}
            alt="Image Caption 2"
            content="Link Selfer and Notion"
          />
          <ImageCaption
            src={imageCaption3}
            alt="Image Caption 3"
            content="Customize your project in edition mode"
          />
        </div>
      </div>
    </section>
    <section>
      <div className={styles.megaContainer}>
        <h2 className={styles.testiSectionTitle}>Join our <span className={styles.accentColor}>users</span></h2>
        <div className={styles.testimonialsContainer}>
          <RoundedImageBlock
            src={imageTesti1}
            alt="Testimonials Image"
            content="Des amis voulaient m'aider à faire mon site de photographie, mais pas besoin. Parce qu'avec Selfer, je sais le faire :)"
            name="Nolwenn, 32 ans"
          />
          <RoundedImageBlock
            src={imageTesti2}
            alt="Testimonials Image"
            content="Je voulais faire mon portfolio mais je n'ai vraiment pas le temps d'apprendre à coder. Cimer Selfer !"
            name="Benoît, 20 ans"
          />
          <RoundedImageBlock
            src={imageTesti3}
            alt="Testimonials Image"
            content="Je prends tout le temps des notes avec Notion, et maintenant je peux facilement mettre mon travail en ligne, et le rendre beau !"
            name="José, 25 ans"
          />
        </div>
      </div>
    </section>
  </div>
  )}

export default HomePage;