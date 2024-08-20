import { saveHandler } from "../../utils";
import { usePayload } from "../../hooks/usePayload";

const Save = () => {
  const { payload } = usePayload();
  const goHome = () => window.location.replace("https://zzik-scandiweb.netlify.app/");
  const saveLogic = () => saveHandler(payload);

  return (
    <>
      <button onClick={() => saveLogic()}>Save</button>
      <button onClick={() => goHome()}>CANCEL</button>
    </>
  );
};

export default Save;
