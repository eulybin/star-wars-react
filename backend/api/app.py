from flask import Flask, jsonify
from data import people, planets

app = Flask(__name__)


# get a list of all the PEOPLE
@app.get("/people")
def get_people():
    return jsonify(people), 200


# get one single PERSON info
@app.get("/people/<int:person_id>")
def get_person(person_id):
    person = people["results"][person_id - 1]
    return jsonify(person), 200


# get a list of all the PLANETS
@app.get("/planets")
def get_planets():
    return jsonify(planets), 200


# get one single PLANET info
@app.get("/planets/<int:planet_id>")
def get_planet(planet_id):
    planet = planets["results"][planet_id - 1]
    return jsonify(planet), 200
