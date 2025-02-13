import { cn } from '@/app/shared/lib/utils/cn';

export const Section = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLElement>) => {
  return (
    <section className={cn('w-full', className)} {...props}>
      {children}
    </section>
  );
};
