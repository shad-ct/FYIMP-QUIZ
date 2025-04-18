
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const subjects = [
  { id: "edp", name: "Engineering Prototype and Designing" },
  { id: "fcs", name: "Fundamentals of Computer Science" },
  { id: "physical", name: "Physical Education" },
  { id: "stati", name: "Statistics" },
  { id: "maths", name: "Mathematics" }
];

export function SubjectSelection() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Select a Subject</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Card
            key={subject.id}
            className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(`/modules/${subject.id}`)}
          >
            <h2 className="text-xl font-semibold">{subject.name}</h2>
          </Card>
        ))}
      </div>
    </div>
  );
}
