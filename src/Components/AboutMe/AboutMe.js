import React from "react";
import styles from "./AboutMe.module.css";
import SocialLink from "../SocialLink/SocialLink";
import GithubSVG from "../../static/github.svg";
import GmailSVG from "../../static/gmail.svg";
import InstagramSVG from "../../static/instagram.svg";
import LinkedInSVG from "../../static/linkedin.svg";
import MediumSVG from "../../static/medium.svg";
import TelegramSVG from "../../static/telegram.svg";
import TwitterSVG from "../../static/twitter.svg";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.aboutHeader}>A little bit about Myself</div>
      <div className={styles.aboutText}>
        I'm a freelancer and a self-taught software developer based in India. I
        create and code beautiful user interfaces with top-notch tech stacks.
      </div>
      <div className={styles.aboutLinks}>
        <SocialLink
          imgSrc={GmailSVG}
          to="mailto: me@udasitharani.dev"
          platformName="Gmail"
        />
        <SocialLink
          to="https://www.instagram.com/udasi.tharani/"
          imgSrc={InstagramSVG}
          platformName="Instagram"
        />
        <SocialLink
          to="https://www.linkedin.com/in/udasi-tharani-bb3232193/"
          imgSrc={LinkedInSVG}
          platformName="LinkedIn"
        />
        <SocialLink
          to="https://t.me/udasitharani"
          imgSrc={TelegramSVG}
          platformName="Telegram"
        />
        <SocialLink
          to="https://medium.com/@udasitharani"
          imgSrc={MediumSVG}
          platformName="Medium"
        />
        <SocialLink
          to="https://github.com/udasitharani"
          imgSrc={GithubSVG}
          platformName="Github"
        />
        <SocialLink
          to="https://twitter.com/TharaniUdasi"
          imgSrc={TwitterSVG}
          platformName="Twitter"
        />
      </div>
    </div>
  );
};

export default AboutMe;
