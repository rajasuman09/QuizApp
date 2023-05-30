import api from '../config';
import axios from 'axios';

const quizApi = {
  async getQuestion(category) {
    try {
      console.log(`${api.quiz.url}/${category}`);
      const apiResponse = await axios.get(`${api.quiz.url}/${category}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (apiResponse) {
        return apiResponse.data;
      } else return {};
    } catch (err) {
      console.log('Quiz Api Error', err);
      return {};
    }
  },
  async getAnswer(id) {
    try {
      const apiResponse = await axios.get(`${api.quiz.url}/reveal?id=${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (apiResponse) {
        return apiResponse.data;
      } else return {};
    } catch (err) {
      console.log('Quiz Api Error', err);
      return {};
    }
  },
};

export default quizApi;
