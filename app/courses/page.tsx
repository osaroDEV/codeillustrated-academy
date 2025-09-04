"use client"

import { motion } from 'framer-motion';
import { CourseCard } from '@/components/course-card';
import { useCourseStore } from '@/store/course-store';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

export default function CoursesPage() {
  const { courses } = useCourseStore();
  const [filter, setFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');

  const filteredCourses = courses.filter(course => {
    if (filter === 'all') return true;
    if (filter === 'crash-course') return course.type === 'crash-course';
    if (filter === 'extended') return course.type === 'extended';
    return course.level === filter;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'duration':
        return a.duration.localeCompare(b.duration);
      default:
        return b.students - a.students;
    }
  });

  const filters = [
    { value: 'all', label: 'All Courses' },
    { value: 'crash-course', label: 'Crash Courses' },
    { value: 'extended', label: 'Extended Programs' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-red-50/20 dark:to-red-950/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              All <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Courses</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive collection of coding courses designed for all skill levels
            </p>
          </motion.div>

          {/* Filters and Sorting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <div className="flex flex-wrap gap-2">
              {filters.map((filterOption) => (
                <Button
                  key={filterOption.value}
                  variant={filter === filterOption.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(filterOption.value)}
                  className={filter === filterOption.value 
                    ? "bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600" 
                    : "border-red-200 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-950/20"
                  }
                >
                  {filterOption.label}
                </Button>
              ))}
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <Badge variant="secondary" className="text-sm">
              {sortedCourses.length} course{sortedCourses.length !== 1 ? 's' : ''} found
            </Badge>
          </motion.div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          {sortedCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg">
                No courses found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
