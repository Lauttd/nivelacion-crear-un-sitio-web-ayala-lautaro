from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Flask busca automáticamente en la carpeta /templates
    return render_template('index.html')

if __name__ == '__main__':
    # Ejecuta el servidor en el puerto 5000
    print("Servidor corriendo en http://localhost:5000")
    app.run(debug=True, port=5000);