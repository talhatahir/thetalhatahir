import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import Image from '@/components/Image';

export default function Contributions() {
  return (
    <>
      <PageSEO
        title={`Github Contributions to Filestage repo - ${siteMetadata.authorLong}`}
        description={siteMetadata.description}
      />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-col md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 py-6 md:space-y-5">
          <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:px-6 md:text-2xl md:leading-14">
            Github contributions to Filestage repo
          </h1>
        </div>
        <div className="w-auto">
          <Image
            src={'/static/images/graph.png'}
            alt="Github contributions"
            width="1500px"
            height="600px"
            quality={100}
            objectFit="contain"
          />
        </div>
        <div className="w-auto py-9">
          <Image
            src={'/static/images/cont.png'}
            alt="Github contributions"
            width="600px"
            height="300px"
            quality={100}
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
}
