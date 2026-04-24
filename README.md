# Plateful - An e-Recipe Sharing Web Application

## Context
The web application Plateful was created for a group project as part of the unit CITS3403/CITS5505: Agile Web Development at [The University of Western Australia](https://www.uwa.edu.au/home) during the first semester of 2026.

## Project Team
|    Student Name   | Student Number |  GitHub Username  |
|-------------------|----------------|-------------------|
| Brandon Fong      | 24339304       | Brandonfzh        |
| Annabelle Tiew    | 24028292       | icecreampuppy1231 |
| Kathleen Isabella | 24091081       | kathisabella      |
| Kaili Zhou        | 24057973       | KylieZhou         |

## Summary
Plateful is a web-based recipe-sharing platform whose purpose is to provide a seamless and enjoyable environment where users can create, share, discover, and interact with a wide variety of recipes. The web application will focus on the social and collaborative aspect of cooking, encouraging users to not only upload their own recipes, but also engage with other members through ratings, comments, collections, and following. 

## Project Setup (To Be Changed)

All commands below are to be run from inside the main/ folder.

1.Clone the repo and move into the app folder
    git clone https://github.com/kathisabella/AgileWebDev-Project.git
    cd AgileWebDev-Project/main

2.Create and activate venv(virtual environment)
macOS/Linux:
    python3 -m venv venv
    source venv/bin/activate

Windows(PowerShell):
    python -m venv venv
    .\venv\Scripts\Activate.ps1

3.To **install dependencies** from `main/` run:

    $ pip install -r requirements.txt

4.Set up or RENAME the .env(environment variables)
    cp .env.example .env

5.To **run** the app, from `main/` run: 
    flask --app app run --debug

6.The webpage can be accessed via `https://127.0.0.1:5000`.

7.To stop the server, press Ctrl+C. To deactivate the venv when you're done, type deactivate.

## Project Structure (To Be Updated)
To be updated until project completion
```
Plateful-AgileWD-Project-2026/
├── CITS3403-User Stories.pdf
├── README.md
└── main
    ├── app.py
    ├── requirements.txt
    ├── static
    │   └── styles.css
    └── templates
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

## Further Documentation (To Be Changed)
**This is for linking to additional user documentations (if there are any), else delete if not needed.**

## License (To Be Changed)
**If any were used, else delete if not needed.**
