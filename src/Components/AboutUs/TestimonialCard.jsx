import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial, author, rating }) => {
  return (
    <>
    <div className='flex justify-center'>
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
      </div>
      <p className="text-gray-700 mb-2 text-sm italic">"{testimonial}"</p>
      <div className="text-blue-600 font-medium text-sm">- {author}</div>
    </div>
    </div>
    </>
  );
};

export default TestimonialCard;