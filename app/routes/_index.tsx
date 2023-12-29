import { useState, useEffect } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLoaderData } from '@remix-run/react';
import quizData from '~/quizData.json';

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export function loader() {
  return { quizData };
}

export default function Index() {
  const { quizData } = useLoaderData();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userAnswerStyle, setUserAnswerStyle] = useState('');
  const [timer, setTimer] = useState(10);
  const [showSummary, setShowSummary] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  useEffect(() => {
    const selected = shuffleArray(quizData).slice(0, 10);
    setSelectedQuestions(selected);
  }, []);

  useEffect(() => {
    let timerInterval;
    if (!showSummary) {
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            handleTimeout();
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [currentQuestionIndex, showSummary]);

  useEffect(() => {
    if (currentQuestionIndex < selectedQuestions.length) {
      const options = selectedQuestions[currentQuestionIndex].options;
      setShuffledOptions(shuffleArray(options));
    }
  }, [currentQuestionIndex, selectedQuestions]);

  const handleAnswerClick = (answer) => {
    const isCorrect = answer === selectedQuestions[currentQuestionIndex].correctAnswer;
    setUserAnswer(answer);
    setTimeout(() => {
      setUserAnswer('');
      setTimer(10);
      moveToNextQuestion(isCorrect);
    }, 1000);
    setUserAnswerStyle(isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white');
  };

  const moveToNextQuestion = (isCorrect) => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setUserAnswerStyle('');
      setUserAnswer('');
      setTimer(10);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      if (isCorrect) {
        setCorrectAnswersCount((prevCount) => prevCount + 1);
      }
    } else {
      console.log('End of Quiz');
      setCorrectAnswersCount((prevCount) => prevCount + (isCorrect ? 1 : 0));
      setShowSummary(true);
    }
  };

  const handleTimeout = () => {
    setUserAnswerStyle('bg-red-500 text-white');
    setTimeout(() => {
      setUserAnswerStyle('');
      setUserAnswer('');
      setTimer(10);
      moveToNextQuestion(false);
    }, 1000);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setUserAnswerStyle('');
    setTimer(10);
    setShowSummary(false);
    setCorrectAnswersCount(0);
  };

  const renderQuizContent = () => {
    if (selectedQuestions.length === 0) {
      return <div>Loading...</div>;
    }

    if (showSummary) {
      return (
        <div>
          <h2 className="text-xl font-semibold mb-4">Quiz Summary</h2>
          <p>You answered {correctAnswersCount} out of {selectedQuestions.length} questions correctly.</p>
          <Button className="mt-4" onClick={handleRestart}>
            Restart Quiz
          </Button>
        </div>
      );
    } else {
      return (
        <>
          <h2 className="text-xl font-semibold">Current Question:</h2>
          <p className="text-lg text-gray-300">{selectedQuestions[currentQuestionIndex].question}</p>
          <div className="grid grid-cols-2 gap-4">
            {shuffledOptions.map((option, index) => (
              <Button
                key={index}
                className={`text-black font-semibold border-white ${userAnswer === option ? userAnswerStyle : 'hover:bg-gray-300'}`}
                variant="outline"
                onClick={() => handleAnswerClick(option)}
                disabled={userAnswer !== ''}
              >
                {option}
              </Button>
            ))}
          </div>
        </>
      );
    }
  };

  return (
    <Card className="bg-gray-800 text-white rounded-xl shadow-lg overflow-hidden">
      <CardHeader className="p-4">
        <CardTitle className="text-2xl font-bold">Quiz Game</CardTitle>
        <CardDescription className="text-sm text-gray-300">Answer the questions correctly to win!</CardDescription>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        {renderQuizContent()}
      </CardContent>
      <CardFooter className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <TimerIcon className="w-4 h-4 mr-2" />
            <span className="text-sm">Time remaining: {timer}s</span>
          </div>
          <div className="w-full ml-2">
            <div className="h-2 bg-gray-600 rounded">
              <div className={`h-2 ${timer > 5 ? 'bg-green-500' : 'bg-red-500'} rounded w-${(timer / 10) * 100}%`} />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

function TimerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  );
}
