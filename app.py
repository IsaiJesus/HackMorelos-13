from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

# mmap_mode=None
modelo_brain_stroke = joblib.load('brain_stroke.pkl')
modelo_cardiovascular_disease = joblib.load('cardiovascular_disease.pkl')
modelo_lung_cancer = joblib.load('lung_cancer.pkl')
modelo_obesity = joblib.load('obesity.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    gender = data['sexo']
    age = data['edad']
    height = data['altura']
    weight = data['peso']
    bmi = data['bmi']
    smoking = data['fumador']
    alcohol = data['alcohol']
    activity = data['actividad']

    smoking_level = 0
    if smoking == 1:
        smoking_level = 3

    features_brain_stroke = [gender, age, bmi, smoking_level]
    prediction_brain_stroke = modelo_brain_stroke.predict([features_brain_stroke])[0]

    #ver actividad
    features_cardiovascular_disease = [age, gender, height, weight, smoking, alcohol, activity]
    prediction_cardiovascular_disease = modelo_cardiovascular_disease.predict([features_cardiovascular_disease])[0]

    features_lung_cancer = [gender, age, smoking, alcohol]
    prediction_lung_cancer = modelo_lung_cancer.predict([features_lung_cancer])[0]

    features_obesity = [age, gender, height, weight, bmi]
    prediction_obecity = modelo_obesity.predict([features_obesity])[0]

    print('Predicción de infarto cerebral: ', prediction_brain_stroke )
    print('Predicción de enfermedades cardiovasculares: ', prediction_cardiovascular_disease)
    print('Predicción de cáncer de pulmón: ', prediction_lung_cancer)
    print('Predicción de obesidad: ', prediction_obecity)
    
    return jsonify(
        {'Predicción de infarto cerebral': prediction_brain_stroke.tolist()}, 
        {'Predicción de enfermedades cardiovasculares': prediction_cardiovascular_disease.tolist()},
        {'Predicción de cáncer de pulmón': prediction_lung_cancer.tolist()},
        {'Predicción de obesidad': prediction_obecity.tolist()}
        )

if __name__ == '__main__':
    app.run(debug=True)
    