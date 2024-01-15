from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Une liste simple pour stocker les utilisateurs (à remplacer par une base de données dans un environnement de production)
users = []


@app.route('/')
def home():
  return render_template('home.html')


@app.route('/signup', methods=['GET', 'POST'])
def signup():
  if request.method == 'POST':
    firstname = request.form['firstname']
    lastname = request.form['lastname']
    username = request.form['username']
    password = request.form['password']
    email = request.form['email']
    birthdate = request.form['birthdate']

    # Ajoutez la vérification des données ici (comme dans votre script JavaScript)

    # Stocke l'utilisateur dans la liste (à remplacer par une base de données dans un environnement de production)
    users.append({
        'username': username,
        'password': password,
        'email': email,
        'birthdate': birthdate
    })
    print(users)

    return redirect(url_for('home'))
  return render_template('signup.html')


if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3000, debug=True)
