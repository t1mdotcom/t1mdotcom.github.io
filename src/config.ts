export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

export type SiteConfig = {
  siteName: string;
  siteUrl: string;
  author: string;
  description: string;
  socialLinks: SocialLink[];
};

export const siteConfig: SiteConfig = {
  siteName: 'Tim Heinemann',
  siteUrl: 'https://www.heinemann.foo',
  author: 'Tim Heinemann',
  description:
    'Personal portfolio of Tim Heinemann — software engineer, selected projects and contact.',
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/t1mdotcom', icon: 'github' },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tim-heinemann-524764190/',
      icon: 'linkedin',
    },
    {
      platform: 'Xing',
      url: 'https://www.xing.com/profile/Tim_Heinemann15',
      icon: 'xing',
    },
    {
      platform: 'GPG',
      url: 'https://keyserver.ubuntu.com/pks/lookup?search=tim%40heinemann.foo&fingerprint=on&op=index',
      icon: 'key',
    },
  ],
};

export default siteConfig;
