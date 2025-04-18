
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

export function ModuleSelection() {
  const { subjectId } = useParams();
  const navigate = useNavigate();

  const modules = ["module1", "module2"];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Select a Module</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {modules.map((moduleId) => (
          <Card
            key={moduleId}
            className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(`/quiz/${subjectId}/${moduleId}`)}
          >
            <h2 className="text-xl font-semibold capitalize">
              {moduleId.replace(/([A-Z])/g, " $1").trim()}
            </h2>
          </Card>
        ))}
      </div>
    </div>
  );
}
