import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import {
  SectionContent,
  SectionDescription,
  SectionSubTitle,
  SectionTitle,
} from '../_shared/section';
import { RankingData } from '@/constants/data';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

const rankingData = [
  {
    img: '/assets/img/ranking-1.png',
    name: 'Sarah Brown',
    job: 'Marketing Specialist',
    match: 62,
    requiredSkills: [
      {
        key: 'Digital marketing',
        value: true,
      },
      {
        key: 'SEO optimization',
        value: true,
      },
      {
        key: 'Social media management',
        value: true,
      },
      {
        key: 'Data analysis',
        value: false,
      },
      {
        key: 'Campaign management',
        value: false,
      },
      {
        key: 'Brand strategy',
        value: true,
      },
      {
        key: 'Content creation',
        value: true,
      },
    ],
    experience: 4,
  },
  {
    img: '/assets/img/ranking-2.png',
    name: 'Emily Johnson',
    job: 'Marketing Specialist',
    match: 87,
    requiredSkills: [
      {
        key: 'Digital marketing',
        value: true,
      },
      {
        key: 'SEO optimization',
        value: true,
      },
      {
        key: 'Social media management',
        value: true,
      },
      {
        key: 'Data analysis',
        value: true,
      },
      {
        key: 'Campaign management',
        value: true,
      },
      {
        key: 'Brand strategy',
        value: true,
      },
      {
        key: 'Content creation',
        value: false,
      },
    ],
    experience: 7,
  },
  {
    img: '/assets/img/ranking-3.png',
    name: 'David Smith',
    job: 'Marketing Specialist',
    match: 48,
    requiredSkills: [
      {
        key: 'Digital marketing',
        value: true,
      },
      {
        key: 'SEO optimization',
        value: true,
      },
      {
        key: 'Social media management',
        value: false,
      },
      {
        key: 'Data analysis',
        value: false,
      },
      {
        key: 'Campaign management',
        value: false,
      },
      {
        key: 'Brand strategy',
        value: true,
      },
      {
        key: 'Content creation',
        value: false,
      },
    ],
    experience: 3,
  },
];

export default function Ranking({
  className,
}: {
  className?: React.CSSProperties | ClassValue | string;
}) {
  const { title, subtitle, subIcon, description } = RankingData;
  return (
    <section
      id="ranking"
      className={cn('py-20 sm:py-30 md:py-38 lg:py-42', className)}
    >
      <div className="container mx-auto space-y-2 max-sm:px-[3%]">
        <SectionSubTitle text={subtitle} icon={subIcon} />
        <SectionTitle>
          <span>
            Optimize Your Hiring with AI-Driven{' '}
            <br className="hidden lg:block" /> Candidate Ranking
          </span>
        </SectionTitle>
        <SectionDescription
          text={description}
          className="mx-auto mt-4 max-w-4xl text-center"
        />
      </div>
      <div className="mt-8 py-8 sm:mt-10 lg:mt-20 xl:mt-40">
        <ul className="flex flex-wrap justify-center gap-10 max-sm:px-[5%]">
          {rankingData.map((item, idx) => (
            <li
              className="relative z-20 w-[400px] self-stretch xl:nth-[2]:-top-20"
              key={idx}
            >
              <RankingCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function RankingCard({ item }: { item: (typeof rankingData)[0] }) {
  const { img, name, job, match, experience, requiredSkills } = item;
  return (
    <div className="dark:bg-clrCinder bg-clrMercury/40 h-full rounded-sm">
      <div className="p-10">
        <div className="mx-auto w-fit text-center">
          <div className="mx-auto mb-4 size-[140px] rounded-full">
            <Image
              className="size-full rounded-full object-cover dark:opacity-[44%]"
              src={img}
              alt={name}
              width={140}
              height={140}
            />
          </div>
          <h3 className="font-nunito text-3xl font-bold capitalize">{name}</h3>
          <p className="font-nunito text-xl leading-relaxed font-light capitalize">
            {job}
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 text-sm">
              <span className="block">Match</span>
              <span className="block">{match}%</span>
            </div>
            {match === 62 && (
              <Progress
                className={cn('bg-muted', '[&>div]:bg-[#F3F520]')}
                value={match}
              />
            )}
            {match === 87 && (
              <Progress
                className={cn('bg-muted', '[&>div]:bg-[#59D102]')}
                value={match}
              />
            )}
            {match === 48 && (
              <Progress
                className={cn('bg-muted', '[&>div]:bg-[#FF3535]')}
                value={match}
              />
            )}
          </div>
          <div className="">
            <span className="mb-2 block text-sm">Required Skills</span>
            <div className="space-y-2 dark:text-[#b6b6b6]">
              <div className="grid gap-2 sm:grid-cols-[1fr_1fr]">
                <span
                  className={cn(
                    'font-nunito flex h-8 w-full items-center justify-center text-sm capitalize',

                    requiredSkills[0].value
                      ? 'bg-[#59d102]/60 dark:bg-[#59d102]/10'
                      : 'bg-[#ff3434]/50 dark:bg-[#ff3434]/10',
                  )}
                >
                  Digital marketing
                </span>
                <span
                  className={cn(
                    'font-nunito flex h-8 w-full items-center justify-center text-sm capitalize',
                    requiredSkills[1].value
                      ? 'bg-[#59d102]/60 dark:bg-[#59d102]/10'
                      : 'bg-[#ff3434]/50 dark:bg-[#ff3434]/10',
                  )}
                >
                  SEO optimization
                </span>
              </div>
              <div className="grid gap-2 sm:grid-cols-[1.4fr_1fr]">
                <span
                  className={cn(
                    'font-nunito flex h-8 w-full items-center justify-center text-sm capitalize',

                    requiredSkills[2].value
                      ? 'bg-[#59d102]/60 dark:bg-[#59d102]/10'
                      : 'bg-[#ff3434]/50 dark:bg-[#ff3434]/10',
                  )}
                >
                  Social media management
                </span>
                <span
                  className={cn(
                    'font-nunito flex h-8 w-full items-center justify-center text-sm capitalize',
                    requiredSkills[3].value
                      ? 'bg-[#59d102]/60 dark:bg-[#59d102]/10'
                      : 'bg-[#ff3434]/50 dark:bg-[#ff3434]/10',
                  )}
                >
                  Data analysis
                </span>
              </div>
              <div className="grid gap-2 sm:grid-cols-[1.2fr_1fr]">
                <span
                  className={cn(
                    'font-nunito flex h-8 w-full items-center justify-center text-sm capitalize',
                    requiredSkills[4].value
                      ? 'bg-[#59d102]/60 dark:bg-[#59d102]/10'
                      : 'bg-[#ff3434]/50 dark:bg-[#ff3434]/10',
                  )}
                >
                  Campaign management
                </span>
                <span
                  className={cn(
                    'font-nunito flex h-8 w-full items-center justify-center text-sm capitalize',
                    requiredSkills[5].value
                      ? 'bg-[#59d102]/60 dark:bg-[#59d102]/10'
                      : 'bg-[#ff3434]/50 dark:bg-[#ff3434]/10',
                  )}
                >
                  Brand strategy
                </span>
              </div>
              <div>
                <span
                  className={cn(
                    'font-nunito flex h-8 w-full items-center justify-center text-sm capitalize',
                    requiredSkills[6].value
                      ? 'bg-[#59d102]/60 dark:bg-[#59d102]/10'
                      : 'bg-[#ff3434]/50 dark:bg-[#ff3434]/10',
                  )}
                >
                  Content creation
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <span className="block text-sm">Experience</span>
            <div className="grid h-8 place-content-center rounded-sm bg-[#212121] text-sm text-[#B7B7B7]">
              <span>{experience} Years of Relevant Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
