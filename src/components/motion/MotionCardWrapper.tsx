import { memo } from 'react';
import { motion } from 'framer-motion';

interface MotionCardWrapperProps {
  useMotion?: boolean;
  children: React.ReactNode;
  className?: string;
}

const MotionCardWrapper = ({ useMotion = true, children, className }: MotionCardWrapperProps) => {
  return (
    <>
      {useMotion ? (
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
      ) : (
        // TODO: motion 애니메이션 추가 예정이며 추가시 motion type 상수 정의 필요
        <div>{children}</div>
      )}
    </>
  );
};

export default memo(MotionCardWrapper);
