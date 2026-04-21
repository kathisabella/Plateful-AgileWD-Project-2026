"""
Plateful - Flask entry point.

Minimal skeleton for Checkpoint 3. Run locally with:

    python -m venv venv
    source venv/bin/activate        # on Windows: venv\\Scripts\\Activate.ps1
    pip install -r requirements.txt
    flask --app app run --debug

Then visit http://127.0.0.1:5000/ in a browser - you should see a
plain-text confirmation that the server is running.

Nothing here depends on the HTML files yet, so frontend work can
continue in parallel without conflicting with this module.
"""

from flask import Flask

app = Flask(__name__)


@app.route("/")
def index():
    # Placeholder route just to prove Flask is wired up correctly.
    # Once the HTML files are converted into Jinja templates under
    # templates/, swap this for `return render_template("login.html")`.
    return "Hello, Plateful - Flask is running!"


if __name__ == "__main__":
    # Allows `python app.py` as a shortcut to `flask run`.
    app.run(debug=True)
