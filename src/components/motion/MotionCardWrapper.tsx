import { memo } from 'react';
import { motion } from 'framer-motion';

interface MotionCardWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const MotionCardWrapper = ({ children, className }: MotionCardWrapperProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.9,
        delay: 0.2,
        ease: [0, 0.71, 0.5, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default memo(MotionCardWrapper);
