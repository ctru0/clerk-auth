"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
  

export default function DashboardPage() {
    const stats = [
      { title: "Total Users", value: "1,204" },
      { title: "Revenue", value: "$32,105" },
      { title: "New Signups", value: "342" },
      { title: "Active Sessions", value: "87" },
    ];
  
    return (
        <div className="p-6 space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">Your Dashboard</h1>
    
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );
    }

