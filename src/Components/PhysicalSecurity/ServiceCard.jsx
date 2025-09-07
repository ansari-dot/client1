import { motion } from "framer-motion";

const ServiceCard = ({ title, description, image, icon, benefits, onApply }) => {
  return (
    <motion.div
      className="relative h-64 cursor-pointer group [perspective:1000px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-lg">
        {/* Front - Image only */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Back - Icon Header + Title + Description + Benefits + Apply */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl flex flex-col bg-gradient-to-br from-blue-900/90 to-purple-900/90 backdrop-blur-xl border border-blue-700/50 p-5">
          <div className="flex items-center justify-center mb-3">
            {icon && (
              <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm mr-3">
                {icon}
              </div>
            )}
            <h3 className="text-white text-xl font-semibold text-center">{title}</h3>
          </div>
          {description && (
            <p className="text-blue-100 text-sm leading-relaxed mb-3 text-center">
              {description}
            </p>
          )}
          {Array.isArray(benefits) && benefits.length > 0 && (
            <ul className="text-sm text-gray-200 space-y-1 mb-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start"><span className="text-blue-300 mr-2 mt-0.5">✓</span>{b}</li>
              ))}
            </ul>
          )}
          <div className="mt-auto flex justify-center">
            {onApply && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onApply();
                }}
                className="bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Apply Now
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
