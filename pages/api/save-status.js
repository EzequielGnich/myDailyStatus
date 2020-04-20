import auth0 from "../../lib/auth0";
import { setStatus } from "../../lib/markers";

const saveStatus = async (request, response) => {
  const session = await auth0.getSession(request);

  if (session) {
    const { status, coords } = request.body;
    await setStatus(session.user.sub, status, coords);
  }
  response.send({ msg: "ok" });
};

export default saveStatus;
