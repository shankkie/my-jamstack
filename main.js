const listRepos = async (username) => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  const markup = repos
    .map((repo) => ` <li><a href="${repo.html_url}">${repo.name}</a></li>`)
    .join('');

  const div = document.getElementById('content');

  div.innerHTML = `<ul>${markup}</ul>`;
};

listRepos('shankkie');
