import { H3, serve } from "h3";
import redmineRoutes from "./redmine.mjs";

const app = new H3().get("/", (event) => "⚡️ Tadaa!");
app.mount("/redmine", redmineRoutes);

serve(app, { port: 3000 });
