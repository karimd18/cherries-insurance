import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import Image from 'next/image';

type TestimonialProps = {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
  image?: string;
};

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  rating = 5,
  image,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-md p-6 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Quote Symbol */}
      <div className="text-primary-500 text-5xl font-serif absolute -top-4 left-6">"</div>
      
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
        ))}
        {[...Array(5 - rating)].map((_, i) => (
          <Star key={i + rating} className="w-5 h-5 text-neutral-300" />
        ))}
      </div>
      
      {/* Quote Text */}
      <p className="text-neutral-700 mb-6">{quote}</p>
      
      {/* Author */}
      <div className="flex items-center">
        {image && (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={image}
              alt={author}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-semibold">{author}</p>
          {role && <p className="text-sm text-neutral-500">{role}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
