import { StyledH2 } from "../../styles/styledComponents/styledTypography";
import {
  ExperienceTitle,
  ExperienceSubtitle,
  ExperienceTextBlock,
  ExperienceContainer,
  ExperienceRow,
  ExperienceCol,
  TechIconsContainer,
  TechIcon,
  ExperienceFooterImage,
  ExperienceFooterContent,
  ExperienceFooterText,
  ExperienceLink,
} from "../../styles/styledComponents/styledExperience";

function ExperiencePage({ experienceRef }) {
  return (
    <ExperienceContainer ref={experienceRef}>
      <ExperienceRow>
        <ExperienceCol>
          <div>
            <ExperienceTitle>Experience</ExperienceTitle>
          </div>
          <div className="mt-3">
            <ExperienceTextBlock>
              I have been doing web development for the past 2 years, and I'm always eager to learn
              more in this fast paced industry.
            </ExperienceTextBlock>
          </div>
          <div>
            <ExperienceSubtitle className="mb-4">
              some technologies I've worked with:
            </ExperienceSubtitle>
            <TechIconsContainer>
              <TechIcon icon="fa-brands fa-html5" iconcolor="#e34f26" />
              <TechIcon icon="fa-brands fa-css3-alt" iconcolor="#005a9c" />
              <TechIcon icon="fa-brands fa-sass" iconcolor="#c69" />
              <TechIcon icon="fa-brands fa-js" iconcolor="#f0db4f" />
              <TechIcon icon="fa-brands fa-react" iconcolor="#61dafb" />
              <TechIcon icon="fa-brands fa-bootstrap" iconcolor="#563d7c" />
              <TechIcon icon="fa-brands fa-github" iconcolor="#171515" />
              <TechIcon icon="fa-brands fa-wordpress" iconcolor="#00749c" />
            </TechIconsContainer>
          </div>
        </ExperienceCol>
        <ExperienceCol>
          <ExperienceFooterImage>
            <ExperienceFooterContent>
              <ExperienceFooterText>
                <StyledH2>Check out my résumé!</StyledH2>
                <div className="mt-5">
                  <ExperienceLink
                    href={
                      "https://drive.google.com/file/d/17wq2W2bS7mPn3MFCirxpr267izGhbKk3/view?usp=sharing"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get a copy
                  </ExperienceLink>
                </div>
              </ExperienceFooterText>
            </ExperienceFooterContent>
          </ExperienceFooterImage>
        </ExperienceCol>
      </ExperienceRow>
    </ExperienceContainer>
  );
}

export default ExperiencePage;
