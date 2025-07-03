import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    title: 'Delivery & Returns',
    content: 'Free shipping on all orders above ₹2,000. Delivery within 3-5 business days. Returns accepted within 15 days of delivery in original condition.'
  },
  {
    title: 'How This Was Made',
    content: 'This garment is crafted from 100% ethically sourced wool, woven in Italy. Designed with sustainability and longevity in mind.'
  }
];

const ProductDetailsAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-10 bg-black text-white text-4xl border-t border-gray-700">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-gray-700">
          <button
            className="w-full flex justify-between items-center px-4 py-10 text-left focus:outline-none"
            onClick={() => toggle(index)}
          >
            <span className="text-lg font-medium">{item.title}</span>
            {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 px-4 pb-6' : 'max-h-0 px-4 pb-0'
            } text-sm text-gray-300`}
          >
            {openIndex === index && <p>{item.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetailsAccordion;
