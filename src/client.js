import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'qntdc3lc',
  dataset: 'production',
  useCdn: true,
});
