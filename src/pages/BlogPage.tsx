import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, ChevronRight, BookOpen } from 'lucide-react';
import { fetchBlogsFromS3 } from '../services/s3Service';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
}

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
      staggerChildren: 0.1
    }
  }
};

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setIsLoading(true);
        // In a real implementation, this would fetch from S3
        // const blogPosts = await fetchBlogsFromS3();
        
        // For now, we'll use placeholder data
        const blogPosts: BlogPost[] = [
          {
            id: '1',
            title: 'Building Resilient Cloud Infrastructure: Best Practices',
            excerpt: 'Learn how to design and implement cloud infrastructure that can withstand failures and continue operating reliably.',
            date: 'May 15, 2025',
            image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
            tags: ['AWS', 'Resilience', 'Architecture', 'Best Practices']
          },
          {
            id: '2',
            title: 'Optimizing AWS Costs: A Comprehensive Guide',
            excerpt: 'Discover strategies and best practices to reduce your AWS bill without compromising on performance or reliability.',
            date: 'April 28, 2025',
            image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
            tags: ['AWS', 'Cost Optimization', 'Cloud Management']
          },
          {
            id: '3',
            title: 'Implementing CI/CD Pipelines for Cloud-Native Applications',
            excerpt: 'A step-by-step guide to setting up efficient CI/CD pipelines for cloud-native applications using modern tools and practices.',
            date: 'April 10, 2025',
            image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
            tags: ['CI/CD', 'DevOps', 'Automation', 'Best Practices']
          },
          {
            id: '4',
            title: 'Serverless Architecture: When to Use and When to Avoid',
            excerpt: 'An in-depth analysis of serverless architecture patterns, their benefits, limitations, and scenarios where they excel or fall short.',
            date: 'March 22, 2025',
            image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
            tags: ['Serverless', 'AWS Lambda', 'Architecture', 'Cloud Design']
          },
          {
            id: '5',
            title: 'Securing Cloud Infrastructure: A Defense in Depth Approach',
            excerpt: 'Explore comprehensive strategies for securing your cloud infrastructure using multiple layers of security controls.',
            date: 'March 5, 2025',
            image: 'https://images.pexels.com/photos/60504/security-protection-privacy-policy-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
            tags: ['Security', 'Best Practices', 'AWS', 'Compliance']
          },
          {
            id: '6',
            title: 'Data Engineering on the Cloud: Building Scalable Data Pipelines',
            excerpt: 'Learn how to design and implement scalable, resilient data pipelines on cloud platforms for effective data processing.',
            date: 'February 18, 2025',
            image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
            tags: ['Data Engineering', 'Big Data', 'ETL', 'AWS']
          }
        ];
        
        setBlogs(blogPosts);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadBlogs();
  }, []);

  // Extract all unique tags
  const allTags = Array.from(new Set(blogs.flatMap(blog => blog.tags)));

  // Filter blogs based on search term and selected tag
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || blog.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="pt-20">
      {/* Blog Header */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Blog & Insights
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-700 mb-12"
            >
              Thoughts, tutorials, and insights on cloud engineering and software development
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="relative max-w-2xl mx-auto"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="block w-full bg-white border border-gray-300 rounded-full pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Tags Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 overflow-x-auto"
            >
              <div className="flex space-x-2 pb-4">
                <button 
                  onClick={() => setSelectedTag('')}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    selectedTag === '' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Posts
                </button>
                {allTags.map((tag, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                      selectedTag === tag 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Blog Grid */}
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="w-16 h-16 border-t-4 border-b-4 border-blue-600 rounded-full animate-spin"></div>
              </div>
            ) : filteredBlogs.length > 0 ? (
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredBlogs.map((blog) => (
                  <motion.div 
                    key={blog.id}
                    variants={fadeIn}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <Link to={`/blog/${blog.id}`} className="block h-48 overflow-hidden">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-sm text-gray-500">{blog.date}</span>
                      </div>
                      <Link to={`/blog/${blog.id}`}>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">{blog.title}</h3>
                      </Link>
                      <p className="text-gray-700 mb-4">{blog.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link 
                        to={`/blog/${blog.id}`} 
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                      >
                        Read more
                        <ChevronRight className="ml-1 w-5 h-5" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;