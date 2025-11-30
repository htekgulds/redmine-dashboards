import axios from "axios";
import { REDMINE_URL, REDMINE_API_KEY } from "./config.js";

const client = axios.create({
  baseURL: REDMINE_URL,
  headers: { "X-Redmine-API-Key": REDMINE_API_KEY }
});

export async function getIssues(params) {
  const { data } = await client.get("/issues.json", { params });
  return data.issues;
}

export async function getTimeEntries(params) {
  const { data } = await client.get("/time_entries.json", { params });
  return data.time_entries;
}

export async function getProjects() {
  const { data } = await client.get("/projects.json");
  return data.projects;
}

export async function getUsers() {
  const { data } = await client.get("/users.json");
  return data.users;
}
