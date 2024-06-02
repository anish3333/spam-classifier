# Email/SMS Spam Classifier

This web application allows users to classify email or SMS messages as spam or not spam using a pre-trained machine learning model.

## Overview

This application consists of a React front end and a Flask back end. The front end provides a user interface for inputting messages and displaying the classification results, while the back end serves the machine learning model and handles prediction requests.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd <project-directory>
   ```

3. **Install Dependencies for the React Front End:**
   ```bash
   npm install
   ```

4. **Install Dependencies for the Flask Back End:**
   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. **Start the Flask Server:**
   ```bash
   python app.py
   ```
   The Flask server will start running at [http://localhost:5000](http://localhost:5000).

2. **Start the React Front End:**
   ```bash
   npm run dev
   ```
   The React app will open in your default web browser at [http://localhost:5173](http://localhost:5173).

3. **Enter a Message:**
   Enter a message in the input field and click the "Predict" button to classify it as spam or not spam.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository.**
2. **Create a New Branch:**
   ```
   git checkout -b feature/my-feature
   ```
3. **Make Changes and Commit:**
   ```
   git commit -am "Add my feature"
   ```
4. **Push Changes to Your Fork:**
   ```
   git push origin feature/my-feature
   ```
5. **Submit a Pull Request to the `main` Branch of the Original Repository.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This project uses the following libraries and frameworks:
  - [React](https://reactjs.org/)
  - [Flask](https://flask.palletsprojects.com/)
  - [Axios](https://axios-http.com/)
  - [scikit-learn](https://scikit-learn.org/)
  - [nltk](https://www.nltk.org/)
  - [pickle](https://docs.python.org/3/library/pickle.html)

- The machine learning model used in this project was trained using the [SMS Spam Collection dataset](https://www.kaggle.com/uciml/sms-spam-collection-dataset).
