import { useTranslations } from 'next-intl';

function ListItem({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <li className='flex items-start'>
      <span className='mr-2'>•</span>
      <span>
        <strong className='font-medium'>{label}</strong> - {description}
      </span>
    </li>
  );
}

export default function Page() {
  const t = useTranslations('Index');

  return (
    <>
      <h2 className='text-xl'>{t('hello')}</h2>
      <p>{t('welcome')}</p>
      <br />
      <p className='leading-relaxed'>{t('introduction')}</p>
      <br />
      <div className='space-y-3'>
        <p className='text-lg'>{t('list-intro')}</p>
        <ul className='ml-4 list-none space-y-2'>
          <ListItem
            label={t('list-resume-title')}
            description={t('list-resume-desc')}
          />
          <ListItem
            label={t('list-projects-title')}
            description={t('list-projects-desc')}
          />
          <ListItem
            label={t('list-contact-title')}
            description={t('list-contact-desc')}
          />
          {/* <ListItem
            label='Blog'
            description='A space where I document and share what I learn'
          /> */}
        </ul>
      </div>
    </>
  );
}
