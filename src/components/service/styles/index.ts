import ServiceImage from "static/Service.jpg";

export const service_style = {
  backgroundImage: `url(${ServiceImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "85vh",
  backgroundPositionY: "80%"
}

export const inner_service_style = {
  backgroundColor: "#00000090",
  width: "85vw",
  height: "70vh",
  display: "flex",
  paddingTop: "15vh",
  paddingLeft: "15vw",
  flexDirection: "column" as "column",
  gap: "30px"
}
