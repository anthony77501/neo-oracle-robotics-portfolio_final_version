
import React from 'react';
import { Project, Tutorial, TimelineItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'maize-analyzer',
    title: 'Maize Cob Analyzer',
    category: 'Computer Vision / Robotics',
    shortDescription: 'Industrial-grade ripeness detection system using YOLOv8 and MobileNetV3.',
    fullDescription: 'An end-to-end pipeline designed for automated harvesting. This system detects maize cobs in real-time and classifies their maturity level to optimize harvest yield.',
    image: 'https://images.unsplash.com/photo-1551730459-92db2a308d6a?auto=format&fit=crop&q=80&w=800',
    isHero: true,
    challenges: [
      'Robust detection in variable outdoor lighting conditions',
      'Real-time processing on edge devices (MobileNetV3 optimization)',
      'Handling occlusion in dense crop environments'
    ],
    features: [
      'YOLOv8 Detection Core',
      'MobileNetV3 Maturity Classification (Ripe/Unripe)',
      'FastAPI Backend with Base64 encoding for no-disk-save security',
      'Clean modern technical UI with zero abbreviations'
    ]
  },
  {
    id: 'robotic-arm',
    title: '6-DOF Precision Arm',
    category: 'Hardware / Control Systems',
    shortDescription: 'Inverse kinematics and trajectory planning for pick-and-place tasks.',
    fullDescription: 'Development of a custom robotic arm controller with millimetric precision.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800',
    challenges: ['Singularity avoidance', 'Latency reduction in feedback loops'],
    features: ['Real-time PID control', 'ROS2 Integration']
  },
  {
    id: 'autonomous-nav',
    title: 'Warehouse Rover',
    category: 'SLAM / Navigation',
    shortDescription: 'LIDAR-based autonomous navigation for indoor environments.',
    fullDescription: 'A compact rover capable of mapping and navigating dynamic warehouses.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    challenges: ['Dynamic obstacle avoidance', 'Accurate loop closure in SLAM'],
    features: ['Hector SLAM implementation', 'Pathfinding via A* algorithm']
  }
];

export const TUTORIALS: Tutorial[] = [
  {
    id: 'yolo-deployment',
    title: 'Deploying YOLO Models with FastAPI',
    date: 'Oct 12, 2024',
    readTime: '8 min',
    excerpt: 'A deep dive into optimizing PyTorch models for web-based production APIs.',
    content: 'Deployment is the final bridge between research and product. In this article, we explore how to wrap YOLOv8 in a FastAPI container, handling multi-part form uploads and returning annotated results without writing temporary files to disk...'
  },
  {
    id: 'robotics-ui',
    title: 'Modern UI for Robotics Control',
    date: 'Sep 28, 2024',
    readTime: '6 min',
    excerpt: 'Why glassmorphism and real-time visualization matter for robot operators.',
    content: 'Robotics interfaces often suffer from "technical debt" design. We discuss how to use React and Tailwind to build highly performant dashboards that provide instant feedback without overwhelming the operator...'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2023 - Present',
    title: 'Senior AI & Robotics Lead',
    company: 'Neo Oracle Systems',
    description: 'Spearheading the integration of computer vision in agricultural robotics.'
  },
  {
    year: '2021 - 2023',
    title: 'Computer Vision Engineer',
    company: 'AgriTech Solutions',
    description: 'Developed real-time object detection models for fruit grading systems.'
  },
  {
    year: '2019 - 2021',
    title: 'M.Sc. in Robotics',
    company: 'University of Engineering',
    description: 'Focus on autonomous systems and machine learning.'
  }
];
