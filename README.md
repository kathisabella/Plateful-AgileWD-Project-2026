# Plateful — An e-Recipe Sharing Web Application

## Context
The web application Plateful was created for a group project as part of the unit CITS3403/CITS5505: Agile Web Development at [The University of Western Australia](https://www.uwa.edu.au/home) during the first semester of 2026.

---

## Project Team

| Student Name      | Student Number | GitHub Username    |
|-------------------|----------------|--------------------|
| Brandon Fong      | 24339304       | Brandonfzh         |
| Annabelle Tiew    | 24028292       | icecreampuppy1231  |
| Kathleen Isabella | 24091081       | kathisabella       |
| Kaili Zhou        | 24057973       | KylieZhou          |

---

## About

Plateful is a web-based recipe-sharing platform that provides a seamless and enjoyable environment where users can create, share, discover, and interact with a wide variety of recipes. The platform focuses on the social and collaborative aspect of cooking — encouraging users to upload their own recipes and engage with others through ratings, comments, collections, and following.

---

## Getting Started

All commands below should be run from inside the `main/` folder.

### 1. Clone the repository

```bash
git clone https://github.com/kathisabella/AgileWebDev-Project.git
cd AgileWebDev-Project/main
```

### 2. Create and activate a virtual environment

**macOS / Linux**
```bash
python3 -m venv venv
source venv/bin/activate
```

**Windows (PowerShell)**
```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Set up environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in any required values.

### 5. Run the app

```bash
flask --app app run --debug
```

### 6. Open in browser

```
http://127.0.0.1:5000
```

### 7. Stop the server

Press `Ctrl + C` to stop. Run `deactivate` to exit the virtual environment.

---

## Project Structure

```
Plateful-AgileWD-Project-2026/
├── CITS3403-User Stories.pdf
├── README.md
└── main/
    ├── app.py
    ├── requirements.txt
    ├── .env.example
    ├── static/
    │   ├── styles.css
    │   └── main.js
    └── templates/
        ├── 404.html
        ├── dashboard.html
        ├── edit_recipe.html
        ├── explore.html
        ├── forgot_password.html
        ├── login.html
        ├── mealplanner.html
        ├── my_recipes.html
        ├── privacy.html
        ├── profile.html
        ├── recipe_details.html
        ├── saved_recipe.html
        ├── settings.html
        ├── terms.html
        └── upload_recipe.html
```

---

## Tech Stack

| Layer     | Technology                  |
|-----------|-----------------------------|
| Backend   | Python · Flask              |
| Frontend  | HTML · CSS · JavaScript     |
| Templating | Jinja2                     |
| Fonts     | Google Fonts (Fraunces, Figtree) |

## Further Documentation (To Be Changed)
**This is for linking to additional user documentations (if there are any), else delete if not needed.**

## License (To Be Changed)
**If any were used, else delete if not needed.**