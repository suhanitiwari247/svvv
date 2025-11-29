import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy } from "lucide-react";
import assignmentImage from '@/assets/assignment.avif';

interface Assignment {
  id: number;
  title: string;
  description: string;
  faculty: string;
}

interface Submission {
  id: number;
  assignmentId: number;
  studentName: string;
  file: File;
  aiUsage?: number;
  feedback?: string;
  status: "Pending" | "Analyzed";
  submittedAt: Date;
}

const AssignmentUploader: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [facultyAssignment, setFacultyAssignment] = useState({ title: "", description: "", faculty: "" });
  const [studentName, setStudentName] = useState("");
  const [studentFile, setStudentFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentResult, setCurrentResult] = useState<Submission | null>(null);


  const [filter, setFilter] = useState<"All" | "Pending" | "Analyzed">("All");

  // Use public image URL for banner
  const bannerImage = "https://unsplash.com/photos/three-girls-are-sitting-on-a-bench-and-looking-at-a-laptop-U7c8rTBwc0c";

  // ===== Faculty: Add Assignment =====
  const handleFacultyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFacultyAssignment({ ...facultyAssignment, [e.target.name]: e.target.value });
  };

  const addAssignment = () => {
    if (!facultyAssignment.title || !facultyAssignment.faculty) return;
    const newAssignment: Assignment = {
      id: assignments.length + 1,
      ...facultyAssignment,
    };
    setAssignments([...assignments, newAssignment]);
    setFacultyAssignment({ title: "", description: "", faculty: "" });
  };

  // ===== Student: Submit Assignment =====
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setStudentFile(e.target.files[0]);
  };

  const submitAssignment = (assignmentId: number) => {
    if (!studentFile || !studentName) return;

    const newSubmission: Submission = {
      id: submissions.length + 1,
      assignmentId,
      studentName,
      file: studentFile,
      status: "Pending",
      submittedAt: new Date(),
    };
    setSubmissions([...submissions, newSubmission]);
    setStudentFile(null);
  };

  // ===== Analyze AI Usage =====
  const analyzeSubmission = (submission: Submission) => {
    setLoading(true);
    setTimeout(() => {
      const aiUsage = Math.floor(Math.random() * 101);
      let feedback = "Low AI usage detected";
      if (aiUsage > 70) feedback = "High AI usage detected";
      else if (aiUsage > 40) feedback = "Moderate AI usage detected";

      const updatedSubmission = { ...submission, aiUsage, feedback, status: "Analyzed" };
      setSubmissions(submissions.map((s) => (s.id === submission.id ? updatedSubmission : s)));
      setCurrentResult(updatedSubmission);
      setShowPopup(true);
      setLoading(false);
    }, 1500);
  };

  const filteredSubmissions = filter === "All" ? submissions : submissions.filter((s) => s.status === filter);

  const groupedSubmissions = assignments.map((assignment) => {
    const relatedSubs = filteredSubmissions.filter((s) => s.assignmentId === assignment.id);
    const studentsMap: Record<string, Submission[]> = {};
    relatedSubs.forEach((s) => {
      if (!studentsMap[s.studentName]) studentsMap[s.studentName] = [];
      studentsMap[s.studentName].push(s);
    });
    return { assignment, studentsMap };
  });

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* ===== Banner Section ===== */}
      <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
        <img src={assignmentImage} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-indigo-900/90 flex items-center justify-center">
          <div className="text-center text-white space-y-2 animate-fade-in">
            <Trophy className="h-16 w-16 mx-auto mb-2" />
            <h1 className="text-4xl font-bold">Assignment Portal</h1>
            <p className="text-xl">Upload, Analyze, and Track Student Submissions</p>
            {/* <Button className="mt-4">Get Started</Button> */}
          </div>
        </div>
      </div>

      {/* ===== Tabs: Faculty / Student ===== */}
      <Tabs defaultValue="faculty" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="faculty">Faculty</TabsTrigger>
          <TabsTrigger value="student">Student</TabsTrigger>
        </TabsList>

        {/* ===== Faculty Tab ===== */}
        <TabsContent value="faculty" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Add Assignment</h2>
            <input
              type="text"
              name="title"
              placeholder="Assignment Title"
              value={facultyAssignment.title}
              onChange={handleFacultyChange}
              className="block w-full mb-2 p-2 rounded text-black"
            />
            <input
              type="text"
              name="faculty"
              placeholder="Faculty Name"
              value={facultyAssignment.faculty}
              onChange={handleFacultyChange}
              className="block w-full mb-2 p-2 rounded text-black"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={facultyAssignment.description}
              onChange={handleFacultyChange}
              className="block w-full mb-2 p-2 rounded text-black"
            />
            <Button onClick={addAssignment}>Add Assignment</Button>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-2">Student Submissions</h2>
            {groupedSubmissions.map(({ assignment, studentsMap }) => (
              <Card key={assignment.id} className="p-4">
                <h3 className="font-semibold text-lg mb-2">{assignment.title} ({assignment.faculty})</h3>
                {Object.keys(studentsMap).length === 0 ? (
                  <p>No submissions yet.</p>
                ) : (
                  Object.keys(studentsMap).map((student) => (
                    <div key={student} className="mb-3">
                      <p className="font-medium">{student}</p>
                      {studentsMap[student].map((sub, idx) => (
                        <Card key={sub.id} className="p-3 mb-2">
                          <div className="flex justify-between items-center mb-2">
                            <p>Version {idx + 1} - {sub.submittedAt.toLocaleString()}</p>
                            <Badge className={sub.status === "Analyzed" ? "bg-success" : "bg-warning"}>
                              {sub.status}
                            </Badge>
                          </div>
                          <div className="flex gap-4 items-center">
                            <p>AI Usage: {sub.aiUsage ?? "-"}</p>
                            <p>{sub.feedback ?? ""}</p>
                            {sub.status === "Pending" && (
                              <Button size="sm" onClick={() => analyzeSubmission(sub)} disabled={loading}>
                                {loading ? "Analyzing..." : "Analyze"}
                              </Button>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  ))
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ===== Student Tab ===== */}
        <TabsContent value="student" className="space-y-6">
          {assignments.length === 0 ? (
            <p>No assignments available.</p>
          ) : (
            assignments.map((assignment) => (
              <Card key={assignment.id} className="p-4">
                <h3 className="font-semibold text-lg mb-2">{assignment.title} ({assignment.faculty})</h3>
                <p className="mb-2">{assignment.description}</p>
                <input
                  type="text"
                  placeholder="Student Name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="block w-full mb-2 p-2 rounded text-black"
                />
                <input type="file" onChange={handleFileChange} className="mb-2 text-black p-2 rounded block" />
                <Button onClick={() => submitAssignment(assignment.id)} disabled={!studentName || !studentFile}>
                  Submit Assignment
                </Button>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>

      {/* ===== Result Popup ===== */}
      {showPopup && currentResult && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setShowPopup(false)}
        >
          <Card className="p-6 max-w-sm w-full text-center" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-2">AI Usage Result</h3>
            <p className="text-lg mb-2">AI Content: <span className="font-bold">{currentResult.aiUsage}%</span></p>
            <p className="mb-4">{currentResult.feedback}</p>
            <Button onClick={() => setShowPopup(false)} variant="destructive">Close</Button>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AssignmentUploader;
