import HeroImage from "static/Hero.jpg";

export const hero_style = {
  backgroundImage: `url(${HeroImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "85vh",
  backgroundPositionY: "80%"
}

export const inner_hero_style = {
  backgroundColor: "#0000008C",
  width: "85vw",
  height: "70vh",
  display: "flex",
  paddingTop: "15vh",
  paddingLeft: "15vw",
  flexDirection: "column" as "column",
  gap: "30px"
}
