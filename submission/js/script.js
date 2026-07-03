// FEATURE 1: Loop-rendered dynamic content
var programs = [
  { name: "Music & Performing Arts", description: "Choir, instruments, and drama clubs", slots: 30 },
  { name: "Sports Academy", description: "Football, athletics, and swimming programs", slots: 25 },
  { name: "Scouts & Guides", description: "Leadership, camping, and community service", slots: 20 },
  { name: "Science Club", description: "Experiments, innovations, and science fairs", slots: 15 },
  { name: "Art & Craft", description: "Drawing, painting, and creative crafts", slots: 20 },
  { name: "Debate Society", description: "Public speaking, debate, and spokenword", slots: 15 }
];

function renderPrograms() {
  var container = document.getElementById("programs-list");
  if (!container) return;
  container.innerHTML = "";

  programs.forEach(function(program) {
    var card = document.createElement("div");
    card.className = "program-card";

    var title = document.createElement("h3");
    title.textContent = program.name;

    var desc = document.createElement("p");
    desc.textContent = program.description;

    var slots = document.createElement("span");
    slots.className = "slots";
    slots.textContent = "Available slots: " + program.slots;

    var btn = document.createElement("button");
    btn.className = "add-wishlist-btn";
    btn.textContent = "+ Add to Wishlist";
    btn.setAttribute("data-name", program.name);
    btn.addEventListener("click", function() {
      addToWishlist(this.getAttribute("data-name"));
    });

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(slots);
    card.appendChild(btn);
    container.appendChild(card);
  });
}
// FEATURE 5: Click-to-reveal on banner
function setupBannerReveal() {
  var banner = document.querySelector(".hero-image");
  if (!banner) return;

  banner.addEventListener("click", function() {
    var caption = document.getElementById("banner-caption");
    if (caption) {
      caption.classList.toggle("visible");
    }
  });
}
// Initialize on page load
document.addEventListener("DOMContentLoaded", function() {
  renderPrograms();
  loadWishlist();
  renderWishlist();
  setupCustomAdd();
  setupFormValidation();
  setupThemeToggle();
  setupBannerReveal();
});

// FEATURE 4: Persistent state with localStorage
function setupThemeToggle() {
  var toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  // restore saved theme on load
  var savedTheme = localStorage.getItem("sacwa-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");//realistically who likes light mode😂😂🤦‍♀️
    toggle.textContent = "Light Mode";
  }

  toggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("sacwa-theme", "dark");
      toggle.textContent = "Light Mode";
    } else {
      localStorage.setItem("sacwa-theme", "light");
      toggle.textContent = "Dark Mode";
    }
  });
}
// FEATURE 5: Click-to-reveal on banner
function setupBannerReveal() {
  var banner = document.querySelector(".hero-image");
  if (!banner) return;

  banner.addEventListener("click", function() {
    var caption = document.getElementById("banner-caption");
    if (caption) {
      caption.classList.toggle("visible");
    }
  });
}
// Initialize on page load
document.addEventListener("DOMContentLoaded", function() {//eventlistener for when the DOM is fully loaded
  renderPrograms();
  loadWishlist();
  renderWishlist();
  setupCustomAdd();
  setupFormValidation();
  setupThemeToggle();
  setupBannerReveal();
});
// FEATURE 2: Dynamically add & remove elements
var wishlist = [];

function loadWishlist() {
  var saved = localStorage.getItem("sacwa-wishlist");
  if (saved) {
    wishlist = JSON.parse(saved);
  }
}

function saveWishlist() {
  localStorage.setItem("sacwa-wishlist", JSON.stringify(wishlist));
}

function addToWishlist(itemName) {
  if (!itemName || itemName.trim() === "") return;
  itemName = itemName.trim();

  // no duplicates
  if (wishlist.indexOf(itemName) !== -1) {
    showWishlistFeedback(itemName + " is already on your wishlist!");
    return;
  }

  wishlist.push(itemName);
  saveWishlist();
  renderWishlist();
  showWishlistFeedback(itemName + " added!");
}

function removeFromWishlist(itemName) {
  wishlist = wishlist.filter(function(item) {
    return item !== itemName;
  });
  saveWishlist();
  renderWishlist();
}

function renderWishlist() {
  var list = document.getElementById("wishlist-items");
  var countEl = document.getElementById("wishlist-count");
  if (!list) return;

  list.innerHTML = "";

  if (wishlist.length === 0) {
    var empty = document.createElement("p");
    empty.className = "wishlist-empty";
    empty.textContent = "No items found. Add activities from above!";
    list.appendChild(empty);
  } else {
    wishlist.forEach(function(item) {
      var li = document.createElement("li");
      li.className = "wishlist-item";

      var nameSpan = document.createElement("span");
      nameSpan.textContent = item;

      var removeBtn = document.createElement("button");
      removeBtn.className = "remove-btn";
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", function() {
        li.remove();
        removeFromWishlist(item);
      });

      li.appendChild(nameSpan);
      li.appendChild(removeBtn);
      list.appendChild(li);
    });
  }

  if (countEl) {
    countEl.textContent = wishlist.length;
  }
}

function showWishlistFeedback(message) {
  var feedback = document.getElementById("wishlist-feedback");
  if (!feedback) return;
  feedback.textContent = message;
  feedback.style.display = "block";
  setTimeout(function() {
    feedback.style.display = "none";
  }, 2500);
}

function setupCustomAdd() {
  var addBtn = document.getElementById("custom-add-btn");
  var input = document.getElementById("custom-wishlist-input");
  if (!addBtn || !input) return;

  addBtn.addEventListener("click", function() {
    addToWishlist(input.value);
    input.value = "";
  });

  input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      addToWishlist(input.value);
      input.value = "";
    }
  });
}
// FEATURE 3: Form handling with validation
function setupFormValidation() {
  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var nameInput = document.getElementById("form-name");
    var emailInput = document.getElementById("form-email");
    var messageInput = document.getElementById("form-message");
    var feedback = document.getElementById("form-feedback");

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    // validation
    if (name === "") {
      feedback.textContent = "Please enter your name.";
      feedback.className = "form-feedback error";
      nameInput.focus();
      return;
    }

    if (name.length < 2) {
      feedback.textContent = "Name must be at least 2 characters.";
      feedback.className = "form-feedback error";
      nameInput.focus();
      return;
    }

    if (email === "") {
      feedback.textContent = "Please enter your email address.";
      feedback.className = "form-feedback error";
      emailInput.focus();
      return;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      feedback.textContent = "Please enter a valid email address.";
      feedback.className = "form-feedback error";
      emailInput.focus();
      return;
    }

    if (message === "") {
      feedback.textContent = "Please enter a message.";
      feedback.className = "form-feedback error";
      messageInput.focus();
      return;
    }

    if (message.length < 10) {
      feedback.textContent = "Message should be at least 10 characters.";
      feedback.className = "form-feedback error";
      messageInput.focus();
      return;
    }

    // success
    feedback.textContent = "Thank you, " + name + "! Your message has been received. We will reply to " + email + " shortly.";
    feedback.className = "form-feedback success";

    // clear form fields
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  });
}