[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/HtkeM-HE)
# ⚡ Web Application Development CAT 2 Practical Assessment

### 🌐 JavaScript Interactivity Upgrade

> [!TIP]
> **Using VS Code?** To preview this README file with full formatting inside VS Code, press `Ctrl + Shift + V` (Windows/Linux) or `Cmd + Shift + V` (Mac).

Welcome to CAT 2! This assessment **continues directly from the Midterm**. You will take the HTML/CSS webpage you already built, carry it forward into a new repository, and bring it to life with **vanilla JavaScript** — no frameworks, no libraries, just your own logic.

This assessment combines:
- 💡 **JavaScript Fundamentals (DOM, Events, Loops, Persistence)**
- 🔁 **Iterative Development** (building on real, existing work)
- 🌳 **Working Across Multiple Git Remotes**
- 🚀 **Live Deployment Skills**

---

## 📖 Overview

In the Midterm, you designed and built a static webpage in HTML and CSS, submitted through GitHub Classroom. You no longer have push access to that Midterm repository — it is locked for grading. In CAT 2, you will **carry that existing work forward** into a new setup, add required JavaScript functionality, and **deploy it live on Render**.

> [!NOTE]
> This is a continuation, not a restart. Reusing your Midterm HTML/CSS is required. You are not building a new website — you are upgrading the one you already have.

---

## 🌳 Your Repository Setup: Two Remotes

For CAT 2, you will work with **one local project and two remote repositories**:

| Remote | Purpose | Access |
| --- | --- | --- |
| `classroom` | A new GitHub Classroom CAT 2 repository | You have write access — **this is what gets graded** |
| `origin` | A repository on your own personal GitHub account | You have full ownership — **this is what Render deploys from** |

You will push every piece of completed work to **both** remotes, every time.

> [!CAUTION]
> Your `classroom` repository contains a `.github/` folder running the autograding workflow. Do not touch it. Editing, deleting, or moving anything inside `.github/` caps your score at a maximum of 40/120, no matter how good your JavaScript is.

---

## 🎯 Your Mission

1. 🧳 **Carry your Midterm work forward** into your new CAT 2 repos *(REQUIRED — see steps below)*
2. ⚙️ **Implement** all required JavaScript functionality
3. 📌 **Commit and push to both remotes after each task** — not just once at the end
4. 🌍 **Deploy** the finished site live on Render
5. 📤 **Record your live Render link** in `submission/resources/links.txt` and push it to `classroom`

---

## 🧳 Step 1: Bring Midterm Into CAT 2

1. **Clone your `classroom` repository locally** (you've already accepted the assignment, so this repo — the one this README lives in — is your `classroom` remote):
   ```bash
   git clone <your-classroom-repo-url> cat2-work
   cd cat2-work
   ```
2. **Get your Midterm work.** Open your old Midterm GitHub Classroom repo (read-only now), click **Code → Download ZIP**, and extract it.
3. **Copy your Midterm `submission/` folder contents** into your new `cat2-work` folder. This is your starting baseline — do not rebuild it from scratch.
4. **Commit and push your baseline to `classroom`:**
   ```bash
   git add .
   git commit -m "Carry over Midterm baseline"
   git push -u classroom main
   ```
5. **Create a new, empty repository on your own personal GitHub account:**
   1. Log in to [github.com](https://github.com) with your **personal** account (not your school account, if different).
   2. Click the **+** icon (top right) → **New repository**.
   3. Give it a name, e.g. `cat2-javascript-upgrade`.
   4. Set visibility to **Public** (Render needs to be able to access it).
   5. **Do not** check "Add a README," "Add .gitignore," or "Choose a license" — leave it completely empty. If you initialize it with any files, your push in the next step will be rejected.
   6. Click **Create repository**, then copy the repository URL shown (the `https://github.com/...` link under "Quick setup").
6. **Add it as a second remote and push the same baseline there:**
   ```bash
   git remote add origin <your-personal-repo-url>
   git push -u origin main
   ```

You now have one working folder pushing to two places. Keep it that way for the rest of the assignment.

---

## 🛠️ Technical Requirements

### ⚙️ Required JavaScript Functionality

Unlike Midterm, there is no client interview this round — these features are **required of every student**, regardless of your site's subject matter. They build directly on what was covered in class. Adapt them sensibly to your content.

- [ ] 🔁 **Loop-rendered dynamic content** — a list of items (services, portfolio pieces, menu items, testimonials — whatever fits your site) stored in a JavaScript array of objects and rendered into the DOM using a loop (`forEach()` or `map()`), rather than hardcoded in HTML. Each object in your array must include a `name` property (e.g. `{ name: "Sunset Portrait Session", price: "KSh 5,000" }`) — even if you'd naturally call it something else like "title," use `name` so it's there
- [ ] ➕ **Dynamically add & remove elements** — a wishlist-style interaction: the user adds a new item through an input/button (using `createElement()` and `appendChild()`), and each item gets its own button to remove it (using `remove()`)
- [ ] ✅ **Form handling with validation feedback** — a form using `event.preventDefault()` and `.value` to read input, with visible feedback written back to the page (via `textContent` or `innerHTML`) confirming or rejecting what was submitted — not just the HTML `required` attribute
- [ ] 💾 **Persistent state with `localStorage`** — at least one feature whose state survives a page reload (e.g. a remembered theme choice, a saved/favorited item, or remembered form input)
- [ ] 🖼️ **Click-to-reveal on your banner** — clicking your banner image (the one every Midterm site already has) toggles a class that reveals a caption, short bio, or overlay text using `classList.toggle()` — the same pattern as the "Toggling Classes" example from class, just applied to one element

All five are mandatory. Each one counts as one "task" for the push requirement below.

> [!NOTE]
> Add note you may edit your HTML/CSS to accommodate these features accordingly.

### 📌 Push-After-Each-Task Requirement

You must commit and push to **both** `classroom` and `origin` after completing and testing **each** required feature — not in one giant commit at the deadline.

```bash
# after finishing one required feature, e.g. the wishlist-style add/remove
git add .
git commit -m "Add dynamic add/remove items feature"
git push classroom main
git push origin main
```

Minimum expected push history: 1 baseline commit + 5 feature commits (one per required item) = **at least 6 pushes to each remote**. Your commit history is part of how genuine, incremental progress is assessed — a single commit dumped right before the deadline will be flagged.

### 🚫 Forbidden Technologies

> [!CAUTION]
> * ❌ jQuery, React, Vue, Alpine, or any JS framework/library
> * ❌ Bootstrap, Tailwind, or any CSS framework (carried over from Midterm)
> * ❌ Copy-pasted JavaScript you don't understand or can't explain
> * ❌ Fully AI-generated solutions
>
> *You are expected to demonstrate your **own** understanding of JavaScript fundamentals. Be ready to explain any line of your code if asked.*

---

## 📁 Required Folder Structure

```text
submission/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
│   ├── sketch.jpg
│   └── banner.jpg
└── resources/
    ├── conversation.txt
    ├── implementation-notes.txt
    └── links.txt
```

> [!IMPORTANT]
> Keep your original Midterm files in place — `sketch.jpg`, `banner.jpg`, and `conversation.txt` should still be present and unchanged.
> CREATE the new `js/` folder and `script.js` file for your JavaScript logic, and the new `implementation-notes.txt` and `links.txt` in the resources folder.

> [!CAUTION]
> ### 🚨 Structure Is Heavily Penalized This Time
> In the Midterm, folder structure was checked but counted for relatively little. **CAT 2 is different.** Every required path above is checked automatically, and a missing, renamed, or misplaced file (wrong case, wrong folder, typo in a filename) now triggers a heavy, direct deduction from your final score — not just a small missed bonus. Double-check your structure against the tree above before every push, especially your final one.

### 📄 New / Updated File Descriptions

| File Path | Purpose |
| --- | --- |
| `submission/js/script.js` | All of your JavaScript logic, linked externally — no inline `<script>` logic, no `onclick="..."` attributes |
| `submission/resources/implementation-notes.txt` | A short note listing  your implementation of the required features. |
| `submission/resources/links.txt` | Your live Render deployment URL — this is the only place graders will look for your live link, so keep it current |

---

## 🌍 Deployment: Going Live on Render

Deploy from your **personal (`origin`)** repository.

1. Create a free account at [render.com](https://render.com) (you can sign in with GitHub).
2. From the Render dashboard, click **New +** → **Static Site**.
3. Connect your personal GitHub repository.
4. Set the **Root Directory** to `submission`.
5. Leave the **Build Command** blank (this is a static HTML/CSS/JS site).
6. Set the **Publish Directory** to `.`.
7. Click **Create Static Site** and wait for the deploy to finish.
8. Copy the live `.onrender.com` URL — you'll need it for submission.

> [!NOTE]
> Render auto-redeploys on every push to `origin`. Test your live link after each pushed feature.

---

## 📤 Submission Instructions

Your `classroom` repository **is** your submission — there is nothing separate to send in. Before the deadline:

1. Make sure your final code is committed and pushed to `classroom` (and `origin`).
2. Open `submission/resources/links.txt` and paste in your live `.onrender.com` URL.
3. Commit and push that update to `classroom` as your final push.

> [!IMPORTANT]
> If `link.txt` is missing your Render link, your instructor has no way to find your live deployment for grading.

---

## 🧾 Academic Integrity

**You MAY:**
- ✅ Discuss logic and approaches with classmates
- ✅ Reference MDN, documentation, and your own Midterm work
- ✅ Reuse and adapt patterns from class exercises (e.g. the loops/arrays/DOM visualizers)

**You MAY NOT:**
- ❌ Copy another student's JavaScript wholesale
- ❌ Submit AI-generated interactive features you cannot explain
- ❌ Use frameworks or libraries to shortcut DOM manipulation
- ❌ Edit, delete, or move anything inside the `.github/` folder of your `classroom` repository — this contains the autograding workflow. Any edit to it caps your score at a **maximum of 40/120**, regardless of how complete your JavaScript implementation is

Your submission should reflect your own understanding and implementation, and you should be able to walk through any feature live if asked. Your per-task commit history is part of how authentic, incremental progress is verified.

---

## 🎁 Deliverable & Deadline

**Goal:** A live, deployed webpage — building on your Midterm submission — with all four required JavaScript features implemented, pushed incrementally to both remotes.

### 🗓️ Deadline

* **Friday 03, July 2026 @ 17:59 PM.**
* The exact due date/time will be shown on your assignment page in Classroom.
* *This is a **hard deadline**. Late submissions will NOT be accepted.*

### 🗣️ Possible Explanation Session

After the deadline, some or all students may be called to briefly walk through their code in person or in a short one-on-one session.

All the best — make it move, make it useful! ⚡🚀