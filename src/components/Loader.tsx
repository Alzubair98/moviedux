import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-4 h-4 bg-blue-500 rounded-full"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 0.1 * i,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.p
        className="mt-4 text-gray-600 font-semibold tracking-wider text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.7, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Loading movies...
      </motion.p>
    </div>
  );
};
