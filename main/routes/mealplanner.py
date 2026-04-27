import random
from datetime import datetime
from flask import request, session


DAYS = [
    "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday", "Sunday"
]

MEAL_TYPES = ["Breakfast", "Lunch", "Dinner"]


SAVED_RECIPES = [
    {"id": 1, "name": "Avocado Toast", "meal_type": "Breakfast", "time": 10, "tag": "quick"},
    {"id": 2, "name": "Banana Oats", "meal_type": "Breakfast", "time": 8, "tag": "healthy"},
    {"id": 3, "name": "Egg Sandwich", "meal_type": "Breakfast", "time": 12, "tag": "easy"},

    {"id": 4, "name": "Chicken Wrap", "meal_type": "Lunch", "time": 20, "tag": "protein"},
    {"id": 5, "name": "Pasta Salad", "meal_type": "Lunch", "time": 18, "tag": "simple"},
    {"id": 6, "name": "Fried Rice", "meal_type": "Lunch", "time": 25, "tag": "budget"},

    {"id": 7, "name": "Beef Noodles", "meal_type": "Dinner", "time": 30, "tag": "filling"},
    {"id": 8, "name": "Salmon Bowl", "meal_type": "Dinner", "time": 28, "tag": "balanced"},
    {"id": 9, "name": "Vegetable Curry", "meal_type": "Dinner", "time": 35, "tag": "vegetarian"}
]


def get_recipes_for_meal(meal_type):
    recipes = []

    for recipe in SAVED_RECIPES:
        if recipe["meal_type"] == meal_type:
            recipes.append(recipe)

    return recipes


def choose_recipe(meal_type, used_recipe_ids):
    possible_recipes = get_recipes_for_meal(meal_type)

    unused_recipes = []
    for recipe in possible_recipes:
        if recipe["id"] not in used_recipe_ids:
            unused_recipes.append(recipe)

    if len(unused_recipes) == 0:
        unused_recipes = possible_recipes

    selected_recipe = random.choice(unused_recipes)
    used_recipe_ids.append(selected_recipe["id"])

    return selected_recipe


def make_week_plan():
    week_plan = {}
    used_recipe_ids = []

    for day in DAYS:
        week_plan[day] = {}

        for meal_type in MEAL_TYPES:
            week_plan[day][meal_type] = choose_recipe(meal_type, used_recipe_ids)

    return week_plan


def shuffle_single_day(current_plan, day):
    used_recipe_ids = []

    for plan_day in current_plan:
        if plan_day != day:
            for meal_type in current_plan[plan_day]:
                used_recipe_ids.append(current_plan[plan_day][meal_type]["id"])

    current_plan[day] = {}

    for meal_type in MEAL_TYPES:
        current_plan[day][meal_type] = choose_recipe(meal_type, used_recipe_ids)

    return current_plan


def get_plan_stats(week_plan):
    meals_filled = 0
    quickest_recipe = None

    for day in week_plan:
        for meal_type in week_plan[day]:
            recipe = week_plan[day][meal_type]
            meals_filled += 1

            if quickest_recipe is None or recipe["time"] < quickest_recipe["time"]:
                quickest_recipe = recipe

    return {
        "saved_count": len(SAVED_RECIPES),
        "meals_filled": meals_filled,
        "quickest_meal": quickest_recipe["name"],
        "planner_mode": "Weekly"
    }


def get_meal_planner_context():
    shuffle_type = request.args.get("shuffle")
    shuffle_day = request.args.get("day")

    if "meal_plan" not in session:
        session["meal_plan"] = make_week_plan()

    if shuffle_type == "week":
        session["meal_plan"] = make_week_plan()

    elif shuffle_type == "day" and shuffle_day in DAYS:
        current_plan = session["meal_plan"]
        session["meal_plan"] = shuffle_single_day(current_plan, shuffle_day)

    stats = get_plan_stats(session["meal_plan"])

    return {
        "page_title": "Plateful Meal Planner",
        "greeting": "Welcome back",
        "page_date": datetime.now().strftime("%A, %d %B %Y"),
        "initials": "ST",
        "display_name": "Student User",
        "username": "@student",
        "days": DAYS,
        "meal_types": MEAL_TYPES,
        "week_plan": session["meal_plan"],
        "saved_recipes": SAVED_RECIPES,
        "stats": stats
    }