"use client"

import { motion } from 'framer-motion';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Course } from '@/store/course-store';
import { Price } from '@/components/price';
import Link from 'next/link';

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
        <div className="relative overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge 
              variant={course.type === 'crash-course' ? 'destructive' : 'secondary'}
              className={course.type === 'crash-course' 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-orange-600 hover:bg-orange-700'
              }
            >
              {course.type === 'crash-course' ? 'Crash Course' : 'Extended Program'}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-red-600 transition-colors">
              {course.title}
            </h3>
            <Badge variant="outline" className="ml-2 shrink-0">
              {course.level}
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {course.description}
          </p>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{course.rating}</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{course.students.toLocaleString()} students</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {course.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {course.technologies.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{course.technologies.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <div className="w-full space-y-3">
            <div className="flex items-center justify-between">
              <Price
                priceNGN={course.priceNGN}
                priceUSD={course.priceUSD}
                className="text-2xl font-bold text-red-600"
                decimals={0}
              />
              <span className="text-sm text-muted-foreground">
                by {course.instructor}
              </span>
            </div>
            <Button 
              asChild
              className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600"
            >
              <Link href={`/courses/${course.id}`} className="flex items-center justify-center">
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}