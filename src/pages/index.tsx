// // CLIENT SIDE RENDERING
// import { useState, useEffect } from 'react';

// export default function Home() {
//   const [repositories, setRepositories] = useState<string[]>([]);
//   useEffect(() => {
//     fetch('https://api.github.com/users/diegosilvatech/repos')
//       .then((response) => response.json())
//       .then((data) => {
//         const respositoryNames = data.map((repository) => repository.name);

//         setRepositories(respositoryNames);
//       });
//   }, []);

//   return (
//     <div>
//       <ul>
//         {repositories.map((repository) => (
//           <li key={repository}>{repository}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // SERVER SIDE RENDERING
// import { GetServerSideProps } from 'next';

// export default function Home({ repositories }) {
//   return (
//     <div>
//       <ul>
//         {repositories.map((repository) => (
//           <li key={repository}>{repository}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch(
//     'https://api.github.com/users/diegosilvatech/repos'
//   );

//   const data = await response.json();
//   const respositoryNames = data.map((repository) => repository.name);

//   return {
//     props: {
//       repositories: respositoryNames,
//     },
//   };
// };

// // STATIC SITE GENERATION
import { GetStaticProps } from 'next';

export default function Home({ repositories, date }: any) {
  return (
    <div>
      <h2>{date}</h2>
      <ul>
        {repositories.map((repository: any) => (
          <li key={repository}>{repository}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'https://api.github.com/users/diegosilvatech/repos',
  );
  const data = await response.json();
  const respositoryNames = data.map((repository: any) => repository.name);

  return {
    props: {
      repositories: respositoryNames,
      date: new Date().toISOString(),
    },
    revalidate: 60 * 60 * 2,
  };
};
