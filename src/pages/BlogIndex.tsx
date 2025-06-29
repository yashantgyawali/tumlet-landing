import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getAllBlogPosts } from '../data/blogPosts';

const BlogIndex = () => {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-tumlet-beige">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-tumlet-blue/10 to-tumlet-yellow/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-tumlet-text leading-tight mb-6">
              Tumlet Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Stories, insights, and discoveries from the world of Nepali games and play
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <article 
                key={post.slug} 
                className={`mb-12 pb-12 ${
                  index !== blogPosts.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="mb-4">
                  <span className="inline-block bg-tumlet-yellow text-tumlet-text px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="group block"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-tumlet-text leading-tight mb-4 group-hover:text-tumlet-blue transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-tumlet-blue font-medium hover:text-tumlet-darkBlue transition-colors"
                >
                  Read more
                  <svg 
                    className="ml-2 w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </article>
            ))}
            
            {blogPosts.length === 0 && (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-tumlet-text mb-4">No blog posts yet</h2>
                <p className="text-gray-600">Check back soon for our first articles!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogIndex; 