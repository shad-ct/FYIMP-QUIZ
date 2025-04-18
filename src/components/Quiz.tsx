
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { edpQuestions } from "@/data/edpQuestions";
import { fcsQuestions } from "@/data/fcsQuestions";
import { physicalQuestions } from "@/data/physicalQuestions";
import { statiQuestions } from "@/data/statiQuestions";
import { mathsQuestions } from "@/data/mathsQuestions";
import { toast } from "@/hooks/use-toast";

const questionSets = {
  edp: edpQuestions,
  fcs: fcsQuestions,
  physical: physicalQuestions,
  stati: statiQuestions,
  maths: mathsQuestions,
};

interface Answer {
  questionIndex: number;
  selectedOption: string;
  isCorrect: boolean;
}

export function Quiz() {
  const { subjectId, moduleId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (subjectId && moduleId && questionSets[subjectId as keyof typeof questionSets]) {
      setQuestions(questionSets[subjectId as keyof typeof questionSets][moduleId as keyof typeof edpQuestions].questions);
      setAnswers([]);
      setShowResults(false);
    }
  }, [subjectId, moduleId]);

  const handleAnswerSelect = (selectedOption: string) => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = {
        questionIndex: currentQuestion,
        selectedOption,
        isCorrect
      };
      return newAnswers;
    });

    toast({
      title: isCorrect ? "Correct!" : "Incorrect",
      description: isCorrect ? "Well done!" : `The correct answer was: ${questions[currentQuestion].answer.toUpperCase()}`,
      variant: isCorrect ? "default" : "destructive",
    });
  };

  const calculateScore = () => {
    const correctAnswers = answers.filter(answer => answer?.isCorrect).length;
    return {
      correct: correctAnswers,
      total: questions.length,
      percentage: Math.round((correctAnswers / questions.length) * 100)
    };
  };

  if (!questions.length) return <div>Loading...</div>;

  const score = calculateScore();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-2 overflow-x-auto py-2">
          {questions.map((_, index) => (
            <Button
              key={index}
              variant={currentQuestion === index ? "default" : "outline"}
              onClick={() => setCurrentQuestion(index)}
              className={answers[index] ? 
                (answers[index].isCorrect ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600") 
                : undefined}
            >
              {index + 1}
            </Button>
          ))}
        </div>
        <Button onClick={() => setShowResults(true)} variant="outline">
          Complete Quiz
        </Button>
      </div>

      <Card className="p-6 max-w-2xl mx-auto">
        <h2 className="text-xl mb-6">{questions[currentQuestion].question}</h2>
        <div className="grid grid-cols-1 gap-4">
          {Object.entries(questions[currentQuestion].options).map(([key, value]) => (
            <Button
              key={key}
              variant={answers[currentQuestion]?.selectedOption === key ? "default" : "outline"}
              className="justify-start text-left"
              onClick={() => handleAnswerSelect(key)}
            >
              <span className="font-semibold mr-2">{key.toUpperCase()}.</span>
              {value as string}
            </Button>
          ))}
        </div>
      </Card>

      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Quiz Results</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-primary">
                Score: {score.correct}/{score.total} ({score.percentage}%)
              </h3>
            </div>
            <div className="space-y-2">
              {questions.map((q, index) => (
                <div key={index} className={`p-3 rounded-lg ${
                  answers[index]?.isCorrect ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <p className="font-medium">Question {index + 1}</p>
                  <p className="text-sm text-gray-600">Your answer: {
                    answers[index] ? answers[index].selectedOption.toUpperCase() : 'Not answered'
                  }</p>
                  <p className="text-sm text-gray-600">Correct answer: {q.answer.toUpperCase()}</p>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
