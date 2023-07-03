'use client'

import Image from 'next/image';
import styles from './page.module.css';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef<null | HTMLDivElement>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
      <div className={styles.hero_section}>
        <div className={styles.logo_container}>
          <Image
            src="./logo-light.svg"
            alt="logo"
            fill={true}
          />
        </div>
        <h1 className={styles.slogan}>Helping builders from Ground Zero to Outer Space</h1>
        <p className={styles.tag_line}>Open For Builders is a unique funding initiative dedicated to helping startups lay a solid foundation for their future.</p>
        <button onClick={handleClick} className={styles.hero_button}>Let&apos;s go!</button>
      </div>
      <div className={styles.mission_statement}>
        <div className={styles.container}>
          <div className={styles.image_wrapper}>
            <Image
              src="./rocket.svg"
              alt="rocket"
              width={100}
              height={100}
            />
          </div>
          <h1 className={styles.mission_header}>Mission statement</h1>
          <p className={styles.mission_content}>Our primary mission is to harness capital to drive growth, facilitate innovation, and transform bold ideas into operational businesses. We understand the challenging journey of growth from zero to initial traction, and we are committed to standing shoulder-to-shoulder with ambitious entrepreneurs during this pivotal period.</p>
        </div>
      </div>
      <div className={styles.our_approach}>
        <div className={styles.container}>
          <div className={styles.image_wrapper}>
            <Image
              src="./hammer.svg"
              alt="hammer"
              width={100}
              height={100}
            />
          </div>
          <h1 className={styles.our_approach_header}>Our approach</h1>
          <p className={styles.our_approach_content}>Open For Builders strategically invests in early-stage companies, offering insightful guidance to navigate business development, technical implementation and make a significant societal impact.</p>
          </div>
      </div>
      <div className={styles.problems}>
        <div className={styles.container}>
          <h1 className={styles.problems_header}>Problems</h1>
          <p className={styles.problems_content}>The cryptocurrency industry, while promising and vibrant, faces a slew of challenges that have serious implications for startups seeking growth and success.</p>
          <div className={styles.card_problem}>
            <div className={styles.image_wrapper}>
              <Image
                src="./thief.svg"
                alt="thief"
                width={100}
                height={100}
              />
            </div>
            The issue of venture capital grifters, who pose as beneficial investors but contribute minimally to projects, is significant. Exploiting the complexities of the industry and vulnerabilities of startups, they drain considerable funds, leaving these initiatives financially and operationally devastated.
          </div>
          <div className={styles.card_problem}>
            <div className={styles.image_wrapper}>
              <Image
                src="./trash.svg"
                alt="trash"
                width={100}
                height={100}
              />
            </div>
            The problem is further exacerbated by crypto media agencies failing to fulfill their commitments, often charging high fees without delivering valuable services. This not only squanders resources but can also hinder the growth of promising projects and undermine trust in the larger crypto ecosystem.
          </div>
          <div className={styles.card_problem}>
            <div className={styles.image_wrapper}>
              <Image
                src="./broken.svg"
                alt="Mission statement"
                width={100}
                height={100}
              />
            </div>
            The industry notably lacks accessible technical development resources, leading startups to struggle in securing necessary expertise for innovative solutions. This scarcity hinders not only development speed and quality but also restricts projects&apos; potential to innovate and distinguish themselves in a competitive market.
          </div>
        </div>
      </div>
      <div className={styles.solutions}>
        <div className={styles.container}>
          <h1 className={styles.solutions_header}>Solutions</h1>
          <p className={styles.solutions_content}>Open For Builders offers a comprehensive suite of solutions aimed at addressing the challenges that early-stage cryptocurrency startups face.</p>
          <div className={styles.card_solution}>
            <div className={styles.image_wrapper}>
              <Image
                src="./compass.svg"
                alt="Mission statement"
                width={100}
                height={100}
              />
            </div>
            As an incubation firm, Open For Builders provides a robust platform that supports startups from their earliest stages. We offer guidance during the critical ideation phase, helping to transform abstract concepts into viable business models. Our support continues through the seed phase, where we help these nascent ventures navigate the choppy waters of initial development and growth.
          </div>
          <div className={styles.card_solution}>
            <div className={styles.image_wrapper}>
              <Image
                src="./lightbulb.svg"
                alt="Mission statement"
                width={100}
                height={100}
              />
            </div>
            Business and technical guidance form the bedrock of our support strategy. Our team of industry veterans and technical experts offers insightful guidance, tailored to the specific needs and challenges of each startup. From business strategy to technology implementation, we provide hands-on assistance to drive growth and innovation.
          </div>
          <div className={styles.card_solution}>
            <div className={styles.image_wrapper}>
              <Image
                src="./globe.svg"
                alt="Mission statement"
                width={100}
                height={100}
              />
            </div>
            Recognizing the importance of community engagement, Open For Builders harnesses the power of its active community members. These dedicated individuals form a robust network that can help bootstrap projects by growing their initial user base. Through engagement and interaction, startups can foster a loyal community that propels their growth.
          </div>
          <div className={styles.card_solution}>
            <div className={styles.image_wrapper}>
              <Image
                src="./book.svg"
                alt="Mission statement"
                width={100}
                height={100}
              />
            </div>
            Open For Builders also believes in the transformative power of knowledge and experience. To this end, we organize various online and offline activities, including contests, workshops, and hackathons. These platforms offer invaluable learning opportunities, empowering participants to broaden their understanding, enhance their skills, and navigate the industry with greater confidence and competence.
          </div>
          <div className={styles.card_solution}>
            <div className={styles.image_wrapper}>
              <Image
                src="./database.svg"
                alt="Mission statement"
                width={100}
                height={100}
              />
            </div>
            Open For Builders provides access to an extensive database of partnerships, investors, and other key resources. This access can be instrumental in connecting startups with potential investors, strategic partners, and industry experts. This vast network of resources provides startups with the relationships and capital they need to scale and succeed in the competitive crypto landscape.
          </div>
          <div className={styles.card_solution}>
            <div className={styles.image_wrapper}>
              <Image
                src="./magglass.svg"
                alt="Mission statement"
                width={100}
                height={100}
              />
            </div>
            Committed to the core principles of transparency and trust, Open For Builders ensures all investment-related financial transactions are tracked on the blockchain. This practice not only strengthens accountability and integrity, but also fosters a culture of openness, encouraging a shift towards responsible financing in the cryptocurrency industry.
          </div>
        </div>
      </div>
      <div className={styles.teams}>
        <div className={styles.container}>
          <h1 className={styles.team_header}>Teams</h1>
          <p className={styles.team_content}>Open For Builders is ran by veterans of the crypto industry covering all aspects of launching and operating a Web3 company.</p>
          <div className={styles.card_team}>
            <div className={styles.image_wrapper}>
              <Image
                src="./0xstim.svg"
                alt="Mission statement"
                width={100}
                height={100}
              />
            </div>
            0xStim is an experienced builder proficient in various aspects of a business, including sales, marketing, product design, and software development. He is skilled in various web frameworks and Solidity, and is capable of effectively managing independent projects as well as collaborating as part of a team. By leveraging his communication and development skills, he tirelessly helps the developer communities and crypto projects on their journey to become tech unicorns.
          </div>
          <div className={styles.card_team}>
            <div className={styles.image_wrapper}>
              <Image
                src="./lightbulb.svg"
                alt="Mission statement"
                width={100}
                height={100}
              />
            </div>
            0xStim is an experienced builder proficient in various aspects of a business, including sales, marketing, product design, and software development. He is skilled in various web frameworks and Solidity, and is capable of effectively managing independent projects as well as collaborating as part of a team. By leveraging his communication and development skills, he tirelessly helps the developer communities and crypto projects on their journey to become tech unicorns.
          </div>
          <div className={styles.card_team}>
            <div className={styles.image_wrapper}>
              <Image
                src="./lightbulb.svg"
                alt="Mission statement"
                width={100}
                height={100}
              />
            </div>
            0xStim is an experienced builder proficient in various aspects of a business, including sales, marketing, product design, and software development. He is skilled in various web frameworks and Solidity, and is capable of effectively managing independent projects as well as collaborating as part of a team. By leveraging his communication and development skills, he tirelessly helps the developer communities and crypto projects on their journey to become tech unicorns.
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.container}>
          <h1 ref={ref} className={styles.contact_header}>Contact us</h1>
          <p className={styles.contact_content}>Send us a message in the channels below</p>
          <div className={styles.social_container}>
            <a className={styles.unstyled_anchor_tag} href="https://twitter.com/openforbuilders" target="_blank" rel="noopener noreferrer">
              <div className={styles.social_button}>
                <Image
                  src="./twitter.svg"
                  alt="twitter"
                  width={40}
                  height={40}
                />
                <div className={styles.social_button_text}>Twitter</div>
              </div>
            </a>
            <a className={styles.unstyled_anchor_tag} href="https://discord.gg/FWmqVVQZ8Q" target="_blank" rel="noopener noreferrer">
              <div className={styles.social_button}>
                <Image
                  src="./discord.svg"
                  alt="discord"
                  width={40}
                  height={40}
                />
                <div className={styles.social_button_text}>Discord</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
