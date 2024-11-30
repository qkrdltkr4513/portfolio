import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { CommonMotionType } from '@core/types';

interface MotionBoxProps {
  motionType?: CommonMotionType;
  useMotion?: boolean;
  children: React.ReactNode;
  className?: string;
}

const MotionBox = ({
  useMotion = true,
  motionType = 'DEFAULT',
  children,
  className,
}: MotionBoxProps) => {
  // Motion Default Type
  const MotionDefault = useCallback(
    ({ className, children }: Omit<MotionBoxProps, 'motionType' | 'useMotion'>) => {
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
    },
    [],
  );

  // Motion Fade In Up Type
  const MotionFadeInUp = useCallback(
    ({ className, children }: Omit<MotionBoxProps, 'motionType' | 'useMotion'>) => {
      return (
        <motion.div
          className={className}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {children}
        </motion.div>
      );
    },
    [],
  );

  // Motion Fade In Right Type
  const MotionFadeInRight = useCallback(
    ({ className, children }: Omit<MotionBoxProps, 'motionType' | 'useMotion'>) => {
      return (
        <motion.div
          className={className}
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {children}
        </motion.div>
      );
    },
    [],
  );

  return (
    <>
      {useMotion && motionType === 'DEFAULT' ? (
        <MotionDefault className={className}>{children}</MotionDefault>
      ) : useMotion && motionType === 'FADE_IN_UP' ? (
        <MotionFadeInUp className={className}>{children}</MotionFadeInUp>
      ) : useMotion && motionType === 'FADE_IN_RIGHT' ? (
        <MotionFadeInRight className={className}>{children}</MotionFadeInRight>
      ) : (
        // TODO: motion 애니메이션 추가 예정이며 추가시 motion type 상수 정의 필요
        <div>{children}</div>
      )}
    </>
  );
};

export default memo(MotionBox);
