export default async (request: any, response: any) => {
  await response.revalidate('/');
  response.status(200).json({ name: 'Digital House' });
};
