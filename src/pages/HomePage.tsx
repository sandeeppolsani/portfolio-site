import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Server, Database, Code, Cloud, Award, BookOpen } from 'lucide-react';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HomePage: React.FC = () => {
  const skills = [
    { 
      icon: <Cloud className="w-10 h-10 text-blue-500" />, 
      title: 'Cloud Architecture', 
      description: 'Expertise in designing scalable and resilient cloud infrastructure on AWS, Azure, and GCP.' 
    },
    { 
      icon: <Server className="w-10 h-10 text-indigo-500" />, 
      title: 'DevOps', 
      description: 'Implementing CI/CD pipelines, infrastructure as code, and automated deployments.' 
    },
    { 
      icon: <Database className="w-10 h-10 text-green-500" />, 
      title: 'Data Engineering', 
      description: 'Building data pipelines and solutions for processing large-scale datasets.' 
    },
    { 
      icon: <Code className="w-10 h-10 text-purple-500" />, 
      title: 'Full Stack Development', 
      description: 'Creating web applications using modern frameworks and technologies.' 
    }
  ];

  const projects = [
    {
      title: 'Cloud Migration Solution',
      description: 'Led the migration of a monolithic application to a microservices architecture on AWS, resulting in 40% cost reduction.',
      tags: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      title: 'Real-time Data Processing',
      description: 'Designed and implemented a real-time data processing pipeline handling over 1TB of data daily for a financial services client.',
      tags: ['Apache Kafka', 'Spark', 'AWS Kinesis', 'Python'],
      image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      title: 'Serverless Web Application',
      description: 'Built a highly scalable serverless web application using AWS Lambda, API Gateway, and DynamoDB.',
      tags: ['Serverless', 'AWS Lambda', 'React', 'DynamoDB'],
      image: 'https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Hi, I'm Sandeep Polsani
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-gray-700 mb-8"
            >
              Software Engineer specializing in cloud technologies with 5 years of industry experience
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link 
                to="/blog" 
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Read My Blog
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-2 mb-6">
              <div className="w-16 h-1 bg-blue-600"></div>
              <p className="text-blue-600 font-medium">ABOUT ME</p>
            </motion.div>
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Cloud Engineer with a Passion for Building Scalable Solutions
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-700 mb-6 leading-relaxed"
            >
              I'm a software engineer with 5 years of experience specializing in cloud technologies. I've worked with diverse teams to build and deploy scalable, reliable applications across various cloud platforms including AWS, GCP, and Azure.
            </motion.p>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-700 mb-8 leading-relaxed"
            >
              My expertise includes cloud architecture, DevOps practices, containerization, serverless computing, and data engineering. I'm passionate about creating efficient, cost-effective solutions that solve real business problems.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
              >
                Learn more about my experience
                <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div variants={fadeIn} className="flex items-center justify-center gap-2 mb-6">
              <div className="w-16 h-1 bg-blue-600"></div>
              <p className="text-blue-600 font-medium">MY EXPERTISE</p>
              <div className="w-16 h-1 bg-blue-600"></div>
            </motion.div>
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Skills & Technologies
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-700"
            >
              Here are some of the key areas where I excel and technologies I work with regularly.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={fadeIn}>
                <SkillCard 
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div variants={fadeIn} className="flex items-center justify-center gap-2 mb-6">
              <div className="w-16 h-1 bg-blue-600"></div>
              <p className="text-blue-600 font-medium">FEATURED WORK</p>
              <div className="w-16 h-1 bg-blue-600"></div>
            </motion.div>
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Projects & Case Studies
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-700"
            >
              Take a look at some of the projects I've worked on throughout my career.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeIn}>
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div variants={fadeIn} className="flex items-center justify-center gap-2 mb-6">
              <div className="w-16 h-1 bg-blue-600"></div>
              <p className="text-blue-600 font-medium">LATEST THOUGHTS</p>
              <div className="w-16 h-1 bg-blue-600"></div>
            </motion.div>
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              From My Blog
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-700"
            >
              Insights, tutorials, and thoughts on cloud engineering and software development.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Blog preview" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-500">May 15, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Building Resilient Cloud Infrastructure: Best Practices</h3>
                <p className="text-gray-700 mb-4">Learn how to design and implement cloud infrastructure that can withstand failures and continue operating reliably.</p>
                <Link 
                  to="/blog/1" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                >
                  Read more
                  <ChevronRight className="ml-1 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Blog preview" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-500">April 28, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Optimizing AWS Costs: A Comprehensive Guide</h3>
                <p className="text-gray-700 mb-4">Discover strategies and best practices to reduce your AWS bill without compromising on performance or reliability.</p>
                <Link 
                  to="/blog/2" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                >
                  Read more
                  <ChevronRight className="ml-1 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link 
              to="/blog" 
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
            >
              View all posts
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Let's Work Together
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-blue-100 mb-8"
            >
              Have a project in mind or want to discuss cloud solutions for your business?
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;