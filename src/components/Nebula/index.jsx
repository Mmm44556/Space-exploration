import { ReactNebula } from "@flodlc/nebula";
const params = {
  "starsCount": 400,
  "starsColor": "#FFFFFF",
  "starsRotationSpeed": 1,
  "cometFrequence": 8,
  "nebulasIntensity": 0,
  "bgColor": "#000000",
  "sunScale": 1.2,
  "planetsScale": 2,
  "solarSystemOrbite": 0,
  "solarSystemSpeedOrbit": 30

}
export default function Nebula() {
  return (
    <>
      <ReactNebula config={params} />
    </>
  );
}
