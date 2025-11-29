import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import * as faceapi from "face-api.js";
import bannerImage from "@/assets/hostel.avif";

interface Hostel {
  id: number;
  name: string;
  occupancy: number;
  facilities: string[];
}

interface SecurityAlert {
  id: number;
  title: string;
  description: string;
  level: "High" | "Medium" | "Low";
  read: boolean;
}

interface Student {
  id: number;
  name: string;
  hostelId: number;
  recognized: boolean;
}

const HostelSecurity: React.FC = () => {
  const [hostels, setHostels] = useState<Hostel[]>([
    { id: 1, name: "Boys Hostel A", occupancy: 80, facilities: ["WiFi", "Canteen", "Gym"] },
    { id: 2, name: "Girls Hostel B", occupancy: 50, facilities: ["WiFi", "Laundry"] },
    { id: 3, name: "Boys Hostel C", occupancy: 30, facilities: ["WiFi", "Gym"] },
  ]);

  const [alerts, setAlerts] = useState<SecurityAlert[]>([
    { id: 1, title: "Fire Drill", description: "Scheduled at 5 PM today", level: "Medium", read: false },
    { id: 2, title: "Suspicious Activity", description: "Near Sports Complex", level: "High", read: false },
  ]);

  const [students, setStudents] = useState<Student[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Load Models
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
    };
    loadModels();
  }, []);

  // Start Webcam
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) videoRef.current.srcObject = stream;
    });
  }, []);

  // Face Detection (Simulated Recognition)
  useEffect(() => {
    const interval = setInterval(async () => {
      if (!videoRef.current) return;

      const detections = await faceapi.detectAllFaces(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      );

      if (detections.length > 0) {
        const recognizedStudent: Student = {
          id: Math.floor(Math.random() * 1000),
          name: "Student " + Math.floor(Math.random() * 100),
          hostelId: Math.ceil(Math.random() * hostels.length),
          recognized: true,
        };

        setStudents((prev) => {
          if (!prev.find((s) => s.name === recognizedStudent.name)) {
            setHostels((hPrev) =>
              hPrev.map((h) =>
                h.id === recognizedStudent.hostelId
                  ? { ...h, occupancy: Math.min(100, h.occupancy + 1) }
                  : h
              )
            );
            return [recognizedStudent, ...prev];
          }
          return prev;
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [hostels.length]);

  const markAlertAsRead = (id: number) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, read: true } : alert
      )
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Banner */}
      <div className="relative h-64 w-full overflow-hidden mb-12">
        <img src={bannerImage} alt="Hostel & Security" className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold px-4 text-white">
            Hostel & Campus Security
          </h1>
        </div>
      </div>

      {/* Webcam */}
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-bold mb-4">Student Face Recognition</h2>
        <video
          ref={videoRef}
          autoPlay
          muted
          className="w-full md:w-1/2 rounded-lg border border-gray-400"
        />
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4">
        <Tabs defaultValue="hostel">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="hostel">Hostel Info</TabsTrigger>
            <TabsTrigger value="security">Security Updates</TabsTrigger>
          </TabsList>

          {/* HOSTEL INFO */}
          <TabsContent value="hostel">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hostels.map((hostel) => (
                <Card key={hostel.id} className="p-6 shadow-sm border border-gray-200 bg-white">
                  <h3 className="text-xl font-bold">{hostel.name}</h3>

                  <p className="my-2">
                    Occupancy:{" "}
                    <Badge
                      className={
                        hostel.occupancy >= 75 ? "bg-red-600" : "bg-green-600"
                      }
                    >
                      {hostel.occupancy}%
                    </Badge>
                  </p>

                  <p>Facilities: {hostel.facilities.join(", ")}</p>

                  <p className="mt-4 font-semibold">Students Recognized:</p>
                  <ul className="text-sm">
                    {students
                      .filter((s) => s.hostelId === hostel.id)
                      .map((s) => (
                        <li key={s.id}>• {s.name}</li>
                      ))}
                  </ul>

                  <Button className="bg-blue-600 hover:bg-blue-700 w-full mt-4">
                    View Details
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* SECURITY */}
          <TabsContent value="security">
            <div className="space-y-6">
              {alerts.map((alert) => (
                <Card
                  key={alert.id}
                  className="p-6 shadow-sm border border-gray-200 bg-white flex justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{alert.title}</h3>
                    <p className="text-gray-700">{alert.description}</p>

                    <Badge
                      className={
                        alert.level === "High"
                          ? "bg-red-600"
                          : alert.level === "Medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }
                    >
                      {alert.level}
                    </Badge>
                  </div>

                  {!alert.read && (
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => markAlertAsRead(alert.id)}
                    >
                      Mark as Read
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HostelSecurity;
