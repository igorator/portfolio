import { Section } from '@/components/Section';
import { navigation } from '../shared/data/config/navigation';

export const Experience = () => (
  <Section
    className='flex flex-col justify-center items-center py-[180px] max-w-container h-[100vh]'
    id={navigation.experience.id}
  >
    <h1 className='flex self-center text-[70px]'>Experience</h1>

    <div>
      <h2>2025</h2>
      <p></p>
    </div>
  </Section>
);
