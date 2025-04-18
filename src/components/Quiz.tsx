
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { edpQuestions } from "@/data/edpQuestions";
import { fcsQuestions } from "@/data/fcsQuestions";
import { physicalQuestions } from "@/data/physicalQuestions";
import { statiQuestions } from "@/data/statiQuestions";
import { mathsQuestions } from "@/data/mathsQuestions";

const questionSets = {
  edp: edpQuestions,
  fcs: fcsQuestions,
  physical: physicalQuestions,
  stati: statiQuestions,
  maths: mathsQuestions,
};

export function Quiz() {
  const { subjectId, moduleId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    if (subjectId && moduleId && questionSets[subjectId as keyof typeof questionSets]) {
      setQuestions(questionSets[subjectId as keyof typeof questionSets][moduleId as keyof typeof edpQuestions].questions);
    }
  }, [subjectId, moduleId]);

  if (!questions.length) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-2 mb-8 overflow-x-auto py-2">
        {questions.map((_, index) => (
          <Button
            key={index}
            variant={currentQuestion === index ? "default" : "outline"}
            onClick={() => setCurrentQuestion(index)}
          >
            {index + 1}
          </Button>
        ))}
      </div>

      <Card className="p-6 max-w-2xl mx-auto">
        <h2 className="text-xl mb-6">{questions[currentQuestion].question}</h2>
        <div className="grid grid-cols-1 gap-4">
          {Object.entries(questions[currentQuestion].options).map(([key, value]) => (
            <Button
              key={key}
              variant="outline"
              className="justify-start text-left"
              onClick={() => {
                // Handle answer selection
              }}
            >
              <span className="font-semibold mr-2">{key.toUpperCase()}.</span>
              {value as string}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
}
