/*import React from 'react';

const AIAssistant = () => {
  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold'>AI Assistant</h2>
      <p>This is where the AI Assistant content will go.</p>
    </div>
  );
};

export default AIAssistant;*/
/*import React, { useState } from 'react';

const AIAssistant = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [diet, setDiet] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setDiet('Underweight - Consider a diet rich in calories and protein.');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setDiet('Normal weight - Maintain a balanced diet.');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setDiet('Overweight - Consider a diet low in calories and high in fiber.');
    } else {
      setDiet('Obesity - Consult a dietitian for a personalized diet plan.');
    }
  };

  return (
    <div className="page">
      <h2>AI Assistant</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateBMI();
        }}
      >
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <p>{diet}</p>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;*/
import React, { useState } from 'react';

const AIAssistant = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [bmiStatus, setBmiStatus] = useState('');
  const [dietPlan, setDietPlan] = useState('');

  const calculateBmi = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      determineBmiStatus(bmiValue);
      generateDietPlan(bmiValue);
    }
  };

  const determineBmiStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      setBmiStatus('Underweight');
    } else if (bmiValue < 24.9) {
      setBmiStatus('Normal weight');
    } else if (bmiValue < 29.9) {
      setBmiStatus('Overweight');
    } else {
      setBmiStatus('Obesity');
    }
  };

  const generateDietPlan = (bmiValue) => {
    if (bmiValue < 18.5) {
      setDietPlan('Increase calorie intake with nutritious foods like nuts, avocados, and whole grains.');
    } else if (bmiValue < 24.9) {
      setDietPlan('Maintain your current diet. Focus on balanced nutrition including fruits, vegetables, lean proteins, and whole grains.');
    } else if (bmiValue < 29.9) {
      setDietPlan('Consider a diet with controlled portions, focusing on lean proteins, vegetables, and whole grains.');
    } else {
      setDietPlan('Adopt a low-calorie, nutrient-dense diet. Include vegetables, lean proteins, and limit sugars and fats.');
    }
  };

  return (
    <div>
      <h2>AI Assistant</h2>
      <div>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
      </div>
      <button onClick={calculateBmi}>Calculate BMI</button>
      <div>
        <label>
          BMI:
          <input type="text" value={bmi} readOnly />
        </label>
      </div>
      <div>
        <label>
          BMI Status:
          <input type="text" value={bmiStatus} readOnly />
        </label>
      </div>
      <div>
        <label>
          Diet Plan:
          <input type="text" value={dietPlan} readOnly />
        </label>
      </div>
    </div>
  );
};

export default AIAssistant;


