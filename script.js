
const postInput = document.getElementById("postInput");
const postButton = document.getElementById("postButton");
const posts = document.getElementById("posts");

// Membuat postingan baru
postButton.addEventListener("click", () => {
  const content = postInput.value.trim();

  if (!content) {
    alert("Silakan tulis sesuatu terlebih dahulu!");
    return;
  }

  const post = document.createElement("article");
  post.className = "post";

  const header = document.createElement("div");
  header.className = "post-header";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = "J";

  const user = document.createElement("div");
  const name = document.createElement("strong");
  name.textContent = "Pengguna SOCIALX";

  const time = document.createElement("small");
  time.textContent = "Baru saja · Publik";

  user.append(name, time);
  header.append(avatar, user);

  const paragraph = document.createElement("p");
  paragraph.textContent = content;

  const stats = document.createElement("div");
  stats.className = "post-stats";
  stats.innerHTML = `
    <span class="like-count">❤️ 0 suka</span>
    <span>0 komentar</span>
  `;

  const actions = document.createElement("div");
  actions.className = "post-actions";
  actions.innerHTML = `
    <button class="like-button">♡ Suka</button>
    <button>♧ Komentar</button>
    <button>↗ Bagikan</button>
  `;

  post.append(header, paragraph, stats, actions);
  posts.prepend(post);

  postInput.value = "";
});

// Sistem like
document.addEventListener("click", (event) => {
  const button = event.target.closest(".like-button");

  if (!button) return;

  const post = button.closest(".post");
  const count = post.querySelector(".like-count");

  const liked = button.classList.toggle("liked");

  let likes = Number(count.dataset.likes || 0);
  likes += liked ? 1 : -1;

  count.dataset.likes = likes;
  count.textContent = `❤️ ${likes} suka`;

  button.textContent = liked ? "♥ Disukai" : "♡ Suka";
});
