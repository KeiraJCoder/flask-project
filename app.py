from flask import Flask, Blueprint, render_template, url_for, redirect

#create a 'blueprint' of the website structure.
views = Blueprint(__name__, "views")

#the website is degined as a flask app and the url prefix is set to '/'
app = Flask(__name__)
app.register_blueprint(views, url_prefix = "/")

#this is how homepage i accessed
@app.route("/")#the page is accessed via the '/'
def homepage(): #this is the homepage function.
    return render_template("index.html", username="Keira")
    

###################################################

@app.route("/next")
def nextpage():
    return render_template("next.html", username="Keira")

###################################################

@app.route("/next2")
def next2page():
    return render_template("next2.html", username="Keira")

###################################################

@app.route("/next3")
def next3page():
    return render_template("next3.html", username="Keira")

###################################################

@app.route("/next4")
def next4page():
    return render_template("next4.html", username="Keira")

###################################################

@app.route("/next5")
def next5page():
    return render_template("next5.html", username="Keira")

###################################################

@app.errorhandler(404)
def page_not_found(e):
    return render_template("page_not_found.html")

@app.errorhandler(500)
def internal_server_error(e):
    return render_template("internal_server_error.html")





#debugging is activated and the project is set to be hosted on port 8000.
#(debugging should only be used for testing purposes)
if __name__ =="__main__":
    app.run(debug = True, port = 8000)
 