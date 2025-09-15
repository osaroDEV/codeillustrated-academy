"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, Star, Award, CheckCircle, Play, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"

interface CourseDetailClientProps {
  course: {
    id: string
    title: string
    description: string
    instructor: string
    duration: string
    level: "beginner" | "intermediate" | "advanced"
    price: number
    rating: number
    students: number
    image: string
    type: "crash-course" | "extended"
    technologies: string[]
    syllabus: string[]
  }
}

const COURSE_BENEFITS = [
  "Master the fundamentals and advanced concepts",
  "Build real-world projects from scratch",
  "Learn industry best practices",
  "Get hands-on coding experience",
  "Understand modern development workflows",
  // "Prepare for technical interviews",
] as const

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
}

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export function CourseDetailClient({ course }: CourseDetailClientProps) {
  return (
    <main className="min-h-screen">
      <HeroSection course={course} />
      <CourseDetailsSection course={course} />
    </main>
  )
}

function HeroSection({ course }: { course: CourseDetailClientProps["course"] }) {
  return (
    <section className="bg-gradient-to-br from-background via-background to-red-50/20 dark:to-red-950/20 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <CourseInfo course={course} />
            <CourseActions course={course} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <CourseImage course={course} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CourseInfo({ course }: { course: CourseDetailClientProps["course"] }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Badge
          variant={course.type === "crash-course" ? "destructive" : "secondary"}
          className={
            course.type === "crash-course" ? "bg-red-600 hover:bg-red-700" : "bg-orange-600 hover:bg-orange-700"
          }
        >
          {course.type === "crash-course" ? "Crash Course" : "Extended Program"}
        </Badge>
        <Badge variant="outline">{course.level}</Badge>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-balance">{course.title}</h1>
      <p className="text-xl text-muted-foreground text-pretty">{course.description}</p>

      <div className="flex items-center space-x-6 text-sm">
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{course.rating}</span>
          <span className="text-muted-foreground">rating</span>
        </div>
        <div className="flex items-center space-x-1">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span>{course.students.toLocaleString()} students</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span>{course.duration}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {course.technologies.map((tech: string) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}

function CourseActions({ course }: { course: CourseDetailClientProps["course"] }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600">
        <Play className="mr-2 h-4 w-4" />
        Enroll Now - ${course.price}
      </Button>
      <Button
        variant="outline"
        size="lg"
        asChild
        className="border-red-200 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-950/20 bg-transparent"
      >
        <Link href="/contact">
          <Calendar className="mr-2 h-4 w-4" />
          Schedule Demo
        </Link>
      </Button>
    </div>
  )
}

function CourseImage({ course }: { course: CourseDetailClientProps["course"] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
      <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-96 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-6 left-6 text-white">
        <p className="text-sm opacity-90">Instructor</p>
        <p className="text-lg font-semibold">{course.instructor}</p>
      </div>
    </div>
  )
}

function CourseDetailsSection({ course }: { course: CourseDetailClientProps["course"] }) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <CourseCurriculum course={course} />
            <WhatYoullLearn />
          </div>
          <CourseSidebar course={course} />
        </div>
      </div>
    </section>
  )
}

function CourseCurriculum({ course }: { course: CourseDetailClientProps["course"] }) {
  return (
    <motion.div {...fadeInUp}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
            Course Curriculum
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {course.syllabus.map((item: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium mt-0.5">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium">{item}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function WhatYoullLearn() {
  return (
    <motion.div {...fadeInUp}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="mr-2 h-5 w-5 text-orange-600" />
            What You'll Learn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {COURSE_BENEFITS.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function CourseSidebar({ course }: { course: CourseDetailClientProps["course"] }) {
  return (
    <div className="space-y-6">
      <motion.div {...fadeInUp}>
        <Card className="sticky top-24">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="text-3xl font-bold text-red-600">${course.price}</div>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600"
              >
                {/* <DollarSign className="mr-2 h-4 w-4" /> */}
                Enroll Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-red-200 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-950/20 bg-transparent"
                asChild
              >
                <Link href="/contact">Contact for Info</Link>
              </Button>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration</span>
                <span className="font-medium">{course.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Level</span>
                <span className="font-medium capitalize">{course.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Students</span>
                <span className="font-medium">{course.students.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rating</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
