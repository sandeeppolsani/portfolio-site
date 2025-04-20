import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft, ChevronRight } from 'lucide-react';
import { getBlogPostById } from '../services/s3Service';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  image: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<{ id: string; title: string; image: string }[]>([]);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setIsLoading(true);
        // In a real implementation, this would fetch from S3
        // const blogPost = await getBlogPostById(id);
        
        // For demo purposes using placeholder data
        if (id === '1') {
          setPost({
            id: '1',
            title: 'Building Resilient Cloud Infrastructure: Best Practices',
            content: `
              <p class="mb-4">In today's digital landscape, building resilient cloud infrastructure is more critical than ever. As businesses increasingly rely on cloud services for their operations, ensuring these systems can withstand failures and continue functioning is paramount.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">What is Cloud Resilience?</h2>
              
              <p class="mb-4">Cloud resilience refers to a system's ability to maintain acceptable service levels during faults and challenges to normal operation. It encompasses both preventing failures and recovering quickly when they do occur.</p>
              
              <p class="mb-4">A resilient cloud architecture doesn't just survive disruptions—it adapts to them, learns from them, and emerges stronger. This approach differs from traditional disaster recovery, which often focuses solely on restoring systems after a failure.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">Key Principles of Resilient Cloud Architecture</h2>
              
              <h3 class="text-xl font-semibold mt-6 mb-3">1. Design for Failure</h3>
              
              <p class="mb-4">Assume that hardware will fail, networks will drop packets, and services will become unavailable. By anticipating these failures in your design, you can build systems that continue functioning despite individual component failures.</p>
              
              <p class="mb-4">Practical implementation includes:</p>
              
              <ul class="list-disc pl-6 mb-4">
                <li class="mb-2">Implementing redundancy across multiple availability zones</li>
                <li class="mb-2">Using auto-scaling groups to maintain capacity during instance failures</li>
                <li class="mb-2">Designing stateless applications where possible</li>
                <li class="mb-2">Implementing circuit breakers to prevent cascading failures</li>
              </ul>
              
              <h3 class="text-xl font-semibold mt-6 mb-3">2. Embrace Redundancy</h3>
              
              <p class="mb-4">Redundancy is a fundamental principle of resilient systems. By duplicating critical components and services, you ensure that no single failure point can bring down the entire system.</p>
              
              <p class="mb-4">In AWS, this might mean:</p>
              
              <ul class="list-disc pl-6 mb-4">
                <li class="mb-2">Deploying across multiple availability zones</li>
                <li class="mb-2">Using read replicas for databases</li>
                <li class="mb-2">Implementing multi-region architectures for critical systems</li>
                <li class="mb-2">Setting up cross-region replication for S3 buckets</li>
              </ul>
              
              <h3 class="text-xl font-semibold mt-6 mb-3">3. Implement Proper Monitoring and Alerting</h3>
              
              <p class="mb-4">You can't fix what you don't know is broken. Comprehensive monitoring allows you to detect failures quickly and respond before they impact users.</p>
              
              <p class="mb-4">Effective monitoring should include:</p>
              
              <ul class="list-disc pl-6 mb-4">
                <li class="mb-2">System metrics (CPU, memory, disk usage)</li>
                <li class="mb-2">Application metrics (request rates, error rates, latency)</li>
                <li class="mb-2">Business metrics (transactions, user signups)</li>
                <li class="mb-2">Dependency metrics (database performance, third-party API response times)</li>
              </ul>
              
              <h3 class="text-xl font-semibold mt-6 mb-3">4. Automate Recovery</h3>
              
              <p class="mb-4">Manual intervention takes time and is prone to human error. Automating recovery processes ensures faster response times and consistent execution.</p>
              
              <p class="mb-4">Examples include:</p>
              
              <ul class="list-disc pl-6 mb-4">
                <li class="mb-2">Auto-scaling based on health checks</li>
                <li class="mb-2">Automated database failover</li>
                <li class="mb-2">Self-healing Kubernetes clusters</li>
                <li class="mb-2">Lambda functions for automated remediation</li>
              </ul>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">Practical Implementation on AWS</h2>
              
              <p class="mb-4">Let's look at how these principles translate to actual AWS services and architectures:</p>
              
              <h3 class="text-xl font-semibold mt-6 mb-3">Compute Layer</h3>
              
              <ul class="list-disc pl-6 mb-4">
                <li class="mb-2">Use Auto Scaling Groups across multiple AZs</li>
                <li class="mb-2">Implement health checks to automatically replace unhealthy instances</li>
                <li class="mb-2">Consider containers with ECS or EKS for faster recovery times</li>
                <li class="mb-2">Use reserved instances or Spot Fleet with instance diversity to mitigate capacity issues</li>
              </ul>
              
              <h3 class="text-xl font-semibold mt-6 mb-3">Database Layer</h3>
              
              <ul class="list-disc pl-6 mb-4">
                <li class="mb-2">Use RDS Multi-AZ deployments for automatic failover</li>
                <li class="mb-2">Implement read replicas for performance and redundancy</li>
                <li class="mb-2">Consider Aurora for enhanced availability (99.99% uptime)</li>
                <li class="mb-2">Use DynamoDB global tables for multi-region resilience</li>
                <li class="mb-2">Implement regular snapshots and point-in-time recovery</li>
              </ul>
              
              <h3 class="text-xl font-semibold mt-6 mb-3">Networking Layer</h3>
              
              <ul class="list-disc pl-6 mb-4">
                <li class="mb-2">Design VPCs with public and private subnets across multiple AZs</li>
                <li class="mb-2">Use Route 53 health checks and DNS failover</li>
                <li class="mb-2">Implement AWS Global Accelerator for improved availability and performance</li>
                <li class="mb-2">Use AWS Shield and WAF for DDoS protection</li>
              </ul>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">Testing Resilience</h2>
              
              <p class="mb-4">Designing for resilience isn't enough—you need to regularly test your systems to ensure they respond as expected during failures.</p>
              
              <h3 class="text-xl font-semibold mt-6 mb-3">Chaos Engineering</h3>
              
              <p class="mb-4">Pioneered by Netflix, chaos engineering involves deliberately injecting failures into your production environment to test how systems respond. Tools like AWS Fault Injection Simulator or Gremlin can help simulate various failure scenarios.</p>
              
              <h3 class="text-xl font-semibold mt-6 mb-3">Game Days</h3>
              
              <p class="mb-4">Organize regular "game days" where teams simulate disaster scenarios and practice their response procedures. These exercises help identify gaps in both technical systems and human processes.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
              
              <p class="mb-4">Building resilient cloud infrastructure is not a one-time effort but an ongoing process of design, implementation, testing, and refinement. By following the principles outlined above, you can create systems that not only survive failures but thrive despite them.</p>
              
              <p class="mb-4">Remember, the goal isn't to eliminate failures—it's to ensure that when they do occur, they don't impact your users or business operations. With proper planning and implementation, you can achieve this level of resilience in your cloud infrastructure.</p>
            `,
            date: 'May 15, 2025',
            image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
            tags: ['AWS', 'Resilience', 'Architecture', 'Best Practices'],
            author: {
              name: 'Sandeep Polsani',
              avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
            }
          });
          
          setRelatedPosts([
            {
              id: '2',
              title: 'Optimizing AWS Costs: A Comprehensive Guide',
              image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
            },
            {
              id: '5',
              title: 'Securing Cloud Infrastructure: A Defense in Depth Approach',
              image: 'https://images.pexels.com/photos/60504/security-protection-privacy-policy-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
            }
          ]);
        } else {
          // Default placeholder for other IDs
          setPost({
            id: id || '0',
            title: 'Sample Blog Post',
            content: '<p>This is a placeholder blog post content. In a real implementation, this would be fetched from your S3 bucket.</p>',
            date: 'January 1, 2025',
            image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
            tags: ['Cloud', 'Sample'],
            author: {
              name: 'Sandeep Polsani',
              avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
            }
          });
          
          setRelatedPosts([
            {
              id: '1',
              title: 'Building Resilient Cloud Infrastructure: Best Practices',
              image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
            },
            {
              id: '3',
              title: 'Implementing CI/CD Pipelines for Cloud-Native Applications',
              image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBlogPost();
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen flex justify-center items-center">
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Blog Header */}
      <section 
        className="relative py-20 bg-gray-900 text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{ 
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Back to Blog
              </Link>
            </div>
            
            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-gray-300">{post.date}</span>
              </div>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="flex items-center">
                <Tag className="w-5 h-5 text-blue-400 mr-2" />
                <div className="flex gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-900 bg-opacity-50 text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold mb-8"
            >
              {post.title}
            </motion.h1>
            
            <motion.div variants={fadeIn} className="flex items-center">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-lg font-medium">{post.author.name}</p>
                <p className="text-gray-400">Software Engineer</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.article 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
              <div className="flex items-start sm:items-center flex-col sm:flex-row">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-20 h-20 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">About the author</h3>
                  <p className="text-gray-700 mb-3">Sandeep Polsani is a software engineer specializing in cloud technologies with 5 years of industry experience building scalable, reliable systems.</p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                  >
                    Get in touch
                    <ChevronRight className="ml-1 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <motion.div 
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <Link to={`/blog/${relatedPost.id}`} className="block h-48 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </Link>
                    <div className="p-6">
                      <Link to={`/blog/${relatedPost.id}`}>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-200">{relatedPost.title}</h3>
                      </Link>
                      <Link 
                        to={`/blog/${relatedPost.id}`} 
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                      >
                        Read article
                        <ChevronRight className="ml-1 w-5 h-5" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetailPage;