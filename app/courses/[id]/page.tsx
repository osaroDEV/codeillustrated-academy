import { useCourseStore } from "@/store/course-store"
import { CourseDetailClient } from "./course-detail-client"
import { notFound } from "next/navigation"

interface CourseDetailPageProps {
  params: Promise<{ id: string }>
}

const { courses } = useCourseStore.getState()

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { id } = await params
  const course = courses.find((c) => c.id === id)

  if (!course) {
    notFound()
  }

  return <CourseDetailClient course={course} />
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }))
}

export async function generateMetadata({ params }: CourseDetailPageProps) {
  const { id } = await params
  const course = courses.find((c) => c.id === id)

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The requested course could not be found.",
    }
  }

  return {
    title: `${course.title} | Learn with Us`,
    description: course.description,
    keywords: course.technologies.join(", "),
  }
}