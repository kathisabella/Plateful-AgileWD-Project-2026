from app import db

class Recipe(db.Model):
    #create/edit recipes
    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(120), nullable=False)
    cuisine = db.Column(db.String(50), nullable=True)
    difficulty = db.Column(db.String(20), nullable=True)

    prep_time = db.Column(db.String(20), nullable=True)
    servings = db.Column(db.Integer, nullable=True)

    description = db.Column(db.Text, nullable=True)
    ingredients = db.Column(db.Text, nullable=True)
    steps = db.Column(db.Text, nullable=True)

    image_filename = db.Column(db.String(200), nullable=True)
    
    #save recipes for mealplanner use
    meal_type = db.Column(db.String(30), nullable=True)


    def __repr__(self):
        return f"<Recipe {self.title}>"