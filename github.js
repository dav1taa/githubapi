const input = document.querySelector("input");
const btn = document.querySelector(".searchbtn");

const user = document.querySelector(".githubUser");
const login = document.querySelector(".githubUserName");
const joined = document.querySelector(".githubJoinedDate");
const repo = document.querySelector(".repoTotal");
const follower = document.querySelector(".followerTotal");
const following = document.querySelector(".followingTotal");
const locations = document.querySelector(".locations");
const twit = document.querySelector(".twit");
const websites = document.querySelector(".websites");
const companies = document.querySelector(".companies");
const gitBio = document.querySelector(".githubBio");
let img = document.createElement("img");
let block = document.querySelector(".mainImg");

btn.addEventListener("click", function () {
    const url = `https://api.github.com/users/${input.value}`;
    async function getUrl() {
        const response = await fetch(url);
        const data = await response.json();
        const dateData = data.created_at.slice(0, data.created_at.length - 10);

    img.src = data.avatar_url;
    block.appendChild(img);
    block.style.border = "none";

    user.innerHTML = data.name;
    login.innerHTML = `@${data.login}`;
    joined.innerHTML = `Joined ${dateData}`;
    repo.innerHTML = data.public_repos;
    follower.innerHTML = data.followers;
    following.innerHTML = data.following;
    }
    getUrl();
});

