import { motion, AnimatePresence } from "framer-motion";

export const CinematicLoader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* شعار متحرك */}
          <motion.h1
            className="text-4xl font-extrabold text-white tracking-widest"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            🎬 My Movies
          </motion.h1>

          {/* الخط السفلي المتدرّج */}
          <motion.div
            className="mt-6 h-1 w-40 bg-gradient-to-r from-red-600 via-purple-500 to-blue-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />

          {/* نص بسيط */}
          <motion.p
            className="text-gray-400 text-sm mt-4 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Loading Movies...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
