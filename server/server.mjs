import { H3, serve } from "h3";
import route from "./redmine/projects.mjs";

const app = new H3().get("/", (event) => "⚡️ Tadaa!");
app.mount("/redmine", route);

serve(app, { port: 3000 });
