require("dotenv").config();
const express = require("express");

const app = express();

const port = 4000;

const githuData = {
  login: "qureshi81",
  id: 36919135,
  node_id: "MDQ6VXNlcjM2OTE5MTM1",
  avatar_url: "https://avatars.githubusercontent.com/u/36919135?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/qureshi81",
  html_url: "https://github.com/qureshi81",
  followers_url: "https://api.github.com/users/qureshi81/followers",
  following_url:
    "https://api.github.com/users/qureshi81/following{/other_user}",
  gists_url: "https://api.github.com/users/qureshi81/gists{/gist_id}",
  starred_url: "https://api.github.com/users/qureshi81/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/qureshi81/subscriptions",
  organizations_url: "https://api.github.com/users/qureshi81/orgs",
  repos_url: "https://api.github.com/users/qureshi81/repos",
  events_url: "https://api.github.com/users/qureshi81/events{/privacy}",
  received_events_url: "https://api.github.com/users/qureshi81/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 16,
  public_gists: 0,
  followers: 0,
  following: 4,
  created_at: "2018-02-28T10:36:36Z",
  updated_at: "2026-06-10T21:33:47Z"
};

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/twitter", (req, res) => {
  res.send("azaandotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1> please login at naseem portal</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Hashim chai aur raat ka andhera</h2>");
});

app.get("/github", (req, res) => {
  res.json(githuData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
