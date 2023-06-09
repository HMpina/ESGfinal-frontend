import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { addPoints, HEART_POINTS } from '../../components/Header/gamification';

const Food: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [foodData, setFoodData] = useState<any>(null);

  const handleSearch = async () => {
    if (searchTerm.trim() !== '') {
      try {
        const response = await fetch(
          `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchTerm}&requireAllWords=true&numberOfResultsPerPage=1&pageSize=1&api_key=kxd1dCxDe2hM7vnralysUOalzijPSQxZnTLfvFHS`
        );
        const data = await response.json();
        if (data.foods && data.foods.length > 0) {
          const food = data.foods[0];
          const nutrient1004 = food.foodNutrients.find(
            (nutrient: any) => nutrient.nutrientId === 1004
          );
          if (nutrient1004) {
            setFoodData({ food, nutrient1004 });
            if (nutrient1004.value <= 5) {
              // Adicionar 5 pontos ao HEART_POINTS
              addPoints(5, 'HEART_POINTS');
            }
          } else {
            setFoodData(null);
          }
        } else {
          setFoodData(null);
        }
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    }
  };

  const renderMessage = () => {
    if (foodData && foodData.nutrient1004.value <= 5) {
      return (
        <p>
          Você fez uma escolha saudável para sua alimentação. Ganhou 5 pontos!
        </p>
      );
    } else {
      return (
        <p>
          Faça uma escolha com menor gordura para ganhar 5 pontos!
        </p>
      );
    }
  };

  return (
    <Container>
      <h1>O que você comeu hoje?</h1>
      <div>
        <input placeholder='utilize inglês para buscar'
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      {foodData && (
        <div>
          <h2>Informações do alimento:</h2>
          <p>Buscado: {foodData.food.description}</p>
          <p>Gordura: {foodData.nutrient1004.nutrientName}</p>
          <p>
            Quantidade: {foodData.nutrient1004.value}
            {foodData.nutrient1004.unitName}
          </p>
          {renderMessage()}
        </div>
      )}
    </Container>
  );
};

export default Food;
