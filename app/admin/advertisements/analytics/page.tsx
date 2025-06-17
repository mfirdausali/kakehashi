"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts"

// Mock data - in a real app, this would come from Supabase
const dailyData = [
  { date: "Jun 1", impressions: 1245, clicks: 42, ctr: 3.37 },
  { date: "Jun 2", impressions: 1352, clicks: 48, ctr: 3.55 },
  { date: "Jun 3", impressions: 1102, clicks: 35, ctr: 3.18 },
  { date: "Jun 4", impressions: 1489, clicks: 53, ctr: 3.56 },
  { date: "Jun 5", impressions: 1680, clicks: 61, ctr: 3.63 },
  { date: "Jun 6", impressions: 1452, clicks: 49, ctr: 3.37 },
  { date: "Jun 7", impressions: 1390, clicks: 45, ctr: 3.24 },
]

const adPerformance = [
  { name: "Malaysia Airlines Promotion", impressions: 12450, clicks: 423, ctr: 3.4 },
  { name: "Japan Tourism Board", impressions: 8932, clicks: 312, ctr: 3.49 },
  { name: "Tech Conference 2023", impressions: 0, clicks: 0, ctr: 0 },
  { name: "Business Summit KL", impressions: 15678, clicks: 532, ctr: 3.39 },
  { name: "Japanese Language Course", impressions: 4567, clicks: 189, ctr: 4.14 },
]

const positionPerformance = [
  { position: "Top Banner", impressions: 28128, clicks: 955, ctr: 3.4 },
  { position: "Sidebar", impressions: 13499, clicks: 501, ctr: 3.71 },
  { position: "In-Article", impressions: 15678, clicks: 532, ctr: 3.39 },
]

export default function AdvertisementAnalyticsPage() {
  const [dateRange, setDateRange] = useState("7days")

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Advertisement Analytics</h1>
        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select date range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
            <SelectItem value="year">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
            <CardDescription>All advertisements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">57,305</div>
            <p className="text-xs text-green-500 mt-1">+12.5% from previous period</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
            <CardDescription>All advertisements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,988</div>
            <p className="text-xs text-green-500 mt-1">+8.3% from previous period</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average CTR</CardTitle>
            <CardDescription>Click-through rate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.47%</div>
            <p className="text-xs text-red-500 mt-1">-0.2% from previous period</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="by-ad">By Advertisement</TabsTrigger>
          <TabsTrigger value="by-position">By Position</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Daily Performance</CardTitle>
              <CardDescription>Impressions and clicks over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="impressions" stroke="#8884d8" name="Impressions" />
                  <Line yAxisId="right" type="monotone" dataKey="clicks" stroke="#82ca9d" name="Clicks" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CTR Trend</CardTitle>
              <CardDescription>Click-through rate over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="ctr" stroke="#ff7300" name="CTR (%)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="by-ad" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance by Advertisement</CardTitle>
              <CardDescription>Comparing impressions across advertisements</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={adPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="impressions" fill="#8884d8" name="Impressions" />
                  <Bar dataKey="clicks" fill="#82ca9d" name="Clicks" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CTR by Advertisement</CardTitle>
              <CardDescription>Click-through rate comparison</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={adPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="ctr" fill="#ff7300" name="CTR (%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="by-position" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance by Position</CardTitle>
              <CardDescription>Comparing impressions across positions</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={positionPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="position" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="impressions" fill="#8884d8" name="Impressions" />
                  <Bar dataKey="clicks" fill="#82ca9d" name="Clicks" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CTR by Position</CardTitle>
              <CardDescription>Click-through rate comparison</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={positionPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="position" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="ctr" fill="#ff7300" name="CTR (%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
